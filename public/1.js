(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login/Login.vue?vue&type=template&id=74b91af0&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Login/Login.vue?vue&type=template&id=74b91af0& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    return _c("div", [
      _c(
        "a",
        {
          staticClass: "nav-link",
          attrs: {
            type: "button",
            "data-toggle": "modal",
            "data-target": "#LoginModal"
          }
        },
        [_vm._v("\n        登入\n    ")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "LoginModal",
            tabindex: "-1",
            "aria-labelledby": "exampleModalLabel",
            "aria-hidden": "true"
          }
        },
        [
          _c("div", { staticClass: "modal-dialog" }, [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h5",
                  {
                    staticClass: "modal-title",
                    attrs: { id: "exampleModalLabel" }
                  },
                  [
                    _vm._v(
                      "\n                        登入\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close"
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("main", [
                  _c("div", { staticClass: "row justify-content-center " }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", [
                        _c("div", { staticClass: "form-floating mb-3" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              id: "LoginEmail",
                              type: "email",
                              placeholder: "name@example.com"
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "LoginEmail" } }, [
                            _vm._v("登入Email")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-floating mb-3" }, [
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              id: "LoginPassword",
                              type: "password",
                              placeholder: "Password"
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "LoginPassword" } }, [
                            _vm._v("密碼")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-check mb-3" }, [
                          _c("input", {
                            staticClass: "form-check-input",
                            attrs: {
                              id: "inputRememberPassword",
                              type: "checkbox",
                              value: ""
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "form-check-label",
                              attrs: { for: "inputRememberPassword" }
                            },
                            [_vm._v("記住我")]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-flex align-items-center justify-content-between mt-4 mb-0"
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary",
                                attrs: { href: "password.html" }
                              },
                              [
                                _vm._v(
                                  "\n                                            忘記密碼\n                                        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", [
                              _c("button", { staticClass: "btn btn-primary" }, [
                                _vm._v(
                                  "\n                                                取消\n                                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("button", { staticClass: "btn btn-primary" }, [
                                _vm._v(
                                  "\n                                                登入\n                                            "
                                )
                              ])
                            ])
                          ]
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Login/Login.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Login/Login.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_74b91af0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=74b91af0& */ "./resources/js/components/Login/Login.vue?vue&type=template&id=74b91af0&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Login_vue_vue_type_template_id_74b91af0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_74b91af0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Login/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Login/Login.vue?vue&type=template&id=74b91af0&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Login/Login.vue?vue&type=template&id=74b91af0& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_74b91af0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=74b91af0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login/Login.vue?vue&type=template&id=74b91af0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_74b91af0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_74b91af0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);