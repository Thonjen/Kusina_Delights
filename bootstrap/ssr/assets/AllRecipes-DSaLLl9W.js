import { L as Layout } from "./frontend-CWpoDOF_.js";
import axios from "axios";
import { resolveComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, createCommentVNode, useSSRContext } from "vue";
import Swal from "sweetalert2";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "lodash";
const _sfc_main = {
  components: {
    Layout
  },
  props: {
    recipes: Object
    // Paginated recipes object
  },
  computed: {
    // Generate an array of page numbers
    pages() {
      const pages = [];
      for (let i = 1; i <= this.recipes.last_page; i++) {
        pages.push(i);
      }
      return pages;
    }
  },
  methods: {
    // Function to handle recipe deletion
    async deleteRecipe(recipeId) {
      try {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
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
          iconColor: "rgba(255, 219, 99, 1)",
          // Use golden yellow for icon color for consistency
          customClass: {
            popup: "swal-popup"
            // Add a custom class for further styling if needed
          }
        });
        if (result.isConfirmed) {
          const response = await axios.delete(`/chef/dashboard/recipes/${recipeId}`);
          if (response.status === 200) {
            const index = this.recipes.data.findIndex((recipe) => recipe.RecipeID === recipeId);
            if (index !== -1) {
              this.recipes.data.splice(index, 1);
            }
            Swal.fire({
              icon: "success",
              title: "Deleted!",
              text: "The recipe has been deleted successfully."
            });
          }
        }
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong. Please try again later."
        });
      }
    },
    // Function to handle page navigation
    goToPage(page) {
      if (page >= 1 && page <= this.recipes.last_page) {
        this.$inertia.get(`/chef/dashboard/recipes/all`, { page });
      }
    },
    // Function to handle the back button click
    goBack() {
      this.$inertia.visit("/chef/dashboard");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="relative overflow-hidden"${_scopeId}><div class="absolute inset-0 -m-[20px]"${_scopeId}><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png')", "filter": "brightness(0.3) blur(20px)" })}"${_scopeId}></div></div><div class="flex items-center justify-center h-full relative mt-10 mb-10"${_scopeId}><div class="bg-white w-full max-w-screen-lg p-12 rounded-3xl shadow-2xl"${_scopeId}><h1 class="text-center text-3xl font-bold mb-10"${_scopeId}>All Recipes</h1><div class="flex flex-col gap-8 w-full min-h-[400px]"${_scopeId}><ul class="space-y-8"${_scopeId}>`);
        if ($props.recipes.data.length === 0) {
          _push2(`<li class="text-sm text-black-100"${_scopeId}>No recipes found.</li>`);
        } else {
          _push2(`<!--[-->`);
          ssrRenderList($props.recipes.data, (recipe, index) => {
            _push2(`<li class="flex items-start gap-6 transition-transform transform hover:scale-105"${_scopeId}><img${ssrRenderAttr("src", recipe.RecipePhoto ? `/storage/${recipe.RecipePhoto}` : "https://via.placeholder.com/403x212")} alt="Recipe Image" class="w-24 h-24 rounded-md object-cover shadow-md border-2 border-yellow-500"${_scopeId}><div class="w-full"${_scopeId}><div class="flex justify-between mb-4"${_scopeId}><div class="w-2/4"${_scopeId}><div class="font-semibold text-lg text-black-100 mb-2"${_scopeId}>${ssrInterpolate(recipe.RecipeTitle)}</div><div class="text-sm text-black-100"${_scopeId}><p${_scopeId}><strong${_scopeId}>Income:</strong> ₱${ssrInterpolate(recipe.income.toFixed(2))}</p><p${_scopeId}><strong${_scopeId}>Views:</strong> ${ssrInterpolate(recipe.views_count > 0 ? recipe.views_count : "No views")}</p><p class="text-black-100 italic text-sm mb-4"${_scopeId}>Created on: ${ssrInterpolate(recipe.formatted_date)}</p></div><p class="text-black-100 font-semibold"${_scopeId}>Average Rating:</p><div class="flex text-normal"${_scopeId}>`);
            if (recipe.average_rating && recipe.average_rating > 0) {
              _push2(`<!--[-->`);
              ssrRenderList(5, (star) => {
                _push2(`<i class="${ssrRenderClass(star <= Math.round(recipe.average_rating) ? "text-yellow-500" : "text-gray-300")}"${_scopeId}> ★ </i>`);
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<span class="text-gray-500 text-sm"${_scopeId}>Not reviewed yet</span>`);
            }
            _push2(`</div></div><div class="flex flex-col items-end w-2/4 gap-4"${_scopeId}><a${ssrRenderAttr("href", `/chef/dashboard/recipes/${recipe.RecipeID}/edit`)} class="px-6 py-2 bg-yellow-400 text-black-100 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out"${_scopeId}> Edit Recipe </a><button class="px-6 py-2 bg-red-400 text-white rounded-full shadow-lg hover:bg-red-500 transition-all duration-300 ease-in-out"${_scopeId}> Delete Recipe </button></div></div></div></li>`);
          });
          _push2(`<!--]-->`);
        }
        _push2(`</ul></div><div class="flex justify-center mt-8 space-x-4"${_scopeId}>`);
        if ($props.recipes.prev_page_url) {
          _push2(`<button class="flex items-center px-4 py-2 bg-yellow-400 text-black rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out"${_scopeId}><span${_scopeId}>« Previous</span></button>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="flex items-center space-x-2"${_scopeId}><!--[-->`);
        ssrRenderList($options.pages, (page) => {
          _push2(`<button class="${ssrRenderClass([{
            "bg-yellow-500": page === $props.recipes.current_page,
            "hover:bg-yellow-400": page !== $props.recipes.current_page
          }, "px-4 py-2 rounded-full text-black-100 transition-all duration-300 ease-in-out"])}"${_scopeId}>${ssrInterpolate(page)}</button>`);
        });
        _push2(`<!--]--></div>`);
        if ($props.recipes.next_page_url) {
          _push2(`<button class="flex items-center px-4 py-2 bg-yellow-400 text-black rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out"${_scopeId}><span${_scopeId}>Next »</span></button>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div><button class="text-normal border-4 border-black-100 bg-yellow-300 hover:bg-yellow-500 text-black font-semibold py-2 px-5 rounded-xl shadow-lg mx-auto block mt-8"${_scopeId}> Go Back </button></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "relative overflow-hidden" }, [
            createVNode("div", { class: "absolute inset-0 -m-[20px]" }, [
              createVNode("div", {
                class: "absolute inset-0 bg-cover bg-center",
                style: { "background-image": "url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png')", "filter": "brightness(0.3) blur(20px)" }
              })
            ]),
            createVNode("div", { class: "flex items-center justify-center h-full relative mt-10 mb-10" }, [
              createVNode("div", { class: "bg-white w-full max-w-screen-lg p-12 rounded-3xl shadow-2xl" }, [
                createVNode("h1", { class: "text-center text-3xl font-bold mb-10" }, "All Recipes"),
                createVNode("div", { class: "flex flex-col gap-8 w-full min-h-[400px]" }, [
                  createVNode("ul", { class: "space-y-8" }, [
                    $props.recipes.data.length === 0 ? (openBlock(), createBlock("li", {
                      key: 0,
                      class: "text-sm text-black-100"
                    }, "No recipes found.")) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList($props.recipes.data, (recipe, index) => {
                      return openBlock(), createBlock("li", {
                        key: index,
                        class: "flex items-start gap-6 transition-transform transform hover:scale-105"
                      }, [
                        createVNode("img", {
                          src: recipe.RecipePhoto ? `/storage/${recipe.RecipePhoto}` : "https://via.placeholder.com/403x212",
                          alt: "Recipe Image",
                          class: "w-24 h-24 rounded-md object-cover shadow-md border-2 border-yellow-500"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "w-full" }, [
                          createVNode("div", { class: "flex justify-between mb-4" }, [
                            createVNode("div", { class: "w-2/4" }, [
                              createVNode("div", { class: "font-semibold text-lg text-black-100 mb-2" }, toDisplayString(recipe.RecipeTitle), 1),
                              createVNode("div", { class: "text-sm text-black-100" }, [
                                createVNode("p", null, [
                                  createVNode("strong", null, "Income:"),
                                  createTextVNode(" ₱" + toDisplayString(recipe.income.toFixed(2)), 1)
                                ]),
                                createVNode("p", null, [
                                  createVNode("strong", null, "Views:"),
                                  createTextVNode(" " + toDisplayString(recipe.views_count > 0 ? recipe.views_count : "No views"), 1)
                                ]),
                                createVNode("p", { class: "text-black-100 italic text-sm mb-4" }, "Created on: " + toDisplayString(recipe.formatted_date), 1)
                              ]),
                              createVNode("p", { class: "text-black-100 font-semibold" }, "Average Rating:"),
                              createVNode("div", { class: "flex text-normal" }, [
                                recipe.average_rating && recipe.average_rating > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(5, (star) => {
                                  return createVNode("i", {
                                    key: star,
                                    class: star <= Math.round(recipe.average_rating) ? "text-yellow-500" : "text-gray-300"
                                  }, " ★ ", 2);
                                }), 64)) : (openBlock(), createBlock("span", {
                                  key: 1,
                                  class: "text-gray-500 text-sm"
                                }, "Not reviewed yet"))
                              ])
                            ]),
                            createVNode("div", { class: "flex flex-col items-end w-2/4 gap-4" }, [
                              createVNode("a", {
                                href: `/chef/dashboard/recipes/${recipe.RecipeID}/edit`,
                                class: "px-6 py-2 bg-yellow-400 text-black-100 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out"
                              }, " Edit Recipe ", 8, ["href"]),
                              createVNode("button", {
                                onClick: ($event) => $options.deleteRecipe(recipe.RecipeID),
                                class: "px-6 py-2 bg-red-400 text-white rounded-full shadow-lg hover:bg-red-500 transition-all duration-300 ease-in-out"
                              }, " Delete Recipe ", 8, ["onClick"])
                            ])
                          ])
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "flex justify-center mt-8 space-x-4" }, [
                  $props.recipes.prev_page_url ? (openBlock(), createBlock("button", {
                    key: 0,
                    onClick: ($event) => $options.goToPage($props.recipes.current_page - 1),
                    class: "flex items-center px-4 py-2 bg-yellow-400 text-black rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out"
                  }, [
                    createVNode("span", null, "« Previous")
                  ], 8, ["onClick"])) : createCommentVNode("", true),
                  createVNode("div", { class: "flex items-center space-x-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList($options.pages, (page) => {
                      return openBlock(), createBlock("button", {
                        key: page,
                        class: [{
                          "bg-yellow-500": page === $props.recipes.current_page,
                          "hover:bg-yellow-400": page !== $props.recipes.current_page
                        }, "px-4 py-2 rounded-full text-black-100 transition-all duration-300 ease-in-out"],
                        onClick: ($event) => $options.goToPage(page)
                      }, toDisplayString(page), 11, ["onClick"]);
                    }), 128))
                  ]),
                  $props.recipes.next_page_url ? (openBlock(), createBlock("button", {
                    key: 1,
                    onClick: ($event) => $options.goToPage($props.recipes.current_page + 1),
                    class: "flex items-center px-4 py-2 bg-yellow-400 text-black rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out"
                  }, [
                    createVNode("span", null, "Next »")
                  ], 8, ["onClick"])) : createCommentVNode("", true)
                ]),
                createVNode("button", {
                  onClick: $options.goBack,
                  class: "text-normal border-4 border-black-100 bg-yellow-300 hover:bg-yellow-500 text-black font-semibold py-2 px-5 rounded-xl shadow-lg mx-auto block mt-8"
                }, " Go Back ", 8, ["onClick"])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Chef/AllRecipes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AllRecipes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AllRecipes as default
};
