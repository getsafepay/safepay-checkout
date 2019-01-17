function redirect() {
  var win = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var url = arguments[1];
  return new window.safepay.Promise(function (resolve) {
    setTimeout(function () {
      win.location = url;
      resolve();
    }, 1);
  });
}

function memoize(method) {
  var _this = this,
      _arguments = arguments;

  var called = false;
  var result;

  var memoizeWrapper = function memoizeWrapper() {
    for (var len = 0, args = Array(len), key = 0; key < len; key++) {
      args[key] = _arguments[key];
    }

    if (called) {
      return result;
    }

    called = true;
    result = method.apply(_this, _arguments);
    return result;
  };

  memoizeWrapper.reset = function () {
    called = false;
  };

  return memoizeWrapper;
}

function noop() {// pass
}

var parseQuery = function parseQuery(queryString) {
  var params = {};

  if (!queryString) {
    return params;
  }

  if (queryString.indexOf('=') === -1) {
    return params;
  }

  for (var _i2 = 0, _queryString$split2 = queryString.split('&'); _i2 < _queryString$split2.length; _i2++) {
    var pair = _queryString$split2[_i2];
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

function patchMethod(obj, name, handler) {
  var original = obj[name];

  obj[name] = function patchedMethod() {
    var _this2 = this,
        _arguments2 = arguments;

    return handler({
      context: this,
      args: Array.prototype.slice.call(arguments),
      original: original,
      callOriginal: function callOriginal() {
        return original.apply(_this2, _arguments2);
      }
    });
  };
}

exports.getQueryParam = getQueryParam;
exports.redirect = redirect;
exports.memoize = memoize;
exports.noop = noop;
exports.patchMethod = patchMethod;