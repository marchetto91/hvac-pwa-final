"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/ocr";
exports.ids = ["pages/api/ocr"];
exports.modules = {

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "tesseract.js":
/*!*******************************!*\
  !*** external "tesseract.js" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("tesseract.js");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("formidable");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Focr&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cocr.js&middlewareConfigBase64=e30%3D!":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Focr&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cocr.js&middlewareConfigBase64=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_ocr_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\ocr.js */ \"(api)/./pages/api/ocr.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_ocr_js__WEBPACK_IMPORTED_MODULE_3__]);\n_pages_api_ocr_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n// Import the userland code.\r\n\r\n// Re-export the handler (should be the default export).\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_ocr_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\r\n// Re-export config.\r\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_ocr_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\r\n// Create and export the route module that will be consumed.\r\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\r\n    definition: {\r\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\r\n        page: \"/api/ocr\",\r\n        pathname: \"/api/ocr\",\r\n        // The following aren't used in production.\r\n        bundlePath: \"\",\r\n        filename: \"\"\r\n    },\r\n    userland: _pages_api_ocr_js__WEBPACK_IMPORTED_MODULE_3__\r\n});\r\n\r\n//# sourceMappingURL=pages-api.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRm9jciZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDb2NyLmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQ2lEO0FBQ2pEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyw4Q0FBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsOENBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQSxxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2h2YWMtYWkvPzE0M2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcclxuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcclxuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XHJcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cclxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXG9jci5qc1wiO1xyXG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxyXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xyXG4vLyBSZS1leHBvcnQgY29uZmlnLlxyXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsIFwiY29uZmlnXCIpO1xyXG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cclxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xyXG4gICAgZGVmaW5pdGlvbjoge1xyXG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXHJcbiAgICAgICAgcGFnZTogXCIvYXBpL29jclwiLFxyXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvb2NyXCIsXHJcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxyXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXHJcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcclxuICAgIH0sXHJcbiAgICB1c2VybGFuZFxyXG59KTtcclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Focr&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cocr.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/ocr.js":
/*!**************************!*\
  !*** ./pages/api/ocr.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tesseract.js */ \"tesseract.js\");\n/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([formidable__WEBPACK_IMPORTED_MODULE_0__]);\nformidable__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            error: \"Metodo non consentito\"\n        });\n    }\n    const form = new formidable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].IncomingForm({\n        uploadDir: \"./public/uploads\",\n        keepExtensions: true\n    });\n    form.parse(req, async (err, fields, files)=>{\n        if (err) {\n            return res.status(500).json({\n                error: \"Errore parsing file\"\n            });\n        }\n        const filePath = files.file.filepath;\n        try {\n            const { data: { text } } = await tesseract_js__WEBPACK_IMPORTED_MODULE_2___default().recognize(filePath, \"eng\");\n            const parsedData = {\n                serial: (text.match(/SERIAL(?:NO| NUMBER)?[:\\s]*([A-Z0-9\\-]+)/i) || [])[1] || \"\",\n                model: (text.match(/MODEL[:\\s]*([A-Z0-9\\-\\/]+)/i) || [])[1] || \"\",\n                voltage: (text.match(/VOLTAGE(?:~N_V)?[:\\s]*([0-9]{3})/i) || [])[1] || \"\",\n                pressure: (text.match(/HPPS\\s*([0-9]+)\\s*MPa/i) || [])[1] || \"\",\n                temperature: \"\",\n                rawText: text\n            };\n            res.status(200).json({\n                parsedData\n            });\n        } catch (error) {\n            console.error(\"Errore OCR:\", error);\n            res.status(500).json({\n                error: \"Errore riconoscimento OCR\"\n            });\n        } finally{\n            fs__WEBPACK_IMPORTED_MODULE_1___default().unlinkSync(filePath);\n        }\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb2NyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDaEI7QUFDaUI7QUFFOUIsTUFBTUcsU0FBUztJQUNwQkMsS0FBSztRQUNIQyxZQUFZO0lBQ2Q7QUFDRixFQUFFO0FBRWEsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF3QjtJQUMvRDtJQUVBLE1BQU1DLE9BQU8sSUFBSWIsK0RBQXVCLENBQUM7UUFDdkNlLFdBQVc7UUFDWEMsZ0JBQWdCO0lBQ2xCO0lBRUFILEtBQUtJLEtBQUssQ0FBQ1YsS0FBSyxPQUFPVyxLQUFLQyxRQUFRQztRQUNsQyxJQUFJRixLQUFLO1lBQ1AsT0FBT1YsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFzQjtRQUM3RDtRQUVBLE1BQU1TLFdBQVdELE1BQU1FLElBQUksQ0FBQ0MsUUFBUTtRQUVwQyxJQUFJO1lBQ0YsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRSxFQUFFLEdBQUcsTUFBTXZCLDZEQUFtQixDQUFDbUIsVUFBVTtZQUUvRCxNQUFNTSxhQUFhO2dCQUNqQkMsUUFBUSxDQUFDSCxLQUFLSSxLQUFLLENBQUMsZ0RBQWdELEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSTtnQkFDOUVDLE9BQU8sQ0FBQ0wsS0FBS0ksS0FBSyxDQUFDLGtDQUFrQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUk7Z0JBQy9ERSxTQUFTLENBQUNOLEtBQUtJLEtBQUssQ0FBQyx3Q0FBd0MsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJO2dCQUN2RUcsVUFBVSxDQUFDUCxLQUFLSSxLQUFLLENBQUMsNkJBQTZCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSTtnQkFDN0RJLGFBQWE7Z0JBQ2JDLFNBQVNUO1lBQ1g7WUFFQWpCLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVnQjtZQUFXO1FBQ3BDLEVBQUUsT0FBT2YsT0FBTztZQUNkdUIsUUFBUXZCLEtBQUssQ0FBQyxlQUFlQTtZQUM3QkosSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUE0QjtRQUM1RCxTQUFVO1lBQ1JYLG9EQUFhLENBQUNvQjtRQUNoQjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odmFjLWFpLy4vcGFnZXMvYXBpL29jci5qcz8xYjRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmb3JtaWRhYmxlIGZyb20gJ2Zvcm1pZGFibGUnO1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgVGVzc2VyYWN0IGZyb20gJ3Rlc3NlcmFjdC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIGFwaToge1xyXG4gICAgYm9keVBhcnNlcjogZmFsc2UsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldG9kbyBub24gY29uc2VudGl0bycgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb3JtID0gbmV3IGZvcm1pZGFibGUuSW5jb21pbmdGb3JtKHtcclxuICAgIHVwbG9hZERpcjogJy4vcHVibGljL3VwbG9hZHMnLFxyXG4gICAga2VlcEV4dGVuc2lvbnM6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIGZvcm0ucGFyc2UocmVxLCBhc3luYyAoZXJyLCBmaWVsZHMsIGZpbGVzKSA9PiB7XHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRXJyb3JlIHBhcnNpbmcgZmlsZScgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlsZVBhdGggPSBmaWxlcy5maWxlLmZpbGVwYXRoO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogeyB0ZXh0IH0gfSA9IGF3YWl0IFRlc3NlcmFjdC5yZWNvZ25pemUoZmlsZVBhdGgsICdlbmcnKTtcclxuXHJcbiAgICAgIGNvbnN0IHBhcnNlZERhdGEgPSB7XHJcbiAgICAgICAgc2VyaWFsOiAodGV4dC5tYXRjaCgvU0VSSUFMKD86Tk98IE5VTUJFUik/WzpcXHNdKihbQS1aMC05XFwtXSspL2kpIHx8IFtdKVsxXSB8fCAnJyxcclxuICAgICAgICBtb2RlbDogKHRleHQubWF0Y2goL01PREVMWzpcXHNdKihbQS1aMC05XFwtXFwvXSspL2kpIHx8IFtdKVsxXSB8fCAnJyxcclxuICAgICAgICB2b2x0YWdlOiAodGV4dC5tYXRjaCgvVk9MVEFHRSg/On5OX1YpP1s6XFxzXSooWzAtOV17M30pL2kpIHx8IFtdKVsxXSB8fCAnJyxcclxuICAgICAgICBwcmVzc3VyZTogKHRleHQubWF0Y2goL0hQUFNcXHMqKFswLTldKylcXHMqTVBhL2kpIHx8IFtdKVsxXSB8fCAnJyxcclxuICAgICAgICB0ZW1wZXJhdHVyZTogJycsXHJcbiAgICAgICAgcmF3VGV4dDogdGV4dFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBwYXJzZWREYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3JlIE9DUjonLCBlcnJvcik7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdFcnJvcmUgcmljb25vc2NpbWVudG8gT0NSJyB9KTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIGZzLnVubGlua1N5bmMoZmlsZVBhdGgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJmb3JtaWRhYmxlIiwiZnMiLCJUZXNzZXJhY3QiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImZvcm0iLCJJbmNvbWluZ0Zvcm0iLCJ1cGxvYWREaXIiLCJrZWVwRXh0ZW5zaW9ucyIsInBhcnNlIiwiZXJyIiwiZmllbGRzIiwiZmlsZXMiLCJmaWxlUGF0aCIsImZpbGUiLCJmaWxlcGF0aCIsImRhdGEiLCJ0ZXh0IiwicmVjb2duaXplIiwicGFyc2VkRGF0YSIsInNlcmlhbCIsIm1hdGNoIiwibW9kZWwiLCJ2b2x0YWdlIiwicHJlc3N1cmUiLCJ0ZW1wZXJhdHVyZSIsInJhd1RleHQiLCJjb25zb2xlIiwidW5saW5rU3luYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/ocr.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Focr&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cocr.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();