function redirect() {
  var win = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var url = arguments[1];

  return new window.safepay.Promise((resolve) => {
    setTimeout(() => {
      win.location = url;
      resolve();
    }, 1);
  });
}

function memoize(method) {
  let called = false;
  let result;

  const memoizeWrapper = () => {
    for (var len = 0, args = Array(len), key = 0; key < len; key++) {
      args[key] = arguments[key];
    }

    if (called) {
      return result
    }

    called = true
    result = method.apply(this, arguments);

    return result
  }

  memoizeWrapper.reset = () => {
    called = false;
  }

  return memoizeWrapper
}

function noop() {
  // pass
}

let parseQuery = (queryString) => {
  let params = {};

  if (!queryString) {
    return params;
  }

  if (queryString.indexOf('=') === -1) {
    return params;
  }

  for (let pair of queryString.split('&')) {
    pair = pair.split('=');

    if (pair[0] && pair[1]) {
      params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
  }

  return params;
};

function getQueryParam(name) {
  return parseQuery(window.location.search.slice(1))[name];
}

exports.getQueryParam = getQueryParam;
exports.redirect = redirect;
exports.memoize = memoize;
exports.noop = noop;
