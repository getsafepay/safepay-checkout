import _extends from "@babel/runtime/helpers/esm/extends";

var _onCheckout;

import { ZalgoPromise } from 'zalgo-promise/src';
import { create } from 'zoid/src';
import { Config, api, ENV } from '../api';
import { containerTemplate, componentTemplate } from './templates';
import { redirect as redir, getQueryParam } from '../lib';
export var Checkout = create({
  tag: 'safepay-checkout',
  name: 'spcheckout',
  scrolling: true,
  defaultEnv: 'local',
  buildUrl: function buildUrl(props) {
    var env = props.env || Config.env;

    if (!props.payment) {
      throw new Error("Can not build url without payment prop");
    }

    return props.payment().then(function (token) {
      if (!token) {
        throw new Error("Expected payment id or token to be passed, got " + token);
      }

      return Config.checkoutUrls[env];
    });
  },
  contexts: {
    iframe: false,
    popup: true
  },

  get domain() {
    var _extends2;

    return _extends({}, Config.safepayDomains, (_extends2 = {}, _extends2[ENV.LOCAL] = /^http:\/\/localhost:\d+$/, _extends2));
  },

  get bridgeUrl() {
    return Config.metaFrameUrls;
  },

  defaultContext: 'popup',
  dimensions: {
    width: '745px',
    height: '820px'
  },
  prerenderTemplate: componentTemplate,
  containerTemplate: containerTemplate,
  props: {
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
    env: {
      type: 'string',
      required: false,
      queryParam: true,
      def: function def() {
        return Config.env;
      },
      validate: function validate(env) {
        if (!Config.safepayDomains[env]) {
          throw new Error("Invalid env: " + env);
        }
      }
    },
    payment: {
      type: 'function',
      required: true,
      memoize: true,
      promisify: true,
      queryParam: function queryParam(payment) {
        return "beacon";
      },
      queryValue: function queryValue(payment) {
        return payment();
      },
      childDecorate: function childDecorate(payment) {
        var token = getQueryParam('beacon');
        return token ? ZalgoPromise.resolve(token) : payment;
      },
      validate: function validate(payment, props) {
        if (!payment && !props.url) {
          throw new Error("Expected either props.payment or props.url to be passed");
        }
      }
    },
    onCancel: {
      type: 'function',
      required: false,
      once: true,
      noop: true,
      decorate: function decorate(original) {
        return function decorateOnCancel(data, actions) {
          var _this = this;

          if (actions === void 0) {
            actions = {};
          }

          var close = function close() {
            return ZalgoPromise.try(function () {
              if (actions.close) {
                return actions.close();
              }
            }).then(function () {
              return _this.closeComponent();
            });
          };

          var redirect = function redirect(win, url) {
            return ZalgoPromise.all([redir(win || window.top, url || data.cancelUrl), close()]);
          };

          return ZalgoPromise.try(function () {
            return original.call(_this, data, _extends({}, actions, {
              close: close,
              redirect: redirect
            }));
          }).finally(function () {
            _this.close();
          });
        };
      }
    },
    onCheckout: (_onCheckout = {
      type: 'function',
      required: false
    }, _onCheckout["required"] = false, _onCheckout.noop = true, _onCheckout.once = true, _onCheckout.decorate = function decorate(original) {
      return function decorateOnCheckout(data) {
        var _this2 = this;

        return ZalgoPromise.try(function () {
          return original.call(_this2, data);
        }).finally(function () {
          _this2.close();
        });
      };
    }, _onCheckout)
  }
});