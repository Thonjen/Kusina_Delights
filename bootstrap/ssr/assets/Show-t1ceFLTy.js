import { withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-vue3";
import { L as Layout } from "./backend-B8jYqHuT.js";
import Swal from "sweetalert2";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-3H3I4iid.js";
import "./DropdownLink-DStkidMI.js";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    recipe: Object
  },
  setup(__props) {
    const deleteRecipe = async (recipeId) => {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        background: "rgba(255, 255, 255, 1)",
        confirmButtonColor: "rgba(204, 162, 35, 1)",
        cancelButtonColor: "rgba(54, 69, 79, 1)",
        iconColor: "rgba(255, 219, 99, 1)"
      });
      if (result.isConfirmed) {
        Inertia.delete(route("recipes.destroy", recipeId));
        Swal.fire({
          title: "Deleted!",
          text: "Recipe has been deleted.",
          icon: "success",
          confirmButtonText: "Okay"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-v-a28cdeff${_scopeId}><div class="bg-white rounded-xl shadow-lg overflow-hidden" data-v-a28cdeff${_scopeId}><div class="p-6 sm:p-8 border-b border-gray-200" data-v-a28cdeff${_scopeId}><div class="flex flex-col md:flex-row md:items-center md:justify-between" data-v-a28cdeff${_scopeId}><div class="flex-1" data-v-a28cdeff${_scopeId}><h2 class="text-3xl font-bold text-gray-800" data-v-a28cdeff${_scopeId}>${ssrInterpolate(__props.recipe.RecipeTitle)}</h2><p class="mt-2 text-lg text-gray-600" data-v-a28cdeff${_scopeId}> By <span class="font-semibold text-gray-800" data-v-a28cdeff${_scopeId}>${ssrInterpolate(((_b = (_a = __props.recipe.chef) == null ? void 0 : _a.user) == null ? void 0 : _b.name) || "Unknown Chef")}</span></p></div><div class="mt-4 md:mt-0 flex space-x-4" data-v-a28cdeff${_scopeId}>`);
            _push2(ssrRenderComponent(unref(InertiaLink), {
              href: _ctx.route("recipes.edit", __props.recipe.RecipeID),
              class: "inline-flex items-center px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Edit Recipe `);
                } else {
                  return [
                    createTextVNode(" Edit Recipe ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<button class="inline-flex items-center px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200" data-v-a28cdeff${_scopeId}> Delete Recipe </button></div></div></div><div class="p-6 sm:p-8" data-v-a28cdeff${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-v-a28cdeff${_scopeId}><div class="relative h-96 rounded-lg overflow-hidden shadow-lg" data-v-a28cdeff${_scopeId}>`);
            if (__props.recipe.RecipePhoto) {
              _push2(`<img${ssrRenderAttr("src", `/storage/${__props.recipe.RecipePhoto}`)}${ssrRenderAttr("alt", __props.recipe.RecipeTitle)} class="absolute inset-0 w-full h-full object-cover" data-v-a28cdeff${_scopeId}>`);
            } else {
              _push2(`<div class="absolute inset-0 bg-gray-100 flex items-center justify-center" data-v-a28cdeff${_scopeId}><span class="text-gray-400" data-v-a28cdeff${_scopeId}>No image available</span></div>`);
            }
            _push2(`</div><div class="space-y-6" data-v-a28cdeff${_scopeId}><div class="grid grid-cols-2 gap-4" data-v-a28cdeff${_scopeId}><div class="bg-orange-50 p-4 rounded-lg" data-v-a28cdeff${_scopeId}><p class="text-sm text-orange-600 font-medium" data-v-a28cdeff${_scopeId}>Preparation Time</p><p class="text-2xl font-bold text-orange-900" data-v-a28cdeff${_scopeId}>${ssrInterpolate(__props.recipe.Preparation)} min</p></div><div class="bg-orange-50 p-4 rounded-lg" data-v-a28cdeff${_scopeId}><p class="text-sm text-orange-600 font-medium" data-v-a28cdeff${_scopeId}>Cooking Time</p><p class="text-2xl font-bold text-orange-900" data-v-a28cdeff${_scopeId}>${ssrInterpolate(__props.recipe.CookingTime)} min</p></div><div class="bg-orange-50 p-4 rounded-lg" data-v-a28cdeff${_scopeId}><p class="text-sm text-orange-600 font-medium" data-v-a28cdeff${_scopeId}>Difficulty</p><p class="text-2xl font-bold text-orange-900" data-v-a28cdeff${_scopeId}>${ssrInterpolate(__props.recipe.Difficulty)}</p></div><div class="bg-orange-50 p-4 rounded-lg" data-v-a28cdeff${_scopeId}><p class="text-sm text-orange-600 font-medium" data-v-a28cdeff${_scopeId}>Servings</p><p class="text-2xl font-bold text-orange-900" data-v-a28cdeff${_scopeId}>${ssrInterpolate(__props.recipe.Servings)}</p></div></div><div data-v-a28cdeff${_scopeId}><h3 class="text-xl font-semibold text-gray-800 mb-2" data-v-a28cdeff${_scopeId}>Description</h3><p class="text-gray-600" data-v-a28cdeff${_scopeId}>${ssrInterpolate(__props.recipe.Description)}</p></div></div></div><div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8" data-v-a28cdeff${_scopeId}><div class="bg-gray-50 p-6 rounded-lg" data-v-a28cdeff${_scopeId}><h3 class="text-xl font-semibold text-gray-800 mb-4" data-v-a28cdeff${_scopeId}>Ingredients</h3><div class="prose prose-orange max-w-none" data-v-a28cdeff${_scopeId}>${ssrInterpolate(__props.recipe.Ingredients)}</div></div><div class="bg-gray-50 p-6 rounded-lg" data-v-a28cdeff${_scopeId}><h3 class="text-xl font-semibold text-gray-800 mb-4" data-v-a28cdeff${_scopeId}>Instructions</h3><div class="prose prose-orange max-w-none" data-v-a28cdeff${_scopeId}>${ssrInterpolate(__props.recipe.Instructions)}</div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "bg-white rounded-xl shadow-lg overflow-hidden" }, [
                  createVNode("div", { class: "p-6 sm:p-8 border-b border-gray-200" }, [
                    createVNode("div", { class: "flex flex-col md:flex-row md:items-center md:justify-between" }, [
                      createVNode("div", { class: "flex-1" }, [
                        createVNode("h2", { class: "text-3xl font-bold text-gray-800" }, toDisplayString(__props.recipe.RecipeTitle), 1),
                        createVNode("p", { class: "mt-2 text-lg text-gray-600" }, [
                          createTextVNode(" By "),
                          createVNode("span", { class: "font-semibold text-gray-800" }, toDisplayString(((_d = (_c = __props.recipe.chef) == null ? void 0 : _c.user) == null ? void 0 : _d.name) || "Unknown Chef"), 1)
                        ])
                      ]),
                      createVNode("div", { class: "mt-4 md:mt-0 flex space-x-4" }, [
                        createVNode(unref(InertiaLink), {
                          href: _ctx.route("recipes.edit", __props.recipe.RecipeID),
                          class: "inline-flex items-center px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Edit Recipe ")
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode("button", {
                          onClick: ($event) => deleteRecipe(__props.recipe.RecipeID),
                          class: "inline-flex items-center px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
                        }, " Delete Recipe ", 8, ["onClick"])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "p-6 sm:p-8" }, [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-8" }, [
                      createVNode("div", { class: "relative h-96 rounded-lg overflow-hidden shadow-lg" }, [
                        __props.recipe.RecipePhoto ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: `/storage/${__props.recipe.RecipePhoto}`,
                          alt: __props.recipe.RecipeTitle,
                          class: "absolute inset-0 w-full h-full object-cover"
                        }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "absolute inset-0 bg-gray-100 flex items-center justify-center"
                        }, [
                          createVNode("span", { class: "text-gray-400" }, "No image available")
                        ]))
                      ]),
                      createVNode("div", { class: "space-y-6" }, [
                        createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                          createVNode("div", { class: "bg-orange-50 p-4 rounded-lg" }, [
                            createVNode("p", { class: "text-sm text-orange-600 font-medium" }, "Preparation Time"),
                            createVNode("p", { class: "text-2xl font-bold text-orange-900" }, toDisplayString(__props.recipe.Preparation) + " min", 1)
                          ]),
                          createVNode("div", { class: "bg-orange-50 p-4 rounded-lg" }, [
                            createVNode("p", { class: "text-sm text-orange-600 font-medium" }, "Cooking Time"),
                            createVNode("p", { class: "text-2xl font-bold text-orange-900" }, toDisplayString(__props.recipe.CookingTime) + " min", 1)
                          ]),
                          createVNode("div", { class: "bg-orange-50 p-4 rounded-lg" }, [
                            createVNode("p", { class: "text-sm text-orange-600 font-medium" }, "Difficulty"),
                            createVNode("p", { class: "text-2xl font-bold text-orange-900" }, toDisplayString(__props.recipe.Difficulty), 1)
                          ]),
                          createVNode("div", { class: "bg-orange-50 p-4 rounded-lg" }, [
                            createVNode("p", { class: "text-sm text-orange-600 font-medium" }, "Servings"),
                            createVNode("p", { class: "text-2xl font-bold text-orange-900" }, toDisplayString(__props.recipe.Servings), 1)
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-xl font-semibold text-gray-800 mb-2" }, "Description"),
                          createVNode("p", { class: "text-gray-600" }, toDisplayString(__props.recipe.Description), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mt-8 grid grid-cols-1 md:grid-cols-2 gap-8" }, [
                      createVNode("div", { class: "bg-gray-50 p-6 rounded-lg" }, [
                        createVNode("h3", { class: "text-xl font-semibold text-gray-800 mb-4" }, "Ingredients"),
                        createVNode("div", { class: "prose prose-orange max-w-none" }, toDisplayString(__props.recipe.Ingredients), 1)
                      ]),
                      createVNode("div", { class: "bg-gray-50 p-6 rounded-lg" }, [
                        createVNode("h3", { class: "text-xl font-semibold text-gray-800 mb-4" }, "Instructions"),
                        createVNode("div", { class: "prose prose-orange max-w-none" }, toDisplayString(__props.recipe.Instructions), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Recipes/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a28cdeff"]]);
export {
  Show as default
};
