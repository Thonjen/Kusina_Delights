import { reactive, resolveComponent, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate } from "vue/server-renderer";
import { L as Layout } from "./backend-B8jYqHuT.js";
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";
import "@inertiajs/inertia-vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-3H3I4iid.js";
import "./DropdownLink-DStkidMI.js";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    review: Object,
    users: Array,
    recipes: Array
  },
  setup(__props) {
    const props = __props;
    const form = reactive({
      user_id: props.review.user_id,
      recipe_id: props.review.recipe_id,
      Star: props.review.Star,
      Review: props.review.Review
    });
    const submit = async () => {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "Are you sure you want to update this review?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, update review!",
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
          await Inertia.put(route("reviews.update", props.review.ReviewsID), form);
          Swal.fire({
            title: "Success!",
            text: "Your review has been updated.",
            icon: "success",
            confirmButtonText: "Okay"
          });
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "There was an error updating your review.",
            icon: "error",
            confirmButtonText: "Try Again"
          });
        }
      } else {
        Swal.fire({
          title: "Cancelled",
          text: "Your review was not updated.",
          icon: "info",
          confirmButtonText: "Okay"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InertiaLink = resolveComponent("InertiaLink");
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg"${_scopeId}><h1 class="text-3xl font-semibold text-gray-900 mb-6"${_scopeId}>Edit Review</h1><form class="grid grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label for="user_id" class="block text-sm font-medium text-gray-700"${_scopeId}>User</label><select id="user_id" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required${_scopeId}><!--[-->`);
            ssrRenderList(__props.users, (user) => {
              _push2(`<option${ssrRenderAttr("value", user.id)}${ssrIncludeBooleanAttr(Array.isArray(form.user_id) ? ssrLooseContain(form.user_id, user.id) : ssrLooseEqual(form.user_id, user.id)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(user.name)}</option>`);
            });
            _push2(`<!--]--></select></div><div${_scopeId}><label for="recipe_id" class="block text-sm font-medium text-gray-700"${_scopeId}>Recipe</label><select id="recipe_id" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required${_scopeId}><!--[-->`);
            ssrRenderList(__props.recipes, (recipe) => {
              _push2(`<option${ssrRenderAttr("value", recipe.RecipeID)}${ssrIncludeBooleanAttr(Array.isArray(form.recipe_id) ? ssrLooseContain(form.recipe_id, recipe.RecipeID) : ssrLooseEqual(form.recipe_id, recipe.RecipeID)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(recipe.RecipeTitle)}</option>`);
            });
            _push2(`<!--]--></select></div><div${_scopeId}><label for="Star" class="block text-sm font-medium text-gray-700"${_scopeId}>Star Rating</label><input${ssrRenderAttr("value", form.Star)} type="number" id="Star" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" min="1" max="5" required${_scopeId}></div><div${_scopeId}><label for="Review" class="block text-sm font-medium text-gray-700"${_scopeId}>Review</label><textarea id="Review" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}>${ssrInterpolate(form.Review)}</textarea></div><div class="col-span-2 flex space-x-3 mt-6"${_scopeId}><button type="submit" class="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-500"${_scopeId}>Update Review</button>`);
            _push2(ssrRenderComponent(_component_InertiaLink, {
              href: _ctx.route("reviews.index"),
              class: "inline-block px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:ring-2 focus:ring-gray-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Cancel`);
                } else {
                  return [
                    createTextVNode("Cancel")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg" }, [
                createVNode("h1", { class: "text-3xl font-semibold text-gray-900 mb-6" }, "Edit Review"),
                createVNode("form", {
                  onSubmit: withModifiers(submit, ["prevent"]),
                  class: "grid grid-cols-2 gap-6"
                }, [
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "user_id",
                      class: "block text-sm font-medium text-gray-700"
                    }, "User"),
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => form.user_id = $event,
                      id: "user_id",
                      class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none",
                      required: ""
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.users, (user) => {
                        return openBlock(), createBlock("option", {
                          key: user.id,
                          value: user.id
                        }, toDisplayString(user.name), 9, ["value"]);
                      }), 128))
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, form.user_id]
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "recipe_id",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Recipe"),
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => form.recipe_id = $event,
                      id: "recipe_id",
                      class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none",
                      required: ""
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.recipes, (recipe) => {
                        return openBlock(), createBlock("option", {
                          key: recipe.RecipeID,
                          value: recipe.RecipeID
                        }, toDisplayString(recipe.RecipeTitle), 9, ["value"]);
                      }), 128))
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, form.recipe_id]
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "Star",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Star Rating"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => form.Star = $event,
                      type: "number",
                      id: "Star",
                      class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none",
                      min: "1",
                      max: "5",
                      required: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, form.Star]
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "Review",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Review"),
                    withDirectives(createVNode("textarea", {
                      "onUpdate:modelValue": ($event) => form.Review = $event,
                      id: "Review",
                      class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, form.Review]
                    ])
                  ]),
                  createVNode("div", { class: "col-span-2 flex space-x-3 mt-6" }, [
                    createVNode("button", {
                      type: "submit",
                      class: "px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-500"
                    }, "Update Review"),
                    createVNode(_component_InertiaLink, {
                      href: _ctx.route("reviews.index"),
                      class: "inline-block px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:ring-2 focus:ring-gray-300"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Cancel")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reviews/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
