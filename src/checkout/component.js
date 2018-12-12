import { ZalgoPromise } from 'zalgo-promise/src';
import { create } from 'zoid/src';
import { Config, api, ENV } from '../api';
import { containerTemplate, componentTemplate } from './templates';
import { redirect as redir, getQueryParam } from '../lib';

export const Checkout = create({
  tag: 'safepay-checkout',
  name: 'spcheckout',

  scrolling: true,

  defaultEnv: 'local',
  
  buildUrl(props) {
    let env = props.env || config.env;

    if (!props.payment) {
      throw new Error(`Can not build url without payment prop`);
    }

    return props.payment().then(token => {
      if (!token) {
        throw new Error(`Expected payment id or token to be passed, got ${ token }`);
      }

      return Config.checkoutUrls[env]
    });
  },
  
  contexts: {
    iframe: false,
    popup:  true
  },

  get domain() : Object {
    return {
      ...Config.safepayDomains,
      [ ENV.LOCAL ]: /^http:\/\/localhost:\d+$/
    };
  },

  defaultContext: 'popup',
  dimensions: {
    width:  '450px',
    height: '535px'
  },

  prerenderTemplate: componentTemplate,
  containerTemplate,

  props: {
    client: {
      type: 'object',
      required: false,
      def() {
        return {}
      },
      validate(client, props) {
        let env = props.env || Config.env;

        if (!client[env]) {
          throw new Error(`Client ID not found for env: ${ env }`);
        }
      },
    },
    env: {
      type:       'string',
      required:   false,
      queryParam: true,

      def() {
        return Config.env;
      },

      validate(env) {
        if (!Config.safepayDomains[env]) {
          throw new Error(`Invalid env: ${ env }`);
        }
      }
    },
    payment: {
      type: 'function',
      required: true,
      memoize:   true,
      promisify: true,
      queryParam(payment){
        return "beacon"
      },
      queryValue(payment) {
        return payment();
      },
      childDecorate(payment) {
        let token = getQueryParam('beacon');
        return token ? ZalgoPromise.resolve(token) : payment
      },
      validate(payment, props) {
        if (!payment && !props.url) {
            throw new Error(`Expected either props.payment or props.url to be passed`);
        }
      },
    },
    onCancel: {
      type:     'function',
      required: false,
      once:     true,
      noop:     true,
      decorate(original) : Function {
        return function decorateOnCancel(data, actions = {}) {
          let close = () => {
            return ZalgoPromise.try(() => {
              if (actions.close) {
                return actions.close();
              }
            }).then(() => {
              return this.closeComponent();
            });
          };

          let redirect = (win, url) => {
            return ZalgoPromise.all([
              redir(win || window.top, url || data.cancelUrl),
              close()
            ]);
          };

          return ZalgoPromise.try(() => {
            return original.call(this, data, { ...actions, close, redirect });
          }).finally(() => {
            this.close();
          });
        };
      }
    },
    onCheckout: {
      type: 'function',
      required: false,
      required: false,
      noop:     true,
      once:     true,

      decorate(original) {
        return function decorateOnCheckout(data) {
          return ZalgoPromise.try(() => {
            return original.call(this, data);
          }).finally(() => {
            this.close();
          });
        }
      }
    }
  }
})