/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n// import MeetupDetail from \"../../components/meetups/MeetupDetail\";\n// import { MongoClient, ObjectId } from \"mongodb\";\n// function MeetupDetails(props) {\n//   return (\n//     <MeetupDetail\n//       image={props.meetupData.image}\n//       title={props.meetupData.title}\n//       address={props.meetupData.address}\n//       description={props.meetupData.description}\n//     />\n//   );\n// }\n// export async function getStaticPaths() {\n//   const client = await MongoClient.connect(\n//     \"mongodb+srv://Aman:Amanbisht10@cluster0.hryso.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\"\n//   );\n//   const db = client.db();\n//   const meetupsCollection = db.collection(\"meetups\");\n//   const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();\n//   client.close();\n//   return {\n//     fallback: false,\n//     paths: meetups.map((meetup) => ({\n//       params: { meetupId: meetup._id.toString() },\n//     })),\n//   };\n// }\n// export async function getStaticProps(context) {\n//   //fetch data for the single meetup\n//   const meetupId = context.params.meetupId;\n//   console.log(meetupId);\n//   const client = await MongoClient.connect(\n//     \"mongodb+srv://Aman:Amanbisht10@cluster0.hryso.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\"\n//   );\n//   const db = client.db();\n//   const meetupsCollection = db.collection(\"meetups\");\n//   const selectedMeetup = await meetupsCollection.findOne({\n//     _id: ObjectId(meetupId),\n//   });\n//   client.close();\n//   return {\n//     props: {\n//       meetupData: {\n//         id: selectedMeetup._id.toString(),\n//         title: selectedMeetup.title,\n//         address: selectedMeetup.address,\n//         image: selectedMeetup.image,\n//         description: selectedMeetup.description,\n//       },\n//     },\n//   };\n// }\n// export default MeetupDetails;\n\n\n\n\nfunction MeetupDetails(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: props.meetupData.title\n                    }, void 0, false, {\n                        fileName: \"/Users/celestial/Documents/Medica/Udemy_Web_Development/React/26NextPage_project/pages/[meetupId]/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: props.meetupData.description\n                    }, void 0, false, {\n                        fileName: \"/Users/celestial/Documents/Medica/Udemy_Web_Development/React/26NextPage_project/pages/[meetupId]/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/celestial/Documents/Medica/Udemy_Web_Development/React/26NextPage_project/pages/[meetupId]/index.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                image: props.meetupData.image,\n                title: props.meetupData.title,\n                address: props.meetupData.address,\n                description: props.meetupData.description\n            }, void 0, false, {\n                fileName: \"/Users/celestial/Documents/Medica/Udemy_Web_Development/React/26NextPage_project/pages/[meetupId]/index.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/celestial/Documents/Medica/Udemy_Web_Development/React/26NextPage_project/pages/[meetupId]/index.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_c = MeetupDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);\nvar _c;\n$RefreshReg$(_c, \"MeetupDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsb0VBQW9FO0FBRXBFLG1EQUFtRDtBQUNuRCxrQ0FBa0M7QUFDbEMsYUFBYTtBQUNiLG9CQUFvQjtBQUNwQix1Q0FBdUM7QUFDdkMsdUNBQXVDO0FBQ3ZDLDJDQUEyQztBQUMzQyxtREFBbUQ7QUFDbkQsU0FBUztBQUNULE9BQU87QUFDUCxJQUFJO0FBRUosMkNBQTJDO0FBQzNDLDhDQUE4QztBQUM5QyxnSEFBZ0g7QUFDaEgsT0FBTztBQUNQLDRCQUE0QjtBQUM1Qix3REFBd0Q7QUFFeEQsNEVBQTRFO0FBQzVFLG9CQUFvQjtBQUVwQixhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLHdDQUF3QztBQUN4QyxxREFBcUQ7QUFDckQsV0FBVztBQUNYLE9BQU87QUFDUCxJQUFJO0FBRUosa0RBQWtEO0FBQ2xELHVDQUF1QztBQUN2Qyw4Q0FBOEM7QUFDOUMsMkJBQTJCO0FBQzNCLDhDQUE4QztBQUM5QyxnSEFBZ0g7QUFDaEgsT0FBTztBQUNQLDRCQUE0QjtBQUM1Qix3REFBd0Q7QUFFeEQsNkRBQTZEO0FBQzdELCtCQUErQjtBQUMvQixRQUFRO0FBQ1Isb0JBQW9CO0FBRXBCLGFBQWE7QUFDYixlQUFlO0FBQ2Ysc0JBQXNCO0FBQ3RCLDZDQUE2QztBQUM3Qyx1Q0FBdUM7QUFDdkMsMkNBQTJDO0FBQzNDLHVDQUF1QztBQUN2QyxtREFBbUQ7QUFDbkQsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1AsSUFBSTtBQUNKLGdDQUFnQztBQUVoQztBQUVpRTtBQUNoQztBQUNKO0FBRTdCLFNBQVNHLGFBQWEsQ0FBQ0MsS0FBSyxFQUFFO0lBQzVCLHFCQUNFLDhEQUFDSCwyQ0FBUTs7MEJBQ1AsOERBQUNDLGtEQUFJOztrQ0FDSCw4REFBQ0csT0FBSztrQ0FBRUQsS0FBSyxDQUFDRSxVQUFVLENBQUNELEtBQUs7Ozs7OzRCQUFTO2tDQUN2Qyw4REFBQ0UsTUFBSTt3QkFBQ0MsSUFBSSxFQUFDLGFBQWE7d0JBQUNDLE9BQU8sRUFBRUwsS0FBSyxDQUFDRSxVQUFVLENBQUNJLFdBQVc7Ozs7OzRCQUFJOzs7Ozs7b0JBQzdEOzBCQUVQLDhEQUFDVix3RUFBWTtnQkFDWFcsS0FBSyxFQUFFUCxLQUFLLENBQUNFLFVBQVUsQ0FBQ0ssS0FBSztnQkFDN0JOLEtBQUssRUFBRUQsS0FBSyxDQUFDRSxVQUFVLENBQUNELEtBQUs7Z0JBQzdCTyxPQUFPLEVBQUVSLEtBQUssQ0FBQ0UsVUFBVSxDQUFDTSxPQUFPO2dCQUNqQ0YsV0FBVyxFQUFFTixLQUFLLENBQUNFLFVBQVUsQ0FBQ0ksV0FBVzs7Ozs7b0JBQ3pDOzs7Ozs7WUFDTyxDQUNYO0FBQ0osQ0FBQztBQWhCUVAsS0FBQUEsYUFBYTs7QUFxRXRCLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcz84ZmYyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBNZWV0dXBEZXRhaWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxcIjtcblxuLy8gaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIjtcbi8vIGZ1bmN0aW9uIE1lZXR1cERldGFpbHMocHJvcHMpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8TWVldHVwRGV0YWlsXG4vLyAgICAgICBpbWFnZT17cHJvcHMubWVldHVwRGF0YS5pbWFnZX1cbi8vICAgICAgIHRpdGxlPXtwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfVxuLy8gICAgICAgYWRkcmVzcz17cHJvcHMubWVldHVwRGF0YS5hZGRyZXNzfVxuLy8gICAgICAgZGVzY3JpcHRpb249e3Byb3BzLm1lZXR1cERhdGEuZGVzY3JpcHRpb259XG4vLyAgICAgLz5cbi8vICAgKTtcbi8vIH1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuLy8gICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuLy8gICAgIFwibW9uZ29kYitzcnY6Ly9BbWFuOkFtYW5iaXNodDEwQGNsdXN0ZXIwLmhyeXNvLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHkmYXBwTmFtZT1DbHVzdGVyMFwiXG4vLyAgICk7XG4vLyAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG4vLyAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XG5cbi8vICAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoe30sIHsgX2lkOiAxIH0pLnRvQXJyYXkoKTtcbi8vICAgY2xpZW50LmNsb3NlKCk7XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBmYWxsYmFjazogZmFsc2UsXG4vLyAgICAgcGF0aHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XG4vLyAgICAgICBwYXJhbXM6IHsgbWVldHVwSWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSB9LFxuLy8gICAgIH0pKSxcbi8vICAgfTtcbi8vIH1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbi8vICAgLy9mZXRjaCBkYXRhIGZvciB0aGUgc2luZ2xlIG1lZXR1cFxuLy8gICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xuLy8gICBjb25zb2xlLmxvZyhtZWV0dXBJZCk7XG4vLyAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4vLyAgICAgXCJtb25nb2RiK3NydjovL0FtYW46QW1hbmJpc2h0MTBAY2x1c3RlcjAuaHJ5c28ubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPUNsdXN0ZXIwXCJcbi8vICAgKTtcbi8vICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbi8vICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcblxuLy8gICBjb25zdCBzZWxlY3RlZE1lZXR1cCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmRPbmUoe1xuLy8gICAgIF9pZDogT2JqZWN0SWQobWVldHVwSWQpLFxuLy8gICB9KTtcbi8vICAgY2xpZW50LmNsb3NlKCk7XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgbWVldHVwRGF0YToge1xuLy8gICAgICAgICBpZDogc2VsZWN0ZWRNZWV0dXAuX2lkLnRvU3RyaW5nKCksXG4vLyAgICAgICAgIHRpdGxlOiBzZWxlY3RlZE1lZXR1cC50aXRsZSxcbi8vICAgICAgICAgYWRkcmVzczogc2VsZWN0ZWRNZWV0dXAuYWRkcmVzcyxcbi8vICAgICAgICAgaW1hZ2U6IHNlbGVjdGVkTWVldHVwLmltYWdlLFxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogc2VsZWN0ZWRNZWV0dXAuZGVzY3JpcHRpb24sXG4vLyAgICAgICB9LFxuLy8gICAgIH0sXG4vLyAgIH07XG4vLyB9XG4vLyBleHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzO1xuXG5pbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5pbXBvcnQgTWVldHVwRGV0YWlsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsXCI7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5mdW5jdGlvbiBNZWV0dXBEZXRhaWxzKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cHJvcHMubWVldHVwRGF0YS50aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwcm9wcy5tZWV0dXBEYXRhLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8TWVldHVwRGV0YWlsXG4gICAgICAgIGltYWdlPXtwcm9wcy5tZWV0dXBEYXRhLmltYWdlfVxuICAgICAgICB0aXRsZT17cHJvcHMubWVldHVwRGF0YS50aXRsZX1cbiAgICAgICAgYWRkcmVzcz17cHJvcHMubWVldHVwRGF0YS5hZGRyZXNzfVxuICAgICAgICBkZXNjcmlwdGlvbj17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgIC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuICAgIFwibW9uZ29kYitzcnY6Ly9BbWFuOkFtYW5iaXNodDEwQGNsdXN0ZXIwLmhyeXNvLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHkmYXBwTmFtZT1DbHVzdGVyMFwiXG4gICk7XG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcblxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpO1xuXG4gIGNsaWVudC5jbG9zZSgpO1xuXG4gIHJldHVybiB7XG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgIHBhdGhzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xuICAgICAgcGFyYW1zOiB7IG1lZXR1cElkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCkgfSxcbiAgICB9KSksXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIC8vIGZldGNoIGRhdGEgZm9yIGEgc2luZ2xlIG1lZXR1cFxuXG4gIGNvbnN0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQ7XG5cbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICBcIm1vbmdvZGIrc3J2Oi8vQW1hbjpBbWFuYmlzaHQxMEBjbHVzdGVyMC5ocnlzby5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JmFwcE5hbWU9Q2x1c3RlcjBcIlxuICApO1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XG5cbiAgY29uc3Qgc2VsZWN0ZWRNZWV0dXAgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kT25lKHtcbiAgICBfaWQ6IG5ldyBPYmplY3RJZChtZWV0dXBJZCksXG4gIH0pO1xuXG4gIGNsaWVudC5jbG9zZSgpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1lZXR1cERhdGE6IHtcbiAgICAgICAgaWQ6IHNlbGVjdGVkTWVldHVwLl9pZC50b1N0cmluZygpLFxuICAgICAgICB0aXRsZTogc2VsZWN0ZWRNZWV0dXAudGl0bGUsXG4gICAgICAgIGFkZHJlc3M6IHNlbGVjdGVkTWVldHVwLmFkZHJlc3MsXG4gICAgICAgIGltYWdlOiBzZWxlY3RlZE1lZXR1cC5pbWFnZSxcbiAgICAgICAgZGVzY3JpcHRpb246IHNlbGVjdGVkTWVldHVwLmRlc2NyaXB0aW9uLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzO1xuIl0sIm5hbWVzIjpbIk1lZXR1cERldGFpbCIsIkZyYWdtZW50IiwiSGVhZCIsIk1lZXR1cERldGFpbHMiLCJwcm9wcyIsInRpdGxlIiwibWVldHVwRGF0YSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJhZGRyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n"));

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n"));

/***/ })

});