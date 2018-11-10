import axios from 'axios';
export var Fetcher =
/*#__PURE__*/
function () {
  function Fetcher() {}

  var _proto = Fetcher.prototype;

  _proto.post = function post(url, data, headers) {
    if (data === void 0) {
      data = {};
    }

    if (headers === void 0) {
      headers = {};
    }

    return axios({
      method: "post",
      data: data,
      url: url,
      headers: headers
    }).catch(this.handleError);
  };

  _proto.get = function get(url, params, headers) {
    if (params === void 0) {
      params = {};
    }

    if (headers === void 0) {
      headers = {};
    }

    return axios({
      method: "get",
      params: params,
      headers: headers,
      url: url
    }).catch(this.handleError);
  };

  _proto.handleError = function handleError(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }

    console.log(error.config);
  };

  return Fetcher;
}();