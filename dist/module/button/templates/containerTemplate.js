/* @jsx jsxDom */
export function containerTemplate(_ref) {
  var id = _ref.id,
      props = _ref.props,
      CLASS = _ref.CLASS,
      on = _ref.on,
      container = _ref.container,
      tag = _ref.tag,
      context = _ref.context,
      outlet = _ref.outlet,
      jsxDom = _ref.jsxDom;
  return jsxDom("div", {
    id: id
  }, jsxDom("style", null, "\n                    #" + id + " {\n                        font-size: 0;\n                        width: 100%;\n                    }\n                    #" + id + "." + tag + " {\n                        text-align: center;\n                    }\n                    #" + id + " > ." + CLASS.OUTLET + " {\n                        display: inline-block;\n                        min-width: 75px;\n                        max-width: 750px;\n                        position: relative;\n                    }\n                    #" + id + "." + tag + " > ." + CLASS.OUTLET + " {\n                        min-width: 75px;\n                    }\n                    #" + id + " > ." + CLASS.OUTLET + " {\n                        width:  200px;\n                        height: 42px;\n                    }\n                     #" + id + "." + tag + " > ." + CLASS.OUTLET + " {\n                        width: 100%;\n                    }\n                    #" + id + " > ." + CLASS.OUTLET + " > iframe {\n                        min-width: 100%;\n                        max-width: 100%;\n                        width: 75px;\n                        height: 100%;\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                    }\n                    #" + id + " > ." + CLASS.OUTLET + " > iframe." + CLASS.COMPONENT_FRAME + " {\n                        z-index: 100;\n                    }\n                    #" + id + " > ." + CLASS.OUTLET + " > iframe." + CLASS.PRERENDER_FRAME + " {\n                        transition: opacity .2s linear;\n                        z-index: 200;\n                    }\n                    #" + id + " > ." + CLASS.OUTLET + " > iframe." + CLASS.VISIBLE + " {\n                        opacity: 1;\n                    }\n                    #" + id + " > ." + CLASS.OUTLET + " > iframe." + CLASS.INVISIBLE + " {\n                        opacity: 0;\n                        pointer-events: none;\n                    }\n                "), outlet);
}