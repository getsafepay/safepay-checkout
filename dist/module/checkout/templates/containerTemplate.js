var _LOGO_COLOR;

/* @jsx jsxDom */
import { ZalgoPromise } from 'zalgo-promise/src';
import { getContainerStyle } from './containerStyle';
import { getSandboxStyle } from './sandboxStyle';

function isIos() {
  return false;
}

var CHECKOUT_OVERLAY_COLOR = {
  BLACK: 'black',
  WHITE: 'white'
};
var BUTTON_LOGO_COLOR = {
  BLUE: 'blue',
  WHITE: 'white',
  BLACK: 'black',
  ANY: 'any'
};
var LOGO_COLOR = (_LOGO_COLOR = {}, _LOGO_COLOR[CHECKOUT_OVERLAY_COLOR.BLACK] = BUTTON_LOGO_COLOR.WHITE, _LOGO_COLOR[CHECKOUT_OVERLAY_COLOR.WHITE] = BUTTON_LOGO_COLOR.BLACK, _LOGO_COLOR);
export function containerTemplate(_ref) {
  var id = _ref.id,
      props = _ref.props,
      CLASS = _ref.CLASS,
      ANIMATION = _ref.ANIMATION,
      CONTEXT = _ref.CONTEXT,
      EVENT = _ref.EVENT,
      on = _ref.on,
      tag = _ref.tag,
      context = _ref.context,
      actions = _ref.actions,
      outlet = _ref.outlet,
      jsxDom = _ref.jsxDom;

  function close(event) {
    event.preventDefault();
    event.stopPropagation();
    actions.close();
  }

  function focus(event) {
    event.preventDefault();
    event.stopPropagation();

    if (isIos()) {
      // eslint-disable-next-line no-alert
      window.alert('Please switch tabs to reactivate the Safepay window');
    } else {
      ZalgoPromise.try(actions.focus).catch(actions.close);
    }
  }

  var style = props.style || {};
  var overlayColor = style.overlayColor || CHECKOUT_OVERLAY_COLOR.BLACK;
  var logoColor = LOGO_COLOR[overlayColor];
  var el = jsxDom("div", {
    id: id,
    onClick: focus,
    class: tag + "-context-" + context + " safepay-checkout-overlay " + tag + "-background-color-" + overlayColor + " " + tag + "-logo-color-" + logoColor
  }, jsxDom("a", {
    href: "#",
    class: "safepay-checkout-close",
    onClick: close,
    "aria-label": "close",
    role: "button"
  }), jsxDom("div", {
    class: "safepay-checkout-modal"
  }, jsxDom("div", {
    class: "safepay-checkout-logo"
  }, jsxDom("h1", null, "Safepay")), jsxDom("div", {
    class: "safepay-checkout-message"
  }, "Don\u2019t see the secure Safepay browser? We\u2019ll help you re-launch the window to complete your purchase."), jsxDom("div", {
    class: "safepay-checkout-continue"
  }, jsxDom("a", {
    onClick: focus,
    href: "#"
  }, "Click to Continue")), jsxDom("div", {
    class: "safepay-checkout-loader"
  }, jsxDom("div", {
    class: "safepay-spinner"
  }))), jsxDom("div", {
    class: "safepay-checkout-iframe-container"
  }, outlet), jsxDom("style", null, getContainerStyle({
    id: id,
    tag: tag,
    CONTEXT: CONTEXT,
    CLASS: CLASS,
    ANIMATION: ANIMATION
  })));
  var container = jsxDom("html", null, jsxDom("body", null, el));
  on(EVENT.CLOSE, function () {
    el.className += " " + tag + "-loading";
  });
  return jsxDom("div", {
    id: id,
    class: "safepay-checkout-sandbox"
  }, jsxDom("style", null, getSandboxStyle({
    id: id,
    ANIMATION: ANIMATION
  })), jsxDom("iframe", {
    title: "Safepay Checkout Overlay",
    name: "__safepay_checkout_sandbox_" + id + "__",
    scrolling: "no",
    class: "safepay-checkout-sandbox-iframe"
  }, container));
}