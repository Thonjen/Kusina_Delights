import axios from "axios";
import { L as Layout } from "./frontend-CWpoDOF_.js";
import Swal from "sweetalert2";
import { resolveComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "lodash";
const _sfc_main = {
  components: {
    Layout
  },
  props: {
    chef: Object,
    profile: Object,
    recipes: Array,
    // Recipes array including details like average_rating, formatted_date
    totalViews: Number,
    totalIncome: Number,
    totalRecipeCount: Number
  },
  methods: {
    // Pagination method to go to a specific page
    goToPage(page) {
      if (page < 1 || page > this.recipes.last_page) return;
      this.$inertia.get("/chef/dashboard", { page });
    },
    // Delete Recipe function with SweetAlert2
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
            await Swal.fire({
              icon: "success",
              title: "Deleted!",
              text: "The recipe has been deleted successfully.",
              background: "rgba(255, 219, 99, 1)"
              // Custom background color for success
            });
            this.$inertia.reload();
          }
        }
      } catch (error) {
        console.error("Error deleting recipe:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "There was an issue deleting the recipe. Please try again later.",
          background: "rgba(255, 219, 99, 1)"
          // Custom background color for error
        });
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="relative overflow-hidden"${_scopeId}><div class="absolute inset-0 -m-[20px]"${_scopeId}><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png')", "filter": "brightness(0.3) blur(20px)" })}"${_scopeId}></div></div><div class="flex items-center justify-center h-full relative mt-10 mb-10"${_scopeId}><div class="bg-white w-[200vh] p-12 rounded-3xl shadow-2xl"${_scopeId}><h1 class="text-center text-large font-bold mb-10"${_scopeId}>Dashboard</h1><div class="flex gap-12"${_scopeId}><div class="bg-yellow-300 w-1/5 p-10 rounded-[2rem] shadow-[5px_5px_10px_rgba(0,0,0,0.5)] relative"${_scopeId}><div class="flex flex-col items-center"${_scopeId}><img${ssrRenderAttr("src", $props.profile.profile.ProfileImage ? `/storage/${$props.profile.profile.ProfileImage}` : "https://via.placeholder.com/403x212")} alt="Profile Image" class="w-48 h-48 rounded-full object-cover shadow-md"${_scopeId}><div class="mt-8 border-t border-black w-full"${_scopeId}></div><p class="text-center mt-4 font-semibold text-large"${_scopeId}>${ssrInterpolate($props.profile.user.name)}</p><div class="w-full text-left mt-4 pl-4"${_scopeId}><p class="text-normal font-medium"${_scopeId}>Email: ${ssrInterpolate($props.profile.user.email)}</p></div></div><a${ssrRenderAttr("href", `/profile`)} class="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-green-300 text-black-100 py-4 px-10 rounded-2xl font-semibold shadow-[5px_5px_10px_rgba(0,0,0,0.3)] text-normal"${_scopeId}> Profile </a></div><div class="flex flex-col gap-8 w-1/3"${_scopeId}><div class="bg-gray-100 p-8 rounded-xl shadow-lg"${_scopeId}><p class="text-normal text-gray-500"${_scopeId}>Total Viewers</p><p class="text-large font-bold"${_scopeId}>${ssrInterpolate($props.totalViews)} viewers</p></div><div class="bg-gray-100 p-8 rounded-xl shadow-lg"${_scopeId}><p class="text-normal text-gray-500"${_scopeId}>Recipes</p><p class="text-large font-bold"${_scopeId}>${ssrInterpolate($props.totalRecipeCount)} Recipe(s)</p></div><div class="bg-gray-100 p-8 rounded-xl shadow-lg"${_scopeId}><p class="text-normal text-gray-500"${_scopeId}>Income</p><p class="text-large font-bold"${_scopeId}>₱ ${ssrInterpolate($props.totalIncome)}</p></div></div><div class="w-1/3 bg-yellow-300 p-10 rounded-lg shadow-md rounded-[2.3rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)]"${_scopeId}><h2 class="font-semibold text-3xl text-black-100 mb-8 border-b-2 border-black-100 pb-4"${_scopeId}>History:</h2><ul class="space-y-8"${_scopeId}>`);
        if ($props.recipes.data.length === 0) {
          _push2(`<li class="text-sm text-black-100"${_scopeId}>No recipes found.</li>`);
        } else {
          _push2(`<!--[-->`);
          ssrRenderList($props.recipes.data, (recipe, index) => {
            _push2(`<li class="flex items-start gap-6 transition-transform transform hover:scale-105"${_scopeId}><img${ssrRenderAttr("src", recipe.RecipePhoto ? `/storage/${recipe.RecipePhoto}` : "https://via.placeholder.com/403x212")} alt="Recipe Image" class="w-24 h-24 rounded-md object-cover shadow-md border-2 border-yellow-500"${_scopeId}><div class="w-full"${_scopeId}><div class="flex justify-between mb-4"${_scopeId}><div class="w-2/4"${_scopeId}><div class="font-semibold text-lg text-black-100 mb-2"${_scopeId}>${ssrInterpolate(recipe.RecipeTitle)}</div><p class="text-black-100 italic text-small mb-4"${_scopeId}>Created on: ${ssrInterpolate(recipe.formatted_date)}</p><p class="text-black-100 font-semibold"${_scopeId}>Average Rating:</p><div class="flex"${_scopeId}>`);
            if (recipe.average_rating && recipe.average_rating > 0) {
              _push2(`<!--[-->`);
              ssrRenderList(5, (star) => {
                _push2(`<i class="${ssrRenderClass(star <= Math.round(recipe.average_rating) ? "text-yellow-500" : "text-gray-300")}"${_scopeId}> ★ </i>`);
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<span class="text-gray-500"${_scopeId}>Not reviewed yet</span>`);
            }
            _push2(`</div></div><div class="flex flex-col items-end w-2/4 gap-4"${_scopeId}><a${ssrRenderAttr("href", `/api/recipes/${recipe.RecipeID}`)} class="px-6 py-2 bg-yellow-400 text-black-100 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out"${_scopeId}> View Recipe </a><button class="px-6 py-2 bg-red-400 text-black-100 rounded-full shadow-lg hover:bg-red-500 transition-all duration-300 ease-in-out mt-2"${_scopeId}> Delete Recipe </button></div></div></div></li>`);
          });
          _push2(`<!--]-->`);
        }
        _push2(`</ul>`);
        if ($props.recipes.last_page > 1) {
          _push2(`<div class="mt-6"${_scopeId}><button${ssrIncludeBooleanAttr($props.recipes.current_page === 1) ? " disabled" : ""} class="px-4 py-2 bg-yellow-500 text-black-100 rounded-full disabled:opacity-50"${_scopeId}> Previous </button><span class="mx-2"${_scopeId}>${ssrInterpolate($props.recipes.current_page)} / ${ssrInterpolate($props.recipes.last_page)}</span><button${ssrIncludeBooleanAttr($props.recipes.current_page === $props.recipes.last_page) ? " disabled" : ""} class="px-4 py-2 bg-yellow-500 text-black-100 rounded-full disabled:opacity-50"${_scopeId}> Next </button></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="flex justify-center gap-8 mt-12"${_scopeId}><a${ssrRenderAttr("href", `/chef/dashboard/recipes/all`)} class="text-normal border-4 border-black-100 bg-yellow-300 hover:bg-yellow-500 text-black font-semibold py-4 px-16 rounded-xl shadow-lg"${_scopeId}> View All Recipe </a><a${ssrRenderAttr("href", `/chef/dashboard/recipes/create`)} class="text-normal border-4 border-black-100 bg-yellow-300 hover:bg-yellow-500 text-black font-semibold py-4 px-16 rounded-xl shadow-lg"${_scopeId}> Create Recipe </a></div></div></div></div>`);
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
              createVNode("div", { class: "bg-white w-[200vh] p-12 rounded-3xl shadow-2xl" }, [
                createVNode("h1", { class: "text-center text-large font-bold mb-10" }, "Dashboard"),
                createVNode("div", { class: "flex gap-12" }, [
                  createVNode("div", { class: "bg-yellow-300 w-1/5 p-10 rounded-[2rem] shadow-[5px_5px_10px_rgba(0,0,0,0.5)] relative" }, [
                    createVNode("div", { class: "flex flex-col items-center" }, [
                      createVNode("img", {
                        src: $props.profile.profile.ProfileImage ? `/storage/${$props.profile.profile.ProfileImage}` : "https://via.placeholder.com/403x212",
                        alt: "Profile Image",
                        class: "w-48 h-48 rounded-full object-cover shadow-md"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "mt-8 border-t border-black w-full" }),
                      createVNode("p", { class: "text-center mt-4 font-semibold text-large" }, toDisplayString($props.profile.user.name), 1),
                      createVNode("div", { class: "w-full text-left mt-4 pl-4" }, [
                        createVNode("p", { class: "text-normal font-medium" }, "Email: " + toDisplayString($props.profile.user.email), 1)
                      ])
                    ]),
                    createVNode("a", {
                      href: `/profile`,
                      class: "absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-green-300 text-black-100 py-4 px-10 rounded-2xl font-semibold shadow-[5px_5px_10px_rgba(0,0,0,0.3)] text-normal"
                    }, " Profile ")
                  ]),
                  createVNode("div", { class: "flex flex-col gap-8 w-1/3" }, [
                    createVNode("div", { class: "bg-gray-100 p-8 rounded-xl shadow-lg" }, [
                      createVNode("p", { class: "text-normal text-gray-500" }, "Total Viewers"),
                      createVNode("p", { class: "text-large font-bold" }, toDisplayString($props.totalViews) + " viewers", 1)
                    ]),
                    createVNode("div", { class: "bg-gray-100 p-8 rounded-xl shadow-lg" }, [
                      createVNode("p", { class: "text-normal text-gray-500" }, "Recipes"),
                      createVNode("p", { class: "text-large font-bold" }, toDisplayString($props.totalRecipeCount) + " Recipe(s)", 1)
                    ]),
                    createVNode("div", { class: "bg-gray-100 p-8 rounded-xl shadow-lg" }, [
                      createVNode("p", { class: "text-normal text-gray-500" }, "Income"),
                      createVNode("p", { class: "text-large font-bold" }, "₱ " + toDisplayString($props.totalIncome), 1)
                    ])
                  ]),
                  createVNode("div", { class: "w-1/3 bg-yellow-300 p-10 rounded-lg shadow-md rounded-[2.3rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)]" }, [
                    createVNode("h2", { class: "font-semibold text-3xl text-black-100 mb-8 border-b-2 border-black-100 pb-4" }, "History:"),
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
                                createVNode("p", { class: "text-black-100 italic text-small mb-4" }, "Created on: " + toDisplayString(recipe.formatted_date), 1),
                                createVNode("p", { class: "text-black-100 font-semibold" }, "Average Rating:"),
                                createVNode("div", { class: "flex" }, [
                                  recipe.average_rating && recipe.average_rating > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(5, (star) => {
                                    return createVNode("i", {
                                      key: star,
                                      class: star <= Math.round(recipe.average_rating) ? "text-yellow-500" : "text-gray-300"
                                    }, " ★ ", 2);
                                  }), 64)) : (openBlock(), createBlock("span", {
                                    key: 1,
                                    class: "text-gray-500"
                                  }, "Not reviewed yet"))
                                ])
                              ]),
                              createVNode("div", { class: "flex flex-col items-end w-2/4 gap-4" }, [
                                createVNode("a", {
                                  href: `/api/recipes/${recipe.RecipeID}`,
                                  class: "px-6 py-2 bg-yellow-400 text-black-100 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out"
                                }, " View Recipe ", 8, ["href"]),
                                createVNode("button", {
                                  onClick: ($event) => $options.deleteRecipe(recipe.RecipeID),
                                  class: "px-6 py-2 bg-red-400 text-black-100 rounded-full shadow-lg hover:bg-red-500 transition-all duration-300 ease-in-out mt-2"
                                }, " Delete Recipe ", 8, ["onClick"])
                              ])
                            ])
                          ])
                        ]);
                      }), 128))
                    ]),
                    $props.recipes.last_page > 1 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-6"
                    }, [
                      createVNode("button", {
                        onClick: ($event) => $options.goToPage($props.recipes.current_page - 1),
                        disabled: $props.recipes.current_page === 1,
                        class: "px-4 py-2 bg-yellow-500 text-black-100 rounded-full disabled:opacity-50"
                      }, " Previous ", 8, ["onClick", "disabled"]),
                      createVNode("span", { class: "mx-2" }, toDisplayString($props.recipes.current_page) + " / " + toDisplayString($props.recipes.last_page), 1),
                      createVNode("button", {
                        onClick: ($event) => $options.goToPage($props.recipes.current_page + 1),
                        disabled: $props.recipes.current_page === $props.recipes.last_page,
                        class: "px-4 py-2 bg-yellow-500 text-black-100 rounded-full disabled:opacity-50"
                      }, " Next ", 8, ["onClick", "disabled"])
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "flex justify-center gap-8 mt-12" }, [
                  createVNode("a", {
                    href: `/chef/dashboard/recipes/all`,
                    class: "text-normal border-4 border-black-100 bg-yellow-300 hover:bg-yellow-500 text-black font-semibold py-4 px-16 rounded-xl shadow-lg"
                  }, " View All Recipe "),
                  createVNode("a", {
                    href: `/chef/dashboard/recipes/create`,
                    class: "text-normal border-4 border-black-100 bg-yellow-300 hover:bg-yellow-500 text-black font-semibold py-4 px-16 rounded-xl shadow-lg"
                  }, " Create Recipe ")
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Chef/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Dashboard as default
};
