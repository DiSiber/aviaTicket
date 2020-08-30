"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _apiConfig = _interopRequireDefault(require("../config/apiConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 *  / countries - страны (массив)
 *  / cities - города в стране (массив)
 *  /prices/cheap - цены (массив)
 *
 *
 */
var Api =
/*#__PURE__*/
function () {
  function Api(config) {
    _classCallCheck(this, Api);

    this.url = config.url;
  }

  _createClass(Api, [{
    key: "countries",
    value: function countries() {
      var response;
      return regeneratorRuntime.async(function countries$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(_axios["default"].get("".concat(this.url, "/countries")));

            case 3:
              response = _context.sent;
              return _context.abrupt("return", response.data);

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(err);
              return _context.abrupt("return", Promise.reject(err));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[0, 7]]);
    }
  }, {
    key: "cities",
    value: function cities() {
      var response;
      return regeneratorRuntime.async(function cities$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(_axios["default"].get("".concat(this.url, "/cities")));

            case 3:
              response = _context2.sent;
              return _context2.abrupt("return", response.data);

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log(err);
              return _context2.abrupt("return", Promise.reject(err));

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[0, 7]]);
    }
  }, {
    key: "prices",
    value: function prices(params) {
      return regeneratorRuntime.async(function prices$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]);

  return Api;
}();

var api = new Api(_apiConfig["default"]);
var _default = api;
exports["default"] = _default;