import _extends from "@babel/runtime/helpers/esm/extends";

var _payment;

import { ZalgoPromise } from 'zalgo-promise/src';
import { create } from 'zoid/src';
import { Config, api, ENV } from '../api';
export var Checkout = create({
  tag: 'safepay-checkout',
  name: 'spcheckout',
  scrolling: true,
  defaultEnv: 'local',
  buildUrl: function buildUrl(props) {
    var env = props.env || config.env;

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

  defaultContext: 'popup',
  dimensions: {
    width: '450px',
    height: '535px'
  },
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
    payment: (_payment = {
      type: 'function',
      required: true
    }, _payment["required"] = false, _payment.memoize = true, _payment.promisify = true, _payment.queryParam = function queryParam(payment) {
      return "beacon";
    }, _payment.queryValue = function queryValue(payment) {
      return payment();
    }, _payment.childDecorate = function childDecorate(payment) {
      var token = getQueryParam('beacon');
      return token ? ZalgoPromise.resolve(token) : payment;
    }, _payment.validate = function validate(payment, props) {
      if (!payment && !props.url) {
        throw new Error("Expected either props.payment or props.url to be passed");
      }
    }, _payment),
    onCheckout: {
      type: 'function',
      required: false
    }
  }
});