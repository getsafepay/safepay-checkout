export function getSandboxStyle(_ref) {
  var id = _ref.id,
      ANIMATION = _ref.ANIMATION;
  return "\n      #" + id + ".safepay-checkout-sandbox {\n        display: block;\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        width: 100vw;\n        height: 100vh;\n        max-width: 100%;\n        max-height: 100%;\n        min-width: 100%;\n        min-height: 100%;\n        z-index: 2147483647;\n        -webkit-animation-duration: 1s;\n        animation-duration: 1s;\n        animation-fill-mode:forwards;\n        animation-iteration-count: 1;\n        -webkit-animation-fill-mode:forwards;\n        -webkit-animation-iteration-count: 1;\n      }\n      #" + id + ".safepay-checkout-sandbox .safepay-checkout-sandbox-iframe {\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n      @-webkit-keyframes " + ANIMATION.SHOW_CONTAINER + " {\n        from {\n            opacity: 0;\n        }\n        to {\n            opacity: 1;\n        }\n      }\n      @keyframes " + ANIMATION.SHOW_CONTAINER + " {\n        from {\n            opacity: 0;\n        }\n        to {\n            opacity: 1;\n        }\n      }\n      @-webkit-keyframes " + ANIMATION.HIDE_CONTAINER + " {\n        from {\n            opacity: 1;\n        }\n        50% {\n            opacity: 1;\n        }\n        to {\n            opacity: 0;\n        }\n      }\n      @keyframes " + ANIMATION.HIDE_CONTAINER + " {\n        from {\n            opacity: 1;\n        }\n        50% {\n            opacity: 1;\n        }\n        to {\n            opacity: 0;\n        }\n      }\n  ";
}