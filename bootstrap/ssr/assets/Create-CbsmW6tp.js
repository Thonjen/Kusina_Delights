import { withCtx, unref, createVNode, withModifiers, createTextVNode, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList, toDisplayString, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { L as Layout } from "./backend-B8jYqHuT.js";
import Swal from "sweetalert2";
import "@inertiajs/inertia-vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-3H3I4iid.js";
import "./DropdownLink-DStkidMI.js";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    chefs: Array
  },
  setup(__props) {
    const form = useForm({
      RecipeTitle: "",
      chef_id: null,
      Description: "",
      Ingredients: "",
      Instructions: "",
      Preparation: "",
      CookingTime: null,
      Difficulty: "",
      Servings: null,
      RecipePhoto: null,
      VideoLink: ""
    });
    const handleFileChange = (event) => {
      form.RecipePhoto = event.target.files[0];
    };
    const submitForm = async () => {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You are about to submit this recipe.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, submit it!",
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
        await form.post(route("recipes.store"), {
          preserveState: true,
          onFinish: () => {
            Inertia.visit(route("recipes.index"));
            Swal.fire({
              title: "Submitted!",
              text: "Your recipe has been submitted.",
              icon: "success",
              confirmButtonText: "Great!"
            });
          }
        });
      } else {
        Swal.fire({
          title: "Cancelled",
          text: "Recipe submission has been cancelled.",
          icon: "info",
          confirmButtonText: "Okay"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-3xl font-semibold mb-8"${_scopeId}>Create Recipe</h2><form class="grid grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label for="RecipeTitle" class="block text-gray-700 font-medium"${_scopeId}>Recipe Title<span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).RecipeTitle)} type="text" id="RecipeTitle" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required${_scopeId}></div><div${_scopeId}><label for="chef_id" class="block text-gray-700 font-medium"${_scopeId}>Chef</label><select id="chef_id" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required${_scopeId}><!--[-->`);
            ssrRenderList(__props.chefs, (chef) => {
              _push2(`<option${ssrRenderAttr("value", chef.ChefID)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).chef_id) ? ssrLooseContain(unref(form).chef_id, chef.ChefID) : ssrLooseEqual(unref(form).chef_id, chef.ChefID)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(chef.user.name)}</option>`);
            });
            _push2(`<!--]--></select></div><div${_scopeId}><label for="Description" class="block text-gray-700 font-medium"${_scopeId}>Description</label><textarea id="Description" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" rows="3"${_scopeId}>${ssrInterpolate(unref(form).Description)}</textarea></div><div${_scopeId}><label for="Ingredients" class="block text-gray-700 font-medium"${_scopeId}>Ingredients<span class="text-red-500"${_scopeId}>*</span></label><textarea id="Ingredients" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" rows="3" required${_scopeId}>${ssrInterpolate(unref(form).Ingredients)}</textarea></div><div${_scopeId}><label for="Instructions" class="block text-gray-700 font-medium"${_scopeId}>Instructions<span class="text-red-500"${_scopeId}>*</span></label><textarea id="Instructions" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" rows="3" required${_scopeId}>${ssrInterpolate(unref(form).Instructions)}</textarea></div><div${_scopeId}><label for="Preparation" class="block text-gray-700 font-medium"${_scopeId}>Preparation Time (minutes)</label><input${ssrRenderAttr("value", unref(form).Preparation)} type="number" id="Preparation" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}></div><div${_scopeId}><label for="CookingTime" class="block text-gray-700 font-medium"${_scopeId}>Cooking Time (minutes)</label><input${ssrRenderAttr("value", unref(form).CookingTime)} type="number" id="CookingTime" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}></div><div${_scopeId}><label for="Difficulty" class="block text-gray-700 font-medium"${_scopeId}>Difficulty</label><select id="Difficulty" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}><option value="Easy"${ssrIncludeBooleanAttr(Array.isArray(unref(form).Difficulty) ? ssrLooseContain(unref(form).Difficulty, "Easy") : ssrLooseEqual(unref(form).Difficulty, "Easy")) ? " selected" : ""}${_scopeId}>Easy</option><option value="Medium"${ssrIncludeBooleanAttr(Array.isArray(unref(form).Difficulty) ? ssrLooseContain(unref(form).Difficulty, "Medium") : ssrLooseEqual(unref(form).Difficulty, "Medium")) ? " selected" : ""}${_scopeId}>Medium</option><option value="Hard"${ssrIncludeBooleanAttr(Array.isArray(unref(form).Difficulty) ? ssrLooseContain(unref(form).Difficulty, "Hard") : ssrLooseEqual(unref(form).Difficulty, "Hard")) ? " selected" : ""}${_scopeId}>Hard</option></select></div><div${_scopeId}><label for="Servings" class="block text-gray-700 font-medium"${_scopeId}>Servings</label><input${ssrRenderAttr("value", unref(form).Servings)} type="number" id="Servings" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}></div><div${_scopeId}><label for="RecipePhoto" class="block text-gray-700 font-medium"${_scopeId}>Recipe Photo</label><input type="file" id="RecipePhoto" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-gray-500"${_scopeId}></div><div${_scopeId}><label for="VideoLink" class="block text-sm font-medium text-gray-700"${_scopeId}>YouTube Video Link</label><input type="url" id="VideoLink"${ssrRenderAttr("value", unref(form).VideoLink)} placeholder="https://www.youtube.com/watch?v=..." class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}></div><div class="col-span-2 flex space-x-3 mt-6"${_scopeId}><button type="submit" class="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-500"${_scopeId}>Create Recipe</button><button type="button" class="px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:ring-2 focus:ring-gray-300"${_scopeId}>Cancel</button></div></form>`);
          } else {
            return [
              createVNode("h2", { class: "text-3xl font-semibold mb-8" }, "Create Recipe"),
              createVNode("form", {
                onSubmit: withModifiers(submitForm, ["prevent"]),
                class: "grid grid-cols-2 gap-6"
              }, [
                createVNode("div", null, [
                  createVNode("label", {
                    for: "RecipeTitle",
                    class: "block text-gray-700 font-medium"
                  }, [
                    createTextVNode("Recipe Title"),
                    createVNode("span", { class: "text-red-500" }, "*")
                  ]),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => unref(form).RecipeTitle = $event,
                    type: "text",
                    id: "RecipeTitle",
                    class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none",
                    required: ""
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).RecipeTitle]
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("label", {
                    for: "chef_id",
                    class: "block text-gray-700 font-medium"
                  }, "Chef"),
                  withDirectives(createVNode("select", {
                    "onUpdate:modelValue": ($event) => unref(form).chef_id = $event,
                    id: "chef_id",
                    class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none",
                    required: ""
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
                    for: "Description",
                    class: "block text-gray-700 font-medium"
                  }, "Description"),
                  withDirectives(createVNode("textarea", {
                    "onUpdate:modelValue": ($event) => unref(form).Description = $event,
                    id: "Description",
                    class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none",
                    rows: "3"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).Description]
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("label", {
                    for: "Ingredients",
                    class: "block text-gray-700 font-medium"
                  }, [
                    createTextVNode("Ingredients"),
                    createVNode("span", { class: "text-red-500" }, "*")
                  ]),
                  withDirectives(createVNode("textarea", {
                    "onUpdate:modelValue": ($event) => unref(form).Ingredients = $event,
                    id: "Ingredients",
                    class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none",
                    rows: "3",
                    required: ""
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).Ingredients]
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("label", {
                    for: "Instructions",
                    class: "block text-gray-700 font-medium"
                  }, [
                    createTextVNode("Instructions"),
                    createVNode("span", { class: "text-red-500" }, "*")
                  ]),
                  withDirectives(createVNode("textarea", {
                    "onUpdate:modelValue": ($event) => unref(form).Instructions = $event,
                    id: "Instructions",
                    class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none",
                    rows: "3",
                    required: ""
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).Instructions]
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("label", {
                    for: "Preparation",
                    class: "block text-gray-700 font-medium"
                  }, "Preparation Time (minutes)"),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => unref(form).Preparation = $event,
                    type: "number",
                    id: "Preparation",
                    class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).Preparation]
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("label", {
                    for: "CookingTime",
                    class: "block text-gray-700 font-medium"
                  }, "Cooking Time (minutes)"),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => unref(form).CookingTime = $event,
                    type: "number",
                    id: "CookingTime",
                    class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).CookingTime]
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("label", {
                    for: "Difficulty",
                    class: "block text-gray-700 font-medium"
                  }, "Difficulty"),
                  withDirectives(createVNode("select", {
                    "onUpdate:modelValue": ($event) => unref(form).Difficulty = $event,
                    id: "Difficulty",
                    class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  }, [
                    createVNode("option", { value: "Easy" }, "Easy"),
                    createVNode("option", { value: "Medium" }, "Medium"),
                    createVNode("option", { value: "Hard" }, "Hard")
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, unref(form).Difficulty]
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("label", {
                    for: "Servings",
                    class: "block text-gray-700 font-medium"
                  }, "Servings"),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => unref(form).Servings = $event,
                    type: "number",
                    id: "Servings",
                    class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).Servings]
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("label", {
                    for: "RecipePhoto",
                    class: "block text-gray-700 font-medium"
                  }, "Recipe Photo"),
                  createVNode("input", {
                    type: "file",
                    onChange: handleFileChange,
                    id: "RecipePhoto",
                    class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-gray-500"
                  }, null, 32)
                ]),
                createVNode("div", null, [
                  createVNode("label", {
                    for: "VideoLink",
                    class: "block text-sm font-medium text-gray-700"
                  }, "YouTube Video Link"),
                  withDirectives(createVNode("input", {
                    type: "url",
                    id: "VideoLink",
                    "onUpdate:modelValue": ($event) => unref(form).VideoLink = $event,
                    placeholder: "https://www.youtube.com/watch?v=...",
                    class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(form).VideoLink]
                  ])
                ]),
                createVNode("div", { class: "col-span-2 flex space-x-3 mt-6" }, [
                  createVNode("button", {
                    type: "submit",
                    class: "px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-500"
                  }, "Create Recipe"),
                  createVNode("button", {
                    type: "button",
                    class: "px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:ring-2 focus:ring-gray-300"
                  }, "Cancel")
                ])
              ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Recipes/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
