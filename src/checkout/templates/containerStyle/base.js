const CHECKOUT_OVERLAY_COLOR = {
  BLACK: 'black',
  WHITE: 'white'
};

export function getContainerStyle({ id, tag, CONTEXT, CLASS, ANIMATION }) {
  return `
    #${ id } {
      position: absolute;
      z-index: 2147483647;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    #${ id }.${ tag }-background-color-${ CHECKOUT_OVERLAY_COLOR.BLACK } {
      background-color: black;
      background-color: rgba(0, 0, 0, 0.75);
      background: -webkit-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,1) 1%, rgba(0,0,0,0.75) 100%);
      background: -moz-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,1) 1%, rgba(0,0,0,0.75) 100%);
      background: -ms-radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,1) 1%, rgba(0,0,0,0.75) 100%);
      background: radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,1) 1%, rgba(0,0,0,0.75) 100%);
      color: #fff;
    }
    #${ id }.${ tag }-background-color-${ CHECKOUT_OVERLAY_COLOR.WHITE } {
      background-color: white;
      background-color: rgba(255, 255, 255, 0.4);
      background: -webkit-radial-gradient(50% 50%, ellipse closest-corner, rgba(255, 255, 255,1) 1%, rgba(255, 255, 255,0.4) 100%);
      background: -moz-radial-gradient(50% 50%, ellipse closest-corner, rgba(255, 255, 255,1) 1%, rgba(255, 255, 255,0.4) 100%);
      background: -ms-radial-gradient(50% 50%, ellipse closest-corner, rgba(255, 255, 255,1) 1%, rgba(255, 255, 255,0.4) 100%);
      background: radial-gradient(50% 50%, ellipse closest-corner, rgba(255, 255, 255,1) 1%, rgba(255, 255, 255,0.4) 100%);
      color: #333;
    }
    #${ id }.${ tag }-background-color-${ CHECKOUT_OVERLAY_COLOR.BLACK } a {
      color: #fff;
    }
    #${ id }.${ tag }-background-color-${ CHECKOUT_OVERLAY_COLOR.WHITE } a {
      color: #333;
    }
    #${ id }.${ tag }-background-color-${ CHECKOUT_OVERLAY_COLOR.BLACK } .safepay-checkout-close:before,
    #${ id }.${ tag }-background-color-${ CHECKOUT_OVERLAY_COLOR.BLACK } .safepay-checkout-close:after {
      background-color: #fff;
    }
    #${ id }.${ tag }-background-color-${ CHECKOUT_OVERLAY_COLOR.WHITE } .safepay-checkout-close:before,
    #${ id }.${ tag }-background-color-${ CHECKOUT_OVERLAY_COLOR.WHITE } .safepay-checkout-close:after {
      background-color: #111;
    }
    #${ id }.${ tag }-context-${ CONTEXT.POPUP } {
      cursor: pointer;
    }
    #${ id }.${ tag }-context-${ CONTEXT.POPUP } {
      cursor: pointer;
    }
    #${ id } a {
      text-decoration: none;
    }
    #${ id } .safepay-checkout-modal {
      font-family: "HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif;
      font-size: 14px;
      text-align: center;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      -ms-box-sizing: border-box;
      box-sizing: border-box;
      max-width: 350px;
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translateX(-50%) translateY(-50%);
      -webkit-transform: translateX(-50%) translateY(-50%);
      -moz-transform: translateX(-50%) translateY(-50%);
      -o-transform: translateX(-50%) translateY(-50%);
      -ms-transform: translateX(-50%) translateY(-50%);
      cursor: pointer;
      text-align: center;
    }
    #${ id }.${ tag }-loading .safepay-checkout-message, #${ id }.${ tag }-loading .safepay-checkout-continue {
      display: none;
    }
    .safepay-checkout-loader {
      display: none;
    }
    #${ id }.${ tag }-loading .safepay-checkout-loader {
      display: block;
    }
    #${ id } .safepay-checkout-modal .safepay-checkout-logo {
      cursor: pointer;
      margin-bottom: 30px;
      display: inline-block;
    }
    #${ id } .safepay-checkout-modal .safepay-checkout-logo img {
      height: 36px;
    }
    #${ id } .safepay-checkout-modal .safepay-checkout-logo img.safepay-checkout-logo-pp {
      margin-right: 10px;
    }
    #${ id } .safepay-checkout-modal .safepay-checkout-message {
      font-size: 15px;
      line-height: 1.5;
      padding: 10px 0;
    }
    #${ id }.${ tag }-context-${ CONTEXT.IFRAME } .safepay-checkout-message, #${ id }.${ tag }-context-${ CONTEXT.IFRAME } .safepay-checkout-continue {
      display: none;
    }
    #${ id } .safepay-checkout-modal .safepay-checkout-continue {
      font-size: 15px;
      line-height: 1.35;
      padding: 10px 0;
      font-weight: bold;
    }
    #${ id } .safepay-checkout-modal .safepay-checkout-continue a {
      border-bottom: 1px solid currentColor;
    }
    #${ id } .safepay-checkout-close {
      position: absolute;
      right: 16px;
      top: 16px;
      width: 16px;
      height: 16px;
      opacity: 0.6;
    }
    #${ id }.${ tag }-loading .safepay-checkout-close {
      display: none;
    }
    #${ id } .safepay-checkout-close:hover {
      opacity: 1;
    }
    #${ id } .safepay-checkout-close:before, .safepay-checkout-close:after {
      position: absolute;
      left: 8px;
      content: ' ';
      height: 16px;
      width: 2px;
    }
    #${ id } .safepay-checkout-close:before {
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
    }
    #${ id } .safepay-checkout-close:after {
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
    }
    #${ id } .safepay-checkout-iframe-container {
      display: none;
    }
    #${ id }.${ tag }-context-${ CONTEXT.IFRAME } .safepay-checkout-iframe-container,
    #${ id }.${ tag }-context-${ CONTEXT.IFRAME } .safepay-checkout-iframe-container > .${ CLASS.OUTLET },
    #${ id }.${ tag }-context-${ CONTEXT.IFRAME } .safepay-checkout-iframe-container > .${ CLASS.OUTLET } > iframe {
      max-height: 95vh;
      max-width: 95vw;
    }
    #${ id }.${ tag }-context-${ CONTEXT.IFRAME } .safepay-checkout-iframe-container {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 450px;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate3d(-50%, -50%, 0);
      -webkit-transform: translate3d(-50%, -50%, 0);
      -moz-transform: translate3d(-50%, -50%, 0);
      -o-transform: translate3d(-50%, -50%, 0);
      -ms-transform: translate3d(-50%, -50%, 0);
      border-radius: 10px;
      overflow: hidden;
    }
    #${ id }.${ tag }-context-${ CONTEXT.IFRAME } .${ CLASS.OUTLET } {
      position: relative;
      -webkit-transition: all 3s ease;
      -moz-transition: all 3s ease;
      -ms-transition: all 3s ease;
      -o-transition: all 3 ease;
      transition: all 3s ease;
      -webkit-animation-duration: 3s;
      animation-duration: 3s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      min-width: 450px;
      max-width: 450px;
      width: 450px;
      height: 535px;
      background-color: white;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
    #${ id }.${ tag }-context-${ CONTEXT.IFRAME } .${ CLASS.OUTLET } > iframe {
      position: absolute;
      top: 0;
      left: 0;
      transition: opacity 4s ease-in-out;
    }
    #${ id }.${ tag }-context-${ CONTEXT.IFRAME } .${ CLASS.OUTLET } > iframe.${ CLASS.COMPONENT_FRAME } {
      z-index: 100;
    }
    #${ id }.${ tag }-context-${ CONTEXT.IFRAME } .${ CLASS.OUTLET } > iframe.${ CLASS.PRERENDER_FRAME } {
      z-index: 200;
    }
    #${ id }.${ tag }-context-${ CONTEXT.IFRAME } .${ CLASS.OUTLET } > iframe.${ CLASS.VISIBLE } {
      opacity: 1;
      z-index: 200;
    }
    #${ id }.${ tag }-context-${ CONTEXT.IFRAME } .${ CLASS.OUTLET } > iframe.${ CLASS.INVISIBLE } {
      opacity: 0;
      z-index: 100;
    }
    @media screen and (-ms-high-contrast: active) {
      #${ id } .safepay-checkout-close {
        opacity: 1;
      }
      #${ id } .safepay-checkout-close:before , .safepay-checkout-close:after {
        background-color: currentColor;
      }
    }
    @media screen and (max-width: 470px) {
      #${ id }.${ tag }-context-${ CONTEXT.IFRAME } .safepay-checkout-iframe-container,
      #${ id }.${ tag }-context-${ CONTEXT.IFRAME } .${ CLASS.OUTLET } {
        min-width: 100%;
        min-width: calc(100% - 20px);
        min-width: -webkit-calc(100% - 20px);
        min-width: -moz-calc(100% - 20px);
        min-width: -o-calc(100% - 20px);
        min-width: -ms-calc(100% - 20px);
        max-width: 100%;
        max-width: calc(100% - 20px);
        max-width: -webkit-calc(100% - 20px);
        max-width: -moz-calc(100% - 20px);
        max-width: -o-calc(100% - 20px);
        max-width: -ms-calc(100% - 20px);
      }
    }
    #${ id }.${ tag }-context-${ CONTEXT.IFRAME } .${ CLASS.OUTLET } iframe {
      width: 1px;
      min-width: 100%;
      height: 100%;
    }
    @-webkit-keyframes ${ ANIMATION.SHOW_COMPONENT } {
      from {
        opacity: 0;
        transform: scale3d(.3, .3, .3);
        -webkit-transform: scale3d(.3, .3, .3);
      }
      to {
        opacity: 1;
        transform: scale3d(1, 1, 1);
        -webkit-transform: scale3d(1, 1, 1);
      }
    }
    @keyframes ${ ANIMATION.SHOW_COMPONENT } {
      from {
        opacity: 0;
        transform: scale3d(.3, .3, .3);
        -webkit-transform: scale3d(.3, .3, .3);
      }
      to {
        opacity: 1;
        transform: scale3d(1, 1, 1);
        -webkit-transform: scale3d(1, 1, 1);
      }
    }
    @-webkit-keyframes ${ ANIMATION.HIDE_COMPONENT } {
      from {
        transform: scale3d(1, 1, 1);
        -webkit-transform: scale3d(1, 1, 1);
      }
      to {
        opacity: 0;
        transform: scale3d(.3, .3, .3);
        -webkit-transform: scale3d(.3, .3, .3);
      }
    }
    @keyframes ${ ANIMATION.HIDE_COMPONENT } {
      from {
        transform: scale3d(1, 1, 1);
        -webkit-transform: scale3d(1, 1, 1);
      }
      to {
        opacity: 0;
        transform: scale3d(.3, .3, .3);
        -webkit-transform: scale3d(.3, .3, .3);
      }
    }
    .safepay-spinner {
      height: 30px;
      width: 30px;
      display: inline-block;
      box-sizing: content-box;
      opacity: 1;
      filter: alpha(opacity=100);
      -webkit-animation: rotation .7s infinite linear;
      -moz-animation: rotation .7s infinite linear;
      -o-animation: rotation .7s infinite linear;
      animation: rotation .7s infinite linear;
      border-left: 8px solid rgba(0, 0, 0, .2);
      border-right: 8px solid rgba(0, 0, 0, .2);
      border-bottom: 8px solid rgba(0, 0, 0, .2);
      border-top: 8px solid #fff;
      border-radius: 100%
    }
    @-webkit-keyframes rotation {
      from {
        -webkit-transform: rotate(0deg)
      }
      to {
        -webkit-transform: rotate(359deg)
      }
    }
    @-moz-keyframes rotation {
      from {
        -moz-transform: rotate(0deg)
      }
      to {
        -moz-transform: rotate(359deg)
      }
    }
    @-o-keyframes rotation {
      from {
        -o-transform: rotate(0deg)
      }
      to {
        -o-transform: rotate(359deg)
      }
    }
    @keyframes rotation {
      from {
        transform: rotate(0deg)
      }
      to {
        transform: rotate(359deg)
      }
    }
  `;
}