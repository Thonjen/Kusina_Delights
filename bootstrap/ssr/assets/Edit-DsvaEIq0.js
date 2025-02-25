import { ref, onMounted, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, withModifiers, withDirectives, vModelSelect, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { L as Layout } from "./backend-B8jYqHuT.js";
import { useForm } from "@inertiajs/inertia-vue3";
import Swal from "sweetalert2";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-3H3I4iid.js";
import "./DropdownLink-DStkidMI.js";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    recipe: {
      type: Object,
      required: true
    },
    chefs: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const props = __props;
    const form = useForm({
      chef_id: ((_a = props.recipe) == null ? void 0 : _a.chef_id) ?? "",
      RecipeTitle: ((_b = props.recipe) == null ? void 0 : _b.RecipeTitle) ?? "",
      Description: ((_c = props.recipe) == null ? void 0 : _c.Description) ?? "",
      Ingredients: ((_d = props.recipe) == null ? void 0 : _d.Ingredients) ?? "",
      RecipePhoto: null,
      Instructions: ((_e = props.recipe) == null ? void 0 : _e.Instructions) ?? "",
      Preparation: ((_f = props.recipe) == null ? void 0 : _f.Preparation) ?? "",
      CookingTime: ((_g = props.recipe) == null ? void 0 : _g.CookingTime) ?? "",
      Difficulty: ((_h = props.recipe) == null ? void 0 : _h.Difficulty) ?? "",
      Servings: ((_i = props.recipe) == null ? void 0 : _i.Servings) ?? ""
    });
    const errors = ref([]);
    const previewImage = ref(null);
    onMounted(() => {
      if (props.recipe.RecipePhoto) {
        previewImage.value = `/storage/${props.recipe.RecipePhoto}`;
      }
    });
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        previewImage.value = URL.createObjectURL(file);
        form.RecipePhoto = file;
      }
    };
    const submitForm = async () => {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You are about to update this recipe.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, update it!",
        cancelButtonText: "No, cancel",
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
        form.put(route("recipes.update", props.recipe.RecipeID), {
          onFinish: () => {
            Swal.fire({
              title: "Updated!",
              text: "Your recipe has been updated successfully.",
              icon: "success",
              confirmButtonText: "Great!"
            });
            errors.value = [];
          },
          onError: (error) => {
            Swal.fire({
              title: "Error!",
              text: "There was an error updating the recipe.",
              icon: "error",
              confirmButtonText: "Try Again"
            });
            errors.value = error;
          }
        });
      } else {
        Swal.fire({
          title: "Cancelled",
          text: "Recipe update has been cancelled.",
          icon: "info",
          confirmButtonText: "Okay"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg"${_scopeId}><h1 class="text-3xl font-semibold mb-6"${_scopeId}>Edit Recipe</h1>`);
            if (errors.value.length) {
              _push2(`<div class="mb-4"${_scopeId}><ul class="text-red-600"${_scopeId}><!--[-->`);
              ssrRenderList(errors.value, (error, index) => {
                _push2(`<li${_scopeId}>${ssrInterpolate(error)}</li>`);
              });
              _push2(`<!--]--></ul></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form class="grid grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label for="chef_id" class="block text-sm font-medium text-gray-700"${_scopeId}>Chef</label><select id="chef_id" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}><!--[-->`);
            ssrRenderList(__props.chefs, (chef) => {
              _push2(`<option${ssrRenderAttr("value", chef.ChefID)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).chef_id) ? ssrLooseContain(unref(form).chef_id, chef.ChefID) : ssrLooseEqual(unref(form).chef_id, chef.ChefID)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(chef.user.name)}</option>`);
            });
            _push2(`<!--]--></select></div><div${_scopeId}><label for="RecipeTitle" class="block text-sm font-medium text-gray-700"${_scopeId}>Recipe Title</label><input type="text" id="RecipeTitle"${ssrRenderAttr("value", unref(form).RecipeTitle)} class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}></div><div${_scopeId}><label for="Description" class="block text-sm font-medium text-gray-700"${_scopeId}>Description</label><textarea id="Description" rows="4" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}>${ssrInterpolate(unref(form).Description)}</textarea></div><div${_scopeId}><label for="Ingredients" class="block text-sm font-medium text-gray-700"${_scopeId}>Ingredients</label><textarea id="Ingredients" rows="4" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}>${ssrInterpolate(unref(form).Ingredients)}</textarea></div><div${_scopeId}><label for="RecipePhoto" class="block text-sm font-medium text-gray-700"${_scopeId}>Recipe Photo</label><input type="file" id="RecipePhoto" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}>`);
            if (unref(form).RecipePhoto) {
              _push2(`<div${_scopeId}><img${ssrRenderAttr("src", previewImage.value)} alt="Recipe Photo" class="mt-4 w-48 h-48 object-cover"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.recipe.RecipePhoto) {
              _push2(`<div class="mt-2"${_scopeId}><img${ssrRenderAttr("src", `/storage/${__props.recipe.RecipePhoto}`)} alt="Current Recipe Photo" class="mt-4 w-48 h-48 object-cover"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div${_scopeId}><label for="Instructions" class="block text-sm font-medium text-gray-700"${_scopeId}>Instructions</label><textarea id="Instructions" rows="4" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}>${ssrInterpolate(unref(form).Instructions)}</textarea></div><div${_scopeId}><label for="Preparation" class="block text-sm font-medium text-gray-700"${_scopeId}>Preparation Time</label><input type="text" id="Preparation"${ssrRenderAttr("value", unref(form).Preparation)} class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}></div><div${_scopeId}><label for="CookingTime" class="block text-sm font-medium text-gray-700"${_scopeId}>Cooking Time (minutes)</label><input type="number" id="CookingTime"${ssrRenderAttr("value", unref(form).CookingTime)} class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}></div><div${_scopeId}><label for="Difficulty" class="block text-sm font-medium text-gray-700"${_scopeId}>Difficulty</label><input type="text" id="Difficulty"${ssrRenderAttr("value", unref(form).Difficulty)} class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}></div><div${_scopeId}><label for="Servings" class="block text-sm font-medium text-gray-700"${_scopeId}>Servings</label><input type="number" id="Servings"${ssrRenderAttr("value", unref(form).Servings)} class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}></div><div class="col-span-2 flex space-x-3 mt-6"${_scopeId}><button type="submit" class="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-500"${_scopeId}>Update Recipe</button><a href="/recipes"${_scopeId}><button type="button" class="px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:ring-2 focus:ring-gray-300"${_scopeId}>Cancel</button></a></div></form></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg" }, [
                createVNode("h1", { class: "text-3xl font-semibold mb-6" }, "Edit Recipe"),
                errors.value.length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mb-4"
                }, [
                  createVNode("ul", { class: "text-red-600" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(errors.value, (error, index) => {
                      return openBlock(), createBlock("li", { key: index }, toDisplayString(error), 1);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true),
                createVNode("form", {
                  onSubmit: withModifiers(submitForm, ["prevent"]),
                  class: "grid grid-cols-2 gap-6"
                }, [
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "chef_id",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Chef"),
                    withDirectives(createVNode("select", {
                      id: "chef_id",
                      "onUpdate:modelValue": ($event) => unref(form).chef_id = $event,
                      class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.chefs, (chef) => {
                        return openBlock(), createBlock("option", {
                          key: chef.ChefID,
                          value: chef.ChefID
                        }, toDisplayString(chef.user.name), 9, ["value"]);
                      }), 128))
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, unref(form).chef_id]
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "RecipeTitle",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Recipe Title"),
                    withDirectives(createVNode("input", {
                      type: "text",
                      id: "RecipeTitle",
                      "onUpdate:modelValue": ($event) => unref(form).RecipeTitle = $event,
                      class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).RecipeTitle]
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "Description",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Description"),
                    withDirectives(createVNode("textarea", {
                      id: "Description",
                      "onUpdate:modelValue": ($event) => unref(form).Description = $event,
                      rows: "4",
                      class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).Description]
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "Ingredients",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Ingredients"),
                    withDirectives(createVNode("textarea", {
                      id: "Ingredients",
                      "onUpdate:modelValue": ($event) => unref(form).Ingredients = $event,
                      rows: "4",
                      class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).Ingredients]
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "RecipePhoto",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Recipe Photo"),
                    createVNode("input", {
                      type: "file",
                      id: "RecipePhoto",
                      onChange: handleFileUpload,
                      class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    }, null, 32),
                    unref(form).RecipePhoto ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("img", {
                        src: previewImage.value,
                        alt: "Recipe Photo",
                        class: "mt-4 w-48 h-48 object-cover"
                      }, null, 8, ["src"])
                    ])) : createCommentVNode("", true),
                    __props.recipe.RecipePhoto ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "mt-2"
                    }, [
                      createVNode("img", {
                        src: `/storage/${__props.recipe.RecipePhoto}`,
                        alt: "Current Recipe Photo",
                        class: "mt-4 w-48 h-48 object-cover"
                      }, null, 8, ["src"])
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "Instructions",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Instructions"),
                    withDirectives(createVNode("textarea", {
                      id: "Instructions",
                      "onUpdate:modelValue": ($event) => unref(form).Instructions = $event,
                      rows: "4",
                      class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).Instructions]
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "Preparation",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Preparation Time"),
                    withDirectives(createVNode("input", {
                      type: "text",
                      id: "Preparation",
                      "onUpdate:modelValue": ($event) => unref(form).Preparation = $event,
                      class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).Preparation]
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "CookingTime",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Cooking Time (minutes)"),
                    withDirectives(createVNode("input", {
                      type: "number",
                      id: "CookingTime",
                      "onUpdate:modelValue": ($event) => unref(form).CookingTime = $event,
                      class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).CookingTime]
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "Difficulty",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Difficulty"),
                    withDirectives(createVNode("input", {
                      type: "text",
                      id: "Difficulty",
                      "onUpdate:modelValue": ($event) => unref(form).Difficulty = $event,
                      class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).Difficulty]
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "Servings",
                      class: "block text-sm font-medium text-gray-700"
                    }, "Servings"),
                    withDirectives(createVNode("input", {
                      type: "number",
                      id: "Servings",
                      "onUpdate:modelValue": ($event) => unref(form).Servings = $event,
                      class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).Servings]
                    ])
                  ]),
                  createVNode("div", { class: "col-span-2 flex space-x-3 mt-6" }, [
                    createVNode("button", {
                      type: "submit",
                      class: "px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-500"
                    }, "Update Recipe"),
                    createVNode("a", { href: "/recipes" }, [
                      createVNode("button", {
                        type: "button",
                        class: "px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:ring-2 focus:ring-gray-300"
                      }, "Cancel")
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Recipes/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
