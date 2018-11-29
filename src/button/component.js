import { ZalgoPromise } from 'zalgo-promise/src';
import { create } from 'zoid/src';
import { Config, api } from '../api';
import { containerTemplate } from './templates'
import { redirect as redir } from '../lib';

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

      decorate(original) : Function {
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
    amount: {
      type: 'number',
      required: false,
    },
    onCheckout: {
      type: 'function',
      required: false
    }
  }
})