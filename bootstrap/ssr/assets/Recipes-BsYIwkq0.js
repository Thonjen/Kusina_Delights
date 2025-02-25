import { ref, computed, onMounted, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, Fragment, renderList, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { L as Layout } from "./frontend-CWpoDOF_.js";
import axios from "axios";
import { usePage } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "lodash";
const _sfc_main = {
  __name: "Recipes",
  __ssrInlineRender: true,
  props: {
    famousDelights: Array,
    recentRecipes: Array,
    chefs: Array
  },
  setup(__props) {
    const showGlow = ref(false);
    const cursorX = ref(0);
    const cursorY = ref(0);
    const updateCursorPosition = (event) => {
      cursorX.value = event.clientX - 0;
      cursorY.value = event.clientY - 150;
    };
    const props = __props;
    const selectedChef = ref("");
    const filteredRecipes = ref([]);
    const displayedRecipes = computed(() => {
      return selectedChef.value ? filteredRecipes.value : props.famousDelights;
    });
    const filterByChefName = async (chefId) => {
      if (chefId) {
        selectedChef.value = chefId;
        const response = await axios.get(`/recipes/by-chef/${chefId}`);
        filteredRecipes.value = response.data;
      }
    };
    onMounted(() => {
      const { auth } = usePage().props;
      if (auth.user) {
        const script1 = document.createElement("script");
        script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
        document.head.appendChild(script1);
        const script2 = document.createElement("script");
        script2.src = "https://files.bpcontent.cloud/2024/12/16/16/20241216164133-I8MIRLQE.js";
        document.head.appendChild(script2);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative h-[362px] overflow-hidden" data-v-f7721fc7${_scopeId}><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://c.animaapp.com/IjUIznOY/img/hero-image-1.png')", "filter": "brightness(0.5)" })}" data-v-f7721fc7${_scopeId}></div>`);
            if (showGlow.value) {
              _push2(`<div class="absolute pointer-events-none w-[100px] h-[100px] bg-yellow-300 opacity-70 rounded-full blur-3xl" style="${ssrRenderStyle({
                transform: `translate(${cursorX.value - 50}px, ${cursorY.value - 50}px)`,
                // Center the glow
                transition: "transform 50ms linear"
                // Smooth transition for small movements
              })}" data-v-f7721fc7${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center justify-center h-full relative z-10" data-v-f7721fc7${_scopeId}><p class="text-white text-center px-4 text-large font-bold drop-shadow-xl" data-v-f7721fc7${_scopeId}> Discover and savor the rich flavors of Filipino snack culture at Kusina Delights! </p></div></div><div class="mt-10 mb-10" data-v-f7721fc7${_scopeId}><p class="text-black-100 text-center text-large font-bold drop-shadow-xl mb-4" data-v-f7721fc7${_scopeId}>${ssrInterpolate(selectedChef.value ? "Filtered Recipes" : "Famous Filipino Delights")}</p><div class="flex flex-wrap justify-center gap-10" data-v-f7721fc7${_scopeId}><!--[-->`);
            ssrRenderList(displayedRecipes.value, (recipe, index) => {
              var _a, _b;
              _push2(`<div class="max-w-[403px] bg-white rounded-[40px] shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" data-v-f7721fc7${_scopeId}><div class="relative w-full h-[250px]" data-v-f7721fc7${_scopeId}><img${ssrRenderAttr("src", recipe.RecipePhoto ? `/storage/${recipe.RecipePhoto}` : "https://via.placeholder.com/403x212")} class="absolute inset-0 w-full h-full object-cover"${ssrRenderAttr("alt", recipe.RecipeTitle)} data-v-f7721fc7${_scopeId}></div><div class="p-4 flex flex-col flex-grow" data-v-f7721fc7${_scopeId}><div data-v-f7721fc7${_scopeId}><h2 class="text-large font-semibold text-gray-800" data-v-f7721fc7${_scopeId}>${ssrInterpolate(recipe.RecipeTitle)}</h2><p class="text-gray-400 text-small" data-v-f7721fc7${_scopeId}> Chef: <button class="hover:text-yellow-500 hover:underline focus:outline-none" data-v-f7721fc7${_scopeId}>${ssrInterpolate(((_b = (_a = recipe.chef) == null ? void 0 : _a.user) == null ? void 0 : _b.name) || "Unknown Chef")}</button></p><p class="mt-2 text-gray-600 text-small line-clamp-3 text-justify" data-v-f7721fc7${_scopeId}>${ssrInterpolate(recipe.Description)}</p></div><div class="mt-auto flex items-center justify-between pt-4" data-v-f7721fc7${_scopeId}><a${ssrRenderAttr("href", `api/recipes/${recipe.RecipeID}`)} data-v-f7721fc7${_scopeId}><button class="bg-yellow-300 text-black-100 font-bold py-1 px-4 rounded-full text-small font-semibold hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300" data-v-f7721fc7${_scopeId}> View Recipe </button></a><div class="flex items-center" data-v-f7721fc7${_scopeId}><span class="text-gray-600 text-normal mr-1" data-v-f7721fc7${_scopeId}>`);
              if (recipe.reviews_count > 0) {
                _push2(`<div class="flex" data-v-f7721fc7${_scopeId}><!--[-->`);
                ssrRenderList(Math.round(recipe.reviews_avg_star) || 0, (n) => {
                  _push2(`<svg class="w-5 h-5 text-yellow-500 animate-shine" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" data-v-f7721fc7${_scopeId}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" data-v-f7721fc7${_scopeId}></path></svg>`);
                });
                _push2(`<!--]--><!--[-->`);
                ssrRenderList(5 - Math.round(recipe.reviews_avg_star) || 0, (n) => {
                  _push2(`<svg class="w-5 h-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" data-v-f7721fc7${_scopeId}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" data-v-f7721fc7${_scopeId}></path></svg>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<span class="text-gray-500 text-[15px] italic" data-v-f7721fc7${_scopeId}>Not reviewed yet</span>`);
              }
              _push2(`</span></div></div></div></div>`);
            });
            _push2(`<!--]--></div></div>`);
            if (!selectedChef.value) {
              _push2(`<!--[--><h2 class="text-5xl font-bold mb-8 text-center" data-v-f7721fc7${_scopeId}>Recent Recipes</h2><div class="flex flex-col items-center mb-10" data-v-f7721fc7${_scopeId}><!--[-->`);
              ssrRenderList(__props.recentRecipes, (recipe, index) => {
                var _a, _b;
                _push2(`<div class="bg-gray-100 shadow-lg rounded-tr-[40px] rounded-br-[40px] rounded-tl-[40px] rounded-bl-[40px] flex items-center w-[98%] max-w-screen-xl mb-10 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" data-v-f7721fc7${_scopeId}><div class="w-[40vh] h-[350px] overflow-hidden rounded-tl-[40px] rounded-bl-[40px]" data-v-f7721fc7${_scopeId}><img${ssrRenderAttr("src", recipe.RecipePhoto ? `/storage/${recipe.RecipePhoto}` : "https://via.placeholder.com/403x212")} class="w-full h-full object-cover"${ssrRenderAttr("alt", recipe.RecipeTitle)} data-v-f7721fc7${_scopeId}></div><div class="flex-1 p-[1vh] rounded-r-lg bg-gray-100" data-v-f7721fc7${_scopeId}><h3 class="text-large font-bold mt-4 mb-4 ml-10 text-black-100" data-v-f7721fc7${_scopeId}>${ssrInterpolate(recipe.RecipeTitle)}</h3><p class="text-gray-400 text-small mb-4 ml-10" data-v-f7721fc7${_scopeId}> Chef: <button class="hover:text-yellow-500 hover:underline focus:outline-none" data-v-f7721fc7${_scopeId}>${ssrInterpolate(((_b = (_a = recipe.chef) == null ? void 0 : _a.user) == null ? void 0 : _b.name) || "Unknown Chef")}</button></p><p class="text-gray-600 text-small py-1 ml-10 pr-4 text-justify" data-v-f7721fc7${_scopeId}>${ssrInterpolate(recipe.Description)}</p><div class="flex items-center justify-between mt-6 ml-10" data-v-f7721fc7${_scopeId}><a${ssrRenderAttr("href", `api/recipes/${recipe.RecipeID}`)} data-v-f7721fc7${_scopeId}><button class="bg-yellow-300 text-black-100 font-bold py-1 px-4 rounded-full text-small font-semibold hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300" data-v-f7721fc7${_scopeId}> View Recipe </button></a></div></div></div>`);
              });
              _push2(`<!--]--></div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", {
                class: "relative h-[362px] overflow-hidden",
                onMouseenter: ($event) => showGlow.value = true,
                onMouseleave: ($event) => showGlow.value = false
              }, [
                createVNode("div", {
                  class: "absolute inset-0 bg-cover bg-center",
                  style: { "background-image": "url('https://c.animaapp.com/IjUIznOY/img/hero-image-1.png')", "filter": "brightness(0.5)" }
                }),
                showGlow.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "absolute pointer-events-none w-[100px] h-[100px] bg-yellow-300 opacity-70 rounded-full blur-3xl",
                  style: {
                    transform: `translate(${cursorX.value - 50}px, ${cursorY.value - 50}px)`,
                    // Center the glow
                    transition: "transform 50ms linear"
                    // Smooth transition for small movements
                  }
                }, null, 4)) : createCommentVNode("", true),
                createVNode("div", {
                  class: "flex items-center justify-center h-full relative z-10",
                  onMousemove: updateCursorPosition
                }, [
                  createVNode("p", { class: "text-white text-center px-4 text-large font-bold drop-shadow-xl" }, " Discover and savor the rich flavors of Filipino snack culture at Kusina Delights! ")
                ], 32)
              ], 40, ["onMouseenter", "onMouseleave"]),
              createVNode("div", { class: "mt-10 mb-10" }, [
                createVNode("p", { class: "text-black-100 text-center text-large font-bold drop-shadow-xl mb-4" }, toDisplayString(selectedChef.value ? "Filtered Recipes" : "Famous Filipino Delights"), 1),
                createVNode("div", { class: "flex flex-wrap justify-center gap-10" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(displayedRecipes.value, (recipe, index) => {
                    var _a, _b;
                    return openBlock(), createBlock("div", {
                      key: index,
                      class: "max-w-[403px] bg-white rounded-[40px] shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    }, [
                      createVNode("div", { class: "relative w-full h-[250px]" }, [
                        createVNode("img", {
                          src: recipe.RecipePhoto ? `/storage/${recipe.RecipePhoto}` : "https://via.placeholder.com/403x212",
                          class: "absolute inset-0 w-full h-full object-cover",
                          alt: recipe.RecipeTitle
                        }, null, 8, ["src", "alt"])
                      ]),
                      createVNode("div", { class: "p-4 flex flex-col flex-grow" }, [
                        createVNode("div", null, [
                          createVNode("h2", { class: "text-large font-semibold text-gray-800" }, toDisplayString(recipe.RecipeTitle), 1),
                          createVNode("p", { class: "text-gray-400 text-small" }, [
                            createTextVNode(" Chef: "),
                            createVNode("button", {
                              onClick: ($event) => {
                                var _a2;
                                return filterByChefName((_a2 = recipe.chef) == null ? void 0 : _a2.ChefID);
                              },
                              class: "hover:text-yellow-500 hover:underline focus:outline-none"
                            }, toDisplayString(((_b = (_a = recipe.chef) == null ? void 0 : _a.user) == null ? void 0 : _b.name) || "Unknown Chef"), 9, ["onClick"])
                          ]),
                          createVNode("p", { class: "mt-2 text-gray-600 text-small line-clamp-3 text-justify" }, toDisplayString(recipe.Description), 1)
                        ]),
                        createVNode("div", { class: "mt-auto flex items-center justify-between pt-4" }, [
                          createVNode("a", {
                            href: `api/recipes/${recipe.RecipeID}`
                          }, [
                            createVNode("button", { class: "bg-yellow-300 text-black-100 font-bold py-1 px-4 rounded-full text-small font-semibold hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300" }, " View Recipe ")
                          ], 8, ["href"]),
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("span", { class: "text-gray-600 text-normal mr-1" }, [
                              recipe.reviews_count > 0 ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "flex"
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(Math.round(recipe.reviews_avg_star) || 0, (n) => {
                                  return openBlock(), createBlock("svg", {
                                    class: "w-5 h-5 text-yellow-500 animate-shine",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" })
                                  ]);
                                }), 256)),
                                (openBlock(true), createBlock(Fragment, null, renderList(5 - Math.round(recipe.reviews_avg_star) || 0, (n) => {
                                  return openBlock(), createBlock("svg", {
                                    class: "w-5 h-5 text-gray-300",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" })
                                  ]);
                                }), 256))
                              ])) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-gray-500 text-[15px] italic"
                              }, "Not reviewed yet"))
                            ])
                          ])
                        ])
                      ])
                    ]);
                  }), 128))
                ])
              ]),
              !selectedChef.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode("h2", { class: "text-5xl font-bold mb-8 text-center" }, "Recent Recipes"),
                createVNode("div", { class: "flex flex-col items-center mb-10" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.recentRecipes, (recipe, index) => {
                    var _a, _b;
                    return openBlock(), createBlock("div", {
                      key: index,
                      class: "bg-gray-100 shadow-lg rounded-tr-[40px] rounded-br-[40px] rounded-tl-[40px] rounded-bl-[40px] flex items-center w-[98%] max-w-screen-xl mb-10 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    }, [
                      createVNode("div", { class: "w-[40vh] h-[350px] overflow-hidden rounded-tl-[40px] rounded-bl-[40px]" }, [
                        createVNode("img", {
                          src: recipe.RecipePhoto ? `/storage/${recipe.RecipePhoto}` : "https://via.placeholder.com/403x212",
                          class: "w-full h-full object-cover",
                          alt: recipe.RecipeTitle
                        }, null, 8, ["src", "alt"])
                      ]),
                      createVNode("div", { class: "flex-1 p-[1vh] rounded-r-lg bg-gray-100" }, [
                        createVNode("h3", { class: "text-large font-bold mt-4 mb-4 ml-10 text-black-100" }, toDisplayString(recipe.RecipeTitle), 1),
                        createVNode("p", { class: "text-gray-400 text-small mb-4 ml-10" }, [
                          createTextVNode(" Chef: "),
                          createVNode("button", {
                            onClick: ($event) => {
                              var _a2;
                              return filterByChefName((_a2 = recipe.chef) == null ? void 0 : _a2.ChefID);
                            },
                            class: "hover:text-yellow-500 hover:underline focus:outline-none"
                          }, toDisplayString(((_b = (_a = recipe.chef) == null ? void 0 : _a.user) == null ? void 0 : _b.name) || "Unknown Chef"), 9, ["onClick"])
                        ]),
                        createVNode("p", { class: "text-gray-600 text-small py-1 ml-10 pr-4 text-justify" }, toDisplayString(recipe.Description), 1),
                        createVNode("div", { class: "flex items-center justify-between mt-6 ml-10" }, [
                          createVNode("a", {
                            href: `api/recipes/${recipe.RecipeID}`
                          }, [
                            createVNode("button", { class: "bg-yellow-300 text-black-100 font-bold py-1 px-4 rounded-full text-small font-semibold hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300" }, " View Recipe ")
                          ], 8, ["href"])
                        ])
                      ])
                    ]);
                  }), 128))
                ])
              ], 64)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Webpages/Recipes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Recipes = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f7721fc7"]]);
export {
  Recipes as default
};
