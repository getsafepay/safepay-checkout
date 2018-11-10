import { Fetcher } from './rest';
import { Config } from './config';
import { ZalgoPromise } from 'zalgo-promise/src';

function createPaymentTracker(env, client, details) {
  if (env === void 0) {
    env = "local";
  }

  if (client === void 0) {
    client = {};
  }

  if (details === void 0) {
    details = {};
  }

  var clientId = client[env];
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

  return ZalgoPromise.resolve("tracker_1234567"); // const fetch = new Fetcher();
  // return fetch.post({
  // 	url: Config.paymentApiUrls[env],
  // 	data: {
  // 		environment: env,
  // 		client: clientId,
  // 		amount: amount
  // 	}
  // })
}

export var api = {
  payment: {
    create: createPaymentTracker
  }
};