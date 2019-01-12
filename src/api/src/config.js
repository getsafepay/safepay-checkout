import { ENV } from './constants';

export let Config = {

	env: ENV.LOCAL,

	checkoutUris: {
		[ ENV.LOCAL ]: "/checkout",
		[ ENV.DEV ]: "/checkout",
		[ ENV.SANDBOX ]: "/checkout",
		[ ENV.PRODUCTION ]: "/checkout"
	},

	buttonUris: {
		[ ENV.LOCAL ]: "", //"/trojan/button",
		[ ENV.DEV ]: "/button", //"/trojan/button",
		[ ENV.SANDBOX ]: "/button",
		[ ENV.PRODUCTION ]: "/button"
	},

  paymentApiUri:    `/v1/init`,

  get safepayDomains() {
  	return {
  		[ ENV.LOCAL ]: "http://localhost:3000",
  		[ ENV.DEV ]: "https://dev.api.getsafepay.com",
		  [ ENV.SANDBOX ]: "https://sandbox.api.getsafepay.com",
		  [ ENV.PRODUCTION ]: "https://getsafepay.com"
  	}
  },

	get buttonDomains() {
		return {
			[ ENV.LOCAL ]: "http://localhost:3000",
			[ ENV.DEV ]: "https://dev.api.getsafepay.com",
			[ ENV.SANDBOX ]: "https://sandbox.getsafepay.com",
			[ ENV.PRODUCTION ]: "https://production.getsafepay.com"
		}
	},

	get checkoutDomains() {
		return {
			[ ENV.LOCAL ]: "http://localhost:3001",
			[ ENV.DEV ]: "https://dev.api.getsafepay.com",
			[ ENV.SANDBOX ]: "https://sandbox.getsafepay.com",
			[ ENV.PRODUCTION ]: "https://production.getsafepay.com"
		}	
	},

	get checkoutUrls() {
		let spUrls = Config.checkoutDomains
		let checkoutUris = Config.checkoutUris

		return {
			[ ENV.LOCAL ]: `${spUrls.local}${checkoutUris.local}`,
			[ ENV.DEV ]: 		`${spUrls.dev}${checkoutUris.dev}`,
			[ ENV.SANDBOX ]: `${spUrls.sandbox}${checkoutUris.sandbox}`,
			[ ENV.PRODUCTION ]: `${spUrls.production}${checkoutUris.production}`	
		}
	},

	get buttonUrls() {
		let spUrls = Config.buttonDomains
		let buttonUris = Config.buttonUris

		return {
			[ ENV.LOCAL ]: `${spUrls.local}${buttonUris.local}`,
			[ ENV.DEV ]: 	`${spUrls.dev}${buttonUris.dev}`,
			[ ENV.SANDBOX ]: `${spUrls.sandbox}${buttonUris.sandbox}`,
			[ ENV.PRODUCTION ]: `${spUrls.production}${buttonUris.production}`
		}
	},

	get orderApiUrls() {
		return {
			[ ENV.LOCAL ]: "http://localhost:4010",
			[ ENV.DEV ]: "https://dev.api.getsafepay.com/order",
			[ ENV.SANDBOX ]: "https://sandbox.getsafepay.com/order",
			[ ENV.PRODUCTION ]: "https://production.getsafepay.com/order"
		}
	},

	get paymentApiUrls() {
		let apiUrls = Config.orderApiUrls;
		let paymentUri = Config.paymentApiUri;

		return {
			[ ENV.LOCAL ]: `${apiUrls.local}${paymentUri}`,
			[ ENV.DEV ]: `${apiUrls.dev}${paymentUri}`,
			[ ENV.SANDBOX ]: `${apiUrls.sandbox}${paymentUri}`,
			[ ENV.PRODUCTION ]: `${apiUrls.production}${paymentUri}`
		}
	}
}