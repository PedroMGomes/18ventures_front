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
    color: '#FFF',
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
    justifyContent: 'space-between',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiaGVhZGVyQ2xhc3NOYW1lIiwic3R5bGVzIiwiaGVhZGVyIiwiY29udGFpbmVyIiwibmF2IiwibWVudUl0ZW1zIiwibWFwIiwiaSIsInBhdGgiLCJsYWJlbCIsIm5hdkxpbmsiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJweSIsIndpZHRoIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNpdGlvbiIsImJveFNoYWRvdyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJteCIsImZvbnRTaXplIiwiY3Vyc29yIiwibGluZUhlaWdodCIsIm1yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0NBR0E7O0FBQ2UsU0FBU0EsTUFBVCxPQUFxQztBQUFBOztBQUFBLE1BQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7QUFDbEQsU0FDRSx3RUFBQyxzRUFBRDtBQUFBLGNBQ0U7QUFBUSxRQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBbkI7QUFBMkIsZUFBUyxFQUFFRixlQUF0QztBQUFBLGdCQUNFLHdFQUFDLGtEQUFEO0FBQVcsVUFBRSxFQUFFQyxNQUFNLENBQUNFLFNBQXRCO0FBQUEsbUJBRUUsd0VBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixFQUtFLHdFQUFDLDZDQUFEO0FBQU0sWUFBRSxFQUFDLEtBQVQ7QUFBZSxZQUFFLEVBQUVGLE1BQU0sQ0FBQ0csR0FBMUI7QUFBQSxvQkFDR0MseURBQVMsQ0FBQ0MsR0FBVixDQUFjLGlCQUFrQkMsQ0FBbEI7QUFBQSxnQkFBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsZ0JBQVNDLEtBQVQsU0FBU0EsS0FBVDtBQUFBLG1CQUNiLHdFQUFDLGlEQUFEO0FBQ0UseUJBQVcsRUFBQyxRQURkO0FBRUUsZ0JBQUUsRUFBRVIsTUFBTSxDQUFDRyxHQUFQLENBQVdNLE9BRmpCO0FBR0UsZ0JBQUUsRUFBRUYsSUFITjtBQUlFLGlCQUFHLEVBQUUsSUFKUDtBQUtFLG9CQUFNLEVBQUUsSUFMVjtBQU1FLG9CQUFNLEVBQUUsQ0FBQyxFQU5YO0FBT0Usc0JBQVEsRUFBRSxHQVBaO0FBQUEsd0JBVUdDO0FBVkgsZUFRT0YsQ0FSUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURhO0FBQUEsV0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsRUFnQ0Usd0VBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlDRDtLQTFDdUJSLE07QUE0Q3hCLElBQU1FLE1BQU0sR0FBRztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsUUFBTSxFQUFFO0FBQ05TLFNBQUssRUFBRSxNQUREO0FBRU5DLGNBQVUsRUFBRSxRQUZOO0FBR05DLE1BQUUsRUFBRSxNQUhFO0FBSU5DLFNBQUssRUFBRSxNQUpEO0FBS05DLFlBQVEsRUFBRSxPQUxKO0FBTU5DLE9BQUcsRUFBRSxDQU5DO0FBT05DLFFBQUksRUFBRSxDQVBBO0FBUU5DLG1CQUFlLEVBQUUsYUFSWDtBQVNOQyxjQUFVLEVBQUUsZUFUTjtBQVVOLGdCQUFZO0FBQ1ZELHFCQUFlLEVBQUUsWUFEUDtBQUVWUCxXQUFLLEVBQUUsTUFGRztBQUdWRSxRQUFFLEVBQUUsTUFITTtBQUlWTyxlQUFTLEVBQUU7QUFKRDtBQVZOLEdBckJLO0FBc0NiakIsV0FBUyxFQUFFO0FBQ1RrQixXQUFPLEVBQUUsTUFEQTtBQUVUQyxjQUFVLEVBQUUsUUFGSDtBQUdUQyxrQkFBYyxFQUFFLGVBSFA7QUFJVFQsU0FBSyxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLEVBQStCLElBQS9CLEVBQXFDLFFBQXJDLENBSkU7QUFLVCw0Q0FBd0M7QUFDdENTLG9CQUFjLEVBQUU7QUFEc0I7QUFML0IsR0F0Q0U7QUErQ2JuQixLQUFHLEVBQUU7QUFDSG9CLE1BQUUsRUFBRSxNQUREO0FBRUgsNENBQXdDO0FBQ3RDSCxhQUFPLEVBQUU7QUFENkIsS0FGckM7QUFLSFgsV0FBTyxFQUFFO0FBQ1BlLGNBQVEsRUFBRSxNQURIO0FBRVBkLFdBQUssRUFBRSxNQUZBO0FBR1BDLGdCQUFVLEVBQUUsS0FITDtBQUlQYyxZQUFNLEVBQUUsU0FKRDtBQUtQQyxnQkFBVSxFQUFFLEtBTEw7QUFNUEMsUUFBRSxFQUFFLE1BTkc7QUFPUFQsZ0JBQVUsRUFBRSxPQVBMO0FBUVAscUJBQWU7QUFDYlMsVUFBRSxFQUFFO0FBRFMsT0FSUjtBQVdQLDJCQUFxQjtBQUNuQmpCLGFBQUssRUFBRTtBQURZO0FBWGQ7QUFMTjtBQS9DUSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNmMThjNjZlYWYzMmUzYTQ4MTgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSB0aGVtZS11aSAqL1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEZsZXgsIEJveCB9IGZyb20gJ3RoZW1lLXVpJztcclxuLy8gaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcbi8vIGltcG9ydCB7IElvSW9zVW5sb2NrIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG4vLyBpbXBvcnQgeyBOYXZMaW5rLCBMaW5rIH0gZnJvbSAnLi9saW5rJztcclxuaW1wb3J0IHsgTGluayBhcyBTY3JvbGxMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvJztcclxuXHJcbmltcG9ydCB7IERyYXdlclByb3ZpZGVyIH0gZnJvbSAnLi9kcmF3ZXIvZHJhd2VyLnByb3ZpZGVyJztcclxuaW1wb3J0IE1vYmlsZURyYXdlciBmcm9tICcuL2RyYXdlci9tb2JpbGUtZHJhd2VyJztcclxuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuLi9kYXRhL2hlYWRlci5kYXRhJztcclxuXHJcbi8vLyBIZWFkZXIuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IGhlYWRlckNsYXNzTmFtZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXJQcm92aWRlcj5cclxuICAgICAgPGhlYWRlciBzeD17c3R5bGVzLmhlYWRlcn0gY2xhc3NOYW1lPXtoZWFkZXJDbGFzc05hbWV9PlxyXG4gICAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgey8qIEhlYWRlciBsZWZ0LXNpZGUgbG9nby4gKi99XHJcbiAgICAgICAgICA8TG9nbyAvPlxyXG5cclxuICAgICAgICAgIHsvKiBDZW50ZXIgTmF2IEljb25zLiAqL31cclxuICAgICAgICAgIDxGbGV4IGFzPVwibmF2XCIgc3g9e3N0eWxlcy5uYXZ9PlxyXG4gICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFNjcm9sbExpbmtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIHN4PXtzdHlsZXMubmF2Lm5hdkxpbmt9XHJcbiAgICAgICAgICAgICAgICB0bz17cGF0aH1cclxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9TY3JvbGxMaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvRmxleD5cclxuXHJcbiAgICAgICAgICB7LyogUmVnaXN0ZXIgbm93IGJ1dHRvbi4gKi99XHJcbiAgICAgICAgICB7LyogPExpbmtcclxuICAgICAgICAgICAgcGF0aD1cIi9cIlxyXG4gICAgICAgICAgICBtbD17Mn1cclxuICAgICAgICAgICAgbGFiZWw9XCJSZWdpc3RlciBOb3dcIlxyXG4gICAgICAgICAgICBzeD17c3R5bGVzLmhlYWRlckJ0bn1cclxuICAgICAgICAgICAgdmFyaWFudD1cImJ1dHRvbnMucHJpbWFyeVwiXHJcbiAgICAgICAgICAvPiAqL31cclxuXHJcbiAgICAgICAgICB7LyogTW9iaWxlIERyYXdlciAqL31cclxuICAgICAgICAgIDxNb2JpbGVEcmF3ZXIgLz5cclxuXHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgPC9EcmF3ZXJQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgLy8gaGVhZGVyQnRuOiB7XHJcbiAgLy8gICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDApJyxcclxuICAvLyAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgLy8gICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgLy8gICBsZXR0ZXJTcGFjaW5nOiAnLTAuMTZweCcsXHJcbiAgLy8gICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gIC8vICAgYm9yZGVyOiAnMnB4IHNvbGlkJyxcclxuICAvLyAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXHJcbiAgLy8gICBjb2xvcjogJ3RleHQnLFxyXG4gIC8vICAgcGFkZGluZzogJzhweCAyNHB4JyxcclxuICAvLyAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsIG51bGwsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcclxuICAvLyAgIG1sOiBbJzAnLCBudWxsLCBudWxsLCAnYXV0bycsICcwJ10sXHJcbiAgLy8gICBtcjogWycwJywgbnVsbCwgbnVsbCwgJzIwcHgnLCAnMCddLFxyXG4gIC8vICAgLy8gVE9ETyByZW1vdmluZyBwYWRkaW5nIGZyb20gY29udGFpbmVyLiBhcHBseWluZyBwYWRkaW5nIG9uIGluZGV4LnRoZW1lLlxyXG4gIC8vICAgcHg6IFsnMHB4J10sXHJcbiAgLy8gICBweTogWycwcHgnXSxcclxuICAvLyAgICcmOmhvdmVyJzoge1xyXG4gIC8vICAgICBjb2xvcjogJyNmZmYnLFxyXG4gIC8vICAgfSxcclxuICAvLyB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgY29sb3I6ICcjRkZGJyxcclxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgcHk6ICcyNXB4JyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNHMgZWFzZScsXHJcbiAgICAnJi5zdGlja3knOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JhY2tncm91bmQnLFxyXG4gICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICBweTogJzI1cHgnLFxyXG4gICAgICBib3hTaGFkb3c6ICcwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICB3aWR0aDogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcxMzkwcHgnXSxcclxuICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCknOiB7XHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbmF2OiB7XHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSc6IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgIG5hdkxpbms6IHtcclxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgZm9udFdlaWdodDogJzQwMCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4yJyxcclxuICAgICAgbXI6ICc0OHB4JyxcclxuICAgICAgdHJhbnNpdGlvbjogJzUwMG1zJyxcclxuICAgICAgJzpsYXN0LWNoaWxkJzoge1xyXG4gICAgICAgIG1yOiAnMCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmOmhvdmVyLCAmLmFjdGl2ZSc6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9