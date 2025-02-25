import { withCtx, unref, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { L as Layout } from "./backend-B8jYqHuT.js";
import "@inertiajs/inertia";
import { Link } from "@inertiajs/vue3";
import "@inertiajs/inertia-vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-3H3I4iid.js";
import "./DropdownLink-DStkidMI.js";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    review: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"${_scopeId}><h1 class="text-3xl font-semibold text-gray-900"${_scopeId}>Review Details</h1><div class="mt-6 bg-white shadow-lg rounded-lg p-6"${_scopeId}><div class="text-lg font-semibold text-gray-800"${_scopeId}>User</div><p class="text-gray-600"${_scopeId}>${ssrInterpolate(__props.review.user.name)}</p><div class="mt-4 text-lg font-semibold text-gray-800"${_scopeId}>Recipe</div><p class="text-gray-600"${_scopeId}>${ssrInterpolate(__props.review.recipe.RecipeTitle)}</p><div class="mt-4 text-lg font-semibold text-gray-800"${_scopeId}>Star Rating</div><p class="text-gray-600"${_scopeId}>${ssrInterpolate(__props.review.Star)}</p><div class="mt-4 text-lg font-semibold text-gray-800"${_scopeId}>Review</div><p class="text-gray-600"${_scopeId}>${ssrInterpolate(__props.review.Review || "No review text provided.")}</p></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("reviews.index"),
              class: "mt-6 inline-block bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Back to List`);
                } else {
                  return [
                    createTextVNode("Back to List")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" }, [
                createVNode("h1", { class: "text-3xl font-semibold text-gray-900" }, "Review Details"),
                createVNode("div", { class: "mt-6 bg-white shadow-lg rounded-lg p-6" }, [
                  createVNode("div", { class: "text-lg font-semibold text-gray-800" }, "User"),
                  createVNode("p", { class: "text-gray-600" }, toDisplayString(__props.review.user.name), 1),
                  createVNode("div", { class: "mt-4 text-lg font-semibold text-gray-800" }, "Recipe"),
                  createVNode("p", { class: "text-gray-600" }, toDisplayString(__props.review.recipe.RecipeTitle), 1),
                  createVNode("div", { class: "mt-4 text-lg font-semibold text-gray-800" }, "Star Rating"),
                  createVNode("p", { class: "text-gray-600" }, toDisplayString(__props.review.Star), 1),
                  createVNode("div", { class: "mt-4 text-lg font-semibold text-gray-800" }, "Review"),
                  createVNode("p", { class: "text-gray-600" }, toDisplayString(__props.review.Review || "No review text provided."), 1)
                ]),
                createVNode(unref(Link), {
                  href: _ctx.route("reviews.index"),
                  class: "mt-6 inline-block bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Back to List")
                  ]),
                  _: 1
                }, 8, ["href"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reviews/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
