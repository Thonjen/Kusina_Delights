import { withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, withModifiers, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { L as Layout } from "./backend-DaIRI2w_.js";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-vue3";
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
      if (confirm("Are you sure you want to delete this recipe?")) {
        await Inertia.delete(route("recipes.destroy", recipeId));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center mb-4" data-v-bf3178b6${_scopeId}><h2 class="text-2xl font-semibold text-gray-700" data-v-bf3178b6${_scopeId}>Recipes</h2>`);
            _push2(ssrRenderComponent(unref(InertiaLink), {
              href: "/recipes/create",
              class: "bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`New Recipe`);
                } else {
                  return [
                    createTextVNode("New Recipe")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="bg-white rounded-lg shadow overflow-hidden" data-v-bf3178b6${_scopeId}><div class="p-4 border-t" data-v-bf3178b6${_scopeId}><div class="flex mb-2 font-semibold text-gray-700" data-v-bf3178b6${_scopeId}><div class="flex-1" data-v-bf3178b6${_scopeId}>Recipe Title</div><div class="flex-1" data-v-bf3178b6${_scopeId}>Chef</div><div class="flex-1" data-v-bf3178b6${_scopeId}>Cooking Time</div><div class="flex-1" data-v-bf3178b6${_scopeId}>Servings</div><div class="flex-1 text-center" data-v-bf3178b6${_scopeId}>Actions</div></div>`);
            if (__props.recipes.length > 0) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.recipes, (recipe) => {
                var _a, _b;
                _push2(`<div class="flex justify-between items-center py-3 border-b" data-v-bf3178b6${_scopeId}><div class="flex-1" data-v-bf3178b6${_scopeId}><p class="text-lg font-medium" data-v-bf3178b6${_scopeId}>${ssrInterpolate(recipe.RecipeTitle)}</p></div><div class="flex-1" data-v-bf3178b6${_scopeId}><p class="text-sm text-gray-500" data-v-bf3178b6${_scopeId}>${ssrInterpolate(((_b = (_a = recipe.chef) == null ? void 0 : _a.user) == null ? void 0 : _b.name) || "Unknown Chef")}</p></div><div class="flex-1" data-v-bf3178b6${_scopeId}><p class="text-sm" data-v-bf3178b6${_scopeId}>${ssrInterpolate(recipe.CookingTime)} min</p></div><div class="flex-1" data-v-bf3178b6${_scopeId}><p class="text-sm" data-v-bf3178b6${_scopeId}>${ssrInterpolate(recipe.Servings)} servings</p></div><div class="flex-1 text-center" data-v-bf3178b6${_scopeId}>`);
                _push2(ssrRenderComponent(unref(InertiaLink), {
                  href: "/recipes/" + recipe.RecipeID + "/edit",
                  class: "text-blue-500 hover:text-blue-700"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Edit`);
                    } else {
                      return [
                        createTextVNode("Edit")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(InertiaLink), {
                  href: "/recipes/" + recipe.RecipeID + "/show",
                  class: "text-gray-500 hover:text-gray-700"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`View`);
                    } else {
                      return [
                        createTextVNode("View")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<form${ssrRenderAttr("action", _ctx.route("recipes.destroy", recipe.RecipeID))} method="POST" data-v-bf3178b6${_scopeId}>`);
                _push2(ssrRenderComponent(unref(InertiaLink), {
                  class: "text-red-600 hover:text-red-800 cursor-pointer",
                  onClick: ($event) => deleteRecipe(recipe.RecipeID)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Delete `);
                    } else {
                      return [
                        createTextVNode(" Delete ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</form></div></div>`);
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                createVNode("h2", { class: "text-2xl font-semibold text-gray-700" }, "Recipes"),
                createVNode(unref(InertiaLink), {
                  href: "/recipes/create",
                  class: "bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg"
                }, {
                  default: withCtx(() => [
                    createTextVNode("New Recipe")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "bg-white rounded-lg shadow overflow-hidden" }, [
                createVNode("div", { class: "p-4 border-t" }, [
                  createVNode("div", { class: "flex mb-2 font-semibold text-gray-700" }, [
                    createVNode("div", { class: "flex-1" }, "Recipe Title"),
                    createVNode("div", { class: "flex-1" }, "Chef"),
                    createVNode("div", { class: "flex-1" }, "Cooking Time"),
                    createVNode("div", { class: "flex-1" }, "Servings"),
                    createVNode("div", { class: "flex-1 text-center" }, "Actions")
                  ]),
                  __props.recipes.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(__props.recipes, (recipe) => {
                    var _a, _b;
                    return openBlock(), createBlock("div", {
                      key: recipe.RecipeID,
                      class: "flex justify-between items-center py-3 border-b"
                    }, [
                      createVNode("div", { class: "flex-1" }, [
                        createVNode("p", { class: "text-lg font-medium" }, toDisplayString(recipe.RecipeTitle), 1)
                      ]),
                      createVNode("div", { class: "flex-1" }, [
                        createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(((_b = (_a = recipe.chef) == null ? void 0 : _a.user) == null ? void 0 : _b.name) || "Unknown Chef"), 1)
                      ]),
                      createVNode("div", { class: "flex-1" }, [
                        createVNode("p", { class: "text-sm" }, toDisplayString(recipe.CookingTime) + " min", 1)
                      ]),
                      createVNode("div", { class: "flex-1" }, [
                        createVNode("p", { class: "text-sm" }, toDisplayString(recipe.Servings) + " servings", 1)
                      ]),
                      createVNode("div", { class: "flex-1 text-center" }, [
                        createVNode(unref(InertiaLink), {
                          href: "/recipes/" + recipe.RecipeID + "/edit",
                          class: "text-blue-500 hover:text-blue-700"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Edit")
                          ]),
                          _: 2
                        }, 1032, ["href"]),
                        createVNode(unref(InertiaLink), {
                          href: "/recipes/" + recipe.RecipeID + "/show",
                          class: "text-gray-500 hover:text-gray-700"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("View")
                          ]),
                          _: 2
                        }, 1032, ["href"]),
                        createVNode("form", {
                          action: _ctx.route("recipes.destroy", recipe.RecipeID),
                          method: "POST",
                          onSubmit: withModifiers(($event) => deleteRecipe(recipe.RecipeID), ["prevent"])
                        }, [
                          createVNode(unref(InertiaLink), {
                            class: "text-red-600 hover:text-red-800 cursor-pointer",
                            onClick: ($event) => deleteRecipe(recipe.RecipeID)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Delete ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ], 40, ["action", "onSubmit"])
                      ])
                    ]);
                  }), 128)) : createCommentVNode("", true)
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
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bf3178b6"]]);
export {
  Index as default
};
