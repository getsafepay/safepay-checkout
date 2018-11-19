/* @jsx jsxDom */
var checkoutComponentStyle = "\n\n    body {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        position: fixed;\n        top: 0;\n        left: 0;\n        margin: 0;\n    }\n\n    .spinner {\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        z-index: 10\n    }\n\n    .spinner .spinWrap {\n        width: 200px;\n        height: 100px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-left: -100px;\n        margin-top: -50px\n    }\n\n    .spinner .loader,\n    .spinner .spinnerImage {\n        height: 100px;\n        width: 100px;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        opacity: 1;\n        filter: alpha(opacity=100)\n    }\n\n    .spinner .spinnerImage {\n        margin: 28px 0 0 -25px;\n        background: url(https://www.paypalobjects.com/images/checkout/hermes/icon_ot_spin_lock_skinny.png) no-repeat\n    }\n\n    .spinner .loader {\n        margin: 0 0 0 -55px;\n        background-color: transparent;\n        -webkit-animation: rotation 7s infinite linear;\n        -moz-animation: rotation 7s infinite linear;\n        -o-animation: rotation 7s infinite linear;\n        animation: rotation 7s infinite linear;\n        border-left: 5px solid #cbcbca;\n        border-right: 5px solid #cbcbca;\n        border-bottom: 5px solid #cbcbca;\n        border-top: 5px solid #2380be;\n        border-radius: 100%\n    }\n\n    @-webkit-keyframes rotation {\n        from {\n            -webkit-transform: rotate(0deg)\n        }\n        to {\n            -webkit-transform: rotate(359deg)\n        }\n    }\n    @-moz-keyframes rotation {\n        from {\n            -moz-transform: rotate(0deg)\n        }\n        to {\n            -moz-transform: rotate(359deg)\n        }\n    }\n    @-o-keyframes rotation {\n        from {\n            -o-transform: rotate(0deg)\n        }\n        to {\n            -o-transform: rotate(359deg)\n        }\n    }\n    @keyframes rotation {\n        from {\n            transform: rotate(0deg)\n        }\n        to {\n            transform: rotate(359deg)\n        }\n    }\n";
export function componentTemplate(_ref) {
  var jsxDom = _ref.jsxDom;
  return jsxDom("html", null, jsxDom("head", null, jsxDom("title", null, "Safepay"), jsxDom("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  })), jsxDom("body", null, jsxDom("div", {
    class: "preloader spinner"
  }, jsxDom("style", null, checkoutComponentStyle), jsxDom("div", {
    class: "spinWrap"
  }, jsxDom("p", {
    class: "spinnerImage"
  }), jsxDom("p", {
    class: "loader"
  })))));
}