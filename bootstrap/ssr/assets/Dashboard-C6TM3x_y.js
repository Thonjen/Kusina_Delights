import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { L as Layout } from "./frontend-qce4MpuY.js";
import "axios";
import "lodash";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative h-[998px] overflow-hidden"${_scopeId}><div class="absolute inset-0 -m-[20px]"${_scopeId}><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png')", "filter": "brightness(0.3) blur(20px)" })}"${_scopeId}></div></div><div class="flex items-center justify-center h-full relative"${_scopeId}><div class="bg-white w-[200vh] p-12 rounded-3xl shadow-2xl"${_scopeId}><h1 class="text-center text-large font-bold mb-10"${_scopeId}>Dashboard</h1><div class="flex gap-12"${_scopeId}><div class="bg-yellow-300 w-1/3 p-10 rounded-[2rem] shadow-[5px_5px_10px_rgba(0,0,0,0.5)] relative"${_scopeId}><div class="absolute top-6 right-6 text-gray-600 cursor-pointer"${_scopeId}><i class="fas fa-pen text-2xl"${_scopeId}></i></div><div class="flex flex-col items-center"${_scopeId}><div class="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center shadow-md"${_scopeId}><i class="fas fa-user text-6xl text-gray-500"${_scopeId}></i></div><div class="mt-8 border-t border-black w-full"${_scopeId}></div><p class="text-center mt-4 font-semibold text-large"${_scopeId}>Code_Celestia</p><div class="w-full text-left mt-4 pl-4"${_scopeId}><p class="text-normal font-medium"${_scopeId}>Email:</p><p class="text-normal font-medium"${_scopeId}>Date Joined:</p></div></div><button class="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-green-300 text-black-100 py-4 px-10 rounded-2xl font-semibold shadow-[5px_5px_10px_rgba(0,0,0,0.3)] text-normal"${_scopeId}> Log out </button></div><div class="flex flex-col gap-8 w-1/3"${_scopeId}><div class="bg-gray-100 p-8 rounded-xl shadow-lg"${_scopeId}><p class="text-normal text-gray-500"${_scopeId}>Total Viewers</p><p class="text-large font-bold"${_scopeId}>18,000 viewers</p></div><div class="bg-gray-100 p-8 rounded-xl shadow-lg"${_scopeId}><p class="text-normal text-gray-500"${_scopeId}>Recipes</p><p class="text-large font-bold"${_scopeId}>1 Recipe</p><a href="/create_post"${_scopeId}><button class="mt-4 border-4 border-black-100 bg-yellow-300 hover:bg-yellow-500 text-black font-semibold py-2 px-8 rounded-xl shadow-md"${_scopeId}> Recipe </button></a></div><div class="bg-gray-100 p-8 rounded-xl shadow-lg"${_scopeId}><p class="text-normal text-gray-500"${_scopeId}>Income</p><p class="text-large font-bold"${_scopeId}>₱ 10.00</p></div></div><div class="bg-gray-100 p-8 rounded-xl shadow-lg w-1/3 flex flex-col"${_scopeId}><p class="text-normal text-black-100 font-semibold mb-4 border-b pb-2"${_scopeId}>Viewer Growth</p><img src="https://placehold.co/300x200" alt="Chart" class="mt-4 rounded-lg"${_scopeId}></div></div><div class="flex justify-center mt-12"${_scopeId}><button class="text-normal border-4 border-black-100 bg-yellow-300 hover:bg-yellow-500 text-black font-semibold py-4 px-16 rounded-xl shadow-lg"${_scopeId}> View Recipes </button></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative h-[998px] overflow-hidden" }, [
                createVNode("div", { class: "absolute inset-0 -m-[20px]" }, [
                  createVNode("div", {
                    class: "absolute inset-0 bg-cover bg-center",
                    style: { "background-image": "url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png')", "filter": "brightness(0.3) blur(20px)" }
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-center h-full relative" }, [
                  createVNode("div", { class: "bg-white w-[200vh] p-12 rounded-3xl shadow-2xl" }, [
                    createVNode("h1", { class: "text-center text-large font-bold mb-10" }, "Dashboard"),
                    createVNode("div", { class: "flex gap-12" }, [
                      createVNode("div", { class: "bg-yellow-300 w-1/3 p-10 rounded-[2rem] shadow-[5px_5px_10px_rgba(0,0,0,0.5)] relative" }, [
                        createVNode("div", { class: "absolute top-6 right-6 text-gray-600 cursor-pointer" }, [
                          createVNode("i", { class: "fas fa-pen text-2xl" })
                        ]),
                        createVNode("div", { class: "flex flex-col items-center" }, [
                          createVNode("div", { class: "w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center shadow-md" }, [
                            createVNode("i", { class: "fas fa-user text-6xl text-gray-500" })
                          ]),
                          createVNode("div", { class: "mt-8 border-t border-black w-full" }),
                          createVNode("p", { class: "text-center mt-4 font-semibold text-large" }, "Code_Celestia"),
                          createVNode("div", { class: "w-full text-left mt-4 pl-4" }, [
                            createVNode("p", { class: "text-normal font-medium" }, "Email:"),
                            createVNode("p", { class: "text-normal font-medium" }, "Date Joined:")
                          ])
                        ]),
                        createVNode("button", { class: "absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-green-300 text-black-100 py-4 px-10 rounded-2xl font-semibold shadow-[5px_5px_10px_rgba(0,0,0,0.3)] text-normal" }, " Log out ")
                      ]),
                      createVNode("div", { class: "flex flex-col gap-8 w-1/3" }, [
                        createVNode("div", { class: "bg-gray-100 p-8 rounded-xl shadow-lg" }, [
                          createVNode("p", { class: "text-normal text-gray-500" }, "Total Viewers"),
                          createVNode("p", { class: "text-large font-bold" }, "18,000 viewers")
                        ]),
                        createVNode("div", { class: "bg-gray-100 p-8 rounded-xl shadow-lg" }, [
                          createVNode("p", { class: "text-normal text-gray-500" }, "Recipes"),
                          createVNode("p", { class: "text-large font-bold" }, "1 Recipe"),
                          createVNode("a", { href: "/create_post" }, [
                            createVNode("button", { class: "mt-4 border-4 border-black-100 bg-yellow-300 hover:bg-yellow-500 text-black font-semibold py-2 px-8 rounded-xl shadow-md" }, " Recipe ")
                          ])
                        ]),
                        createVNode("div", { class: "bg-gray-100 p-8 rounded-xl shadow-lg" }, [
                          createVNode("p", { class: "text-normal text-gray-500" }, "Income"),
                          createVNode("p", { class: "text-large font-bold" }, "₱ 10.00")
                        ])
                      ]),
                      createVNode("div", { class: "bg-gray-100 p-8 rounded-xl shadow-lg w-1/3 flex flex-col" }, [
                        createVNode("p", { class: "text-normal text-black-100 font-semibold mb-4 border-b pb-2" }, "Viewer Growth"),
                        createVNode("img", {
                          src: "https://placehold.co/300x200",
                          alt: "Chart",
                          class: "mt-4 rounded-lg"
                        })
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-center mt-12" }, [
                      createVNode("button", { class: "text-normal border-4 border-black-100 bg-yellow-300 hover:bg-yellow-500 text-black font-semibold py-4 px-16 rounded-xl shadow-lg" }, " View Recipes ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Chef/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
