import { ENV } from './constants';

export let Config = {

	env: ENV.LOCAL,

	checkoutUris: {
		[ ENV.LOCAL ]: "/checkout",
		[ ENV.SANDBOX ]: "/dev/checkout",
		[ ENV.PRODUCTION ]: "/now/checkout"
	},

	buttonUris: {
		[ ENV.LOCAL ]: "", //"/trojan/button",
		[ ENV.SANDBOX ]: "/trojan/button",
		[ ENV.PRODUCTION ]: "/trojan/button"
	},

    paymentApiUri:    `/api/v1/order/init`,

    get safepayDomains() {
    	return {
    		[ ENV.LOCAL ]: "http://localhost:3000",
			[ ENV.SANDBOX ]: "https://sandbox.getsafepay.com",
			[ ENV.PRODUCTION ]: "https://production.getsafepay.com"
    	}
    },

	get buttonDomains() {
		return {
			[ ENV.LOCAL ]: "http://localhost:3000",
			[ ENV.SANDBOX ]: "https://sandbox.getsafepay.com",
			[ ENV.PRODUCTION ]: "https://production.getsafepay.com"
		}
	},

	get checkoutDomains() {
		return {
			[ ENV.LOCAL ]: "http://localhost:3001",
			[ ENV.SANDBOX ]: "https://sandbox.getsafepay.com",
			[ ENV.PRODUCTION ]: "https://production.getsafepay.com"
		}	
	},

	get checkoutUrls() {
		let spUrls = Config.checkoutDomains
		let checkoutUris = Config.checkoutUris

		return {
			[ ENV.LOCAL ]: `${spUrls.local}${checkoutUris.local}`,
			[ ENV.SANDBOX ]: `${spUrls.sandbox}${checkoutUris.sandbox}`,
			[ ENV.PRODUCTION ]: `${spUrls.production}${checkoutUris.production}`	
		}
	},

	get buttonUrls() {
		let spUrls = Config.buttonDomains
		let buttonUris = Config.buttonUris

		return {
			[ ENV.LOCAL ]: `${spUrls.local}${buttonUris.local}`,
			[ ENV.SANDBOX ]: `${spUrls.sandbox}${buttonUris.sandbox}`,
			[ ENV.PRODUCTION ]: `${spUrls.production}${buttonUris.production}`
		}
	},

	get orderApiUrls() {
		return {
			[ ENV.LOCAL ]: "http://localhost:4020",
			[ ENV.SANDBOX ]: "https://sandbox.getsafepay.com/order",
			[ ENV.PRODUCTION ]: "https://production.getsafepay.com/order"
		}
	},

	get paymentApiUrls() {
		let apiUrls = Config.orderApiUrls;
		let paymentUri = Config.paymentApiUri;

		return {
			[ ENV.LOCAL ]: `${apiUrls.local}${paymentUri}`,
			[ ENV.SANDBOX ]: `${apiUrls.sandbox}${paymentUri}`,
			[ ENV.PRODUCTION ]: `${apiUrls.production}${paymentUri}`
		}
	}
}