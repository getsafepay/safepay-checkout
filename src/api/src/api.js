import { Fetcher } from './rest';
import { Config } from './config';
import { ZalgoPromise } from 'zalgo-promise/src';

function createPaymentTracker(env="local", client="", details={}) {
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

	const fetch = new Fetcher();
  console.log(Config.paymentApiUrls[env])
	return fetch.post(
	  Config.paymentApiUrls[env], {
	 		environment: env,
	 		client: client,
	 		amount: amount
	 	}
	).then(({ data }) => {
    return data.data
  }).then(({ token }) => {
    return token
  }).catch(err => {
    console.log(err)
    return err
  })
}

export let api = {
	payment: {
		create: createPaymentTracker
	}
}