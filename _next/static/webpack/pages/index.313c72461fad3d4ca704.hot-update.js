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
  return Object(theme_ui_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Box, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvaW5zaWdodHMuanMiXSwibmFtZXMiOlsiSW5zaWdodHMiLCJyZWYiLCJ1c2VSZWYiLCJnb05leHQiLCJjdXJyZW50Iiwic3dpcGVyIiwic2xpZGVOZXh0IiwiZ29QcmV2Iiwic2xpZGVQcmV2Iiwic3dpcGVyUGFyYW1zIiwic2xpZGVzUGVyVmlldyIsInNsaWRlc1Blckdyb3VwIiwic3BhY2VCZXR3ZWVuIiwiYnJlYWtwb2ludHMiLCJzdHlsZXMiLCJpbnNpZ2h0cyIsInRleHRBbGlnbiIsImluc2lnaHRzRGF0YSIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJwYXRoIiwicHgiLCJweSIsIm92ZXJmbG93WSIsIm92ZXJmbG93WCIsImNhcm91c2VsQnRucyIsInB0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJ1dHRvbiIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztDQUVBOztBQUNBO0FBRUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxHQUFHLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFsQixDQURxQixDQUdyQjs7QUFDQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLFFBQUlGLEdBQUcsQ0FBQ0csT0FBSixLQUFnQixJQUFoQixJQUF3QkgsR0FBRyxDQUFDRyxPQUFKLENBQVlDLE1BQVosS0FBdUIsSUFBbkQsRUFBeUQ7QUFDdkRKLFNBQUcsQ0FBQ0csT0FBSixDQUFZQyxNQUFaLENBQW1CQyxTQUFuQjtBQUNEO0FBQ0YsR0FKRCxDQUpxQixDQVVyQjs7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixRQUFJTixH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RSxNQURRO0FBRVpDLFdBQU8sRUFBRSxNQUZHO0FBR1pDLGtCQUFjLEVBQUUsZUFISjtBQUlaQyxjQUFVLEVBQUUsUUFKQTtBQUtaQyxVQUFNLEVBQUU7QUFDTkMsY0FBUSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCLEVBQWlDLElBQWpDO0FBREo7QUFMSTtBQVhELENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzEzYzcyNDYxZmFkM2Q0Y2E3MDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4SW1wb3J0U291cmNlIHRoZW1lLXVpICovXHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBIZWFkaW5nIH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuLy8gbm90ZTogYm90aCBgcmVhY3QtaWQtc3dpcGVyYCBhbmQgYHN3aXBlcmAgcGFja2FnZXMgYXJlIHJlcXVpcmVkLlxyXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3JlYWN0LWlkLXN3aXBlcic7XHJcbi8vIGltcG9ydCB7IEZhTG9uZ0Fycm93QWx0TGVmdCwgRmFMb25nQXJyb3dBbHRSaWdodCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IEluc2lnaHRDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvaW5zaWdodC1jYXJkJztcclxuXHJcbmltcG9ydCBpbnNpZ2h0c0RhdGEgZnJvbSAnLi4vZGF0YS9pbnNpZ2h0cy5kYXRhJztcclxuXHJcbmNvbnN0IEluc2lnaHRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgLy8gR28gbmV4dCBzbGlkZS5cclxuICBjb25zdCBnb05leHQgPSAoKSA9PiB7XHJcbiAgICBpZiAocmVmLmN1cnJlbnQgIT09IG51bGwgJiYgcmVmLmN1cnJlbnQuc3dpcGVyICE9PSBudWxsKSB7XHJcbiAgICAgIHJlZi5jdXJyZW50LnN3aXBlci5zbGlkZU5leHQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBHbyBwcmV2aW91cyBzbGlkZS5cclxuICBjb25zdCBnb1ByZXYgPSAoKSA9PiB7XHJcbiAgICBpZiAocmVmLmN1cnJlbnQgIT09IG51bGwgJiYgcmVmLmN1cnJlbnQuc3dpcGVyICE9PSBudWxsKSB7XHJcbiAgICAgIHJlZi5jdXJyZW50LnN3aXBlci5zbGlkZVByZXYoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBTd2lwZXIgcGFyYW1zLlxyXG4gIGNvbnN0IHN3aXBlclBhcmFtcyA9IHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICBzbGlkZXNQZXJHcm91cDogMyxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIDM3Njoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICA1NzY6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogNSxcclxuICAgICAgfSxcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICBzbGlkZXNQZXJHcm91cDogMixcclxuICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICB9LFxyXG4gICAgICA5OTI6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgIH0sXHJcbiAgICAgIDEyMDA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiAzLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGlkPVwiaW5zaWdodHNcIiBzeD17c3R5bGVzLmluc2lnaHRzfT5cclxuICAgICAgey8qIENvbnRhaW5lciBoYXMgZGVmYXVsdCBwYWRkaW5nICovfVxyXG4gICAgICA8SGVhZGluZyBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgSW5zaWdodHNcclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFN3aXBlciB7Li4uc3dpcGVyUGFyYW1zfSByZWY9e3JlZn0+XHJcbiAgICAgICAgICB7aW5zaWdodHNEYXRhLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXItc2xpZGVyXCIga2V5PXtgZmVhdHVyZS1jYXJkLWtleSR7aW5kZXh9YH0+XHJcbiAgICAgICAgICAgICAgPEluc2lnaHRDYXJkXHJcbiAgICAgICAgICAgICAgICBpbWFnZT17ZWxlbWVudC5pbWFnZX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtlbGVtZW50LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2VsZW1lbnQuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICBkYXRlPXtlbGVtZW50LmRhdGV9XHJcbiAgICAgICAgICAgICAgICBwYXRoPXtlbGVtZW50LnBhdGh9PlxyXG4gICAgICAgICAgICAgIDwvSW5zaWdodENhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Td2lwZXI+XHJcblxyXG4gICAgICAgIHsvKiBTbGlkZSBidXR0b25zICovfVxyXG4gICAgICAgIHsvKiA8Qm94IHN4PXtzdHlsZXMuY2Fyb3VzZWxCdG5zfT5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17Z29QcmV2fSBhcmlhLWxhYmVsPVwibGVmdCBidG5cIj5cclxuICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtnb05leHR9IGFyaWEtbGFiZWw9XCJyaWdodCBidG5cIj5cclxuICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+ICovfVxyXG5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5zaWdodHM7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgaW5zaWdodHM6IHtcclxuICAgIC8vIFRPRE8gZml4IGNvbnRhaW5lci5cclxuICAgIHB4OiBbJzE1cHgnLCBudWxsLCBudWxsLCAnMzBweCddLFxyXG4gICAgcHk6IFsnMjVweCcsIG51bGwsICc1MHB4JywgbnVsbCwgJzEwMHB4JywgbnVsbF0sXHJcbiAgICAnLnN3aXBlci1zbGlkZXInOiB7XHJcbiAgICAgIG92ZXJmbG93WTogJ3Zpc2libGUnLFxyXG4gICAgICAvLyBUT0RPIGhpZGRlblxyXG4gICAgICBvdmVyZmxvd1g6ICd2aXNpYmxlJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJvdXNlbEJ0bnM6IHtcclxuICAgIHB0OiAnMTBweCcsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBidXR0b246IHtcclxuICAgICAgZm9udFNpemU6IFsnMTJweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9