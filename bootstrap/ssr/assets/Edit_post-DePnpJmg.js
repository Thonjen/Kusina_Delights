import { ref, withCtx, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { L as Layout } from "./frontend-CWpoDOF_.js";
import "@inertiajs/vue3";
import "@inertiajs/inertia";
import Swal from "sweetalert2";
import axios from "axios";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "lodash";
const _sfc_main = {
  __name: "Edit_post",
  __ssrInlineRender: true,
  props: {
    recipe: Object
  },
  setup(__props) {
    const props = __props;
    const form = ref({
      RecipeTitle: props.recipe.RecipeTitle,
      Description: props.recipe.Description,
      Ingredients: props.recipe.Ingredients,
      Instructions: props.recipe.Instructions,
      Preparation: props.recipe.Preparation,
      CookingTime: props.recipe.CookingTime,
      Difficulty: props.recipe.Difficulty,
      Servings: props.recipe.Servings,
      RecipePhoto: null,
      VideoLink: props.recipe.VideoLink || ""
    });
    const imagePreview = ref(props.recipe.RecipePhoto ? `/storage/${props.recipe.RecipePhoto}` : null);
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        form.value.RecipePhoto = file;
        imagePreview.value = URL.createObjectURL(file);
      }
    };
    const submitForm = async () => {
      var _a, _b;
      try {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: "Do you want to update this recipe?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, update it!",
          cancelButtonText: "No, cancel!",
          background: "rgba(255, 255, 255, 1)",
          // White background for clarity
          confirmButtonColor: "rgba(204, 162, 35, 1)",
          // Golden Yellow for confirm button
          cancelButtonColor: "rgba(54, 69, 79, 1)",
          // Charcoal Gray for cancel button to provide contrast
          iconColor: "rgba(255, 219, 99, 1)",
          // Golden yellow for icon color for consistency
          customClass: {
            popup: "swal-popup"
            // Add a custom class for further styling if needed
          }
        });
        if (result.isConfirmed) {
          const formData = new FormData();
          Object.keys(form.value).forEach((key) => {
            if (form.value[key] !== null && form.value[key] !== void 0) {
              if (key === "RecipePhoto" && form.value[key] instanceof File) {
                formData.append(key, form.value[key]);
              } else if (key !== "RecipePhoto") {
                formData.append(key, form.value[key]);
              }
            }
          });
          await axios.post(`/chef/dashboard/recipes/${props.recipe.RecipeID}/update`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "X-HTTP-Method-Override": "PUT"
            }
          });
          await Swal.fire({
            title: "Success!",
            text: "Recipe updated successfully",
            icon: "success",
            confirmButtonColor: "rgba(204, 162, 35, 1)"
          });
          window.location.href = "/chef/dashboard";
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.error) || "Failed to update recipe",
          icon: "error",
          confirmButtonColor: "rgba(204, 162, 35, 1)"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative overflow-hidden" data-v-974d4605${_scopeId}><div class="absolute inset-0 -m-[20px]" data-v-974d4605${_scopeId}><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png')", "filter": "brightness(0.3) blur(20px)" })}" data-v-974d4605${_scopeId}></div></div><div class="flex items-center justify-center h-full relative px-10 sm:px-12 lg:px-16 mt-10 mb-10" data-v-974d4605${_scopeId}><div class="bg-white w-full max-w-[200vh] p-12 sm:p-16 lg:p-20 rounded-2xl shadow-lg" data-v-974d4605${_scopeId}><h1 class="text-center text-large font-bold mb-10" data-v-974d4605${_scopeId}>Edit Recipe</h1><form class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-v-974d4605${_scopeId}><div class="col-span-1" data-v-974d4605${_scopeId}><label class="block text-lg font-semibold mb-2" data-v-974d4605${_scopeId}>Recipe Title*</label><input${ssrRenderAttr("value", form.value.RecipeTitle)} type="text" class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" required data-v-974d4605${_scopeId}></div><div class="col-span-1" data-v-974d4605${_scopeId}><label class="block text-lg font-semibold mb-2" data-v-974d4605${_scopeId}>Description</label><textarea class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" data-v-974d4605${_scopeId}>${ssrInterpolate(form.value.Description)}</textarea></div><div class="col-span-1" data-v-974d4605${_scopeId}><label class="block text-lg font-semibold mb-2" data-v-974d4605${_scopeId}>Ingredients</label><textarea class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" data-v-974d4605${_scopeId}>${ssrInterpolate(form.value.Ingredients)}</textarea></div><div class="col-span-1" data-v-974d4605${_scopeId}><label class="block text-lg font-semibold mb-2" data-v-974d4605${_scopeId}>Instructions</label><textarea class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" data-v-974d4605${_scopeId}>${ssrInterpolate(form.value.Instructions)}</textarea></div><div class="col-span-1" data-v-974d4605${_scopeId}><label class="block text-lg font-semibold mb-2" data-v-974d4605${_scopeId}>Recipe Photo</label><input type="file" accept="image/*" class="w-full text-gray-700" data-v-974d4605${_scopeId}>`);
            if (imagePreview.value) {
              _push2(`<img${ssrRenderAttr("src", imagePreview.value)} alt="Preview" class="mt-4 w-full h-40 object-cover" data-v-974d4605${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="col-span-1" data-v-974d4605${_scopeId}><label class="block text-lg font-semibold mb-2" data-v-974d4605${_scopeId}>Preparation Time (minutes)</label><input${ssrRenderAttr("value", form.value.Preparation)} type="number" class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" data-v-974d4605${_scopeId}></div><div class="col-span-1" data-v-974d4605${_scopeId}><label class="block text-lg font-semibold mb-2" data-v-974d4605${_scopeId}>Cooking Time (minutes)</label><input${ssrRenderAttr("value", form.value.CookingTime)} type="number" class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" data-v-974d4605${_scopeId}></div><div class="col-span-1" data-v-974d4605${_scopeId}><label class="block text-lg font-semibold mb-2" data-v-974d4605${_scopeId}>Difficulty</label><select class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" data-v-974d4605${_scopeId}><option disabled value="" data-v-974d4605${ssrIncludeBooleanAttr(Array.isArray(form.value.Difficulty) ? ssrLooseContain(form.value.Difficulty, "") : ssrLooseEqual(form.value.Difficulty, "")) ? " selected" : ""}${_scopeId}>Select Difficulty</option><option data-v-974d4605${ssrIncludeBooleanAttr(Array.isArray(form.value.Difficulty) ? ssrLooseContain(form.value.Difficulty, null) : ssrLooseEqual(form.value.Difficulty, null)) ? " selected" : ""}${_scopeId}>Easy</option><option data-v-974d4605${ssrIncludeBooleanAttr(Array.isArray(form.value.Difficulty) ? ssrLooseContain(form.value.Difficulty, null) : ssrLooseEqual(form.value.Difficulty, null)) ? " selected" : ""}${_scopeId}>Medium</option><option data-v-974d4605${ssrIncludeBooleanAttr(Array.isArray(form.value.Difficulty) ? ssrLooseContain(form.value.Difficulty, null) : ssrLooseEqual(form.value.Difficulty, null)) ? " selected" : ""}${_scopeId}>Hard</option></select></div><div class="col-span-1" data-v-974d4605${_scopeId}><label class="block text-lg font-semibold mb-2" data-v-974d4605${_scopeId}>Servings</label><input${ssrRenderAttr("value", form.value.Servings)} type="number" class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" data-v-974d4605${_scopeId}></div><div class="col-span-1" data-v-974d4605${_scopeId}><label class="block text-lg font-semibold mb-2" data-v-974d4605${_scopeId}>YouTube Video Link</label><input type="url"${ssrRenderAttr("value", form.value.VideoLink)} placeholder="https://www.youtube.com/watch?v=..." class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" data-v-974d4605${_scopeId}></div><div class="col-span-3 flex justify-center mt-6" data-v-974d4605${_scopeId}><button type="submit" class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-md shadow-md" data-v-974d4605${_scopeId}> Update </button></div></form></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative overflow-hidden" }, [
                createVNode("div", { class: "absolute inset-0 -m-[20px]" }, [
                  createVNode("div", {
                    class: "absolute inset-0 bg-cover bg-center",
                    style: { "background-image": "url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png')", "filter": "brightness(0.3) blur(20px)" }
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-center h-full relative px-10 sm:px-12 lg:px-16 mt-10 mb-10" }, [
                  createVNode("div", { class: "bg-white w-full max-w-[200vh] p-12 sm:p-16 lg:p-20 rounded-2xl shadow-lg" }, [
                    createVNode("h1", { class: "text-center text-large font-bold mb-10" }, "Edit Recipe"),
                    createVNode("form", {
                      class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
                      onSubmit: withModifiers(submitForm, ["prevent"])
                    }, [
                      createVNode("div", { class: "col-span-1" }, [
                        createVNode("label", { class: "block text-lg font-semibold mb-2" }, "Recipe Title*"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => form.value.RecipeTitle = $event,
                          type: "text",
                          class: "w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500",
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, form.value.RecipeTitle]
                        ])
                      ]),
                      createVNode("div", { class: "col-span-1" }, [
                        createVNode("label", { class: "block text-lg font-semibold mb-2" }, "Description"),
                        withDirectives(createVNode("textarea", {
                          "onUpdate:modelValue": ($event) => form.value.Description = $event,
                          class: "w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, form.value.Description]
                        ])
                      ]),
                      createVNode("div", { class: "col-span-1" }, [
                        createVNode("label", { class: "block text-lg font-semibold mb-2" }, "Ingredients"),
                        withDirectives(createVNode("textarea", {
                          "onUpdate:modelValue": ($event) => form.value.Ingredients = $event,
                          class: "w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, form.value.Ingredients]
                        ])
                      ]),
                      createVNode("div", { class: "col-span-1" }, [
                        createVNode("label", { class: "block text-lg font-semibold mb-2" }, "Instructions"),
                        withDirectives(createVNode("textarea", {
                          "onUpdate:modelValue": ($event) => form.value.Instructions = $event,
                          class: "w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, form.value.Instructions]
                        ])
                      ]),
                      createVNode("div", { class: "col-span-1" }, [
                        createVNode("label", { class: "block text-lg font-semibold mb-2" }, "Recipe Photo"),
                        createVNode("input", {
                          ref: "fileInput",
                          type: "file",
                          accept: "image/*",
                          onChange: handleFileChange,
                          class: "w-full text-gray-700"
                        }, null, 544),
                        imagePreview.value ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: imagePreview.value,
                          alt: "Preview",
                          class: "mt-4 w-full h-40 object-cover"
                        }, null, 8, ["src"])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "col-span-1" }, [
                        createVNode("label", { class: "block text-lg font-semibold mb-2" }, "Preparation Time (minutes)"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => form.value.Preparation = $event,
                          type: "number",
                          class: "w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, form.value.Preparation]
                        ])
                      ]),
                      createVNode("div", { class: "col-span-1" }, [
                        createVNode("label", { class: "block text-lg font-semibold mb-2" }, "Cooking Time (minutes)"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => form.value.CookingTime = $event,
                          type: "number",
                          class: "w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, form.value.CookingTime]
                        ])
                      ]),
                      createVNode("div", { class: "col-span-1" }, [
                        createVNode("label", { class: "block text-lg font-semibold mb-2" }, "Difficulty"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => form.value.Difficulty = $event,
                          class: "w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        }, [
                          createVNode("option", {
                            disabled: "",
                            value: ""
                          }, "Select Difficulty"),
                          createVNode("option", null, "Easy"),
                          createVNode("option", null, "Medium"),
                          createVNode("option", null, "Hard")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, form.value.Difficulty]
                        ])
                      ]),
                      createVNode("div", { class: "col-span-1" }, [
                        createVNode("label", { class: "block text-lg font-semibold mb-2" }, "Servings"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => form.value.Servings = $event,
                          type: "number",
                          class: "w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, form.value.Servings]
                        ])
                      ]),
                      createVNode("div", { class: "col-span-1" }, [
                        createVNode("label", { class: "block text-lg font-semibold mb-2" }, "YouTube Video Link"),
                        withDirectives(createVNode("input", {
                          type: "url",
                          "onUpdate:modelValue": ($event) => form.value.VideoLink = $event,
                          placeholder: "https://www.youtube.com/watch?v=...",
                          class: "w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, form.value.VideoLink]
                        ])
                      ]),
                      createVNode("div", { class: "col-span-3 flex justify-center mt-6" }, [
                        createVNode("button", {
                          type: "submit",
                          class: "bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-md shadow-md"
                        }, " Update ")
                      ])
                    ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Chef/Edit_post.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Edit_post = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-974d4605"]]);
export {
  Edit_post as default
};
