webpackHotUpdate_N_E("pages/index",{

/***/ "./sections/insights.js":
/*!******************************!*\
  !*** ./sections/insights.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Gomes_Documents_Projects_next_js_18ventures_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui/jsx-dev-runtime */ "./node_modules/theme-ui/jsx-dev-runtime/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-id-swiper */ "./node_modules/react-id-swiper/lib/index.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_insight_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/insight-card */ "./components/insight-card.js");
/* harmony import */ var _data_insights_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/insights.data */ "./data/insights.data.js");



var _jsxFileName = "C:\\Users\\Gomes\\Documents\\Projects\\next-js\\18ventures\\sections\\insights.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Gomes_Documents_Projects_next_js_18ventures_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/** @jsxImportSource theme-ui */

 // note: both `react-id-swiper` and `swiper` packages are required.

 // import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';




var Insights = function Insights() {
  _s();

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null); // Go next slide.

  var goNext = function goNext() {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
  }; // Go previous slide.


  var goPrev = function goPrev() {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
  }; // Swiper params.


  var swiperParams = {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0
      },
      376: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0
      },
      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 5
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30
      }
    }
  };
  return Object(theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    id: "insights",
    sx: styles.insights,
    children: [Object(theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
      style: {
        textAlign: "center"
      },
      children: "Insights"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this), Object(theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      sx: styles.insights,
      children: Object(theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_id_swiper__WEBPACK_IMPORTED_MODULE_4___default.a, _objectSpread(_objectSpread({}, swiperParams), {}, {
        ref: ref,
        children: _data_insights_data__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (element, index) {
          return Object(theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "swiper-slider",
            children: Object(theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_insight_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
              image: element.image,
              title: element.title,
              description: element.description,
              date: element.date,
              path: element.path
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this)
          }, "feature-card-key".concat(index), false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this);
        })
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, _this);
};

_s(Insights, "QMBuJFIdzLIeqBcFwhMf246mjOM=");

_c = Insights;
/* harmony default export */ __webpack_exports__["default"] = (Insights);
var styles = {
  insights: {
    // TODO fix container.
    px: ['15px', null, null, '30px'],
    py: ['25px', null, '50px', null, '100px', null],
    '.swiper-slider': {
      overflowY: 'visible',
      // TODO hidden
      overflowX: 'visible'
    }
  },
  insightsList: {
    px: ['15px', null, null, '30px'],
    py: ['25px', null, '50px', null, '100px', null]
  },
  carouselBtns: {
    pt: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    button: {
      fontSize: ['12px', null, null, null, null, null]
    }
  }
};

var _c;

$RefreshReg$(_c, "Insights");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvaW5zaWdodHMuanMiXSwibmFtZXMiOlsiSW5zaWdodHMiLCJyZWYiLCJ1c2VSZWYiLCJnb05leHQiLCJjdXJyZW50Iiwic3dpcGVyIiwic2xpZGVOZXh0IiwiZ29QcmV2Iiwic2xpZGVQcmV2Iiwic3dpcGVyUGFyYW1zIiwic2xpZGVzUGVyVmlldyIsInNsaWRlc1Blckdyb3VwIiwic3BhY2VCZXR3ZWVuIiwiYnJlYWtwb2ludHMiLCJzdHlsZXMiLCJpbnNpZ2h0cyIsInRleHRBbGlnbiIsImluc2lnaHRzRGF0YSIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJwYXRoIiwicHgiLCJweSIsIm92ZXJmbG93WSIsIm92ZXJmbG93WCIsImluc2lnaHRzTGlzdCIsImNhcm91c2VsQnRucyIsInB0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJ1dHRvbiIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztDQUVBOztBQUNBO0FBRUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxHQUFHLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFsQixDQURxQixDQUdyQjs7QUFDQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLFFBQUlGLEdBQUcsQ0FBQ0csT0FBSixLQUFnQixJQUFoQixJQUF3QkgsR0FBRyxDQUFDRyxPQUFKLENBQVlDLE1BQVosS0FBdUIsSUFBbkQsRUFBeUQ7QUFDdkRKLFNBQUcsQ0FBQ0csT0FBSixDQUFZQyxNQUFaLENBQW1CQyxTQUFuQjtBQUNEO0FBQ0YsR0FKRCxDQUpxQixDQVVyQjs7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FB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QUFFO0FBSEs7QUFKVixHQURHO0FBV2JDLGNBQVksRUFBRTtBQUNaSixNQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsTUFBckIsQ0FEUTtBQUVaQyxNQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIsT0FBN0IsRUFBc0MsSUFBdEM7QUFGUSxHQVhEO0FBZWJJLGNBQVksRUFBRTtBQUNaQyxNQUFFLEVBQUUsTUFEUTtBQUVaQyxXQUFPLEVBQUUsTUFGRztBQUdaQyxrQkFBYyxFQUFFLGVBSEo7QUFJWkMsY0FBVSxFQUFFLFFBSkE7QUFLWkMsVUFBTSxFQUFFO0FBQ05DLGNBQVEsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUFpQyxJQUFqQztBQURKO0FBTEk7QUFmRCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI1MGQwYWI0ZjFhNzlhZmRlYTVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeEltcG9ydFNvdXJjZSB0aGVtZS11aSAqL1xyXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGluZyB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbi8vIG5vdGU6IGJvdGggYHJlYWN0LWlkLXN3aXBlcmAgYW5kIGBzd2lwZXJgIHBhY2thZ2VzIGFyZSByZXF1aXJlZC5cclxuaW1wb3J0IFN3aXBlciBmcm9tICdyZWFjdC1pZC1zd2lwZXInO1xyXG4vLyBpbXBvcnQgeyBGYUxvbmdBcnJvd0FsdExlZnQsIEZhTG9uZ0Fycm93QWx0UmlnaHQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCBJbnNpZ2h0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2luc2lnaHQtY2FyZCc7XHJcblxyXG5pbXBvcnQgaW5zaWdodHNEYXRhIGZyb20gJy4uL2RhdGEvaW5zaWdodHMuZGF0YSc7XHJcblxyXG5jb25zdCBJbnNpZ2h0cyA9ICgpID0+IHtcclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIC8vIEdvIG5leHQgc2xpZGUuXHJcbiAgY29uc3QgZ29OZXh0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHJlZi5jdXJyZW50ICE9PSBudWxsICYmIHJlZi5jdXJyZW50LnN3aXBlciAhPT0gbnVsbCkge1xyXG4gICAgICByZWYuY3VycmVudC5zd2lwZXIuc2xpZGVOZXh0KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gR28gcHJldmlvdXMgc2xpZGUuXHJcbiAgY29uc3QgZ29QcmV2ID0gKCkgPT4ge1xyXG4gICAgaWYgKHJlZi5jdXJyZW50ICE9PSBudWxsICYmIHJlZi5jdXJyZW50LnN3aXBlciAhPT0gbnVsbCkge1xyXG4gICAgICByZWYuY3VycmVudC5zd2lwZXIuc2xpZGVQcmV2KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gU3dpcGVyIHBhcmFtcy5cclxuICBjb25zdCBzd2lwZXJQYXJhbXMgPSB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgc2xpZGVzUGVyR3JvdXA6IDMsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgMDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICAzNzY6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgICAgfSxcclxuICAgICAgNTc2OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICBzbGlkZXNQZXJHcm91cDogMixcclxuICAgICAgICBzcGFjZUJldHdlZW46IDUsXHJcbiAgICAgIH0sXHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDIsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgfSxcclxuICAgICAgOTkyOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICBzbGlkZXNQZXJHcm91cDogMixcclxuICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICB9LFxyXG4gICAgICAxMjAwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICBzbGlkZXNQZXJHcm91cDogMyxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBpZD1cImluc2lnaHRzXCIgc3g9e3N0eWxlcy5pbnNpZ2h0c30+XHJcbiAgICAgIHsvKiBDb250YWluZXIgaGFzIGRlZmF1bHQgcGFkZGluZyAqL31cclxuICAgICAgPEhlYWRpbmcgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgIEluc2lnaHRzXHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuaW5zaWdodHN9PlxyXG4gICAgICAgIDxTd2lwZXIgey4uLnN3aXBlclBhcmFtc30gcmVmPXtyZWZ9PlxyXG4gICAgICAgICAge2luc2lnaHRzRGF0YS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLXNsaWRlclwiIGtleT17YGZlYXR1cmUtY2FyZC1rZXkke2luZGV4fWB9PlxyXG4gICAgICAgICAgICAgIDxJbnNpZ2h0Q2FyZFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e2VsZW1lbnQuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17ZWxlbWVudC50aXRsZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtlbGVtZW50LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgZGF0ZT17ZWxlbWVudC5kYXRlfVxyXG4gICAgICAgICAgICAgICAgcGF0aD17ZWxlbWVudC5wYXRofT5cclxuICAgICAgICAgICAgICA8L0luc2lnaHRDYXJkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU3dpcGVyPlxyXG5cclxuICAgICAgICB7LyogU2xpZGUgYnV0dG9ucyAqL31cclxuICAgICAgICB7LyogPEJveCBzeD17c3R5bGVzLmNhcm91c2VsQnRuc30+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2dvUHJldn0gYXJpYS1sYWJlbD1cImxlZnQgYnRuXCI+XHJcbiAgICAgICAgICAgIFByZXZpb3VzXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17Z29OZXh0fSBhcmlhLWxhYmVsPVwicmlnaHQgYnRuXCI+XHJcbiAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PiAqL31cclxuXHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluc2lnaHRzO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGluc2lnaHRzOiB7XHJcbiAgICAvLyBUT0RPIGZpeCBjb250YWluZXIuXHJcbiAgICBweDogWycxNXB4JywgbnVsbCwgbnVsbCwgJzMwcHgnXSxcclxuICAgIHB5OiBbJzI1cHgnLCBudWxsLCAnNTBweCcsIG51bGwsICcxMDBweCcsIG51bGxdLFxyXG4gICAgJy5zd2lwZXItc2xpZGVyJzoge1xyXG4gICAgICBvdmVyZmxvd1k6ICd2aXNpYmxlJyxcclxuICAgICAgLy8gVE9ETyBoaWRkZW5cclxuICAgICAgb3ZlcmZsb3dYOiAndmlzaWJsZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW5zaWdodHNMaXN0OiB7XHJcbiAgICBweDogWycxNXB4JywgbnVsbCwgbnVsbCwgJzMwcHgnXSxcclxuICAgIHB5OiBbJzI1cHgnLCBudWxsLCAnNTBweCcsIG51bGwsICcxMDBweCcsIG51bGxdLFxyXG4gIH0sXHJcbiAgY2Fyb3VzZWxCdG5zOiB7XHJcbiAgICBwdDogJzEwcHgnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbJzEycHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==