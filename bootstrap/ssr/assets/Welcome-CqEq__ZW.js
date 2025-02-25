import { ref, onMounted, withCtx, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { L as Layout } from "./frontend-CWpoDOF_.js";
import { usePage } from "@inertiajs/vue3";
import "axios";
import "lodash";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    recipes: Array
  },
  setup(__props) {
    const showGlow = ref(false);
    const cursorX = ref(0);
    const cursorY = ref(0);
    const updateCursorPosition = (event) => {
      cursorX.value = event.clientX - 0;
      cursorY.value = event.clientY - 150;
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
            _push2(`<div class="relative h-[362px] overflow-hidden"${_scopeId}><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://c.animaapp.com/IjUIznOY/img/hero-image-1.png')", "filter": "brightness(0.5)" })}"${_scopeId}></div>`);
            if (showGlow.value) {
              _push2(`<div class="absolute pointer-events-none w-[100px] h-[100px] bg-yellow-300 opacity-70 rounded-full blur-3xl" style="${ssrRenderStyle({
                transform: `translate(${cursorX.value - 50}px, ${cursorY.value - 50}px)`,
                // Center the glow
                transition: "transform 50ms linear"
                // Smooth transition for small movements
              })}"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center justify-center h-full relative z-10"${_scopeId}><p class="text-white text-center px-4 text-large font-bold drop-shadow-xl"${_scopeId}> Discover and savor the rich flavors of Filipino snack culture at Kusina Delights! </p></div></div><div class="mt-10 mb-10"${_scopeId}><p class="text-black-100 text-center text-large font-bold drop-shadow-xl mb-4"${_scopeId}> Famous Filipino Delights </p>`);
            if (__props.recipes.length > 0) {
              _push2(`<div class="flex flex-wrap justify-center gap-10"${_scopeId}><!--[-->`);
              ssrRenderList(__props.recipes, (recipe) => {
                _push2(`<div class="max-w-[403px] bg-white rounded-[40px] shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"${_scopeId}><div class="w-[403px] h-[250px] overflow-hidden flex-shrink-0"${_scopeId}><img${ssrRenderAttr("src", recipe.RecipePhoto ? `/storage/${recipe.RecipePhoto}` : "https://via.placeholder.com/403x212")} class="w-full h-full object-cover"${ssrRenderAttr("alt", recipe.RecipeTitle)}${_scopeId}></div><div class="p-4 flex flex-col justify-between h-[262px]"${_scopeId}><div class="flex flex-col justify-between h-full"${_scopeId}><div${_scopeId}><h2 class="text-large font-semibold text-gray-800"${_scopeId}>${ssrInterpolate(recipe.RecipeTitle)}</h2><p class="text-sm text-gray-500"${_scopeId}>By ${ssrInterpolate(recipe.chef.name)}</p><p class="mt-2 text-gray-600 text-small line-clamp-3 text-justify"${_scopeId}>${ssrInterpolate(recipe.Description || "No description available.")}</p></div><div class="mt-4 flex items-center justify-between"${_scopeId}><a${ssrRenderAttr("href", `api/recipes/${recipe.RecipeID}`)}${_scopeId}><button class="bg-yellow-300 text-black-100 font-bold py-1 px-4 rounded-full text-small font-semibold hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300"${_scopeId}> View Recipe </button></a><div class="flex items-center"${_scopeId}>`);
                if (recipe.reviewCount > 0) {
                  _push2(`<span class="flex items-center"${_scopeId}><!--[-->`);
                  ssrRenderList(5, (star) => {
                    _push2(`<svg class="${ssrRenderClass([star <= Math.round(recipe.averageStars) ? "text-yellow-500" : "text-gray-300", "w-5 h-5"])}" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M12 .587l3.668 7.568L24 9.423l-6 6.09 1.42 8.486L12 18.727 4.58 24l1.42-8.486-6-6.09 8.332-1.268L12 .587z"${_scopeId}></path></svg>`);
                  });
                  _push2(`<!--]--></span>`);
                } else {
                  _push2(`<span class="text-gray-500 text-[15px] italic"${_scopeId}>Not reviewed yet</span>`);
                }
                _push2(`</div></div></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center text-gray-500"${_scopeId}><p${_scopeId}>No recipes available at the moment. Please check back later!</p></div>`);
            }
            _push2(`</div>`);
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
                createVNode("p", { class: "text-black-100 text-center text-large font-bold drop-shadow-xl mb-4" }, " Famous Filipino Delights "),
                __props.recipes.length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex flex-wrap justify-center gap-10"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.recipes, (recipe) => {
                    return openBlock(), createBlock("div", {
                      key: recipe.RecipeID,
                      class: "max-w-[403px] bg-white rounded-[40px] shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    }, [
                      createVNode("div", { class: "w-[403px] h-[250px] overflow-hidden flex-shrink-0" }, [
                        createVNode("img", {
                          src: recipe.RecipePhoto ? `/storage/${recipe.RecipePhoto}` : "https://via.placeholder.com/403x212",
                          class: "w-full h-full object-cover",
                          alt: recipe.RecipeTitle
                        }, null, 8, ["src", "alt"])
                      ]),
                      createVNode("div", { class: "p-4 flex flex-col justify-between h-[262px]" }, [
                        createVNode("div", { class: "flex flex-col justify-between h-full" }, [
                          createVNode("div", null, [
                            createVNode("h2", { class: "text-large font-semibold text-gray-800" }, toDisplayString(recipe.RecipeTitle), 1),
                            createVNode("p", { class: "text-sm text-gray-500" }, "By " + toDisplayString(recipe.chef.name), 1),
                            createVNode("p", { class: "mt-2 text-gray-600 text-small line-clamp-3 text-justify" }, toDisplayString(recipe.Description || "No description available."), 1)
                          ]),
                          createVNode("div", { class: "mt-4 flex items-center justify-between" }, [
                            createVNode("a", {
                              href: `api/recipes/${recipe.RecipeID}`
                            }, [
                              createVNode("button", { class: "bg-yellow-300 text-black-100 font-bold py-1 px-4 rounded-full text-small font-semibold hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300" }, " View Recipe ")
                            ], 8, ["href"]),
                            createVNode("div", { class: "flex items-center" }, [
                              recipe.reviewCount > 0 ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "flex items-center"
                              }, [
                                (openBlock(), createBlock(Fragment, null, renderList(5, (star) => {
                                  return createVNode("svg", {
                                    key: star,
                                    class: ["w-5 h-5", star <= Math.round(recipe.averageStars) ? "text-yellow-500" : "text-gray-300"],
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24"
                                  }, [
                                    createVNode("path", { d: "M12 .587l3.668 7.568L24 9.423l-6 6.09 1.42 8.486L12 18.727 4.58 24l1.42-8.486-6-6.09 8.332-1.268L12 .587z" })
                                  ], 2);
                                }), 64))
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
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "text-center text-gray-500"
                }, [
                  createVNode("p", null, "No recipes available at the moment. Please check back later!")
                ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
