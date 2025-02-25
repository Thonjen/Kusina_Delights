import { withCtx, unref, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { L as Layout } from "./backend-B8jYqHuT.js";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-vue3";
import Swal from "sweetalert2";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-3H3I4iid.js";
import "./DropdownLink-DStkidMI.js";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    recipes: Array
    // Pass recipes from parent component
  },
  setup(__props) {
    const deleteRecipe = async (recipeId) => {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this recipe!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        background: "rgba(255, 255, 255, 1)",
        // White background for clarity
        confirmButtonColor: "rgba(204, 162, 35, 1)",
        // Golden Yellow for confirm button
        cancelButtonColor: "rgba(54, 69, 79, 1)",
        // Charcoal Gray for cancel button to provide contrast
        iconColor: "rgba(255, 219, 99, 1)"
        // Golden yellow for icon color for consistency
      });
      if (result.isConfirmed) {
        try {
          await Inertia.delete(route("recipes.destroy", recipeId));
          Swal.fire({
            title: "Deleted!",
            text: "The recipe has been deleted.",
            icon: "success",
            confirmButtonText: "Okay"
          });
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "There was an error deleting the recipe.",
            icon: "error",
            confirmButtonText: "Try Again"
          });
        }
      } else {
        Swal.fire({
          title: "Cancelled",
          text: "The recipe was not deleted.",
          icon: "info",
          confirmButtonText: "Okay"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-v-b3b2be38${_scopeId}><div class="flex justify-between items-center mb-6" data-v-b3b2be38${_scopeId}><h2 class="text-2xl font-bold text-gray-800" data-v-b3b2be38${_scopeId}>Recipes</h2>`);
            _push2(ssrRenderComponent(unref(InertiaLink), {
              href: "/recipes/create",
              class: "inline-flex items-center px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="mr-2" data-v-b3b2be38${_scopeId2}>+</span> New Recipe `);
                } else {
                  return [
                    createVNode("span", { class: "mr-2" }, "+"),
                    createTextVNode(" New Recipe ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="bg-white rounded-xl shadow-lg overflow-hidden" data-v-b3b2be38${_scopeId}><div class="overflow-x-auto" data-v-b3b2be38${_scopeId}><table class="min-w-full divide-y divide-gray-200" data-v-b3b2be38${_scopeId}><thead class="bg-gray-50" data-v-b3b2be38${_scopeId}><tr data-v-b3b2be38${_scopeId}><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-b3b2be38${_scopeId}>Recipe Title</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-b3b2be38${_scopeId}>Chef</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-b3b2be38${_scopeId}>Cooking Time</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-b3b2be38${_scopeId}>Servings</th><th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider" data-v-b3b2be38${_scopeId}>Actions</th></tr></thead><tbody class="bg-white divide-y divide-gray-200" data-v-b3b2be38${_scopeId}><!--[-->`);
            ssrRenderList(__props.recipes, (recipe) => {
              var _a, _b;
              _push2(`<tr class="hover:bg-gray-50" data-v-b3b2be38${_scopeId}><td class="px-6 py-4 whitespace-nowrap" data-v-b3b2be38${_scopeId}><p class="text-lg font-medium" data-v-b3b2be38${_scopeId}>${ssrInterpolate(recipe.RecipeTitle)}</p></td><td class="px-6 py-4 whitespace-nowrap" data-v-b3b2be38${_scopeId}><p class="text-sm text-gray-500" data-v-b3b2be38${_scopeId}>${ssrInterpolate(((_b = (_a = recipe.chef) == null ? void 0 : _a.user) == null ? void 0 : _b.name) || "Unknown Chef")}</p></td><td class="px-6 py-4 whitespace-nowrap" data-v-b3b2be38${_scopeId}><p class="text-sm" data-v-b3b2be38${_scopeId}>${ssrInterpolate(recipe.CookingTime)} min</p></td><td class="px-6 py-4 whitespace-nowrap" data-v-b3b2be38${_scopeId}><p class="text-sm" data-v-b3b2be38${_scopeId}>${ssrInterpolate(recipe.Servings)} servings</p></td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" data-v-b3b2be38${_scopeId}><div class="flex space-x-3 justify-end" data-v-b3b2be38${_scopeId}>`);
              _push2(ssrRenderComponent(unref(InertiaLink), {
                href: `/api/recipes/${recipe.RecipeID}`,
                class: "text-blue-600 hover:text-blue-900 cursor-pointer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` View `);
                  } else {
                    return [
                      createTextVNode(" View ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(InertiaLink), {
                href: `/recipes/${recipe.RecipeID}/edit`,
                class: "text-orange-600 hover:text-orange-900"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Edit `);
                  } else {
                    return [
                      createTextVNode(" Edit ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<button class="text-red-600 hover:text-red-900" data-v-b3b2be38${_scopeId}> Delete </button></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "flex justify-between items-center mb-6" }, [
                  createVNode("h2", { class: "text-2xl font-bold text-gray-800" }, "Recipes"),
                  createVNode(unref(InertiaLink), {
                    href: "/recipes/create",
                    class: "inline-flex items-center px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "mr-2" }, "+"),
                      createTextVNode(" New Recipe ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "bg-white rounded-xl shadow-lg overflow-hidden" }, [
                  createVNode("div", { class: "overflow-x-auto" }, [
                    createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                      createVNode("thead", { class: "bg-gray-50" }, [
                        createVNode("tr", null, [
                          createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Recipe Title"),
                          createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Chef"),
                          createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Cooking Time"),
                          createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Servings"),
                          createVNode("th", { class: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Actions")
                        ])
                      ]),
                      createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.recipes, (recipe) => {
                          var _a, _b;
                          return openBlock(), createBlock("tr", {
                            key: recipe.RecipeID,
                            class: "hover:bg-gray-50"
                          }, [
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                              createVNode("p", { class: "text-lg font-medium" }, toDisplayString(recipe.RecipeTitle), 1)
                            ]),
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                              createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(((_b = (_a = recipe.chef) == null ? void 0 : _a.user) == null ? void 0 : _b.name) || "Unknown Chef"), 1)
                            ]),
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                              createVNode("p", { class: "text-sm" }, toDisplayString(recipe.CookingTime) + " min", 1)
                            ]),
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                              createVNode("p", { class: "text-sm" }, toDisplayString(recipe.Servings) + " servings", 1)
                            ]),
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" }, [
                              createVNode("div", { class: "flex space-x-3 justify-end" }, [
                                createVNode(unref(InertiaLink), {
                                  href: `/api/recipes/${recipe.RecipeID}`,
                                  class: "text-blue-600 hover:text-blue-900 cursor-pointer"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" View ")
                                  ]),
                                  _: 2
                                }, 1032, ["href"]),
                                createVNode(unref(InertiaLink), {
                                  href: `/recipes/${recipe.RecipeID}/edit`,
                                  class: "text-orange-600 hover:text-orange-900"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Edit ")
                                  ]),
                                  _: 2
                                }, 1032, ["href"]),
                                createVNode("button", {
                                  onClick: ($event) => deleteRecipe(recipe.RecipeID),
                                  class: "text-red-600 hover:text-red-900"
                                }, " Delete ", 8, ["onClick"])
                              ])
                            ])
                          ]);
                        }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Recipes/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b3b2be38"]]);
export {
  Index as default
};
