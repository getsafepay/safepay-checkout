import { Config } from '../api';

export function determineUrl(env, payment) {
    return Config.checkoutUrls[env];
}