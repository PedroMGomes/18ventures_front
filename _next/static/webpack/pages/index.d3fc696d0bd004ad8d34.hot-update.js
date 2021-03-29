webpackHotUpdate_N_E("pages/index",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui/jsx-dev-runtime */ "./node_modules/theme-ui/jsx-dev-runtime/dist/index.esm.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo */ "./components/logo.js");
/* harmony import */ var _drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drawer/drawer.provider */ "./components/drawer/drawer.provider.js");
/* harmony import */ var _drawer_mobile_drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drawer/mobile-drawer */ "./components/drawer/mobile-drawer.js");
/* harmony import */ var _data_header_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/header.data */ "./data/header.data.js");

var _jsxFileName = "C:\\Users\\Gomes\\Documents\\Projects\\next-js\\18ventures\\components\\header.js";

/** @jsxImportSource theme-ui */
 // import { keyframes } from '@emotion/core';
// import { IoIosUnlock } from 'react-icons/io';
// import { NavLink, Link } from './link';





 /// Header.

function Header(_ref) {
  var _this = this;

  var headerClassName = _ref.headerClassName;
  return Object(theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_4__["DrawerProvider"], {
    children: Object(theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      sx: styles.header,
      className: headerClassName,
      children: Object(theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        sx: styles.container,
        children: [Object(theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_logo__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this), Object(theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          as: "nav",
          sx: styles.nav,
          children: _data_header_data__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (_ref2, i) {
            var path = _ref2.path,
                label = _ref2.label;
            return Object(theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              activeClass: "active",
              sx: styles.nav.navLink,
              to: path,
              spy: true,
              smooth: true,
              offset: -70,
              duration: 500,
              children: label
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), Object(theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_drawer_mobile_drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
_c = Header;
var styles = {
  // headerBtn: {
  //   backgroundColor: 'rgba(0,0,0,0)',
  //   fontSize: '16px',
  //   fontWeight: 'bold',
  //   letterSpacing: '-0.16px',
  //   borderRadius: '5px',
  //   border: '2px solid',
  //   borderColor: 'primary',
  //   color: 'text',
  //   padding: '8px 24px',
  //   display: ['none', null, null, null, 'inline-block'],
  //   ml: ['0', null, null, 'auto', '0'],
  //   mr: ['0', null, null, '20px', '0'],
  //   // TODO removing padding from container. applying padding on index.theme.
  //   px: ['0px'],
  //   py: ['0px'],
  //   '&:hover': {
  //     color: '#fff',
  //   },
  // },
  header: {
    color: 'text_white',
    fontWeight: 'normal',
    py: '25px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    '&.sticky': {
      backgroundColor: 'background',
      color: 'text',
      py: '25px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)'
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between',
    width: [null, null, null, null, null, null, '1390px'],
    '@media screen and (max-width: 960px)': {
      justifyContent: 'space-between'
    }
  },
  nav: {
    mx: 'auto',
    '@media screen and (max-width: 960px)': {
      display: 'none'
    },
    navLink: {
      fontSize: '16px',
      color: 'text',
      fontWeight: '400',
      cursor: 'pointer',
      lineHeight: '1.2',
      mr: '48px',
      transition: '500ms',
      ':last-child': {
        mr: '0'
      },
      '&:hover, &.active': {
        color: 'primary'
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiaGVhZGVyQ2xhc3NOYW1lIiwic3R5bGVzIiwiaGVhZGVyIiwiY29udGFpbmVyIiwibmF2IiwibWVudUl0ZW1zIiwibWFwIiwiaSIsInBhdGgiLCJsYWJlbCIsIm5hdkxpbmsiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJweSIsIndpZHRoIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNpdGlvbiIsImJveFNoYWRvdyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJteCIsImZvbnRTaXplIiwiY3Vyc29yIiwibGluZUhlaWdodCIsIm1yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0NBR0E7O0FBQ2UsU0FBU0EsTUFBVCxPQUFxQztBQUFBOztBQUFBLE1BQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7QUFDbEQsU0FDRSx3RUFBQyxzRUFBRDtBQUFBLGNBQ0U7QUFBUSxRQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBbkI7QUFBMkIsZUFBUyxFQUFFRixlQUF0QztBQUFBLGdCQUNFLHdFQUFDLGtEQUFEO0FBQVcsVUFBRSxFQUFFQyxNQUFNLENBQUNFLFNBQXRCO0FBQUEsbUJBRUUsd0VBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixFQUtFLHdFQUFDLDZDQUFEO0FBQU0sWUFBRSxFQUFDLEtBQVQ7QUFBZSxZQUFFLEVBQUVGLE1BQU0sQ0FBQ0csR0FBMUI7QUFBQSxvQkFDR0MseURBQVMsQ0FBQ0MsR0FBVixDQUFjLGlCQUFrQkMsQ0FBbEI7QUFBQSxnQkFBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsZ0JBQVNDLEtBQVQsU0FBU0EsS0FBVDtBQUFBLG1CQUNiLHdFQUFDLGlEQUFEO0FBQ0UseUJBQVcsRUFBQyxRQURkO0FBRUUsZ0JBQUUsRUFBRVIsTUFBTSxDQUFDRyxHQUFQLENBQVdNLE9BRmpCO0FBR0UsZ0JBQUUsRUFBRUYsSUFITjtBQUlFLGlCQUFHLEVBQUUsSUFKUDtBQUtFLG9CQUFNLEVBQUUsSUFMVjtBQU1FLG9CQUFNLEVBQUUsQ0FBQyxFQU5YO0FBT0Usc0JBQVEsRUFBRSxHQVBaO0FBQUEsd0JBVUdDO0FBVkgsZUFRT0YsQ0FSUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURhO0FBQUEsV0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsRUFnQ0Usd0VBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlDRDtLQTFDdUJSLE07QUE0Q3hCLElBQU1FLE1BQU0sR0FBRztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsUUFBTSxFQUFFO0FBQ05TLFNBQUssRUFBRSxZQUREO0FBRU5DLGNBQVUsRUFBRSxRQUZOO0FBR05DLE1BQUUsRUFBRSxNQUhFO0FBSU5DLFNBQUssRUFBRSxNQUpEO0FBS05DLFlBQVEsRUFBRSxPQUxKO0FBTU5DLE9BQUcsRUFBRSxDQU5DO0FBT05DLFFBQUksRUFBRSxDQVBBO0FBUU5DLG1CQUFlLEVBQUUsYUFSWDtBQVNOQyxjQUFVLEVBQUUsZUFUTjtBQVVOLGdCQUFZO0FBQ1ZELHFCQUFlLEVBQUUsWUFEUDtBQUVWUCxXQUFLLEVBQUUsTUFGRztBQUdWRSxRQUFFLEVBQUUsTUFITTtBQUlWTyxlQUFTLEVBQUU7QUFKRDtBQVZOLEdBckJLO0FBc0NiakIsV0FBUyxFQUFFO0FBQ1RrQixXQUFPLEVBQUUsTUFEQTtBQUVUQyxjQUFVLEVBQUUsUUFGSDtBQUdUO0FBQ0FSLFNBQUssRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixJQUF6QixFQUErQixJQUEvQixFQUFxQyxRQUFyQyxDQUpFO0FBS1QsNENBQXdDO0FBQ3RDUyxvQkFBYyxFQUFFO0FBRHNCO0FBTC9CLEdBdENFO0FBK0NibkIsS0FBRyxFQUFFO0FBQ0hvQixNQUFFLEVBQUUsTUFERDtBQUVILDRDQUF3QztBQUN0Q0gsYUFBTyxFQUFFO0FBRDZCLEtBRnJDO0FBS0hYLFdBQU8sRUFBRTtBQUNQZSxjQUFRLEVBQUUsTUFESDtBQUVQZCxXQUFLLEVBQUUsTUFGQTtBQUdQQyxnQkFBVSxFQUFFLEtBSEw7QUFJUGMsWUFBTSxFQUFFLFNBSkQ7QUFLUEMsZ0JBQVUsRUFBRSxLQUxMO0FBTVBDLFFBQUUsRUFBRSxNQU5HO0FBT1BULGdCQUFVLEVBQUUsT0FQTDtBQVFQLHFCQUFlO0FBQ2JTLFVBQUUsRUFBRTtBQURTLE9BUlI7QUFXUCwyQkFBcUI7QUFDbkJqQixhQUFLLEVBQUU7QUFEWTtBQVhkO0FBTE47QUEvQ1EsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kM2ZjNjk2ZDBiZDAwNGFkOGQzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hJbXBvcnRTb3VyY2UgdGhlbWUtdWkgKi9cclxuaW1wb3J0IHsgQ29udGFpbmVyLCBGbGV4LCBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbi8vIGltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xyXG4vLyBpbXBvcnQgeyBJb0lvc1VubG9jayB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuLy8gaW1wb3J0IHsgTmF2TGluaywgTGluayB9IGZyb20gJy4vbGluayc7XHJcbmltcG9ydCB7IExpbmsgYXMgU2Nyb2xsTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcbmltcG9ydCBMb2dvIGZyb20gJy4vbG9nbyc7XHJcblxyXG5pbXBvcnQgeyBEcmF3ZXJQcm92aWRlciB9IGZyb20gJy4vZHJhd2VyL2RyYXdlci5wcm92aWRlcic7XHJcbmltcG9ydCBNb2JpbGVEcmF3ZXIgZnJvbSAnLi9kcmF3ZXIvbW9iaWxlLWRyYXdlcic7XHJcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi4vZGF0YS9oZWFkZXIuZGF0YSc7XHJcblxyXG4vLy8gSGVhZGVyLlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyBoZWFkZXJDbGFzc05hbWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhd2VyUHJvdmlkZXI+XHJcbiAgICAgIDxoZWFkZXIgc3g9e3N0eWxlcy5oZWFkZXJ9IGNsYXNzTmFtZT17aGVhZGVyQ2xhc3NOYW1lfT5cclxuICAgICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIHsvKiBIZWFkZXIgbGVmdC1zaWRlIGxvZ28uICovfVxyXG4gICAgICAgICAgPExvZ28gLz5cclxuXHJcbiAgICAgICAgICB7LyogQ2VudGVyIE5hdiBJY29ucy4gKi99XHJcbiAgICAgICAgICA8RmxleCBhcz1cIm5hdlwiIHN4PXtzdHlsZXMubmF2fT5cclxuICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxTY3JvbGxMaW5rXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBzeD17c3R5bGVzLm5hdi5uYXZMaW5rfVxyXG4gICAgICAgICAgICAgICAgdG89e3BhdGh9XHJcbiAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgIDwvU2Nyb2xsTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICAgICAgey8qIFJlZ2lzdGVyIG5vdyBidXR0b24uICovfVxyXG4gICAgICAgICAgey8qIDxMaW5rXHJcbiAgICAgICAgICAgIHBhdGg9XCIvXCJcclxuICAgICAgICAgICAgbWw9ezJ9XHJcbiAgICAgICAgICAgIGxhYmVsPVwiUmVnaXN0ZXIgTm93XCJcclxuICAgICAgICAgICAgc3g9e3N0eWxlcy5oZWFkZXJCdG59XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJidXR0b25zLnByaW1hcnlcIlxyXG4gICAgICAgICAgLz4gKi99XHJcblxyXG4gICAgICAgICAgey8qIE1vYmlsZSBEcmF3ZXIgKi99XHJcbiAgICAgICAgICA8TW9iaWxlRHJhd2VyIC8+XHJcblxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgIDwvRHJhd2VyUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIC8vIGhlYWRlckJ0bjoge1xyXG4gIC8vICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwKScsXHJcbiAgLy8gICBmb250U2l6ZTogJzE2cHgnLFxyXG4gIC8vICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gIC8vICAgbGV0dGVyU3BhY2luZzogJy0wLjE2cHgnLFxyXG4gIC8vICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAvLyAgIGJvcmRlcjogJzJweCBzb2xpZCcsXHJcbiAgLy8gICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxyXG4gIC8vICAgY29sb3I6ICd0ZXh0JyxcclxuICAvLyAgIHBhZGRpbmc6ICc4cHggMjRweCcsXHJcbiAgLy8gICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCAnaW5saW5lLWJsb2NrJ10sXHJcbiAgLy8gICBtbDogWycwJywgbnVsbCwgbnVsbCwgJ2F1dG8nLCAnMCddLFxyXG4gIC8vICAgbXI6IFsnMCcsIG51bGwsIG51bGwsICcyMHB4JywgJzAnXSxcclxuICAvLyAgIC8vIFRPRE8gcmVtb3ZpbmcgcGFkZGluZyBmcm9tIGNvbnRhaW5lci4gYXBwbHlpbmcgcGFkZGluZyBvbiBpbmRleC50aGVtZS5cclxuICAvLyAgIHB4OiBbJzBweCddLFxyXG4gIC8vICAgcHk6IFsnMHB4J10sXHJcbiAgLy8gICAnJjpob3Zlcic6IHtcclxuICAvLyAgICAgY29sb3I6ICcjZmZmJyxcclxuICAvLyAgIH0sXHJcbiAgLy8gfSxcclxuICBoZWFkZXI6IHtcclxuICAgIGNvbG9yOiAndGV4dF93aGl0ZScsXHJcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgIHB5OiAnMjVweCcsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjRzIGVhc2UnLFxyXG4gICAgJyYuc3RpY2t5Jzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdiYWNrZ3JvdW5kJyxcclxuICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgcHk6ICcyNXB4JyxcclxuICAgICAgYm94U2hhZG93OiAnMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiknLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAvLyBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgd2lkdGg6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMTM5MHB4J10sXHJcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpJzoge1xyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG5hdjoge1xyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCknOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBuYXZMaW5rOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgbGluZUhlaWdodDogJzEuMicsXHJcbiAgICAgIG1yOiAnNDhweCcsXHJcbiAgICAgIHRyYW5zaXRpb246ICc1MDBtcycsXHJcbiAgICAgICc6bGFzdC1jaGlsZCc6IHtcclxuICAgICAgICBtcjogJzAnLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjpob3ZlciwgJi5hY3RpdmUnOiB7XHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==