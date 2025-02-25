import { withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { L as Layout } from "./frontend-qce4MpuY.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "axios";
import "lodash";
const _sfc_main = {
  __name: "Recipes",
  __ssrInlineRender: true,
  props: {
    famousDelights: Array,
    recentRecipes: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative h-[362px]" data-v-4119a8e4${_scopeId}><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://c.animaapp.com/IjUIznOY/img/hero-image-1.png')", "filter": "brightness(0.5)" })}" data-v-4119a8e4${_scopeId}></div><div class="flex items-center justify-center h-full relative" data-v-4119a8e4${_scopeId}><p class="text-white text-center px-4 text-large font-bold drop-shadow-xl white-shadow" data-v-4119a8e4${_scopeId}> Discover and savor the rich flavors of Filipino snack culture at Kusina Delights! </p></div></div><div class="mt-10 mb-10" data-v-4119a8e4${_scopeId}><p class="text-black-100 text-center text-large font-bold drop-shadow-xl mb-4" data-v-4119a8e4${_scopeId}> Famous Filipino Delights </p><div class="flex flex-wrap justify-center gap-10" data-v-4119a8e4${_scopeId}><!--[-->`);
            ssrRenderList(__props.famousDelights, (recipe, index) => {
              _push2(`<div class="max-w-[403px] bg-white rounded-tr-[40px] rounded-tl-[50px] shadow-lg overflow-hidden flex flex-col" data-v-4119a8e4${_scopeId}><div class="w-[40vh] h-[250px] overflow-hidden" data-v-4119a8e4${_scopeId}><img${ssrRenderAttr("src", recipe.RecipePhoto ? `/storage/${recipe.RecipePhoto}` : "https://via.placeholder.com/403x212")} class="w-full h-full object-cover"${ssrRenderAttr("alt", recipe.RecipeTitle)} data-v-4119a8e4${_scopeId}></div><div class="p-4 flex flex-col justify-between h-[262px]" data-v-4119a8e4${_scopeId}><div data-v-4119a8e4${_scopeId}><h2 class="text-large font-semibold text-gray-800" data-v-4119a8e4${_scopeId}>${ssrInterpolate(recipe.RecipeTitle)}</h2><p class="mt-2 text-gray-600 text-small line-clamp-3" data-v-4119a8e4${_scopeId}>${ssrInterpolate(recipe.Description)}</p></div><div class="mt-4 flex items-center justify-between" data-v-4119a8e4${_scopeId}><a${ssrRenderAttr("href", `api/recipes/${recipe.RecipeID}`)} data-v-4119a8e4${_scopeId}><button class="bg-yellow-300 text-black-100 font-bold py-1 px-4 rounded-full text-small font-semibold hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300" data-v-4119a8e4${_scopeId}> View Recipe </button></a><div class="flex items-center" data-v-4119a8e4${_scopeId}><span class="text-gray-600 text-normal mr-1" data-v-4119a8e4${_scopeId}>`);
              if (recipe.reviews_count > 0) {
                _push2(`<div class="flex" data-v-4119a8e4${_scopeId}><!--[-->`);
                ssrRenderList(Math.round(recipe.reviews_avg_star) || 0, (n) => {
                  _push2(`<svg class="w-5 h-5 text-yellow-500 animate-shine" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" data-v-4119a8e4${_scopeId}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" data-v-4119a8e4${_scopeId}></path></svg>`);
                });
                _push2(`<!--]--><!--[-->`);
                ssrRenderList(5 - Math.round(recipe.reviews_avg_star) || 0, (n) => {
                  _push2(`<svg class="w-5 h-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" data-v-4119a8e4${_scopeId}><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" data-v-4119a8e4${_scopeId}></path></svg>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<span class="text-gray-600" data-v-4119a8e4${_scopeId}>Not reviewed yet</span>`);
              }
              _push2(`</span></div></div></div></div>`);
            });
            _push2(`<!--]--></div></div><h2 class="text-5xl font-bold mb-8 text-center" data-v-4119a8e4${_scopeId}>Recent Recipes</h2><div class="flex flex-col items-center mb-10" data-v-4119a8e4${_scopeId}><!--[-->`);
            ssrRenderList(__props.recentRecipes, (recipe, index) => {
              _push2(`<div class="bg-gray-50 rounded-lg flex items-center w-[98%] max-w-screen-xl mb-10" data-v-4119a8e4${_scopeId}><div class="w-[40vh] h-[300px] overflow-hidden" data-v-4119a8e4${_scopeId}><img${ssrRenderAttr("src", recipe.RecipePhoto ? `/storage/${recipe.RecipePhoto}` : "https://via.placeholder.com/403x212")} class="w-full h-full object-cover"${ssrRenderAttr("alt", recipe.RecipeTitle)} data-v-4119a8e4${_scopeId}></div><div class="flex-1 p-[2.2vh] rounded-r-lg" style="${ssrRenderStyle({ "background-color": "rgba(255, 204, 0, 0.4)" })}" data-v-4119a8e4${_scopeId}><h3 class="text-large font-bold mt-4 mb-4 ml-10 text-black-100" data-v-4119a8e4${_scopeId}>${ssrInterpolate(recipe.RecipeTitle)}</h3><p class="text-gray-600 text-normal py-12 ml-10" data-v-4119a8e4${_scopeId}>${ssrInterpolate(recipe.Description)}</p><div class="flex items-center justify-between mt-6 ml-10" data-v-4119a8e4${_scopeId}><a${ssrRenderAttr("href", `api/recipes/${recipe.RecipeID}`)} data-v-4119a8e4${_scopeId}><button class="bg-yellow-300 text-black-100 font-bold py-1 px-4 rounded-r-lg text-small font-semibold hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300" data-v-4119a8e4${_scopeId}> View Recipe </button></a></div></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "relative h-[362px]" }, [
                createVNode("div", {
                  class: "absolute inset-0 bg-cover bg-center",
                  style: { "background-image": "url('https://c.animaapp.com/IjUIznOY/img/hero-image-1.png')", "filter": "brightness(0.5)" }
                }),
                createVNode("div", { class: "flex items-center justify-center h-full relative" }, [
                  createVNode("p", { class: "text-white text-center px-4 text-large font-bold drop-shadow-xl white-shadow" }, " Discover and savor the rich flavors of Filipino snack culture at Kusina Delights! ")
                ])
              ]),
              createVNode("div", { class: "mt-10 mb-10" }, [
                createVNode("p", { class: "text-black-100 text-center text-large font-bold drop-shadow-xl mb-4" }, " Famous Filipino Delights "),
                createVNode("div", { class: "flex flex-wrap justify-center gap-10" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.famousDelights, (recipe, index) => {
                    return openBlock(), createBlock("div", {
                      key: index,
                      class: "max-w-[403px] bg-white rounded-tr-[40px] rounded-tl-[50px] shadow-lg overflow-hidden flex flex-col"
                    }, [
                      createVNode("div", { class: "w-[40vh] h-[250px] overflow-hidden" }, [
                        createVNode("img", {
                          src: recipe.RecipePhoto ? `/storage/${recipe.RecipePhoto}` : "https://via.placeholder.com/403x212",
                          class: "w-full h-full object-cover",
                          alt: recipe.RecipeTitle
                        }, null, 8, ["src", "alt"])
                      ]),
                      createVNode("div", { class: "p-4 flex flex-col justify-between h-[262px]" }, [
                        createVNode("div", null, [
                          createVNode("h2", { class: "text-large font-semibold text-gray-800" }, toDisplayString(recipe.RecipeTitle), 1),
                          createVNode("p", { class: "mt-2 text-gray-600 text-small line-clamp-3" }, toDisplayString(recipe.Description), 1)
                        ]),
                        createVNode("div", { class: "mt-4 flex items-center justify-between" }, [
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
                                class: "text-gray-600"
                              }, "Not reviewed yet"))
                            ])
                          ])
                        ])
                      ])
                    ]);
                  }), 128))
                ])
              ]),
              createVNode("h2", { class: "text-5xl font-bold mb-8 text-center" }, "Recent Recipes"),
              createVNode("div", { class: "flex flex-col items-center mb-10" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.recentRecipes, (recipe, index) => {
                  return openBlock(), createBlock("div", {
                    key: index,
                    class: "bg-gray-50 rounded-lg flex items-center w-[98%] max-w-screen-xl mb-10"
                  }, [
                    createVNode("div", { class: "w-[40vh] h-[300px] overflow-hidden" }, [
                      createVNode("img", {
                        src: recipe.RecipePhoto ? `/storage/${recipe.RecipePhoto}` : "https://via.placeholder.com/403x212",
                        class: "w-full h-full object-cover",
                        alt: recipe.RecipeTitle
                      }, null, 8, ["src", "alt"])
                    ]),
                    createVNode("div", {
                      class: "flex-1 p-[2.2vh] rounded-r-lg",
                      style: { "background-color": "rgba(255, 204, 0, 0.4)" }
                    }, [
                      createVNode("h3", { class: "text-large font-bold mt-4 mb-4 ml-10 text-black-100" }, toDisplayString(recipe.RecipeTitle), 1),
                      createVNode("p", { class: "text-gray-600 text-normal py-12 ml-10" }, toDisplayString(recipe.Description), 1),
                      createVNode("div", { class: "flex items-center justify-between mt-6 ml-10" }, [
                        createVNode("a", {
                          href: `api/recipes/${recipe.RecipeID}`
                        }, [
                          createVNode("button", { class: "bg-yellow-300 text-black-100 font-bold py-1 px-4 rounded-r-lg text-small font-semibold hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300" }, " View Recipe ")
                        ], 8, ["href"])
                      ])
                    ])
                  ]);
                }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Webpages/Recipes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Recipes = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4119a8e4"]]);
export {
  Recipes as default
};
