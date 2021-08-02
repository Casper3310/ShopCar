(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShopHome/Section.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ShopHome/Section.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _serveices_product_serveice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../serveices/product_serveice */ "./resources/js/serveices/product_serveice.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      ProductList: []
    };
  },
  mounted: function mounted() {
    this.LoadProduct();
  },
  methods: {
    CountBuyNumber: function CountBuyNumber(index, number, Max) {
      this.ProductList[index].BuyNumber += number;

      if (this.ProductList[index].BuyNumber > Max) {
        this.ProductList[index].BuyNumber = Max;
      } else if (this.ProductList[index].BuyNumber < 0) {
        this.ProductList[index].BuyNumber = 0;
      }
    },
    LoadProduct: function () {
      var _LoadProduct = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _serveices_product_serveice__WEBPACK_IMPORTED_MODULE_1__["LoadProduct"]();

              case 3:
                res = _context.sent;
                this.ProductList = res.data;
                this.ProductList.forEach(function (element) {
                  _this.$set(element, "BuyNumber", 0);
                });
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function LoadProduct() {
        return _LoadProduct.apply(this, arguments);
      }

      return LoadProduct;
    }()
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShopHome/ShopHome.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ShopHome/ShopHome.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue */ "./resources/js/components/ShopHome/Navigation.vue");
/* harmony import */ var _Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue */ "./resources/js/components/ShopHome/Header.vue");
/* harmony import */ var _Section_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section.vue */ "./resources/js/components/ShopHome/Section.vue");
/* harmony import */ var _Footer_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.vue */ "./resources/js/components/ShopHome/Footer.vue");
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Navigation: _Navigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Header: _Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Section: _Section_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Footer: _Footer_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  methods: {},
  destroy: function destroy() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShopHome/Footer.vue?vue&type=template&id=f614d40c&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ShopHome/Footer.vue?vue&type=template&id=f614d40c& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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
    return _c("footer", { staticClass: "py-5 bg-dark" }, [
      _c("div", { staticClass: "container" }, [
        _c("p", { staticClass: "m-0 text-center text-white" }, [
          _vm._v("\n            Copyright © Your Website 2021\n        ")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShopHome/Header.vue?vue&type=template&id=b3b00c28&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ShopHome/Header.vue?vue&type=template&id=b3b00c28& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
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
    return _c("header", { staticClass: "bg-dark py-5" }, [
      _c("div", { staticClass: "container px-4 px-lg-5 my-5" }, [
        _c("div", { staticClass: "text-center text-white" }, [
          _c("h1", { staticClass: "display-4 fw-bolder" }, [
            _vm._v("Shop in style")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "lead fw-normal text-white-50 mb-0" }, [
            _vm._v("\n                購物\n            ")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShopHome/Navigation.vue?vue&type=template&id=5419eb1a&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ShopHome/Navigation.vue?vue&type=template&id=5419eb1a& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    { staticClass: "navbar navbar-expand-lg navbar-light bg-light" },
    [
      _c(
        "div",
        { staticClass: "container px-4 px-lg-5" },
        [
          _c(
            "router-link",
            { staticClass: "navbar-brand", attrs: { to: "/" } },
            [_vm._v("首頁")]
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse navbar-collapse",
              attrs: { id: "navbarSupportedContent" }
            },
            [
              _c(
                "ul",
                { staticClass: "navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4" },
                [
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        { staticClass: "nav-link active", attrs: { to: "/" } },
                        [_vm._v("home")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        { staticClass: "nav-link", attrs: { to: "/admin" } },
                        [_vm._v("後台")]
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(1)
            ]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-outline-dark", attrs: { type: "submit" } },
      [
        _c("i", { staticClass: "bi-cart-fill me-1" }),
        _vm._v("\n                Cart\n                "),
        _c(
          "span",
          { staticClass: "badge bg-dark text-white ms-1 rounded-pill" },
          [_vm._v("0")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShopHome/Section.vue?vue&type=template&id=05b3a6d4&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ShopHome/Section.vue?vue&type=template&id=05b3a6d4& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "py-5" }, [
    _c("div", { staticClass: "container px-4 px-lg-5 mt-5" }, [
      _c(
        "div",
        {
          staticClass:
            "row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
        },
        _vm._l(_vm.ProductList, function(item, index) {
          return _c("div", { key: index, staticClass: "col mb-5" }, [
            _c("div", { staticClass: "card h-100" }, [
              _c("img", {
                staticClass: "card-img-top",
                attrs: {
                  src: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
                  alt: "..."
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "card-body p-4" }, [
                _c("div", { staticClass: "text-center" }, [
                  _c("h5", { staticClass: "fw-bolder" }, [
                    _vm._v(_vm._s(item.name))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "fw-bolder" }, [
                    _vm._v(
                      "\n                                剩餘數量:" +
                        _vm._s(item.quantity) +
                        "\n                            "
                    )
                  ]),
                  _vm._v(" "),
                  _vm._v(
                    "\n                            價格:" +
                      _vm._s(item.price) +
                      "\n                        "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group mb-3" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-secondary",
                    attrs: { type: "button", id: "button-addon1" },
                    on: {
                      click: function($event) {
                        return _vm.CountBuyNumber(index, -1, item.quantity)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                            -\n                        "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-control text-center" }, [
                  _vm._v(
                    "\n                            " +
                      _vm._s(item.BuyNumber) +
                      "\n                        "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-secondary",
                    attrs: { type: "button", id: "button-addon2" },
                    on: {
                      click: function($event) {
                        return _vm.CountBuyNumber(index, 1, item.quantity)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                            +\n                        "
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _vm._m(0, true)
            ])
          ])
        }),
        0
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
      "div",
      { staticClass: "card-footer p-4 pt-0 border-top-0 bg-transparent" },
      [
        _c("div", { staticClass: "text-center" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-outline-dark mt-auto",
              attrs: { href: "#" }
            },
            [_vm._v("加入購物車")]
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShopHome/ShopHome.vue?vue&type=template&id=25d7c694&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ShopHome/ShopHome.vue?vue&type=template&id=25d7c694& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [_c("Navigation"), _vm._v(" "), _c("Section"), _vm._v(" "), _c("Footer")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ShopHome/Footer.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/ShopHome/Footer.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_f614d40c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=f614d40c& */ "./resources/js/components/ShopHome/Footer.vue?vue&type=template&id=f614d40c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Footer_vue_vue_type_template_id_f614d40c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_f614d40c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ShopHome/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ShopHome/Footer.vue?vue&type=template&id=f614d40c&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/ShopHome/Footer.vue?vue&type=template&id=f614d40c& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_f614d40c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=f614d40c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShopHome/Footer.vue?vue&type=template&id=f614d40c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_f614d40c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_f614d40c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ShopHome/Header.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/ShopHome/Header.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_b3b00c28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=b3b00c28& */ "./resources/js/components/ShopHome/Header.vue?vue&type=template&id=b3b00c28&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Header_vue_vue_type_template_id_b3b00c28___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_b3b00c28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ShopHome/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ShopHome/Header.vue?vue&type=template&id=b3b00c28&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/ShopHome/Header.vue?vue&type=template&id=b3b00c28& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_b3b00c28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=b3b00c28& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShopHome/Header.vue?vue&type=template&id=b3b00c28&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_b3b00c28___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_b3b00c28___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ShopHome/Navigation.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/ShopHome/Navigation.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navigation_vue_vue_type_template_id_5419eb1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=5419eb1a& */ "./resources/js/components/ShopHome/Navigation.vue?vue&type=template&id=5419eb1a&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Navigation_vue_vue_type_template_id_5419eb1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navigation_vue_vue_type_template_id_5419eb1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ShopHome/Navigation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ShopHome/Navigation.vue?vue&type=template&id=5419eb1a&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/ShopHome/Navigation.vue?vue&type=template&id=5419eb1a& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_5419eb1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navigation.vue?vue&type=template&id=5419eb1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShopHome/Navigation.vue?vue&type=template&id=5419eb1a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_5419eb1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_5419eb1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ShopHome/Section.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ShopHome/Section.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Section_vue_vue_type_template_id_05b3a6d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section.vue?vue&type=template&id=05b3a6d4& */ "./resources/js/components/ShopHome/Section.vue?vue&type=template&id=05b3a6d4&");
/* harmony import */ var _Section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Section.vue?vue&type=script&lang=js& */ "./resources/js/components/ShopHome/Section.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Section_vue_vue_type_template_id_05b3a6d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Section_vue_vue_type_template_id_05b3a6d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ShopHome/Section.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ShopHome/Section.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ShopHome/Section.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Section.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShopHome/Section.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ShopHome/Section.vue?vue&type=template&id=05b3a6d4&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ShopHome/Section.vue?vue&type=template&id=05b3a6d4& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_template_id_05b3a6d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Section.vue?vue&type=template&id=05b3a6d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShopHome/Section.vue?vue&type=template&id=05b3a6d4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_template_id_05b3a6d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Section_vue_vue_type_template_id_05b3a6d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ShopHome/ShopHome.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/ShopHome/ShopHome.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopHome_vue_vue_type_template_id_25d7c694___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopHome.vue?vue&type=template&id=25d7c694& */ "./resources/js/components/ShopHome/ShopHome.vue?vue&type=template&id=25d7c694&");
/* harmony import */ var _ShopHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopHome.vue?vue&type=script&lang=js& */ "./resources/js/components/ShopHome/ShopHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShopHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShopHome_vue_vue_type_template_id_25d7c694___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShopHome_vue_vue_type_template_id_25d7c694___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ShopHome/ShopHome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ShopHome/ShopHome.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ShopHome/ShopHome.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopHome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShopHome/ShopHome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ShopHome/ShopHome.vue?vue&type=template&id=25d7c694&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/ShopHome/ShopHome.vue?vue&type=template&id=25d7c694& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHome_vue_vue_type_template_id_25d7c694___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopHome.vue?vue&type=template&id=25d7c694& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShopHome/ShopHome.vue?vue&type=template&id=25d7c694&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHome_vue_vue_type_template_id_25d7c694___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHome_vue_vue_type_template_id_25d7c694___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/serveices/http_serveice.js":
/*!*************************************************!*\
  !*** ./resources/js/serveices/http_serveice.js ***!
  \*************************************************/
/*! exports provided: http, httpFile, httpToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "http", function() { return http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpFile", function() { return httpFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpToken", function() { return httpToken; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./resources/js/store.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function http() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiURL
  });
}
function httpFile() {
  var Token = JSON.parse(localStorage.getItem("TRTC"));
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiURL,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: "Bearer " + Token.accessToken
    }
  });
}
function httpToken() {
  var Token = JSON.parse(localStorage.getItem("TRTC"));
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiURL,
    headers: {
      Authorization: "Bearer " + Token.accessToken
    }
  });
}

/***/ }),

/***/ "./resources/js/serveices/product_serveice.js":
/*!****************************************************!*\
  !*** ./resources/js/serveices/product_serveice.js ***!
  \****************************************************/
/*! exports provided: LoadProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProduct", function() { return LoadProduct; });
/* harmony import */ var _http_serveice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_serveice */ "./resources/js/serveices/http_serveice.js");

function LoadProduct() {
  return Object(_http_serveice__WEBPACK_IMPORTED_MODULE_0__["http"])().get('product');
}

/***/ })

}]);