var _checkoutUris, _buttonUris;

import { ENV } from './constants';
export var Config = {
  env: ENV.LOCAL,
  checkoutUris: (_checkoutUris = {}, _checkoutUris[ENV.LOCAL] = "/checkout", _checkoutUris[ENV.SANDBOX] = "/dev/checkout", _checkoutUris[ENV.PRODUCTION] = "/now/checkout", _checkoutUris),
  buttonUris: (_buttonUris = {}, _buttonUris[ENV.LOCAL] = "", _buttonUris[ENV.SANDBOX] = "/trojan/button", _buttonUris[ENV.PRODUCTION] = "/trojan/button", _buttonUris),
  paymentApiUri: "/api/v1/order/init",

  get safepayDomains() {
    var _ref;

    return _ref = {}, _ref[ENV.LOCAL] = "http://localhost:3000", _ref[ENV.SANDBOX] = "https://sandbox.getsafepay.com", _ref[ENV.PRODUCTION] = "https://production.getsafepay.com", _ref;
  },

  get buttonDomains() {
    var _ref2;

    return _ref2 = {}, _ref2[ENV.LOCAL] = "http://localhost:3000", _ref2[ENV.SANDBOX] = "https://sandbox.getsafepay.com", _ref2[ENV.PRODUCTION] = "https://production.getsafepay.com", _ref2;
  },

  get checkoutDomains() {
    var _ref3;

    return _ref3 = {}, _ref3[ENV.LOCAL] = "http://localhost:3001", _ref3[ENV.SANDBOX] = "https://sandbox.getsafepay.com", _ref3[ENV.PRODUCTION] = "https://production.getsafepay.com", _ref3;
  },

  get checkoutUrls() {
    var _ref4;

    var spUrls = Config.checkoutDomains;
    var checkoutUris = Config.checkoutUris;
    return _ref4 = {}, _ref4[ENV.LOCAL] = "" + spUrls.local + checkoutUris.local, _ref4[ENV.SANDBOX] = "" + spUrls.sandbox + checkoutUris.sandbox, _ref4[ENV.PRODUCTION] = "" + spUrls.production + checkoutUris.production, _ref4;
  },

  get buttonUrls() {
    var _ref5;

    var spUrls = Config.buttonDomains;
    var buttonUris = Config.buttonUris;
    return _ref5 = {}, _ref5[ENV.LOCAL] = "" + spUrls.local + buttonUris.local, _ref5[ENV.SANDBOX] = "" + spUrls.sandbox + buttonUris.sandbox, _ref5[ENV.PRODUCTION] = "" + spUrls.production + buttonUris.production, _ref5;
  },

  get orderApiUrls() {
    var _ref6;

    return _ref6 = {}, _ref6[ENV.LOCAL] = "http://localhost:4020", _ref6[ENV.SANDBOX] = "https://sandbox.getsafepay.com/order", _ref6[ENV.PRODUCTION] = "https://production.getsafepay.com/order", _ref6;
  },

  get paymentApiUrls() {
    var _ref7;

    var apiUrls = Config.orderApiUrls;
    var paymentUri = Config.paymentApiUri;
    return _ref7 = {}, _ref7[ENV.LOCAL] = "" + apiUrls.local + paymentUri, _ref7[ENV.SANDBOX] = "" + apiUrls.sandbox + paymentUri, _ref7[ENV.PRODUCTION] = "" + apiUrls.production + paymentUri, _ref7;
  }

};