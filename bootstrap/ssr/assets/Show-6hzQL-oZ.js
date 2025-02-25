import { resolveComponent, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  props: {
    recipe: Object
    // The recipe object passed from the controller
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="text-3xl font-semibold mb-8" data-v-b6dcef29${_scopeId}>Recipe Details</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-b6dcef29${_scopeId}><div data-v-b6dcef29${_scopeId}><h3 class="text-2xl font-bold mb-2" data-v-b6dcef29${_scopeId}>${ssrInterpolate($props.recipe.RecipeTitle)}</h3><p class="text-lg text-gray-700" data-v-b6dcef29${_scopeId}>Chef: <span class="font-semibold" data-v-b6dcef29${_scopeId}>${ssrInterpolate($props.recipe.chef.user.name)}</span></p><p class="text-sm text-gray-500" data-v-b6dcef29${_scopeId}>${ssrInterpolate($props.recipe.chef.user.email)}</p></div><div class="flex justify-center md:justify-start" data-v-b6dcef29${_scopeId}>`);
        if ($props.recipe.RecipePhoto) {
          _push2(`<div class="max-w-full w-96 h-auto" data-v-b6dcef29${_scopeId}><img${ssrRenderAttr("src", `/storage/${$props.recipe.RecipePhoto}`)} alt="Recipe Photo" class="w-full rounded-lg shadow-lg" data-v-b6dcef29${_scopeId}></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="mt-8" data-v-b6dcef29${_scopeId}><h3 class="text-xl font-semibold mb-2" data-v-b6dcef29${_scopeId}>Description</h3><p class="text-gray-700" data-v-b6dcef29${_scopeId}>${ssrInterpolate($props.recipe.Description)}</p></div><div class="mt-6" data-v-b6dcef29${_scopeId}><h3 class="text-xl font-semibold mb-2" data-v-b6dcef29${_scopeId}>Ingredients</h3><p class="text-gray-700" data-v-b6dcef29${_scopeId}>${ssrInterpolate($props.recipe.Ingredients)}</p></div><div class="mt-6" data-v-b6dcef29${_scopeId}><h3 class="text-xl font-semibold mb-2" data-v-b6dcef29${_scopeId}>Instructions</h3><p class="text-gray-700" data-v-b6dcef29${_scopeId}>${ssrInterpolate($props.recipe.Instructions)}</p></div><div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6" data-v-b6dcef29${_scopeId}><div data-v-b6dcef29${_scopeId}><p data-v-b6dcef29${_scopeId}><strong class="font-semibold" data-v-b6dcef29${_scopeId}>Preparation Time:</strong> ${ssrInterpolate($props.recipe.Preparation)} minutes</p></div><div data-v-b6dcef29${_scopeId}><p data-v-b6dcef29${_scopeId}><strong class="font-semibold" data-v-b6dcef29${_scopeId}>Cooking Time:</strong> ${ssrInterpolate($props.recipe.CookingTime)} minutes</p></div><div data-v-b6dcef29${_scopeId}><p data-v-b6dcef29${_scopeId}><strong class="font-semibold" data-v-b6dcef29${_scopeId}>Difficulty:</strong> ${ssrInterpolate($props.recipe.Difficulty)}</p></div><div data-v-b6dcef29${_scopeId}><p data-v-b6dcef29${_scopeId}><strong class="font-semibold" data-v-b6dcef29${_scopeId}>Servings:</strong> ${ssrInterpolate($props.recipe.Servings)}</p></div></div>`);
        if ($props.recipe.VideoLink) {
          _push2(`<div class="mt-6" data-v-b6dcef29${_scopeId}><h3 class="text-xl font-semibold mb-2" data-v-b6dcef29${_scopeId}>Video Tutorial</h3><a${ssrRenderAttr("href", $props.recipe.VideoLink)} target="_blank" class="text-blue-600 underline" data-v-b6dcef29${_scopeId}>Watch here</a></div>`);
        } else {
          _push2(`<!---->`);
        }
        if ($props.recipe.reviews && $props.recipe.reviews.length > 0) {
          _push2(`<div class="mt-8" data-v-b6dcef29${_scopeId}><h3 class="text-xl font-semibold mb-4" data-v-b6dcef29${_scopeId}>Reviews</h3><ul class="space-y-4" data-v-b6dcef29${_scopeId}><!--[-->`);
          ssrRenderList($props.recipe.reviews, (review) => {
            _push2(`<li class="border-b pb-4" data-v-b6dcef29${_scopeId}><p class="text-lg font-semibold" data-v-b6dcef29${_scopeId}>${ssrInterpolate(review.user.name)}</p><p class="text-sm text-gray-600" data-v-b6dcef29${_scopeId}>Rating: ${ssrInterpolate(review.rating)} stars</p><p class="text-gray-700" data-v-b6dcef29${_scopeId}>${ssrInterpolate(review.comment)}</p></li>`);
          });
          _push2(`<!--]--></ul></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode("h2", { class: "text-3xl font-semibold mb-8" }, "Recipe Details"),
          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
            createVNode("div", null, [
              createVNode("h3", { class: "text-2xl font-bold mb-2" }, toDisplayString($props.recipe.RecipeTitle), 1),
              createVNode("p", { class: "text-lg text-gray-700" }, [
                createTextVNode("Chef: "),
                createVNode("span", { class: "font-semibold" }, toDisplayString($props.recipe.chef.user.name), 1)
              ]),
              createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString($props.recipe.chef.user.email), 1)
            ]),
            createVNode("div", { class: "flex justify-center md:justify-start" }, [
              $props.recipe.RecipePhoto ? (openBlock(), createBlock("div", {
                key: 0,
                class: "max-w-full w-96 h-auto"
              }, [
                createVNode("img", {
                  src: `/storage/${$props.recipe.RecipePhoto}`,
                  alt: "Recipe Photo",
                  class: "w-full rounded-lg shadow-lg"
                }, null, 8, ["src"])
              ])) : createCommentVNode("", true)
            ])
          ]),
          createVNode("div", { class: "mt-8" }, [
            createVNode("h3", { class: "text-xl font-semibold mb-2" }, "Description"),
            createVNode("p", { class: "text-gray-700" }, toDisplayString($props.recipe.Description), 1)
          ]),
          createVNode("div", { class: "mt-6" }, [
            createVNode("h3", { class: "text-xl font-semibold mb-2" }, "Ingredients"),
            createVNode("p", { class: "text-gray-700" }, toDisplayString($props.recipe.Ingredients), 1)
          ]),
          createVNode("div", { class: "mt-6" }, [
            createVNode("h3", { class: "text-xl font-semibold mb-2" }, "Instructions"),
            createVNode("p", { class: "text-gray-700" }, toDisplayString($props.recipe.Instructions), 1)
          ]),
          createVNode("div", { class: "mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6" }, [
            createVNode("div", null, [
              createVNode("p", null, [
                createVNode("strong", { class: "font-semibold" }, "Preparation Time:"),
                createTextVNode(" " + toDisplayString($props.recipe.Preparation) + " minutes", 1)
              ])
            ]),
            createVNode("div", null, [
              createVNode("p", null, [
                createVNode("strong", { class: "font-semibold" }, "Cooking Time:"),
                createTextVNode(" " + toDisplayString($props.recipe.CookingTime) + " minutes", 1)
              ])
            ]),
            createVNode("div", null, [
              createVNode("p", null, [
                createVNode("strong", { class: "font-semibold" }, "Difficulty:"),
                createTextVNode(" " + toDisplayString($props.recipe.Difficulty), 1)
              ])
            ]),
            createVNode("div", null, [
              createVNode("p", null, [
                createVNode("strong", { class: "font-semibold" }, "Servings:"),
                createTextVNode(" " + toDisplayString($props.recipe.Servings), 1)
              ])
            ])
          ]),
          $props.recipe.VideoLink ? (openBlock(), createBlock("div", {
            key: 0,
            class: "mt-6"
          }, [
            createVNode("h3", { class: "text-xl font-semibold mb-2" }, "Video Tutorial"),
            createVNode("a", {
              href: $props.recipe.VideoLink,
              target: "_blank",
              class: "text-blue-600 underline"
            }, "Watch here", 8, ["href"])
          ])) : createCommentVNode("", true),
          $props.recipe.reviews && $props.recipe.reviews.length > 0 ? (openBlock(), createBlock("div", {
            key: 1,
            class: "mt-8"
          }, [
            createVNode("h3", { class: "text-xl font-semibold mb-4" }, "Reviews"),
            createVNode("ul", { class: "space-y-4" }, [
              (openBlock(true), createBlock(Fragment, null, renderList($props.recipe.reviews, (review) => {
                return openBlock(), createBlock("li", {
                  key: review.id,
                  class: "border-b pb-4"
                }, [
                  createVNode("p", { class: "text-lg font-semibold" }, toDisplayString(review.user.name), 1),
                  createVNode("p", { class: "text-sm text-gray-600" }, "Rating: " + toDisplayString(review.rating) + " stars", 1),
                  createVNode("p", { class: "text-gray-700" }, toDisplayString(review.comment), 1)
                ]);
              }), 128))
            ])
          ])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Recipes/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b6dcef29"]]);
export {
  Show as default
};
