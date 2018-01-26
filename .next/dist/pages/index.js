'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mingderwang/src/now/hello-next/pages/index.js?entry';


var Index = function Index(props) {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'Batman TV Shows'), _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, props.shows.map(function (_ref) {
    var show = _ref.show;
    return _react2.default.createElement('li', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, _react2.default.createElement(_link2.default, { as: '/p/' + show.id, href: '/post?id=' + show.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, _react2.default.createElement('a', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, show.name)));
  })));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var res, data;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _isomorphicUnfetch2.default)('https://api.tvmaze.com/search/shows?q=batman');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;

          console.log('show data fetched. count: ' + data.length);
          return _context.abrupt('return', {
            shows: data
          });

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJMYXlvdXQiLCJmZXRjaCIsIkluZGV4IiwicHJvcHMiLCJzaG93cyIsIm1hcCIsInNob3ciLCJpZCIsIm5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxRQUFRLFNBQVIsQUFBUSxNQUFBLEFBQUMsT0FBRDt5QkFDWixBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSxvQ0FBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUNDO0FBREQ7QUFBQSxXQUNDLEFBQU0sTUFBTixBQUFZLElBQ1osZ0JBQUE7UUFBQSxBQUFFLFlBQUYsQUFBRTsyQkFDRCxjQUFBOztrQkFBQTtvQkFBQSxBQUNFO0FBREY7QUFBQSxLQUFBLGtCQUNFLEFBQUMsZ0NBQUssWUFBVSxLQUFoQixBQUFxQixJQUFNLG9CQUFrQixLQUE3QyxBQUFrRDtrQkFBbEQ7b0JBQUEsQUFDRztBQURIO3VCQUNHLGNBQUE7O2tCQUFBO29CQUFBLEFBQUk7QUFBSjtBQUFBLFlBSE4sQUFDQyxBQUNFLEFBQ0csQUFBUztBQVJOLEFBQ1osQUFFRSxBQUNDO0FBSkw7O0FBZ0JBLE1BQUEsQUFBTSwyRkFBa0IsbUJBQUE7V0FBQTtnRUFBQTtjQUFBO3VDQUFBO2FBQUE7MEJBQUE7aUJBQ0gsaUNBREcsQUFDSCxBQUFNOzthQUFsQjtBQURlLHlCQUFBOzBCQUFBO2lCQUVGLElBRkUsQUFFRixBQUFJOzthQUFqQjtBQUZlLDBCQUdyQjs7a0JBQUEsQUFBUSxtQ0FBaUMsS0FIcEIsQUFHckIsQUFBOEM7O21CQUh6QixBQUlkLEFBQ0U7QUFERixBQUNMOzthQUxtQjthQUFBOzBCQUFBOztBQUFBO2NBQUE7QUFBeEIsQUFTQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWluZ2Rlcndhbmcvc3JjL25vdy9oZWxsby1uZXh0In0=