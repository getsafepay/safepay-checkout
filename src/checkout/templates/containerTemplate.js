/* @jsx jsxDom */

import { ZalgoPromise } from 'zalgo-promise/src';
import { getContainerStyle } from './containerStyle';
import { getSandboxStyle } from './sandboxStyle';

function isIos() {
  return false
}

const CHECKOUT_OVERLAY_COLOR = {
  BLACK: 'black',
  WHITE: 'white'
};

const BUTTON_LOGO_COLOR = {
  BLUE:  'blue',
  WHITE: 'white',
  BLACK: 'black',
  ANY:   'any'
};

const LOGO_COLOR = {
  [ CHECKOUT_OVERLAY_COLOR.BLACK ]: BUTTON_LOGO_COLOR.WHITE,
  [ CHECKOUT_OVERLAY_COLOR.WHITE ]: BUTTON_LOGO_COLOR.BLACK
};

export function containerTemplate({ id, props, CLASS, ANIMATION, CONTEXT, EVENT, on, tag, context, actions, outlet, jsxDom }) {
  
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

  let style = props.style || {};
  let overlayColor = style.overlayColor || CHECKOUT_OVERLAY_COLOR.BLACK;
  let logoColor = LOGO_COLOR[overlayColor];

  let el = (
    <div id={ id } onClick={ focus } class={ `${ tag }-context-${ context } safepay-checkout-overlay ${ tag }-background-color-${ overlayColor } ${ tag }-logo-color-${ logoColor }` }>
      <a href='#' class="safepay-checkout-close" onClick={ close } aria-label="close" role="button"></a>
      <div class="safepay-checkout-modal">
        <div class="safepay-checkout-logo">
            <h1>Safepay</h1>
        </div>
        <div class="safepay-checkout-message">
            Don’t see the secure Safepay browser? We’ll help you re-launch the window to complete your purchase.
        </div>
        <div class="safepay-checkout-continue">
            <a onClick={ focus } href='#'>Click to Continue</a>
        </div>
        <div class="safepay-checkout-loader">
            <div class="safepay-spinner"></div>
        </div>
      </div>

      <div class="safepay-checkout-iframe-container">
        {outlet}
      </div>

      <style>{getContainerStyle({ id, tag, CONTEXT, CLASS, ANIMATION })}</style>
    </div>
  );

  let container = (
    <html>
      <body>
        { el }
      </body>
    </html>
  );

  on(EVENT.CLOSE, () => {
    el.className += ` ${ tag }-loading`;
  });

  return (
    <div id={ id } class="safepay-checkout-sandbox">
      <style>{ getSandboxStyle({ id, ANIMATION }) }</style>

      <iframe title="Safepay Checkout Overlay" name={ `__safepay_checkout_sandbox_${ id }__` } scrolling="no" class="safepay-checkout-sandbox-iframe">
        { container }
      </iframe>
    </div>
  );
}