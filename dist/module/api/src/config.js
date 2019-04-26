var _checkoutUris, _buttonUris, _postBridgeUris;

import { ENV } from './constants';
export var Config = {
  env: ENV.LOCAL,
  checkoutUris: (_checkoutUris = {}, _checkoutUris[ENV.LOCAL] = "/checkout", _checkoutUris[ENV.DEV] = "/checkout", _checkoutUris[ENV.SANDBOX] = "/checkout", _checkoutUris[ENV.PRODUCTION] = "/checkout", _checkoutUris),
  buttonUris: (_buttonUris = {}, _buttonUris[ENV.LOCAL] = "", _buttonUris[ENV.DEV] = "/button", _buttonUris[ENV.SANDBOX] = "/button", _buttonUris[ENV.PRODUCTION] = "/button", _buttonUris),
  postBridgeUris: (_postBridgeUris = {}, _postBridgeUris[ENV.LOCAL] = "?xcomponent=1", _postBridgeUris[ENV.DEV] = "/bridge?xcomponent=1", _postBridgeUris[ENV.SANDBOX] = "/bridge?xcomponent=1", _postBridgeUris[ENV.PRODUCTION] = "/bridge?xcomponent=1", _postBridgeUris),
  paymentApiUri: "/v1/init",

  get safepayDomains() {
    var _ref;

    return _ref = {}, _ref[ENV.LOCAL] = "http://localhost:3000", _ref[ENV.DEV] = "https://dev.api.getsafepay.com", _ref[ENV.SANDBOX] = "https://sandbox.api.getsafepay.com", _ref[ENV.PRODUCTION] = "https://getsafepay.com", _ref;
  },

  get buttonDomains() {
    var _ref2;

    return _ref2 = {}, _ref2[ENV.LOCAL] = "http://localhost:3000", _ref2[ENV.DEV] = "https://dev.api.getsafepay.com", _ref2[ENV.SANDBOX] = "https://sandbox.api.getsafepay.com", _ref2[ENV.PRODUCTION] = "https://getsafepay.com", _ref2;
  },

  get checkoutDomains() {
    var _ref3;

    return _ref3 = {}, _ref3[ENV.LOCAL] = "http://localhost:3001", _ref3[ENV.DEV] = "https://dev.api.getsafepay.com", _ref3[ENV.SANDBOX] = "https://sandbox.api.getsafepay.com", _ref3[ENV.PRODUCTION] = "https://getsafepay.com", _ref3;
  },

  get bridgeDomains() {
    var _ref4;

    return _ref4 = {}, _ref4[ENV.LOCAL] = "http://localhost:3020", _ref4[ENV.DEV] = "https://dev.api.getsafepay.com", _ref4[ENV.SANDBOX] = "https://sandbox.api.getsafepay.com", _ref4[ENV.PRODUCTION] = "https://getsafepay.com", _ref4;
  },

  get checkoutUrls() {
    var _ref5;

    var spUrls = Config.checkoutDomains;
    var checkoutUris = Config.checkoutUris;
    return _ref5 = {}, _ref5[ENV.LOCAL] = "" + spUrls.local + checkoutUris.local, _ref5[ENV.DEV] = "" + spUrls.development + checkoutUris.development, _ref5[ENV.SANDBOX] = "" + spUrls.sandbox + checkoutUris.sandbox, _ref5[ENV.PRODUCTION] = "" + spUrls.production + checkoutUris.production, _ref5;
  },

  get buttonUrls() {
    var _ref6;

    var spUrls = Config.buttonDomains;
    var buttonUris = Config.buttonUris;
    return _ref6 = {}, _ref6[ENV.LOCAL] = "" + spUrls.local + buttonUris.local, _ref6[ENV.DEV] = "" + spUrls.development + buttonUris.development, _ref6[ENV.SANDBOX] = "" + spUrls.sandbox + buttonUris.sandbox, _ref6[ENV.PRODUCTION] = "" + spUrls.production + buttonUris.production, _ref6;
  },

  get metaFrameUrls() {
    var _ref7;

    var spUrls = Config.bridgeDomains;
    var postBridgeUris = Config.postBridgeUris;
    return _ref7 = {}, _ref7[ENV.LOCAL] = "" + spUrls.local + postBridgeUris.local, _ref7[ENV.DEV] = "" + spUrls.development + postBridgeUris.development, _ref7[ENV.SANDBOX] = "" + spUrls.sandbox + postBridgeUris.sandbox, _ref7[ENV.PRODUCTION] = "" + spUrls.production + postBridgeUris.production, _ref7;
  },

  get orderApiUrls() {
    var _ref8;

    return _ref8 = {}, _ref8[ENV.LOCAL] = "http://localhost:4010", _ref8[ENV.DEV] = "https://dev.api.getsafepay.com/order", _ref8[ENV.SANDBOX] = "https://sandbox.api.getsafepay.com/order", _ref8[ENV.PRODUCTION] = "https://api.getsafepay.com/order", _ref8;
  },

  get paymentApiUrls() {
    var _ref9;

    var apiUrls = Config.orderApiUrls;
    var paymentUri = Config.paymentApiUri;
    return _ref9 = {}, _ref9[ENV.LOCAL] = "" + apiUrls.local + paymentUri, _ref9[ENV.DEV] = "" + apiUrls.development + paymentUri, _ref9[ENV.SANDBOX] = "" + apiUrls.sandbox + paymentUri, _ref9[ENV.PRODUCTION] = "" + apiUrls.production + paymentUri, _ref9;
  }

};