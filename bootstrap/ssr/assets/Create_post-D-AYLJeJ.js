import { withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { L as Layout } from "./frontend-qce4MpuY.js";
import "axios";
import "lodash";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Create_post",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative h-[998px] overflow-hidden"${_scopeId}><div class="absolute inset-0 -m-[20px]"${_scopeId}><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png')", "filter": "brightness(0.3) blur(20px)" })}"${_scopeId}></div></div><div class="flex items-center justify-center h-full relative px-10 sm:px-12 lg:px-16"${_scopeId}><div class="bg-white w-full max-w-[200vh] p-12 sm:p-16 lg:p-20 rounded-2xl shadow-lg"${_scopeId}><h1 class="text-center text-large font-bold mb-10"${_scopeId}>Create Posts</h1><form class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"${_scopeId}><div class="col-span-1"${_scopeId}><label class="block text-lg font-semibold mb-2"${_scopeId}>Recipe Title*</label><input type="text" class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" required${_scopeId}></div><div class="col-span-1"${_scopeId}><label class="block text-lg font-semibold mb-2"${_scopeId}>Description</label><input type="text" class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"${_scopeId}></div><div class="col-span-1"${_scopeId}><label class="block text-lg font-semibold mb-2"${_scopeId}>Ingredients</label><input type="text" class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"${_scopeId}></div><div class="col-span-1"${_scopeId}><label class="block text-lg font-semibold mb-2"${_scopeId}>Video Link</label><input type="text" class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"${_scopeId}></div><div class="col-span-1"${_scopeId}><label class="block text-lg font-semibold mb-2"${_scopeId}>Instructions</label><input type="text" class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"${_scopeId}></div><div class="col-span-1"${_scopeId}><label class="block text-lg font-semibold mb-2"${_scopeId}>Recipe Photo</label><div class="w-full border border-dashed border-gray-300 rounded-md p-6 text-center text-lg text-gray-500"${_scopeId}> Drag &amp; Drop your files or <span class="text-orange-500 cursor-pointer"${_scopeId}>Browse</span></div></div><div class="col-span-1"${_scopeId}><label class="block text-lg font-semibold mb-2"${_scopeId}>Preparation Time (minutes)</label><input type="number" class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"${_scopeId}></div><div class="col-span-1"${_scopeId}><label class="block text-lg font-semibold mb-2"${_scopeId}>Cooking Time (minutes)</label><input type="number" class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"${_scopeId}></div><div class="col-span-1"${_scopeId}><label class="block text-lg font-semibold mb-2"${_scopeId}>Difficulty</label><select class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"${_scopeId}><option${_scopeId}>Select an option</option><option${_scopeId}>Easy</option><option${_scopeId}>Medium</option><option${_scopeId}>Hard</option></select></div><div class="col-span-1"${_scopeId}><label class="block text-lg font-semibold mb-2"${_scopeId}>Servings</label><input type="number" class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"${_scopeId}></div><div class="col-span-3 flex justify-center mt-6"${_scopeId}><a href="/dashboard"${_scopeId}><button type="submit" class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-md shadow-md mr-6"${_scopeId}> Create </button></a><a href="/dashboard"${_scopeId}><button type="button" class="bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-md shadow-md"${_scopeId}> Cancel </button></a></div></form></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative h-[998px] overflow-hidden" }, [
                createVNode("div", { class: "absolute inset-0 -m-[20px]" }, [
                  createVNode("div", {
                    class: "absolute inset-0 bg-cover bg-center",
                    style: { "background-image": "url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png')", "filter": "brightness(0.3) blur(20px)" }
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-center h-full relative px-10 sm:px-12 lg:px-16" }, [
                  createVNode("div", { class: "bg-white w-full max-w-[200vh] p-12 sm:p-16 lg:p-20 rounded-2xl shadow-lg" }, [
                    createVNode("h1", { class: "text-center text-large font-bold mb-10" }, "Create Posts"),
                    createVNode("form", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" }, [
                      createVNode("div", { class: "col-span-1" }, [
                        createVNode("label", { class: "block text-lg font-semibold mb-2" }, "Recipe Title*"),
                        createVNode("input", {
                          type: "text",
                          class: "w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500",
                          required: ""
                        })
                      ]),
                      createVNode("div", { class: "col-span-1" }, [
                        createVNode("label", { class: "block text-lg font-semibold mb-2" }, "Description"),
                        createVNode("input", {
                          type: "text",
                          class: "w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        })
                      ]),
                      createVNode("div", { class: "col-span-1" }, [
                        createVNode("label", { class: "block text-lg font-semibold mb-2" }, "Ingredients"),
                        createVNode("input", {
                          type: "text",
                          class: "w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        })
                      ]),
                      createVNode("div", { class: "col-span-1" }, [
                        createVNode("label", { class: "block text-lg font-semibold mb-2" }, "Video Link"),
                        createVNode("input", {
                          type: "text",
                          class: "w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        })
                      ]),
                      createVNode("div", { class: "col-span-1" }, [
                        createVNode("label", { class: "block text-lg font-semibold mb-2" }, "Instructions"),
                        createVNode("input", {
                          type: "text",
                          class: "w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        })
                      ]),
                      createVNode("div", { class: "col-span-1" }, [
                        createVNode("label", { class: "block text-lg font-semibold mb-2" }, "Recipe Photo"),
                        createVNode("div", { class: "w-full border border-dashed border-gray-300 rounded-md p-6 text-center text-lg text-gray-500" }, [
                          createTextVNode(" Drag & Drop your files or "),
                          createVNode("span", { class: "text-orange-500 cursor-pointer" }, "Browse")
                        ])
                      ]),
                      createVNode("div", { class: "col-span-1" }, [
                        createVNode("label", { class: "block text-lg font-semibold mb-2" }, "Preparation Time (minutes)"),
                        createVNode("input", {
                          type: "number",
                          class: "w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        })
                      ]),
                      createVNode("div", { class: "col-span-1" }, [
                        createVNode("label", { class: "block text-lg font-semibold mb-2" }, "Cooking Time (minutes)"),
                        createVNode("input", {
                          type: "number",
                          class: "w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        })
                      ]),
                      createVNode("div", { class: "col-span-1" }, [
                        createVNode("label", { class: "block text-lg font-semibold mb-2" }, "Difficulty"),
                        createVNode("select", { class: "w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" }, [
                          createVNode("option", null, "Select an option"),
                          createVNode("option", null, "Easy"),
                          createVNode("option", null, "Medium"),
                          createVNode("option", null, "Hard")
                        ])
                      ]),
                      createVNode("div", { class: "col-span-1" }, [
                        createVNode("label", { class: "block text-lg font-semibold mb-2" }, "Servings"),
                        createVNode("input", {
                          type: "number",
                          class: "w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        })
                      ]),
                      createVNode("div", { class: "col-span-3 flex justify-center mt-6" }, [
                        createVNode("a", { href: "/dashboard" }, [
                          createVNode("button", {
                            type: "submit",
                            class: "bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-md shadow-md mr-6"
                          }, " Create ")
                        ]),
                        createVNode("a", { href: "/dashboard" }, [
                          createVNode("button", {
                            type: "button",
                            class: "bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-md shadow-md"
                          }, " Cancel ")
                        ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Chef/Create_post.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
