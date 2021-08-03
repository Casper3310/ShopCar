(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login/Login.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Login/Login.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _serveices_Login_serveice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../serveices/Login_serveice */ "./resources/js/serveices/Login_serveice.js");


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
      user: {
        email: "",
        password: ""
      },
      errors: ""
    };
  },
  methods: {
    SubmitLogin: function () {
      var _SubmitLogin = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _serveices_Login_serveice__WEBPACK_IMPORTED_MODULE_1__["Login"](this.user);

              case 3:
                res = _context.sent;
                console.log(res);
                localStorage.setItem("Token", JSON.stringify(res.data.token));
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 11:
                this.HideLoginModal();

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function SubmitLogin() {
        return _SubmitLogin.apply(this, arguments);
      }

      return SubmitLogin;
    }(),
    ClearData: function ClearData() {
      this.user.email = "";
      this.user.password = "";
      this.errors = "";
    },
    ShowLoginModal: function ShowLoginModal() {
      $("#LoginModal").modal("show");
      this.ClearData();
    },
    HideLoginModal: function HideLoginModal() {
      $("#LoginModal").modal("hide");
    }
  }
});

/***/ }),

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
  return _c("div", [
    _c(
      "a",
      {
        staticClass: "nav-link",
        attrs: { type: "button" },
        on: { click: _vm.ShowLoginModal }
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
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("main", [
                _c("div", { staticClass: "row justify-content-center " }, [
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.SubmitLogin.apply(null, arguments)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "form-floating mb-3" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.email,
                                expression: "user.email"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "LoginEmail",
                              type: "email",
                              placeholder: "name@example.com"
                            },
                            domProps: { value: _vm.user.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.user, "email", $event.target.value)
                              }
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
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.password,
                                expression: "user.password"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "LoginPassword",
                              type: "password",
                              placeholder: "Password"
                            },
                            domProps: { value: _vm.user.password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.user,
                                  "password",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "LoginPassword" } }, [
                            _vm._v("密碼")
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._m(1),
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
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: { "data-dismiss": "modal" },
                                  on: { click: _vm.ClearData }
                                },
                                [
                                  _vm._v(
                                    "\n                                                取消\n                                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: { type: "submit" }
                                },
                                [
                                  _vm._v(
                                    "\n                                                登入\n                                            "
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      ]
                    )
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("\n                        登入\n                    ")]
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
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-check mb-3" }, [
      _c("input", {
        staticClass: "form-check-input",
        attrs: { id: "inputRememberPassword", type: "checkbox", value: "" }
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
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/components/Login/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
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

/***/ "./resources/js/components/Login/Login.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Login/Login.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Login/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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



/***/ }),

/***/ "./resources/js/serveices/Login_serveice.js":
/*!**************************************************!*\
  !*** ./resources/js/serveices/Login_serveice.js ***!
  \**************************************************/
/*! exports provided: Register, Login, Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony import */ var _http_serveice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_serveice */ "./resources/js/serveices/http_serveice.js");

function Register(RegisterData) {
  return Object(_http_serveice__WEBPACK_IMPORTED_MODULE_0__["http"])().post('register', RegisterData);
}
function Login(LoginData) {
  return Object(_http_serveice__WEBPACK_IMPORTED_MODULE_0__["http"])().post('Login', LoginData);
}
function Logout() {
  return Object(_http_serveice__WEBPACK_IMPORTED_MODULE_0__["httpToken"])().get('Logout');
}

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
  var Token = JSON.parse(localStorage.getItem("Token"));
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiURL,
    headers: {
      Authorization: "Bearer " + Token
    }
  });
}

/***/ })

}]);