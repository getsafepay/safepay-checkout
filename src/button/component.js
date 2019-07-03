/* @jsx jsxDom */

import { ZalgoPromise } from 'zalgo-promise/src';
import { create } from 'zoid/src';
import { Config, api } from '../api';
import { containerTemplate } from './templates'
import { redirect as redir, currencies } from '../lib';

export const Button = create({
  tag: 'safepay-button',
  name: 'spbutton',

  scrolling: false,

  defaultEnv: 'local',

  listenForResize: true,
  
  buildUrl(props) {
    let env = props.env

    return Config.buttonUrls[env]
  },

  contexts: {
    iframe: true,
    popup:  false
  },

  containerTemplate,

  validate() {
    
  },

  props: {
    validate: {
      type:     'function',
      required: false,
      once:     true
    },
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
    customer: {
      type: 'object',
      required: false,
      def() {
        return {}
      }
    },
    billing: {
      type: 'object',
      required: false,
      def() {
        return {}
      }
    },
    payment: {
      type: 'function',
      required: true,
      decorate(original) {
        return function payment() {
          let data = {}
          let actions = {
          	payment: {
          		create: (options) => {
                const { client, env } = this.props
                const clientId = client[env]
                return api.payment.create(env, clientId, options)
              }
          	}
          }

          this.memoizedToken = ZalgoPromise.try(original, this, [ data, actions ]);
          this.memoizedToken = this.memoizedToken.then(token => {
            return token;
          });
          return this.memoizedToken
        }
      }
    },
    onCancel: {
      type:     'function',
      required: false,
      noop:     true,

      decorate(original) {
        return function decorateOnCancel(data, actions) {
          let redirect = (win, url) => {
            return ZalgoPromise.all([
              redir(win || window.top, url || data.cancelUrl),
              actions.close()
            ]);
          };

          return original.call(this, data, { ...actions, redirect });
        };
      }
    },
    onClick: {
      type:     'function',
      required: false,
      noop:     true,
      decorate(original) {
          return function decorateOnClick() {
              return original.apply(this, arguments);
          };
      }
    },

    amount: {
      type: 'number',
      required: false,
    },
    currency: {
      type: 'string',
      required: false,
      default: function() {
        return 'PKR'
      },
      validate: function(value, props) {
        if (!currencies[value]) {
          throw new Error('Safepay Error: Invalid currency');
        }
      }
    },
    onCheckout: {
      type: 'function',
      required: false,
      noop:     true,
      once:     true,

      decorate(original) {
        return function decorateOnCheckout(data) {
          return original.call(this, data);
        }
      }
    }
  }
})