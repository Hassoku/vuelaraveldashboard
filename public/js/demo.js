(self["webpackChunk"] = self["webpackChunk"] || []).push([["demo"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/Categories.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/Categories.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      categories: [],
      category: {}
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/api/categories').then(function (response) {
      _this.categories = response.data;
    });
  },
  methods: {
    addCategory: function addCategory() {
      axios.post('/api/categories', this.category).then(function (response) {
        this.$toastr.s("SUCCESS MESSAGE", "Success Toast Title");
      })["catch"](function (error) {
        console.log(error);
      });
    },
    deleteCategory: function deleteCategory(id) {
      var _this2 = this;

      axios["delete"]("/api/categories/".concat(id)).then(function (response) {
        var i = _this2.categories.map(function (data) {
          return data.id;
        }).indexOf(id);

        _this2.categories.splice(i, 1);

        _this2.$toastr.s("SUCCESS MESSAGE", "Success Toast Title");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/EditCategory.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/EditCategory.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  created: function created() {
    var _this = this;

    axios.get("/api/categories/".concat(this.$route.params.id)).then(function (res) {
      console.log(res.data);
      _this.categorty = res.data;
    });
  },
  methods: {
    updateCategory: function updateCategory() {
      var _this2 = this;

      axios.patch("/api/categories/".concat(this.$route.params.id), this.category).then(function (res) {
        _this2.$router.push({
          name: 'category'
        });
      });
    }
  },
  data: function data() {
    return {
      category: {}
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/Product.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/Product.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\laragon\\www\\articles\\resources\\js\\components\\part\\Product.vue: Unexpected token, expected \",\" (134:12)\n\n  132 |\n  133 |\n> 134 |             addProduct(e){\n      |             ^\n  135 |                  const config = {\n  136 |                     headers: {\n  137 |                         'content-type': 'multipart/form-data'\n    at Parser._raise (C:\\laragon\\www\\articles\\node_modules\\@babel\\parser\\lib\\index.js:816:17)\n    at Parser.raiseWithData (C:\\laragon\\www\\articles\\node_modules\\@babel\\parser\\lib\\index.js:809:17)\n    at Parser.raise (C:\\laragon\\www\\articles\\node_modules\\@babel\\parser\\lib\\index.js:770:17)\n    at Parser.unexpected (C:\\laragon\\www\\articles\\node_modules\\@babel\\parser\\lib\\index.js:9893:16)\n    at Parser.expect (C:\\laragon\\www\\articles\\node_modules\\@babel\\parser\\lib\\index.js:9867:28)\n    at Parser.parseObjectLike (C:\\laragon\\www\\articles\\node_modules\\@babel\\parser\\lib\\index.js:11691:14)\n    at Parser.parseExprAtom (C:\\laragon\\www\\articles\\node_modules\\@babel\\parser\\lib\\index.js:11223:23)\n    at Parser.parseExprSubscripts (C:\\laragon\\www\\articles\\node_modules\\@babel\\parser\\lib\\index.js:10881:23)\n    at Parser.parseUpdate (C:\\laragon\\www\\articles\\node_modules\\@babel\\parser\\lib\\index.js:10861:21)\n    at Parser.parseMaybeUnary (C:\\laragon\\www\\articles\\node_modules\\@babel\\parser\\lib\\index.js:10839:23)\n    at Parser.parseExprOps (C:\\laragon\\www\\articles\\node_modules\\@babel\\parser\\lib\\index.js:10696:23)\n    at Parser.parseMaybeConditional (C:\\laragon\\www\\articles\\node_modules\\@babel\\parser\\lib\\index.js:10670:23)\n    at Parser.parseMaybeAssign (C:\\laragon\\www\\articles\\node_modules\\@babel\\parser\\lib\\index.js:10633:21)\n    at C:\\laragon\\www\\articles\\node_modules\\@babel\\parser\\lib\\index.js:10595:39\n    at Parser.allowInAnd (C:\\laragon\\www\\articles\\node_modules\\@babel\\parser\\lib\\index.js:12334:12)\n    at Parser.parseMaybeAssignAllowIn (C:\\laragon\\www\\articles\\node_modules\\@babel\\parser\\lib\\index.js:10595:17)");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/Tags.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/Tags.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      tags: [],
      tag: {}
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/api/tags').then(function (response) {
      _this.tags = response.data;
    });
  },
  methods: {
    addTag: function addTag() {
      axios.post('/api/tags', this.tag).then(function (response) {
        this.$toaster.success('Tag Added.');
      })["catch"](function (error) {
        console.log(error);
      });
    },
    deleteTag: function deleteTag(id) {
      var _this2 = this;

      axios["delete"]("/api/tags/".concat(id)).then(function (response) {
        var i = _this2.tags.map(function (data) {
          return data.id;
        }).indexOf(id);

        _this2.tags.splice(i, 1);

        _this2.$toastr.s("SUCCESS MESSAGE", "Success Toast Title");

        _this2.$router.push({
          name: 'tags'
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/part/Add.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/part/Add.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__.default)(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "resources/js/components/part/Add.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/part/Categories.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/part/Categories.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Categories_vue_vue_type_template_id_6dc5425d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=6dc5425d& */ "./resources/js/components/part/Categories.vue?vue&type=template&id=6dc5425d&");
/* harmony import */ var _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.vue?vue&type=script&lang=js& */ "./resources/js/components/part/Categories.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Categories_vue_vue_type_template_id_6dc5425d___WEBPACK_IMPORTED_MODULE_0__.render,
  _Categories_vue_vue_type_template_id_6dc5425d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/part/Categories.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/part/EditCategory.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/part/EditCategory.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditCategory_vue_vue_type_template_id_14c995ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditCategory.vue?vue&type=template&id=14c995ae& */ "./resources/js/components/part/EditCategory.vue?vue&type=template&id=14c995ae&");
/* harmony import */ var _EditCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditCategory.vue?vue&type=script&lang=js& */ "./resources/js/components/part/EditCategory.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EditCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EditCategory_vue_vue_type_template_id_14c995ae___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditCategory_vue_vue_type_template_id_14c995ae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/part/EditCategory.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/part/Home.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/part/Home.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_604d0a60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=604d0a60& */ "./resources/js/components/part/Home.vue?vue&type=template&id=604d0a60&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Home_vue_vue_type_template_id_604d0a60___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_604d0a60___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/part/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/part/Orders.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/part/Orders.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__.default)(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "resources/js/components/part/Orders.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/part/Product.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/part/Product.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Product_vue_vue_type_template_id_753d00fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=753d00fe& */ "./resources/js/components/part/Product.vue?vue&type=template&id=753d00fe&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/components/part/Product.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Product_vue_vue_type_template_id_753d00fe___WEBPACK_IMPORTED_MODULE_0__.render,
  _Product_vue_vue_type_template_id_753d00fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/part/Product.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/part/Tags.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/part/Tags.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tags_vue_vue_type_template_id_50cc1c9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tags.vue?vue&type=template&id=50cc1c9a& */ "./resources/js/components/part/Tags.vue?vue&type=template&id=50cc1c9a&");
/* harmony import */ var _Tags_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tags.vue?vue&type=script&lang=js& */ "./resources/js/components/part/Tags.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Tags_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Tags_vue_vue_type_template_id_50cc1c9a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Tags_vue_vue_type_template_id_50cc1c9a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/part/Tags.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/part/Users.vue":
/*!************************************************!*\
  !*** ./resources/js/components/part/Users.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__.default)(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "resources/js/components/part/Users.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/part/Categories.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/part/Categories.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/Categories.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/part/EditCategory.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/part/EditCategory.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/EditCategory.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/part/Product.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/part/Product.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/Product.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default())); 

/***/ }),

/***/ "./resources/js/components/part/Tags.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/part/Tags.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tags.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/Tags.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/part/Categories.vue?vue&type=template&id=6dc5425d&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/part/Categories.vue?vue&type=template&id=6dc5425d& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_6dc5425d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_6dc5425d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_6dc5425d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Categories.vue?vue&type=template&id=6dc5425d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/Categories.vue?vue&type=template&id=6dc5425d&");


/***/ }),

/***/ "./resources/js/components/part/EditCategory.vue?vue&type=template&id=14c995ae&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/part/EditCategory.vue?vue&type=template&id=14c995ae& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCategory_vue_vue_type_template_id_14c995ae___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCategory_vue_vue_type_template_id_14c995ae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCategory_vue_vue_type_template_id_14c995ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditCategory.vue?vue&type=template&id=14c995ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/EditCategory.vue?vue&type=template&id=14c995ae&");


/***/ }),

/***/ "./resources/js/components/part/Home.vue?vue&type=template&id=604d0a60&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/part/Home.vue?vue&type=template&id=604d0a60& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_604d0a60___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_604d0a60___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_604d0a60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=604d0a60& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/Home.vue?vue&type=template&id=604d0a60&");


/***/ }),

/***/ "./resources/js/components/part/Product.vue?vue&type=template&id=753d00fe&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/part/Product.vue?vue&type=template&id=753d00fe& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_753d00fe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_753d00fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_753d00fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Product.vue?vue&type=template&id=753d00fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/Product.vue?vue&type=template&id=753d00fe&");


/***/ }),

/***/ "./resources/js/components/part/Tags.vue?vue&type=template&id=50cc1c9a&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/part/Tags.vue?vue&type=template&id=50cc1c9a& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_template_id_50cc1c9a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_template_id_50cc1c9a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tags_vue_vue_type_template_id_50cc1c9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tags.vue?vue&type=template&id=50cc1c9a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/Tags.vue?vue&type=template&id=50cc1c9a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/Categories.vue?vue&type=template&id=6dc5425d&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/Categories.vue?vue&type=template&id=6dc5425d& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._v("\nCategory\n"),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "tab-content", attrs: { id: "myTabContent" } }, [
      _c(
        "div",
        {
          staticClass: "tab-pane fade show active",
          attrs: { id: "home", role: "tabpanel", "aria-labelledby": "home-tab" }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addCategory.apply(null, arguments)
                }
              }
            },
            [
              _c("div", { staticClass: "mb-3" }, [
                _c(
                  "label",
                  {
                    staticClass: "form-label",
                    attrs: { for: "exampleInputEmail1" }
                  },
                  [_vm._v("Category")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.category.category,
                      expression: "category.category"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", "aria-describedby": "emailHelp" },
                  domProps: { value: _vm.category.category },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.category, "category", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-3" }, [
                _c(
                  "label",
                  {
                    staticClass: "form-label",
                    attrs: { for: "exampleInputPassword1" }
                  },
                  [_vm._v("Sub Category")]
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.category.subCategory,
                        expression: "category.subCategory"
                      }
                    ],
                    staticClass: "form-control",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.category,
                          "subCategory",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.categories, function(category) {
                    return _c(
                      "option",
                      {
                        key: category.id,
                        domProps: { value: category.category }
                      },
                      [_vm._v(_vm._s(category.category))]
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                [_vm._v("Submit")]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "tab-pane fade",
          attrs: {
            id: "profile",
            role: "tabpanel",
            "aria-labelledby": "profile-tab"
          }
        },
        [
          _c("table", { staticClass: "table table-striped table-sm" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.categories, function(category) {
                return _c("tr", { key: category.id }, [
                  _c("td", [_vm._v(_vm._s(category.id))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(category.category))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(category.sub_category))]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "div",
                      { staticClass: "btn-group", attrs: { role: "group" } },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-success",
                            attrs: {
                              to: {
                                name: "categoriesedit",
                                params: { id: category.id }
                              }
                            }
                          },
                          [_vm._v("Edit")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger",
                            on: {
                              click: function($event) {
                                return _vm.deleteCategory(category.id)
                              }
                            }
                          },
                          [_vm._v("Delete")]
                        )
                      ],
                      1
                    )
                  ])
                ])
              }),
              0
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "nav nav-tabs", attrs: { id: "myTab", role: "tablist" } },
      [
        _c("li", { staticClass: "nav-item", attrs: { role: "presentation" } }, [
          _c(
            "button",
            {
              staticClass: "nav-link active",
              attrs: {
                id: "home-tab",
                "data-bs-toggle": "tab",
                "data-bs-target": "#home",
                type: "button",
                role: "tab",
                "aria-controls": "home",
                "aria-selected": "true"
              }
            },
            [_vm._v("Add New")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item", attrs: { role: "presentation" } }, [
          _c(
            "button",
            {
              staticClass: "nav-link",
              attrs: {
                id: "profile-tab",
                "data-bs-toggle": "tab",
                "data-bs-target": "#profile",
                type: "button",
                role: "tab",
                "aria-controls": "profile",
                "aria-selected": "false"
              }
            },
            [_vm._v("Categories")]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Category")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Sub Category")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/EditCategory.vue?vue&type=template&id=14c995ae&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/EditCategory.vue?vue&type=template&id=14c995ae& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._v("\r\nEdit Category\r\n\r\n"),
    _c("div", { staticClass: "tab-content", attrs: { id: "myTabContent" } }, [
      _c(
        "div",
        {
          staticClass: "tab-pane fade show active",
          attrs: { id: "home", role: "tabpanel", "aria-labelledby": "home-tab" }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateCategory.apply(null, arguments)
                }
              }
            },
            [
              _c("div", { staticClass: "mb-3" }, [
                _c(
                  "label",
                  {
                    staticClass: "form-label",
                    attrs: { for: "exampleInputEmail1" }
                  },
                  [_vm._v("Category")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.category.category,
                      expression: "category.category"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    "aria-describedby": "emailHelp",
                    value: ""
                  },
                  domProps: { value: _vm.category.category },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.category, "category", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-3" }, [
                _c(
                  "label",
                  {
                    staticClass: "form-label",
                    attrs: { for: "exampleInputPassword1" }
                  },
                  [_vm._v("Sub Category")]
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.category.subCategory,
                        expression: "category.subCategory"
                      }
                    ],
                    staticClass: "form-control",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.category,
                          "subCategory",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c(
                      "option",
                      {
                        key: _vm.category.id,
                        attrs: { selected: "" },
                        domProps: { value: _vm.category.category }
                      },
                      [_vm._v(_vm._s(_vm.category.category))]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                [_vm._v("Update")]
              )
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/Home.vue?vue&type=template&id=604d0a60&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/Home.vue?vue&type=template&id=604d0a60& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "ul",
        {
          staticClass: "nav nav-tabs",
          attrs: { id: "myTab", role: "tablist" }
        },
        [
          _c(
            "li",
            { staticClass: "nav-item", attrs: { role: "presentation" } },
            [
              _c(
                "button",
                {
                  staticClass: "nav-link active",
                  attrs: {
                    id: "home-tab",
                    "data-bs-toggle": "tab",
                    "data-bs-target": "#home",
                    type: "button",
                    role: "tab",
                    "aria-controls": "home",
                    "aria-selected": "true"
                  }
                },
                [_vm._v("Users")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "nav-item", attrs: { role: "presentation" } },
            [
              _c(
                "button",
                {
                  staticClass: "nav-link",
                  attrs: {
                    id: "profile-tab",
                    "data-bs-toggle": "tab",
                    "data-bs-target": "#profile",
                    type: "button",
                    role: "tab",
                    "aria-controls": "profile",
                    "aria-selected": "false"
                  }
                },
                [_vm._v("Products")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "nav-item", attrs: { role: "presentation" } },
            [
              _c(
                "button",
                {
                  staticClass: "nav-link",
                  attrs: {
                    id: "contact-tab",
                    "data-bs-toggle": "tab",
                    "data-bs-target": "#contact",
                    type: "button",
                    role: "tab",
                    "aria-controls": "contact",
                    "aria-selected": "false"
                  }
                },
                [_vm._v("Categories")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "nav-item", attrs: { role: "presentation" } },
            [
              _c(
                "button",
                {
                  staticClass: "nav-link",
                  attrs: {
                    id: "contact-tab",
                    "data-bs-toggle": "tab",
                    "data-bs-target": "#order",
                    type: "button",
                    role: "tab",
                    "aria-controls": "contact",
                    "aria-selected": "false"
                  }
                },
                [_vm._v("Tags")]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "nav-item", attrs: { role: "presentation" } },
            [
              _c(
                "button",
                {
                  staticClass: "nav-link",
                  attrs: {
                    id: "contact-tab",
                    "data-bs-toggle": "tab",
                    "data-bs-target": "#tag",
                    type: "button",
                    role: "tab",
                    "aria-controls": "contact",
                    "aria-selected": "false"
                  }
                },
                [_vm._v("Orders")]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "tab-content", attrs: { id: "myTabContent" } }, [
        _c(
          "div",
          {
            staticClass: "tab-pane fade show active",
            attrs: {
              id: "home",
              role: "tabpanel",
              "aria-labelledby": "home-tab"
            }
          },
          [
            _c("h3", [_vm._v("Users")]),
            _vm._v(" "),
            _c("table", { staticClass: "table table-striped table-sm" }, [
              _c("thead", [
                _c("tr", [
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Header")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Header")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Header")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Header")])
                ])
              ]),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v("1,015")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("random")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("tabular")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("information")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("text")])
                ])
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "tab-pane fade",
            attrs: {
              id: "profile",
              role: "tabpanel",
              "aria-labelledby": "profile-tab"
            }
          },
          [
            _c("h3", [_vm._v("Products")]),
            _vm._v(" "),
            _c("table", { staticClass: "table table-striped table-sm" }, [
              _c("thead", [
                _c("tr", [
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Header")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Header")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Header")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Header")])
                ])
              ]),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v("1,015")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("random")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("tabular")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("information")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("text")])
                ])
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "tab-pane fade",
            attrs: {
              id: "contact",
              role: "tabpanel",
              "aria-labelledby": "contact-tab"
            }
          },
          [
            _c("h3", [_vm._v("Categories")]),
            _vm._v(" "),
            _c("table", { staticClass: "table table-striped table-sm" }, [
              _c("thead", [
                _c("tr", [
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Header")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Header")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Header")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Header")])
                ])
              ]),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v("1,015")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("random")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("tabular")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("information")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("text")])
                ])
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "tab-pane fade",
            attrs: {
              id: "order",
              role: "tabpanel",
              "aria-labelledby": "contact-tab"
            }
          },
          [
            _c("h3", [_vm._v("Orders")]),
            _vm._v(" "),
            _c("table", { staticClass: "table table-striped table-sm" }, [
              _c("thead", [
                _c("tr", [
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Header")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Header")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Header")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Header")])
                ])
              ]),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v("1,015")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("random")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("tabular")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("information")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("text")])
                ])
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "tab-pane fade",
            attrs: {
              id: "tag",
              role: "tabpanel",
              "aria-labelledby": "contact-tab"
            }
          },
          [
            _c("h3", [_vm._v("Tagss")]),
            _vm._v(" "),
            _c("table", { staticClass: "table table-striped table-sm" }, [
              _c("thead", [
                _c("tr", [
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Header")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Header")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Header")]),
                  _vm._v(" "),
                  _c("th", { attrs: { scope: "col" } }, [_vm._v("Header")])
                ])
              ]),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v("1,015")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("random")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("tabular")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("information")]),
                  _vm._v(" "),
                  _c("td", [_vm._v("text")])
                ])
              ])
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/Product.vue?vue&type=template&id=753d00fe&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/Product.vue?vue&type=template&id=753d00fe& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._v("\nProduct\n"),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "tab-content", attrs: { id: "myTabContent" } }, [
      _c(
        "div",
        {
          staticClass: "tab-pane fade show active",
          attrs: { id: "home", role: "tabpanel", "aria-labelledby": "home-tab" }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addProduct.apply(null, arguments)
                }
              }
            },
            [
              _c("div", { staticClass: "mb-3" }, [
                _c(
                  "label",
                  {
                    staticClass: "form-label",
                    attrs: { for: "exampleInputEmail1" }
                  },
                  [_vm._v("Product Title")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.product.name,
                      expression: "product.name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "name" },
                  domProps: { value: _vm.product.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.product, "name", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-3" },
                [
                  _c(
                    "label",
                    {
                      staticClass: "form-label",
                      attrs: { for: "exampleInputEmail1" }
                    },
                    [_vm._v("Product Category")]
                  ),
                  _vm._v(" "),
                  _c("multiselect", {
                    attrs: {
                      options: _vm.categories,
                      multiple: true,
                      "close-on-select": false,
                      "clear-on-select": false,
                      "preserve-search": true,
                      placeholder: "Select Category",
                      label: "category",
                      "track-by": "name",
                      "preselect-first": true
                    },
                    model: {
                      value: _vm.productcategory,
                      callback: function($$v) {
                        _vm.productcategory = $$v
                      },
                      expression: "productcategory"
                    }
                  }),
                  _vm._v(" "),
                  _c("div")
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "mb-3" }, [
                _c(
                  "label",
                  {
                    staticClass: "form-label",
                    attrs: { for: "exampleInputEmail1" }
                  },
                  [_vm._v("Price")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.product.price,
                      expression: "product.price"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "price" },
                  domProps: { value: _vm.product.price },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.product, "price", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-3" }, [
                _c(
                  "label",
                  {
                    staticClass: "form-label",
                    attrs: { for: "exampleInputEmail1" }
                  },
                  [_vm._v("Discount")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.product.discount,
                      expression: "product.discount"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "discount" },
                  domProps: { value: _vm.product.discount },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.product, "discount", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-3" }, [
                _c(
                  "label",
                  {
                    staticClass: "form-label",
                    attrs: { for: "exampleInputPassword1" }
                  },
                  [_vm._v("Product Description")]
                ),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.product.description,
                      expression: "product.description"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { name: "description" },
                  domProps: { value: _vm.product.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.product, "description", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-3" }, [
                _c(
                  "label",
                  {
                    staticClass: "form-check-label",
                    attrs: { for: "exampleCheck1" }
                  },
                  [_vm._v("Product Image")]
                ),
                _vm._v(" "),
                _c("input", {
                  staticClass: "form-control",
                  attrs: { type: "file", name: "image" },
                  on: { change: _vm.onChange }
                })
              ]),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                [_vm._v("Submit")]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "tab-pane fade",
          attrs: {
            id: "profile",
            role: "tabpanel",
            "aria-labelledby": "profile-tab"
          }
        },
        [
          _c("table", { staticClass: "table table-striped table-sm" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.products, function(product) {
                return _c("tr", { key: product.id }, [
                  _c("td", [_vm._v("1,015")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(product.product_name))]),
                  _vm._v(" "),
                  _c(
                    "td",
                    _vm._l(product.categories, function(cat) {
                      return _c("span", { key: cat.id }, [
                        _vm._v(_vm._s(cat.category))
                      ])
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(product.price))]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger",
                        on: {
                          click: function($event) {
                            return _vm.deleteProduct(product.id)
                          }
                        }
                      },
                      [_vm._v("Delete")]
                    )
                  ])
                ])
              }),
              0
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "nav nav-tabs", attrs: { id: "myTab", role: "tablist" } },
      [
        _c("li", { staticClass: "nav-item", attrs: { role: "presentation" } }, [
          _c(
            "button",
            {
              staticClass: "nav-link active",
              attrs: {
                id: "home-tab",
                "data-bs-toggle": "tab",
                "data-bs-target": "#home",
                type: "button",
                role: "tab",
                "aria-controls": "home",
                "aria-selected": "true"
              }
            },
            [_vm._v("Add New")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item", attrs: { role: "presentation" } }, [
          _c(
            "button",
            {
              staticClass: "nav-link",
              attrs: {
                id: "profile-tab",
                "data-bs-toggle": "tab",
                "data-bs-target": "#profile",
                type: "button",
                role: "tab",
                "aria-controls": "profile",
                "aria-selected": "false"
              }
            },
            [_vm._v("Categories")]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Product Title")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Category")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Price")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/Tags.vue?vue&type=template&id=50cc1c9a&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/part/Tags.vue?vue&type=template&id=50cc1c9a& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._v("\r\nTags\r\n"),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "tab-content", attrs: { id: "myTabContent" } }, [
      _c(
        "div",
        {
          staticClass: "tab-pane fade show active",
          attrs: { id: "home", role: "tabpanel", "aria-labelledby": "home-tab" }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addTag.apply(null, arguments)
                }
              }
            },
            [
              _c("div", { staticClass: "mb-3" }, [
                _c(
                  "label",
                  {
                    staticClass: "form-label",
                    attrs: { for: "exampleInputEmail1" }
                  },
                  [_vm._v("Tag")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.tag.tag,
                      expression: "tag.tag"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", "aria-describedby": "emailHelp" },
                  domProps: { value: _vm.tag.tag },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.tag, "tag", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                [_vm._v("Submit")]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "tab-pane fade",
          attrs: {
            id: "profile",
            role: "tabpanel",
            "aria-labelledby": "profile-tab"
          }
        },
        [
          _c("table", { staticClass: "table table-striped table-sm" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.tags, function(tag) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(tag.id))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(tag.tag))]),
                  _vm._v(" "),
                  _c("td", [_vm._v("tabular")])
                ])
              }),
              0
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "nav nav-tabs", attrs: { id: "myTab", role: "tablist" } },
      [
        _c("li", { staticClass: "nav-item", attrs: { role: "presentation" } }, [
          _c(
            "button",
            {
              staticClass: "nav-link active",
              attrs: {
                id: "home-tab",
                "data-bs-toggle": "tab",
                "data-bs-target": "#home",
                type: "button",
                role: "tab",
                "aria-controls": "home",
                "aria-selected": "true"
              }
            },
            [_vm._v("Add New")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item", attrs: { role: "presentation" } }, [
          _c(
            "button",
            {
              staticClass: "nav-link",
              attrs: {
                id: "profile-tab",
                "data-bs-toggle": "tab",
                "data-bs-target": "#profile",
                type: "button",
                role: "tab",
                "aria-controls": "profile",
                "aria-selected": "false"
              }
            },
            [_vm._v("Tags")]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Tag")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);