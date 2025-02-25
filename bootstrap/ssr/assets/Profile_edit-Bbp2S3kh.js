import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { L as Layout } from "./frontend-qce4MpuY.js";
import "axios";
import "lodash";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Profile_edit",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative h-[998px] overflow-hidden"${_scopeId}><div class="absolute inset-0 -m-[20px]"${_scopeId}><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png')", "filter": "brightness(0.3) blur(20px)" })}"${_scopeId}></div></div><div class="flex items-center justify-center h-full relative px-12 sm:px-16 lg:px-20"${_scopeId}><div class="bg-white w-full max-w-[1600px] p-12 sm:p-16 lg:p-20 rounded-2xl shadow-lg flex gap-12"${_scopeId}><div class="bg-yellow-300 w-full h-[585px] sm:w-1/3 p-12 rounded-[2rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)] relative"${_scopeId}><div class="absolute top-6 right-6 text-gray-600 cursor-pointer"${_scopeId}><a href="/profile"${_scopeId}><i class="fas fa-pen text-4xl"${_scopeId}></i></a></div><div class="flex flex-col items-center"${_scopeId}><div class="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center shadow-md"${_scopeId}><i class="fas fa-user text-8xl text-gray-500"${_scopeId}></i></div><div class="mt-10 border-t-4 border-black w-full"${_scopeId}></div><p class="text-center mt-8 font-semibold text-2xl"${_scopeId}>Code_Celestia</p><div class="w-full text-left mt-6 pl-6"${_scopeId}><p class="text-normal font-medium"${_scopeId}>Email:</p><p class="text-normal font-medium"${_scopeId}>Date Joined:</p></div></div><button class="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-green-300 text-black py-2 px-16 rounded-2xl font-semibold shadow-[5px_5px_15px_rgba(0,0,0,0.3)] text-normal"${_scopeId}> Log out </button></div><div class="flex flex-col w-full sm:w-2/3 gap-12"${_scopeId}><div class="bg-yellow-300 p-12 h-[585px] rounded-lg shadow-md relative rounded-[2.3rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)]"${_scopeId}><div class="absolute top-6 right-6 text-gray-600 cursor-pointer"${_scopeId}><i class="fas fa-pen text-3xl"${_scopeId}></i></div><h2 class="font-semibold text-large mb-6"${_scopeId}>Account:</h2><p class="text-lg font-semibold mb-1"${_scopeId}>Username:</p><input type="text" class="text-small w-4/5 border border-gray-300 p-2 rounded-2xl mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Enter username"${_scopeId}><p class="text-lg font-semibold mb-1"${_scopeId}>Email:</p><input type="email" class="text-small w-4/5 border border-gray-300 p-2 rounded-2xl mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Enter email"${_scopeId}><p class="text-lg font-semibold mb-1"${_scopeId}>Password:</p><input type="password" class="text-small w-4/5 border border-gray-300 p-2 rounded-2xl mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Enter password"${_scopeId}><p class="text-lg font-semibold mb-1"${_scopeId}>Confirm Password:</p><input type="password" class="text-small w-4/5 border border-gray-300 p-2 rounded-2xl mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="Confirm password"${_scopeId}></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative h-[998px] overflow-hidden" }, [
                createVNode("div", { class: "absolute inset-0 -m-[20px]" }, [
                  createVNode("div", {
                    class: "absolute inset-0 bg-cover bg-center",
                    style: { "background-image": "url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png')", "filter": "brightness(0.3) blur(20px)" }
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-center h-full relative px-12 sm:px-16 lg:px-20" }, [
                  createVNode("div", { class: "bg-white w-full max-w-[1600px] p-12 sm:p-16 lg:p-20 rounded-2xl shadow-lg flex gap-12" }, [
                    createVNode("div", { class: "bg-yellow-300 w-full h-[585px] sm:w-1/3 p-12 rounded-[2rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)] relative" }, [
                      createVNode("div", { class: "absolute top-6 right-6 text-gray-600 cursor-pointer" }, [
                        createVNode("a", { href: "/profile" }, [
                          createVNode("i", { class: "fas fa-pen text-4xl" })
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col items-center" }, [
                        createVNode("div", { class: "w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center shadow-md" }, [
                          createVNode("i", { class: "fas fa-user text-8xl text-gray-500" })
                        ]),
                        createVNode("div", { class: "mt-10 border-t-4 border-black w-full" }),
                        createVNode("p", { class: "text-center mt-8 font-semibold text-2xl" }, "Code_Celestia"),
                        createVNode("div", { class: "w-full text-left mt-6 pl-6" }, [
                          createVNode("p", { class: "text-normal font-medium" }, "Email:"),
                          createVNode("p", { class: "text-normal font-medium" }, "Date Joined:")
                        ])
                      ]),
                      createVNode("button", { class: "absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-green-300 text-black py-2 px-16 rounded-2xl font-semibold shadow-[5px_5px_15px_rgba(0,0,0,0.3)] text-normal" }, " Log out ")
                    ]),
                    createVNode("div", { class: "flex flex-col w-full sm:w-2/3 gap-12" }, [
                      createVNode("div", { class: "bg-yellow-300 p-12 h-[585px] rounded-lg shadow-md relative rounded-[2.3rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)]" }, [
                        createVNode("div", { class: "absolute top-6 right-6 text-gray-600 cursor-pointer" }, [
                          createVNode("i", { class: "fas fa-pen text-3xl" })
                        ]),
                        createVNode("h2", { class: "font-semibold text-large mb-6" }, "Account:"),
                        createVNode("p", { class: "text-lg font-semibold mb-1" }, "Username:"),
                        createVNode("input", {
                          type: "text",
                          class: "text-small w-4/5 border border-gray-300 p-2 rounded-2xl mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-500",
                          placeholder: "Enter username"
                        }),
                        createVNode("p", { class: "text-lg font-semibold mb-1" }, "Email:"),
                        createVNode("input", {
                          type: "email",
                          class: "text-small w-4/5 border border-gray-300 p-2 rounded-2xl mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-500",
                          placeholder: "Enter email"
                        }),
                        createVNode("p", { class: "text-lg font-semibold mb-1" }, "Password:"),
                        createVNode("input", {
                          type: "password",
                          class: "text-small w-4/5 border border-gray-300 p-2 rounded-2xl mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-500",
                          placeholder: "Enter password"
                        }),
                        createVNode("p", { class: "text-lg font-semibold mb-1" }, "Confirm Password:"),
                        createVNode("input", {
                          type: "password",
                          class: "text-small w-4/5 border border-gray-300 p-2 rounded-2xl mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-500",
                          placeholder: "Confirm password"
                        })
                      ])
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Chef/Profile_edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
