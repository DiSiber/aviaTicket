"use strict";

var _apiService = _interopRequireDefault(require("./services/apiService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_apiService["default"].countries().then(function (res) {
  return console.log(res);
});

_apiService["default"].cities().then(function (res) {
  return console.log(res);
});