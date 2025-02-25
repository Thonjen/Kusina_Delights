import { ref, withCtx, unref, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { L as Layout } from "./frontend-CWpoDOF_.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "axios";
import "lodash";
const _sfc_main = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const isSignUp = ref(true);
    const loginForm = useForm({
      email: "",
      password: ""
    });
    const signupForm = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      // Make sure to match the form field name
      FirstName: "",
      MiddleName: "",
      LastName: "",
      ProfileImage: null,
      // Leave ProfileImage as null
      Introduction: null
      // Leave Introduction as null
    });
    const handleSubmit = (type) => {
      if (type === "signin") {
        loginForm.post(route("login"), {
          onFinish: () => loginForm.reset("password"),
          onError: () => {
            console.log("Login failed!");
          }
        });
      } else if (type === "signup") {
        if (signupForm.password !== signupForm.password_confirmation) {
          alert("Passwords do not match.");
          return;
        }
        signupForm.post(route("register"), {
          onFinish: () => {
            signupForm.reset("password", "password_confirmation");
          },
          onError: (errors) => {
            console.log(errors);
          },
          onSuccess: () => {
            loginForm.email = signupForm.email;
            loginForm.password = signupForm.password;
            loginForm.post(route("login"));
          }
        });
      }
    };
    const toggleForm = (value) => {
      isSignUp.value = value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Authentication" }, null, _parent2, _scopeId));
            _push2(`<div class="relative h-screen overflow-hidden" data-v-1ddc5e01${_scopeId}><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://c.animaapp.com/fvd5j1dy/img/eg4-ep33-leche-flan-67645e919b12432e590b303456de6e74-1.png')" })}" data-v-1ddc5e01${_scopeId}></div><div class="outer-container" data-v-1ddc5e01${_scopeId}><div class="${ssrRenderClass([{ active: isSignUp.value }, "container"])}" data-v-1ddc5e01${_scopeId}><div class="form-container sign-up bg-transparency-100 p-6" data-v-1ddc5e01${_scopeId}><form data-v-1ddc5e01${_scopeId}><h1 class="text-large font-semibold text-center mb-6 text-black-100" data-v-1ddc5e01${_scopeId}> Create Account </h1><input type="text" placeholder="Username" class="text-small focus:ring-2 focus:ring-yellow-300"${ssrRenderAttr("value", unref(signupForm).name)} required data-v-1ddc5e01${_scopeId}><input type="email" placeholder="Email" class="text-small focus:ring-2 focus:ring-yellow-300"${ssrRenderAttr("value", unref(signupForm).email)} required data-v-1ddc5e01${_scopeId}><input type="password" placeholder="Password" class="text-small focus:ring-2 focus:ring-yellow-300"${ssrRenderAttr("value", unref(signupForm).password)} required data-v-1ddc5e01${_scopeId}><input type="password" placeholder="Confirm Password" class="text-small focus:ring-2 focus:ring-yellow-300"${ssrRenderAttr("value", unref(signupForm).password_confirmation)} required data-v-1ddc5e01${_scopeId}><input type="text" placeholder="First Name" class="text-small focus:ring-2 focus:ring-yellow-300"${ssrRenderAttr("value", unref(signupForm).FirstName)} data-v-1ddc5e01${_scopeId}><input type="text" placeholder="Middle Name" class="text-small focus:ring-2 focus:ring-yellow-300"${ssrRenderAttr("value", unref(signupForm).MiddleName)} data-v-1ddc5e01${_scopeId}><input type="text" placeholder="Last Name" class="text-small focus:ring-2 focus:ring-yellow-300"${ssrRenderAttr("value", unref(signupForm).LastName)} data-v-1ddc5e01${_scopeId}><button class="${ssrRenderClass([{ "opacity-25": unref(signupForm).processing }, "bg-light_green-100 hover:bg-light_green-200 text-black-100 font-semibold px-20 py-3 rounded-2xl shadow-md text-small inline-block text-center"])}"${ssrIncludeBooleanAttr(unref(signupForm).processing) ? " disabled" : ""} data-v-1ddc5e01${_scopeId}> Sign Up </button></form></div><div class="form-container sign-in bg-transparency-100 p-6" data-v-1ddc5e01${_scopeId}><form data-v-1ddc5e01${_scopeId}><h1 class="text-large font-semibold text-center mb-6 text-black-100" data-v-1ddc5e01${_scopeId}> Log In </h1><input type="email" placeholder="Email" class="text-small focus:ring-2 focus:ring-yellow-300"${ssrRenderAttr("value", unref(loginForm).email)} required data-v-1ddc5e01${_scopeId}><input type="password" placeholder="Password" class="text-small focus:ring-2 focus:ring-yellow-300"${ssrRenderAttr("value", unref(loginForm).password)} required data-v-1ddc5e01${_scopeId}>`);
            if (_ctx.canResetPassword) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("password.request"),
                class: "mt-2 text-sm text-gray-600 underline hover:text-gray-900"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Forgot Your Password? `);
                  } else {
                    return [
                      createTextVNode(" Forgot Your Password? ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<button class="${ssrRenderClass([{ "opacity-25": unref(loginForm).processing }, "bg-light_green-100 hover:bg-light_green-200 text-black-100 font-semibold px-20 py-3 rounded-2xl shadow-md text-small inline-block text-center mt-4"])}"${ssrIncludeBooleanAttr(unref(loginForm).processing) ? " disabled" : ""} data-v-1ddc5e01${_scopeId}> Log In </button></form></div><div class="toggle-container" data-v-1ddc5e01${_scopeId}><div class="toggle" data-v-1ddc5e01${_scopeId}><div class="toggle-panel toggle-left bg-yellow-300 p-6" data-v-1ddc5e01${_scopeId}><h1 class="text-normal font-bold text-black-100" data-v-1ddc5e01${_scopeId}> Already Have an Account? </h1><p class="text-black-100 text-small font-bold" data-v-1ddc5e01${_scopeId}> Login to find new Opportunities and Discover new Delights </p><button class="bg-light_green-100 hover:bg-light_green-200 text-black-100 font-semibold px-20 py-3 rounded-2xl shadow-md text-small" data-v-1ddc5e01${_scopeId}> Sign In </button></div><div class="toggle-panel toggle-right bg-yellow-300 p-6" data-v-1ddc5e01${_scopeId}><h1 class="text-normal font-bold text-black-100" data-v-1ddc5e01${_scopeId}> Don’t Have an Account? </h1><p class="text-black-100 text-small font-bold" data-v-1ddc5e01${_scopeId}> Sign Up to find new Opportunities and Discover new Delights </p><button class="bg-light_green-100 hover:bg-light_green-200 text-black-100 font-semibold px-20 py-3 rounded-2xl shadow-md text-small" data-v-1ddc5e01${_scopeId}> Sign Up </button></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Authentication" }),
              createVNode("div", { class: "relative h-screen overflow-hidden" }, [
                createVNode("div", {
                  class: "absolute inset-0 bg-cover bg-center",
                  style: { "background-image": "url('https://c.animaapp.com/fvd5j1dy/img/eg4-ep33-leche-flan-67645e919b12432e590b303456de6e74-1.png')" }
                }),
                createVNode("div", { class: "outer-container" }, [
                  createVNode("div", {
                    class: ["container", { active: isSignUp.value }]
                  }, [
                    createVNode("div", { class: "form-container sign-up bg-transparency-100 p-6" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(($event) => handleSubmit("signup"), ["prevent"])
                      }, [
                        createVNode("h1", { class: "text-large font-semibold text-center mb-6 text-black-100" }, " Create Account "),
                        withDirectives(createVNode("input", {
                          type: "text",
                          placeholder: "Username",
                          class: "text-small focus:ring-2 focus:ring-yellow-300",
                          "onUpdate:modelValue": ($event) => unref(signupForm).name = $event,
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(signupForm).name]
                        ]),
                        withDirectives(createVNode("input", {
                          type: "email",
                          placeholder: "Email",
                          class: "text-small focus:ring-2 focus:ring-yellow-300",
                          "onUpdate:modelValue": ($event) => unref(signupForm).email = $event,
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(signupForm).email]
                        ]),
                        withDirectives(createVNode("input", {
                          type: "password",
                          placeholder: "Password",
                          class: "text-small focus:ring-2 focus:ring-yellow-300",
                          "onUpdate:modelValue": ($event) => unref(signupForm).password = $event,
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(signupForm).password]
                        ]),
                        withDirectives(createVNode("input", {
                          type: "password",
                          placeholder: "Confirm Password",
                          class: "text-small focus:ring-2 focus:ring-yellow-300",
                          "onUpdate:modelValue": ($event) => unref(signupForm).password_confirmation = $event,
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(signupForm).password_confirmation]
                        ]),
                        withDirectives(createVNode("input", {
                          type: "text",
                          placeholder: "First Name",
                          class: "text-small focus:ring-2 focus:ring-yellow-300",
                          "onUpdate:modelValue": ($event) => unref(signupForm).FirstName = $event
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(signupForm).FirstName]
                        ]),
                        withDirectives(createVNode("input", {
                          type: "text",
                          placeholder: "Middle Name",
                          class: "text-small focus:ring-2 focus:ring-yellow-300",
                          "onUpdate:modelValue": ($event) => unref(signupForm).MiddleName = $event
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(signupForm).MiddleName]
                        ]),
                        withDirectives(createVNode("input", {
                          type: "text",
                          placeholder: "Last Name",
                          class: "text-small focus:ring-2 focus:ring-yellow-300",
                          "onUpdate:modelValue": ($event) => unref(signupForm).LastName = $event
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(signupForm).LastName]
                        ]),
                        createVNode("button", {
                          class: ["bg-light_green-100 hover:bg-light_green-200 text-black-100 font-semibold px-20 py-3 rounded-2xl shadow-md text-small inline-block text-center", { "opacity-25": unref(signupForm).processing }],
                          disabled: unref(signupForm).processing
                        }, " Sign Up ", 10, ["disabled"])
                      ], 40, ["onSubmit"])
                    ]),
                    createVNode("div", { class: "form-container sign-in bg-transparency-100 p-6" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(($event) => handleSubmit("signin"), ["prevent"])
                      }, [
                        createVNode("h1", { class: "text-large font-semibold text-center mb-6 text-black-100" }, " Log In "),
                        withDirectives(createVNode("input", {
                          type: "email",
                          placeholder: "Email",
                          class: "text-small focus:ring-2 focus:ring-yellow-300",
                          "onUpdate:modelValue": ($event) => unref(loginForm).email = $event,
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(loginForm).email]
                        ]),
                        withDirectives(createVNode("input", {
                          type: "password",
                          placeholder: "Password",
                          class: "text-small focus:ring-2 focus:ring-yellow-300",
                          "onUpdate:modelValue": ($event) => unref(loginForm).password = $event,
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(loginForm).password]
                        ]),
                        _ctx.canResetPassword ? (openBlock(), createBlock(unref(Link), {
                          key: 0,
                          href: _ctx.route("password.request"),
                          class: "mt-2 text-sm text-gray-600 underline hover:text-gray-900"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Forgot Your Password? ")
                          ]),
                          _: 1
                        }, 8, ["href"])) : createCommentVNode("", true),
                        createVNode("button", {
                          class: ["bg-light_green-100 hover:bg-light_green-200 text-black-100 font-semibold px-20 py-3 rounded-2xl shadow-md text-small inline-block text-center mt-4", { "opacity-25": unref(loginForm).processing }],
                          disabled: unref(loginForm).processing
                        }, " Log In ", 10, ["disabled"])
                      ], 40, ["onSubmit"])
                    ]),
                    createVNode("div", { class: "toggle-container" }, [
                      createVNode("div", { class: "toggle" }, [
                        createVNode("div", { class: "toggle-panel toggle-left bg-yellow-300 p-6" }, [
                          createVNode("h1", { class: "text-normal font-bold text-black-100" }, " Already Have an Account? "),
                          createVNode("p", { class: "text-black-100 text-small font-bold" }, " Login to find new Opportunities and Discover new Delights "),
                          createVNode("button", {
                            onClick: ($event) => toggleForm(false),
                            class: "bg-light_green-100 hover:bg-light_green-200 text-black-100 font-semibold px-20 py-3 rounded-2xl shadow-md text-small"
                          }, " Sign In ", 8, ["onClick"])
                        ]),
                        createVNode("div", { class: "toggle-panel toggle-right bg-yellow-300 p-6" }, [
                          createVNode("h1", { class: "text-normal font-bold text-black-100" }, " Don’t Have an Account? "),
                          createVNode("p", { class: "text-black-100 text-small font-bold" }, " Sign Up to find new Opportunities and Discover new Delights "),
                          createVNode("button", {
                            onClick: ($event) => toggleForm(true),
                            class: "bg-light_green-100 hover:bg-light_green-200 text-black-100 font-semibold px-20 py-3 rounded-2xl shadow-md text-small"
                          }, " Sign Up ", 8, ["onClick"])
                        ])
                      ])
                    ])
                  ], 2)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1ddc5e01"]]);
export {
  Register as default
};
