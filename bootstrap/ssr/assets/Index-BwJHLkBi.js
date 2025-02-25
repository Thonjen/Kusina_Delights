import { withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { InertiaLink } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import { L as Layout } from "./backend-DaIRI2w_.js";
import "./ApplicationLogo-3H3I4iid.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./DropdownLink-DStkidMI.js";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    reviews: Object
  },
  setup(__props) {
    const deleteReview = (id) => {
      if (confirm("Are you sure you want to delete this review?")) {
        Inertia.delete(route("reviews.destroy", id));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center mb-4"${_scopeId}><h2 class="text-2xl font-semibold text-gray-700"${_scopeId}>All Reviews</h2>`);
            _push2(ssrRenderComponent(unref(InertiaLink), {
              href: "/reviews/create",
              class: "bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`New Review`);
                } else {
                  return [
                    createTextVNode("New Review")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="bg-white rounded-lg shadow overflow-hidden"${_scopeId}><div class="p-4 border-t"${_scopeId}><div class="flex mb-2 font-semibold text-gray-700"${_scopeId}><div class="flex-1"${_scopeId}>User</div><div class="flex-1"${_scopeId}>Recipe</div><div class="flex-1"${_scopeId}>Star Rating</div><div class="flex-1 text-center"${_scopeId}>Actions</div></div>`);
            if (__props.reviews.data.length > 0) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.reviews.data, (review) => {
                _push2(`<div class="flex justify-between items-center py-3 border-b"${_scopeId}><div class="flex-1"${_scopeId}><p class="text-lg font-medium"${_scopeId}>${ssrInterpolate(review.user.name)}</p></div><div class="flex-1"${_scopeId}><p class="text-sm text-gray-500"${_scopeId}>${ssrInterpolate(review.recipe.RecipeTitle)}</p></div><div class="flex-1"${_scopeId}><p class="text-sm"${_scopeId}>${ssrInterpolate(review.Star)}</p></div><div class="flex-1 text-center space-x-2"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(InertiaLink), {
                  href: _ctx.route("reviews.show", review.ReviewsID),
                  class: "text-blue-500 hover:text-blue-700"
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
                _push2(ssrRenderComponent(unref(InertiaLink), {
                  href: _ctx.route("reviews.edit", review.ReviewsID),
                  class: "text-yellow-500 hover:text-yellow-700"
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
                _push2(`<button class="text-red-600 hover:text-red-800"${_scopeId}>Delete</button></div></div>`);
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                createVNode("h2", { class: "text-2xl font-semibold text-gray-700" }, "All Reviews"),
                createVNode(unref(InertiaLink), {
                  href: "/reviews/create",
                  class: "bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg"
                }, {
                  default: withCtx(() => [
                    createTextVNode("New Review")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "bg-white rounded-lg shadow overflow-hidden" }, [
                createVNode("div", { class: "p-4 border-t" }, [
                  createVNode("div", { class: "flex mb-2 font-semibold text-gray-700" }, [
                    createVNode("div", { class: "flex-1" }, "User"),
                    createVNode("div", { class: "flex-1" }, "Recipe"),
                    createVNode("div", { class: "flex-1" }, "Star Rating"),
                    createVNode("div", { class: "flex-1 text-center" }, "Actions")
                  ]),
                  __props.reviews.data.length > 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(__props.reviews.data, (review) => {
                    return openBlock(), createBlock("div", {
                      key: review.ReviewsID,
                      class: "flex justify-between items-center py-3 border-b"
                    }, [
                      createVNode("div", { class: "flex-1" }, [
                        createVNode("p", { class: "text-lg font-medium" }, toDisplayString(review.user.name), 1)
                      ]),
                      createVNode("div", { class: "flex-1" }, [
                        createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(review.recipe.RecipeTitle), 1)
                      ]),
                      createVNode("div", { class: "flex-1" }, [
                        createVNode("p", { class: "text-sm" }, toDisplayString(review.Star), 1)
                      ]),
                      createVNode("div", { class: "flex-1 text-center space-x-2" }, [
                        createVNode(unref(InertiaLink), {
                          href: _ctx.route("reviews.show", review.ReviewsID),
                          class: "text-blue-500 hover:text-blue-700"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("View")
                          ]),
                          _: 2
                        }, 1032, ["href"]),
                        createVNode(unref(InertiaLink), {
                          href: _ctx.route("reviews.edit", review.ReviewsID),
                          class: "text-yellow-500 hover:text-yellow-700"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Edit")
                          ]),
                          _: 2
                        }, 1032, ["href"]),
                        createVNode("button", {
                          onClick: ($event) => deleteReview(review.ReviewsID),
                          class: "text-red-600 hover:text-red-800"
                        }, "Delete", 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reviews/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
