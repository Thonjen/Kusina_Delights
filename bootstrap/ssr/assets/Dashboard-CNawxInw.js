import { withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { L as Layout } from "./backend-DaIRI2w_.js";
import "@inertiajs/inertia-vue3";
import "./ApplicationLogo-3H3I4iid.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./DropdownLink-DStkidMI.js";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"${_scopeId}><div class="col-span-2 flex items-center p-6 bg-white rounded-lg shadow"${_scopeId}><div class="w-12 h-12 bg-gray-800 text-white flex items-center justify-center rounded-full font-semibold mr-4"${_scopeId}>A</div><div${_scopeId}><p class="font-bold"${_scopeId}>Welcome</p><p class="text-sm text-gray-500"${_scopeId}>Admin</p></div><button class="ml-auto px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"${_scopeId}><i class="fas fa-sign-out-alt mr-2"${_scopeId}></i> Sign out </button></div><div class="p-6 bg-white rounded-lg shadow"${_scopeId}><p class="text-sm text-gray-500"${_scopeId}>Viewers</p><p class="text-2xl font-bold text-gray-800"${_scopeId}>18,000 viewers</p><p class="text-sm text-green-500 mt-2 flex items-center"${_scopeId}><span${_scopeId}>1,000 increase</span><i class="fas fa-arrow-up ml-1"${_scopeId}></i></p></div><div class="p-6 bg-white rounded-lg shadow"${_scopeId}><p class="text-sm text-gray-500"${_scopeId}>Posts</p><p class="text-2xl font-bold text-gray-800"${_scopeId}>3 posts</p><p class="text-sm text-red-500 mt-2 flex items-center"${_scopeId}><span${_scopeId}>10% decrease</span><i class="fas fa-arrow-down ml-1"${_scopeId}></i></p></div><div class="p-6 bg-white rounded-lg shadow"${_scopeId}><p class="text-sm text-gray-500"${_scopeId}>Comments</p><p class="text-2xl font-bold text-gray-800"${_scopeId}>10 comments</p><p class="text-sm text-green-500 mt-2 flex items-center"${_scopeId}><span${_scopeId}>5 increase</span><i class="fas fa-arrow-up ml-1"${_scopeId}></i></p></div></div><div class="p-6 bg-white rounded-lg shadow"${_scopeId}><h3 class="text-lg font-bold mb-4"${_scopeId}>User Growth</h3><img src="https://placehold.co/600x200" alt="User Growth Chart"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6" }, [
                createVNode("div", { class: "col-span-2 flex items-center p-6 bg-white rounded-lg shadow" }, [
                  createVNode("div", { class: "w-12 h-12 bg-gray-800 text-white flex items-center justify-center rounded-full font-semibold mr-4" }, "A"),
                  createVNode("div", null, [
                    createVNode("p", { class: "font-bold" }, "Welcome"),
                    createVNode("p", { class: "text-sm text-gray-500" }, "Admin")
                  ]),
                  createVNode("button", { class: "ml-auto px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100" }, [
                    createVNode("i", { class: "fas fa-sign-out-alt mr-2" }),
                    createTextVNode(" Sign out ")
                  ])
                ]),
                createVNode("div", { class: "p-6 bg-white rounded-lg shadow" }, [
                  createVNode("p", { class: "text-sm text-gray-500" }, "Viewers"),
                  createVNode("p", { class: "text-2xl font-bold text-gray-800" }, "18,000 viewers"),
                  createVNode("p", { class: "text-sm text-green-500 mt-2 flex items-center" }, [
                    createVNode("span", null, "1,000 increase"),
                    createVNode("i", { class: "fas fa-arrow-up ml-1" })
                  ])
                ]),
                createVNode("div", { class: "p-6 bg-white rounded-lg shadow" }, [
                  createVNode("p", { class: "text-sm text-gray-500" }, "Posts"),
                  createVNode("p", { class: "text-2xl font-bold text-gray-800" }, "3 posts"),
                  createVNode("p", { class: "text-sm text-red-500 mt-2 flex items-center" }, [
                    createVNode("span", null, "10% decrease"),
                    createVNode("i", { class: "fas fa-arrow-down ml-1" })
                  ])
                ]),
                createVNode("div", { class: "p-6 bg-white rounded-lg shadow" }, [
                  createVNode("p", { class: "text-sm text-gray-500" }, "Comments"),
                  createVNode("p", { class: "text-2xl font-bold text-gray-800" }, "10 comments"),
                  createVNode("p", { class: "text-sm text-green-500 mt-2 flex items-center" }, [
                    createVNode("span", null, "5 increase"),
                    createVNode("i", { class: "fas fa-arrow-up ml-1" })
                  ])
                ])
              ]),
              createVNode("div", { class: "p-6 bg-white rounded-lg shadow" }, [
                createVNode("h3", { class: "text-lg font-bold mb-4" }, "User Growth"),
                createVNode("img", {
                  src: "https://placehold.co/600x200",
                  alt: "User Growth Chart"
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
