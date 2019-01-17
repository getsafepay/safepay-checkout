import _extends from "@babel/runtime/helpers/esm/extends";

/* @jsx jsxDom */
import { ZalgoPromise } from 'zalgo-promise/src';
import { create } from 'zoid/src';
import { Config, api } from '../api';
import { containerTemplate } from './templates';
import { redirect as redir } from '../lib';
export var Button = create({
  tag: 'safepay-button',
  name: 'spbutton',
  scrolling: false,
  defaultEnv: 'local',
  listenForResize: true,
  buildUrl: function buildUrl(props) {
    var env = props.env;
    return Config.buttonUrls[env];
  },
  contexts: {
    iframe: true,
    popup: false
  },
  containerTemplate: containerTemplate,
  validate: function validate() {},
  props: {
    validate: {
      type: 'function',
      required: false,
      once: true
    },
    client: {
      type: 'object',
      required: false,
      def: function def() {
        return {};
      },
      validate: function validate(client, props) {
        var env = props.env || Config.env;

        if (!client[env]) {
          throw new Error("Client ID not found for env: " + env);
        }
      }
    },
    payment: {
      type: 'function',
      required: true,
      decorate: function decorate(original) {
        return function payment() {
          var _this = this;

          var data = {};
          var actions = {
            payment: {
              create: function create(options) {
                var _this$props = _this.props,
                    client = _this$props.client,
                    env = _this$props.env;
                var clientId = client[env];
                return api.payment.create(env, clientId, options);
              }
            }
          };
          this.memoizedToken = ZalgoPromise.try(original, this, [data, actions]);
          this.memoizedToken = this.memoizedToken.then(function (token) {
            return token;
          });
          return this.memoizedToken;
        };
      }
    },
    onCancel: {
      type: 'function',
      required: false,
      noop: true,
      decorate: function decorate(original) {
        return function decorateOnCancel(data, actions) {
          var redirect = function redirect(win, url) {
            return ZalgoPromise.all([redir(win || window.top, url || data.cancelUrl), actions.close()]);
          };

          return original.call(this, data, _extends({}, actions, {
            redirect: redirect
          }));
        };
      }
    },
    onClick: {
      type: 'function',
      required: false,
      noop: true,
      decorate: function decorate(original) {
        return function decorateOnClick() {
          return original.apply(this, arguments);
        };
      }
    },
    amount: {
      type: 'number',
      required: false
    },
    onCheckout: {
      type: 'function',
      required: false,
      noop: true,
      once: true,
      decorate: function decorate(original) {
        return function decorateOnCheckout(data) {
          return original.call(this, data);
        };
      }
    }
  }
});