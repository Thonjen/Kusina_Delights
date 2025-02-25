import { L as Layout } from "./frontend-qce4MpuY.js";
import { resolveComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "axios";
import "lodash";
const _sfc_main = {
  components: {
    Layout
  },
  props: {
    recipe: Object,
    // Received from the controller
    viewCount: Number
  },
  data() {
    return {
      rating: 0,
      reviewText: "",
      // Store the review text
      username: ""
      // Store the username if necessary (not used in backend for this case)
    };
  },
  mounted() {
    console.log("Received view count:", this.viewCount);
  },
  methods: {
    setRating(star) {
      this.rating = star;
    },
    async submitReview() {
      try {
        const response = await axios.post(`/api/recipes/${this.recipe.RecipeID}/reviews`, {
          rating: this.rating,
          review: this.reviewText
        });
        this.recipe.reviews.push(response.data);
        this.reviewText = "";
        this.rating = 0;
      } catch (error) {
        console.error("Error submitting review:", error);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="relative h-[362px]" data-v-0b6c262c${_scopeId}><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ backgroundImage: "url('/storage/" + $props.recipe.RecipePhoto + "')", filter: "brightness(0.7)" })}" data-v-0b6c262c${_scopeId}></div><div class="flex items-center justify-center h-full relative" data-v-0b6c262c${_scopeId}><p class="text-white text-center px-4 text-large font-bold drop-shadow-xl white-shadow" data-v-0b6c262c${_scopeId}>${ssrInterpolate($props.recipe.RecipeTitle)}</p><div class="absolute bottom-4 right-4 text-white text-lg bg-black opacity-70 px-4 py-2 rounded-full" data-v-0b6c262c${_scopeId}> Views: ${ssrInterpolate($props.viewCount)}</div></div></div><div class="mx-auto text-left max-w-4xl my-4 text-small text-black-100 space-y-4" data-v-0b6c262c${_scopeId}><div data-v-0b6c262c${_scopeId}><p class="text-small font-bold" data-v-0b6c262c${_scopeId}>Ingredients</p><!--[-->`);
        ssrRenderList($props.recipe.Ingredients.split(","), (ingredient, index) => {
          _push2(`<div data-v-0b6c262c${_scopeId}><p data-v-0b6c262c${_scopeId}>${ssrInterpolate(ingredient.trim())}</p></div>`);
        });
        _push2(`<!--]--></div><div data-v-0b6c262c${_scopeId}><p class="text-normal font-bold" data-v-0b6c262c${_scopeId}>How To Prepare</p><!--[-->`);
        ssrRenderList($props.recipe.Instructions.split("\n"), (step, index) => {
          _push2(`<div data-v-0b6c262c${_scopeId}><p data-v-0b6c262c${_scopeId}><span class="text-small font-bold" data-v-0b6c262c${_scopeId}>${ssrInterpolate(step.trim())}</span></p></div>`);
        });
        _push2(`<!--]--></div><div data-v-0b6c262c${_scopeId}><p class="font-bold" data-v-0b6c262c${_scopeId}>Additional Information</p><p data-v-0b6c262c${_scopeId}>${ssrInterpolate($props.recipe.Description)}</p></div></div><div class="p-6 bg-gray-100 rounded-lg max-w-6xl mx-auto space-y-4 mt-8" data-v-0b6c262c${_scopeId}><h2 class="text-2xl font-bold" data-v-0b6c262c${_scopeId}>Reviews</h2>`);
        if ($props.recipe.reviews.length === 0) {
          _push2(`<div class="bg-white p-4 text-center text-gray-600 font-semibold" data-v-0b6c262c${_scopeId}> No reviews yet. </div>`);
        } else {
          _push2(`<div class="bg-gray-200 rounded-lg p-4 space-y-4" data-v-0b6c262c${_scopeId}><!--[-->`);
          ssrRenderList($props.recipe.reviews, (review, index) => {
            _push2(`<div class="bg-white rounded-lg p-4 flex justify-between items-start shadow-sm" data-v-0b6c262c${_scopeId}><div data-v-0b6c262c${_scopeId}><p class="flex items-center text-gray-700 font-bold" data-v-0b6c262c${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="text-gray-500" data-v-0b6c262c${_scopeId}><circle cx="12" cy="8" r="4" class="fill-current text-gray-600" data-v-0b6c262c${_scopeId}></circle><path d="M12 14c-4 0-6 2-6 3v1h12v-1c0-1-2-3-6-3z" class="fill-current text-gray-600" data-v-0b6c262c${_scopeId}></path></svg> ${ssrInterpolate(review.user.name || "Anonymous")}</p><p class="text-gray-600 mt-1" data-v-0b6c262c${_scopeId}><i data-v-0b6c262c${_scopeId}>${ssrInterpolate(review.Review)}</i></p></div><div class="flex items-center" data-v-0b6c262c${_scopeId}><!--[-->`);
            ssrRenderList(5, (star) => {
              _push2(`<svg class="${ssrRenderClass({
                "fill-yellow-500": review.Star >= star,
                "fill-gray-300": review.Star < star,
                "cursor-pointer": true,
                "hover:fill-yellow-400": true,
                "transition-colors": true
              })}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" data-v-0b6c262c${_scopeId}><path${ssrRenderAttr("d", review.Star >= star ? "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" : "M12 15.4l3.76 2.28-1-4.17 3.27-2.84-4.28-.38L12 4.75l-1.75 5.68-4.28.38 3.27 2.84-1 4.17z")} data-v-0b6c262c${_scopeId}></path></svg>`);
            });
            _push2(`<!--]--></div></div>`);
          });
          _push2(`<!--]--></div>`);
        }
        _push2(`<h3 class="text-xl font-bold mt-6" data-v-0b6c262c${_scopeId}>Write a Review</h3><div class="bg-gray-200 rounded-lg p-4 space-y-3" data-v-0b6c262c${_scopeId}><textarea placeholder="Review*" class="w-full p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none text-small" data-v-0b6c262c${_scopeId}>${ssrInterpolate($data.reviewText)}</textarea><div class="flex items-center space-x-4" data-v-0b6c262c${_scopeId}><input type="text"${ssrRenderAttr("value", $data.username)} placeholder="Username*" class="w-1/2 p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-small" data-v-0b6c262c${_scopeId}><div class="flex items-center space-x-2" data-v-0b6c262c${_scopeId}><label class="text-gray-700 font-semibold" data-v-0b6c262c${_scopeId}>Rate</label><div class="flex items-center space-x-1 text-2xl" data-v-0b6c262c${_scopeId}><!--[-->`);
        ssrRenderList(5, (star) => {
          _push2(`<svg class="${ssrRenderClass({
            "fill-yellow-500": $data.rating >= star,
            "fill-gray-300": $data.rating < star,
            "cursor-pointer": true,
            "hover:fill-yellow-400": true,
            "transition-colors": true
          })}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" data-v-0b6c262c${_scopeId}><path${ssrRenderAttr("d", $data.rating >= star ? "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" : "M12 15.4l3.76 2.28-1-4.17 3.27-2.84-4.28-.38L12 4.75l-1.75 5.68-4.28.38 3.27 2.84-1 4.17z")} data-v-0b6c262c${_scopeId}></path></svg>`);
        });
        _push2(`<!--]--></div></div></div><div class="flex justify-start space-x-2 mt-4" data-v-0b6c262c${_scopeId}><button class="bg-green-400 text-white font-semibold py-2 px-36 rounded-2xl hover:bg-green-500 text-small" data-v-0b6c262c${_scopeId}>Submit Review</button><button class="bg-red-400 text-white font-semibold py-2 px-28 rounded-2xl hover:bg-red-500 text-small" data-v-0b6c262c${_scopeId}>Cancel</button></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "relative h-[362px]" }, [
            createVNode("div", {
              class: "absolute inset-0 bg-cover bg-center",
              style: { backgroundImage: "url('/storage/" + $props.recipe.RecipePhoto + "')", filter: "brightness(0.7)" }
            }, null, 4),
            createVNode("div", { class: "flex items-center justify-center h-full relative" }, [
              createVNode("p", { class: "text-white text-center px-4 text-large font-bold drop-shadow-xl white-shadow" }, toDisplayString($props.recipe.RecipeTitle), 1),
              createVNode("div", { class: "absolute bottom-4 right-4 text-white text-lg bg-black opacity-70 px-4 py-2 rounded-full" }, " Views: " + toDisplayString($props.viewCount), 1)
            ])
          ]),
          createVNode("div", { class: "mx-auto text-left max-w-4xl my-4 text-small text-black-100 space-y-4" }, [
            createVNode("div", null, [
              createVNode("p", { class: "text-small font-bold" }, "Ingredients"),
              (openBlock(true), createBlock(Fragment, null, renderList($props.recipe.Ingredients.split(","), (ingredient, index) => {
                return openBlock(), createBlock("div", { key: index }, [
                  createVNode("p", null, toDisplayString(ingredient.trim()), 1)
                ]);
              }), 128))
            ]),
            createVNode("div", null, [
              createVNode("p", { class: "text-normal font-bold" }, "How To Prepare"),
              (openBlock(true), createBlock(Fragment, null, renderList($props.recipe.Instructions.split("\n"), (step, index) => {
                return openBlock(), createBlock("div", { key: index }, [
                  createVNode("p", null, [
                    createVNode("span", { class: "text-small font-bold" }, toDisplayString(step.trim()), 1)
                  ])
                ]);
              }), 128))
            ]),
            createVNode("div", null, [
              createVNode("p", { class: "font-bold" }, "Additional Information"),
              createVNode("p", null, toDisplayString($props.recipe.Description), 1)
            ])
          ]),
          createVNode("div", { class: "p-6 bg-gray-100 rounded-lg max-w-6xl mx-auto space-y-4 mt-8" }, [
            createVNode("h2", { class: "text-2xl font-bold" }, "Reviews"),
            $props.recipe.reviews.length === 0 ? (openBlock(), createBlock("div", {
              key: 0,
              class: "bg-white p-4 text-center text-gray-600 font-semibold"
            }, " No reviews yet. ")) : (openBlock(), createBlock("div", {
              key: 1,
              class: "bg-gray-200 rounded-lg p-4 space-y-4"
            }, [
              (openBlock(true), createBlock(Fragment, null, renderList($props.recipe.reviews, (review, index) => {
                return openBlock(), createBlock("div", {
                  key: index,
                  class: "bg-white rounded-lg p-4 flex justify-between items-start shadow-sm"
                }, [
                  createVNode("div", null, [
                    createVNode("p", { class: "flex items-center text-gray-700 font-bold" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "24",
                        height: "24",
                        class: "text-gray-500"
                      }, [
                        createVNode("circle", {
                          cx: "12",
                          cy: "8",
                          r: "4",
                          class: "fill-current text-gray-600"
                        }),
                        createVNode("path", {
                          d: "M12 14c-4 0-6 2-6 3v1h12v-1c0-1-2-3-6-3z",
                          class: "fill-current text-gray-600"
                        })
                      ])),
                      createTextVNode(" " + toDisplayString(review.user.name || "Anonymous"), 1)
                    ]),
                    createVNode("p", { class: "text-gray-600 mt-1" }, [
                      createVNode("i", null, toDisplayString(review.Review), 1)
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(5, (star) => {
                      return createVNode("svg", {
                        key: star,
                        class: {
                          "fill-yellow-500": review.Star >= star,
                          "fill-gray-300": review.Star < star,
                          "cursor-pointer": true,
                          "hover:fill-yellow-400": true,
                          "transition-colors": true
                        },
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "24",
                        height: "24"
                      }, [
                        createVNode("path", {
                          d: review.Star >= star ? "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" : "M12 15.4l3.76 2.28-1-4.17 3.27-2.84-4.28-.38L12 4.75l-1.75 5.68-4.28.38 3.27 2.84-1 4.17z"
                        }, null, 8, ["d"])
                      ], 2);
                    }), 64))
                  ])
                ]);
              }), 128))
            ])),
            createVNode("h3", { class: "text-xl font-bold mt-6" }, "Write a Review"),
            createVNode("div", { class: "bg-gray-200 rounded-lg p-4 space-y-3" }, [
              withDirectives(createVNode("textarea", {
                "onUpdate:modelValue": ($event) => $data.reviewText = $event,
                placeholder: "Review*",
                class: "w-full p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none text-small"
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelText, $data.reviewText]
              ]),
              createVNode("div", { class: "flex items-center space-x-4" }, [
                withDirectives(createVNode("input", {
                  type: "text",
                  "onUpdate:modelValue": ($event) => $data.username = $event,
                  placeholder: "Username*",
                  class: "w-1/2 p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-small"
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $data.username]
                ]),
                createVNode("div", { class: "flex items-center space-x-2" }, [
                  createVNode("label", { class: "text-gray-700 font-semibold" }, "Rate"),
                  createVNode("div", { class: "flex items-center space-x-1 text-2xl" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(5, (star) => {
                      return createVNode("svg", {
                        key: star,
                        onClick: ($event) => $options.setRating(star),
                        class: {
                          "fill-yellow-500": $data.rating >= star,
                          "fill-gray-300": $data.rating < star,
                          "cursor-pointer": true,
                          "hover:fill-yellow-400": true,
                          "transition-colors": true
                        },
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "24",
                        height: "24"
                      }, [
                        createVNode("path", {
                          d: $data.rating >= star ? "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" : "M12 15.4l3.76 2.28-1-4.17 3.27-2.84-4.28-.38L12 4.75l-1.75 5.68-4.28.38 3.27 2.84-1 4.17z"
                        }, null, 8, ["d"])
                      ], 10, ["onClick"]);
                    }), 64))
                  ])
                ])
              ]),
              createVNode("div", { class: "flex justify-start space-x-2 mt-4" }, [
                createVNode("button", {
                  onClick: $options.submitReview,
                  class: "bg-green-400 text-white font-semibold py-2 px-36 rounded-2xl hover:bg-green-500 text-small"
                }, "Submit Review", 8, ["onClick"]),
                createVNode("button", { class: "bg-red-400 text-white font-semibold py-2 px-28 rounded-2xl hover:bg-red-500 text-small" }, "Cancel")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Webpages/ViewRecipe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ViewRecipe = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0b6c262c"]]);
export {
  ViewRecipe as default
};
