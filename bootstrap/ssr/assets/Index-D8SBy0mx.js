import { withCtx, unref, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { InertiaLink } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import { L as Layout } from "./backend-B8jYqHuT.js";
import Swal from "sweetalert2";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-3H3I4iid.js";
import "./DropdownLink-DStkidMI.js";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    reviews: Object
  },
  setup(__props) {
    const deleteReview = async (id) => {
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
        iconColor: "rgba(255, 219, 99, 1)"
        // Golden yellow for icon color for consistency
      });
      if (result.isConfirmed) {
        try {
          await Inertia.delete(route("reviews.destroy", id));
          Swal.fire({
            title: "Deleted!",
            text: "The review has been deleted.",
            icon: "success",
            confirmButtonText: "Okay"
          });
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "There was an issue deleting the review.",
            icon: "error",
            confirmButtonText: "Try Again"
          });
        }
      } else {
        Swal.fire({
          title: "Cancelled",
          text: "The review was not deleted.",
          icon: "info",
          confirmButtonText: "Okay"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex justify-between items-center mb-6"${_scopeId}><h2 class="text-2xl font-bold text-gray-800"${_scopeId}>All Reviews</h2>`);
            _push2(ssrRenderComponent(unref(InertiaLink), {
              href: "/reviews/create",
              class: "inline-flex items-center px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="mr-2"${_scopeId2}>+</span> New Review `);
                } else {
                  return [
                    createVNode("span", { class: "mr-2" }, "+"),
                    createTextVNode(" New Review ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="bg-white rounded-xl shadow-lg overflow-hidden"${_scopeId}><div class="overflow-x-auto"${_scopeId}><table class="min-w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>User</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>Recipe</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>Rating</th><th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>Actions</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"${_scopeId}><!--[-->`);
            ssrRenderList(__props.reviews.data, (review) => {
              _push2(`<tr class="hover:bg-gray-50"${_scopeId}><td class="px-6 py-4 whitespace-nowrap"${_scopeId}><div class="flex items-center"${_scopeId}><div class="text-sm font-medium text-gray-900"${_scopeId}>${ssrInterpolate(review.user.name)}</div></div></td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}><div class="text-sm text-gray-900"${_scopeId}>${ssrInterpolate(review.recipe.RecipeTitle)}</div></td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}><div class="flex items-center"${_scopeId}><div class="flex"${_scopeId}><!--[-->`);
              ssrRenderList(5, (n) => {
                _push2(`<svg class="${ssrRenderClass([
                  "h-5 w-5",
                  n <= review.Star ? "text-yellow-400" : "text-gray-300"
                ])}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"${_scopeId}></path></svg>`);
              });
              _push2(`<!--]--></div><span class="ml-2 text-sm text-gray-600"${_scopeId}>(${ssrInterpolate(review.Star)})</span></div></td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"${_scopeId}><div class="flex items-center justify-end space-x-4"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(InertiaLink), {
                href: _ctx.route("reviews.show", review.ReviewsID),
                class: "text-blue-600 hover:text-blue-900 transition-colors duration-200"
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
                href: _ctx.route("reviews.edit", review.ReviewsID),
                class: "text-orange-600 hover:text-orange-900 transition-colors duration-200"
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
              _push2(`<button class="text-red-600 hover:text-red-900 transition-colors duration-200"${_scopeId}> Delete </button></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "flex justify-between items-center mb-6" }, [
                  createVNode("h2", { class: "text-2xl font-bold text-gray-800" }, "All Reviews"),
                  createVNode(unref(InertiaLink), {
                    href: "/reviews/create",
                    class: "inline-flex items-center px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "mr-2" }, "+"),
                      createTextVNode(" New Review ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "bg-white rounded-xl shadow-lg overflow-hidden" }, [
                  createVNode("div", { class: "overflow-x-auto" }, [
                    createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                      createVNode("thead", { class: "bg-gray-50" }, [
                        createVNode("tr", null, [
                          createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "User"),
                          createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Recipe"),
                          createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Rating"),
                          createVNode("th", { class: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Actions")
                        ])
                      ]),
                      createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.reviews.data, (review) => {
                          return openBlock(), createBlock("tr", {
                            key: review.ReviewsID,
                            class: "hover:bg-gray-50"
                          }, [
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode("div", { class: "text-sm font-medium text-gray-900" }, toDisplayString(review.user.name), 1)
                              ])
                            ]),
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                              createVNode("div", { class: "text-sm text-gray-900" }, toDisplayString(review.recipe.RecipeTitle), 1)
                            ]),
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode("div", { class: "flex" }, [
                                  (openBlock(), createBlock(Fragment, null, renderList(5, (n) => {
                                    return createVNode("svg", {
                                      key: n,
                                      class: [
                                        "h-5 w-5",
                                        n <= review.Star ? "text-yellow-400" : "text-gray-300"
                                      ],
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 20 20",
                                      fill: "currentColor"
                                    }, [
                                      createVNode("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" })
                                    ], 2);
                                  }), 64))
                                ]),
                                createVNode("span", { class: "ml-2 text-sm text-gray-600" }, "(" + toDisplayString(review.Star) + ")", 1)
                              ])
                            ]),
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" }, [
                              createVNode("div", { class: "flex items-center justify-end space-x-4" }, [
                                createVNode(unref(InertiaLink), {
                                  href: _ctx.route("reviews.show", review.ReviewsID),
                                  class: "text-blue-600 hover:text-blue-900 transition-colors duration-200"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" View ")
                                  ]),
                                  _: 2
                                }, 1032, ["href"]),
                                createVNode(unref(InertiaLink), {
                                  href: _ctx.route("reviews.edit", review.ReviewsID),
                                  class: "text-orange-600 hover:text-orange-900 transition-colors duration-200"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Edit ")
                                  ]),
                                  _: 2
                                }, 1032, ["href"]),
                                createVNode("button", {
                                  onClick: ($event) => deleteReview(review.ReviewsID),
                                  class: "text-red-600 hover:text-red-900 transition-colors duration-200"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reviews/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
