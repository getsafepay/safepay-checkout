import { ZalgoPromise } from 'zalgo-promise/src';
import { create } from 'zoid/src';
import { Config, api, ENV } from '../api';
import { containerTemplate, componentTemplate } from './templates';

export const Checkout = create({
    tag: 'safepay-checkout',
    name: 'spcheckout',

    scrolling: true,

    defaultEnv: 'local',
    
    buildUrl(props) {
        let env = props.env || config.env;

        if (!props.payment) {
            throw new Error(`Can not build url without payment prop`);
        }

        return props.payment().then(token => {
            if (!token) {
                throw new Error(`Expected payment id or token to be passed, got ${ token }`);
            }

            return Config.checkoutUrls[env]
        });
    },
    
    contexts: {
        iframe: false,
        popup:  true
    },

    get domain() : Object {
        return {
            ...Config.safepayDomains,
            [ ENV.LOCAL ]: /^http:\/\/localhost:\d+$/
        };
    },

    defaultContext: 'popup',
    dimensions: {
        width:  '450px',
        height: '535px'
    },

    prerenderTemplate: componentTemplate,
    containerTemplate,

    props: {
        client: {
            type: 'object',
            required: false,
            def() {
                return {}
            },
            validate(client, props) {
                let env = props.env || Config.env;

                if (!client[env]) {
                    throw new Error(`Client ID not found for env: ${ env }`);
                }
            },
        },
        env: {
            type:       'string',
            required:   false,
            queryParam: true,

            def() {
                return Config.env;
            },

            validate(env) {
                if (!Config.safepayDomains[env]) {
                    throw new Error(`Invalid env: ${ env }`);
                }
            }
        },
        payment: {
            type: 'function',
            required: true,
            memoize:   true,
            promisify: true,
            queryParam(payment){
                return "beacon"
            },
            queryValue(payment) {
                return payment();
            },
            childDecorate(payment) {
                let token = getQueryParam('beacon');
                return token ? ZalgoPromise.resolve(token) : payment
            },
            validate(payment, props) {
                if (!payment && !props.url) {
                    throw new Error(`Expected either props.payment or props.url to be passed`);
                }
            },
        },
        onCheckout: {
            type: 'function',
            required: false
        },
    }
})