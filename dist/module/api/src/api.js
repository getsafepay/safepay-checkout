import { Fetcher } from './rest';
import { Config } from './config';
import { ZalgoPromise } from 'zalgo-promise/src';

function createPaymentTracker(env, client, details) {
  if (env === void 0) {
    env = "local";
  }

  if (client === void 0) {
    client = "";
  }

  if (details === void 0) {
    details = {};
  }

  var _details = details,
      transaction = _details.transaction;

  if (!transaction) {
    ZalgoPromise.reject(new Error("Expected payment details to be passed"));
    return;
  }

  var amount = transaction.amount,
      currency = transaction.currency;

  if (!amount || !currency) {
    ZalgoPromise.reject(new Error("Expected amount and currency to be passed"));
    return;
  }

  var fetch = new Fetcher();
  return fetch.post(Config.paymentApiUrls[env], {
    environment: env,
    client: client,
    amount: amount
  }).then(function (_ref) {
    var data = _ref.data;
    return data.data;
  }).then(function (_ref2) {
    var token = _ref2.token;
    return token;
  }).catch(function (err) {
    console.log(err);
    return err;
  });
}

export var api = {
  payment: {
    create: createPaymentTracker
  }
};