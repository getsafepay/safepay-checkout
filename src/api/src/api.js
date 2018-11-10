import { Fetcher } from './rest';
import { Config } from './config';
import { ZalgoPromise } from 'zalgo-promise/src';

function createPaymentTracker(env="local", client={}, details={}) {
	let clientId = client[env];
	let { transaction } = details;
	
	if (!transaction) {
		ZalgoPromise.reject(new Error("Expected payment details to be passed"))
		return;
	}

	let { amount, currency } = transaction;
	if (!amount || !currency) {
		ZalgoPromise.reject(new Error("Expected amount and currency to be passed"))
		return
	}

	return ZalgoPromise.resolve("tracker_1234567")

	// const fetch = new Fetcher();
	// return fetch.post({
	// 	url: Config.paymentApiUrls[env],
	// 	data: {
	// 		environment: env,
	// 		client: clientId,
	// 		amount: amount
	// 	}
	// })
}

export let api = {
	payment: {
		create: createPaymentTracker
	}
}