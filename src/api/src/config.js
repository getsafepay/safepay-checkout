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

	postBridgeUris: {
    [ ENV.LOCAL ]:      "?xcomponent=1",
    [ ENV.DEV ]:      	"/bridge?xcomponent=1",
    [ ENV.SANDBOX ]:    "/bridge?xcomponent=1",
    [ ENV.PRODUCTION ]: "/bridge?xcomponent=1",
  },

  paymentApiUri:    `/v1/init`,

  get safepayDomains() {
  	return {
  		[ ENV.LOCAL ]: "http://localhost:3000",
  		[ ENV.DEV ]: "https://dev.api.getsafepay.com",
		  [ ENV.SANDBOX ]: "https://sandbox.api.getsafepay.com",
		  [ ENV.PRODUCTION ]: "https://www.getsafepay.com"
  	}
  },

	get buttonDomains() {
		return {
			[ ENV.LOCAL ]: "http://localhost:3000",
			[ ENV.DEV ]: "https://dev.api.getsafepay.com",
			[ ENV.SANDBOX ]: "https://sandbox.api.getsafepay.com",
			[ ENV.PRODUCTION ]: "https://www.getsafepay.com"
		}
	},

	get checkoutDomains() {
		return {
			[ ENV.LOCAL ]: "http://localhost:3001",
			[ ENV.DEV ]: "https://dev.api.getsafepay.com",
			[ ENV.SANDBOX ]: "https://sandbox.api.getsafepay.com",
			[ ENV.PRODUCTION ]: "https://www.getsafepay.com"
		}	
	},

	get bridgeDomains() {
		return {
			[ ENV.LOCAL ]: "http://localhost:3020",
			[ ENV.DEV ]: "https://dev.api.getsafepay.com",
			[ ENV.SANDBOX ]: "https://sandbox.api.getsafepay.com",
			[ ENV.PRODUCTION ]: "https://www.getsafepay.com"
		}
	},

	get checkoutUrls() {
		let spUrls = Config.checkoutDomains
		let checkoutUris = Config.checkoutUris

		return {
			[ ENV.LOCAL ]: `${spUrls.local}${checkoutUris.local}`,
			[ ENV.DEV ]: 		`${spUrls.development}${checkoutUris.development}`,
			[ ENV.SANDBOX ]: `${spUrls.sandbox}${checkoutUris.sandbox}`,
			[ ENV.PRODUCTION ]: `${spUrls.production}${checkoutUris.production}`	
		}
	},

	get buttonUrls() {
		let spUrls = Config.buttonDomains
		let buttonUris = Config.buttonUris

		return {
			[ ENV.LOCAL ]: `${spUrls.local}${buttonUris.local}`,
			[ ENV.DEV ]: 	`${spUrls.development}${buttonUris.development}`,
			[ ENV.SANDBOX ]: `${spUrls.sandbox}${buttonUris.sandbox}`,
			[ ENV.PRODUCTION ]: `${spUrls.production}${buttonUris.production}`
		}
	},

	get metaFrameUrls() {
    let spUrls = Config.bridgeDomains;
    let postBridgeUris = Config.postBridgeUris;

    return {
      [ ENV.LOCAL ]:      `${ spUrls.local }${ postBridgeUris.local }`,
      [ ENV.DEV ]:      	`${ spUrls.development }${ postBridgeUris.development }`,
      [ ENV.SANDBOX ]:    `${ spUrls.sandbox }${ postBridgeUris.sandbox }`,
      [ ENV.PRODUCTION ]: `${ spUrls.production }${ postBridgeUris.production }`
    };
  },

	get orderApiUrls() {
		return {
			[ ENV.LOCAL ]: "http://localhost:4010",
			[ ENV.DEV ]: "https://dev.api.getsafepay.com/order",
			[ ENV.SANDBOX ]: "https://sandbox.api.getsafepay.com/order",
			[ ENV.PRODUCTION ]: "https://api.getsafepay.com/order"
		}
	},

	get paymentApiUrls() {
		let apiUrls = Config.orderApiUrls;
		let paymentUri = Config.paymentApiUri;

		return {
			[ ENV.LOCAL ]: `${apiUrls.local}${paymentUri}`,
			[ ENV.DEV ]: `${apiUrls.development}${paymentUri}`,
			[ ENV.SANDBOX ]: `${apiUrls.sandbox}${paymentUri}`,
			[ ENV.PRODUCTION ]: `${apiUrls.production}${paymentUri}`
		}
	}
}