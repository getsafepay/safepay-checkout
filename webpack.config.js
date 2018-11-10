import { getWebpackConfig } from 'grumbler-scripts/config/webpack.config';
const globals = require('./globals');

const CHECKOUT_FILE_NAME = 'safepay-checkout';
const MODULE_NAME = 'safepay';

export let WEBPACK_CONFIG_POPUP = getWebpackConfig({
	src:        './src/index.js',
	filename: `${ CHECKOUT_FILE_NAME }.js`,
	modulename: MODULE_NAME,
	vars: Object.assign({}, globals, {
		__DEFAULT_CONTEXT__:  'popup',
        __POPUP_SUPPORT__:    true,
        __IE_POPUP_SUPPORT__: true
	})
})

export let WEBPACK_CONFIG_POPUP_MIN = getWebpackConfig({
	src:        './src/index.js',
	filename: `${ CHECKOUT_FILE_NAME }.min.js`,
	modulename: MODULE_NAME,
	minify: true,
	vars: Object.assign({}, globals, {
		__DEFAULT_CONTEXT__:  'popup',
        __POPUP_SUPPORT__:    true,
        __IE_POPUP_SUPPORT__: true,
        __MIN__:              true
	})
})

// export let WEBPACK_CONFIG_BUTTON = getWebpackConfig({
// 	filename: `${ BUTTON_FILE_NAME }.js`,
// 	modulename: MODULE_NAME,
// 	vars: Object.assign({}, globals, {
// 		__DEFAULT_CONTEXT__:  'iframe',
//         __POPUP_SUPPORT__:    false,
//         __IE_POPUP_SUPPORT__: true
// 	})
// })

// export let WEBPACK_CONFIG_BUTTON_MIN = getWebpackConfig({
// 	filename: `${ BUTTON_FILE_NAME }.min.js`,
// 	modulename: MODULE_NAME,
// 	minify: true,
// 	vars: Object.assign({}, globals, {
// 		__DEFAULT_CONTEXT__:  'iframe',
//         __POPUP_SUPPORT__:    false,
//         __IE_POPUP_SUPPORT__: true,
//         __MIN__:              true
// 	})
// })

export default [
	WEBPACK_CONFIG_POPUP,
    WEBPACK_CONFIG_POPUP_MIN,
 //    WEBPACK_CONFIG_BUTTON,
	// WEBPACK_CONFIG_BUTTON_MIN
];
