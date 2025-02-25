import { ref, resolveComponent, withCtx, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import "@inertiajs/inertia";
import Swal from "sweetalert2";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Create_post",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      RecipeTitle: "",
      Description: "",
      Ingredients: "",
      VideoLink: "",
      Instructions: "",
      RecipePhoto: null,
      Preparation: null,
      CookingTime: null,
      Difficulty: "",
      Servings: null
    });
    const imagePreview = ref(null);
    const isFileDragged = ref(false);
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        form.value.RecipePhoto = file;
        imagePreview.value = URL.createObjectURL(file);
      }
    };
    const handleDragOver = () => {
      isFileDragged.value = true;
    };
    const handleDrop = (event) => {
      const file = event.dataTransfer.files[0];
      if (file) {
        form.value.RecipePhoto = file;
        imagePreview.value = URL.createObjectURL(file);
      }
      isFileDragged.value = false;
    };
    const triggerFileInput = () => {
      const input = document.querySelector("input[type='file']");
      input.click();
    };
    const submitForm = async () => {
      try {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, submit it!",
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
          formData.append("RecipeTitle", form.value.RecipeTitle);
          formData.append("Description", form.value.Description);
          formData.append("Ingredients", form.value.Ingredients);
          formData.append("VideoLink", form.value.VideoLink);
          formData.append("Instructions", form.value.Instructions);
          formData.append("Preparation", form.value.Preparation);
          formData.append("CookingTime", form.value.CookingTime);
          formData.append("Difficulty", form.value.Difficulty);
          formData.append("Servings", form.value.Servings);
          if (form.value.RecipePhoto) {
            formData.append("RecipePhoto", form.value.RecipePhoto);
          }
          const response = await axios.post("/chef/dashboard/recipes", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          });
          Swal.fire({
            title: "Success!",
            text: response.data.message,
            icon: "success",
            confirmButtonText: "Okay"
          });
        } else {
          Swal.fire({
            title: "Cancelled",
            text: "Your recipe submission has been cancelled.",
            icon: "info",
            confirmButtonText: "Okay"
          });
        }
      } catch (error) {
        console.error("Error creating recipe:", error);
        Swal.fire({
          title: "Error!",
          text: "There was an issue creating your recipe. Please try again.",
          icon: "error",
          confirmButtonText: "Okay"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Layout = resolveComponent("Layout");
      _push(ssrRenderComponent(_component_Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative overflow-hidden" data-v-467f5947${_scopeId}><div class="absolute inset-0 -m-[20px]" data-v-467f5947${_scopeId}><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png')", "filter": "brightness(0.3) blur(20px)" })}" data-v-467f5947${_scopeId}></div></div><div class="flex items-center justify-center h-full relative px-10 sm:px-12 lg:px-16 mt-10 mb-10" data-v-467f5947${_scopeId}><div class="bg-white w-full max-w-[200vh] p-12 sm:p-16 lg:p-20 rounded-2xl shadow-lg" data-v-467f5947${_scopeId}><h1 class="text-center text-large font-bold mb-10" data-v-467f5947${_scopeId}>Create Recipe</h1><form class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-v-467f5947${_scopeId}><div class="col-span-1" data-v-467f5947${_scopeId}><label class="block text-lg font-semibold mb-2" data-v-467f5947${_scopeId}>Recipe Title*</label><input${ssrRenderAttr("value", form.value.RecipeTitle)} type="text" class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" required data-v-467f5947${_scopeId}></div><div class="col-span-1" data-v-467f5947${_scopeId}><label class="block text-lg font-semibold mb-2" data-v-467f5947${_scopeId}>Description</label><textarea class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" data-v-467f5947${_scopeId}>${ssrInterpolate(form.value.Description)}</textarea></div><div class="col-span-1" data-v-467f5947${_scopeId}><label class="block text-lg font-semibold mb-2" data-v-467f5947${_scopeId}>Ingredients</label><textarea class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" data-v-467f5947${_scopeId}>${ssrInterpolate(form.value.Ingredients)}</textarea></div><div class="col-span-1" data-v-467f5947${_scopeId}><label class="block text-lg font-semibold mb-2" data-v-467f5947${_scopeId}>Video Link</label><input${ssrRenderAttr("value", form.value.VideoLink)} type="url" class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" data-v-467f5947${_scopeId}></div><div class="col-span-1" data-v-467f5947${_scopeId}><label class="block text-lg font-semibold mb-2" data-v-467f5947${_scopeId}>Instructions</label><textarea class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" data-v-467f5947${_scopeId}>${ssrInterpolate(form.value.Instructions)}</textarea></div><div class="col-span-1" data-v-467f5947${_scopeId}><label class="block text-lg font-semibold mb-2" data-v-467f5947${_scopeId}>Recipe Photo</label><div class="${ssrRenderClass([{ "bg-gray-100": isFileDragged.value }, "w-full border border-dashed border-gray-300 rounded-md p-6 text-center text-lg text-gray-500 relative"])}" data-v-467f5947${_scopeId}><input type="file" accept="image/*" class="hidden" data-v-467f5947${_scopeId}>`);
            if (imagePreview.value) {
              _push2(`<div class="mb-4" data-v-467f5947${_scopeId}><img${ssrRenderAttr("src", imagePreview.value)} alt="Recipe Preview" class="w-full h-auto max-h-48 object-cover rounded-md" data-v-467f5947${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="text-orange-500 cursor-pointer" data-v-467f5947${_scopeId}>Drag &amp; Drop your image here or click to browse</span></div></div><div class="col-span-1" data-v-467f5947${_scopeId}><label class="block text-lg font-semibold mb-2" data-v-467f5947${_scopeId}>Preparation Time (minutes)</label><input${ssrRenderAttr("value", form.value.Preparation)} type="number" class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" data-v-467f5947${_scopeId}></div><div class="col-span-1" data-v-467f5947${_scopeId}><label class="block text-lg font-semibold mb-2" data-v-467f5947${_scopeId}>Cooking Time (minutes)</label><input${ssrRenderAttr("value", form.value.CookingTime)} type="number" class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" data-v-467f5947${_scopeId}></div><div class="col-span-1" data-v-467f5947${_scopeId}><label class="block text-lg font-semibold mb-2" data-v-467f5947${_scopeId}>Difficulty</label><select class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" data-v-467f5947${_scopeId}><option data-v-467f5947${ssrIncludeBooleanAttr(Array.isArray(form.value.Difficulty) ? ssrLooseContain(form.value.Difficulty, null) : ssrLooseEqual(form.value.Difficulty, null)) ? " selected" : ""}${_scopeId}>Select an option</option><option data-v-467f5947${ssrIncludeBooleanAttr(Array.isArray(form.value.Difficulty) ? ssrLooseContain(form.value.Difficulty, null) : ssrLooseEqual(form.value.Difficulty, null)) ? " selected" : ""}${_scopeId}>Easy</option><option data-v-467f5947${ssrIncludeBooleanAttr(Array.isArray(form.value.Difficulty) ? ssrLooseContain(form.value.Difficulty, null) : ssrLooseEqual(form.value.Difficulty, null)) ? " selected" : ""}${_scopeId}>Medium</option><option data-v-467f5947${ssrIncludeBooleanAttr(Array.isArray(form.value.Difficulty) ? ssrLooseContain(form.value.Difficulty, null) : ssrLooseEqual(form.value.Difficulty, null)) ? " selected" : ""}${_scopeId}>Hard</option></select></div><div class="col-span-1" data-v-467f5947${_scopeId}><label class="block text-lg font-semibold mb-2" data-v-467f5947${_scopeId}>Servings</label><input${ssrRenderAttr("value", form.value.Servings)} type="number" class="w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" data-v-467f5947${_scopeId}></div><div class="col-span-3 flex justify-center mt-6" data-v-467f5947${_scopeId}><button type="submit" class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-md shadow-md mr-6" data-v-467f5947${_scopeId}> Create </button><a href="/chef/dashboard" data-v-467f5947${_scopeId}><button type="button" class="bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-md shadow-md" data-v-467f5947${_scopeId}> Cancel </button></a></div></form></div></div></div>`);
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
                    createVNode("h1", { class: "text-center text-large font-bold mb-10" }, "Create Recipe"),
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
                        createVNode("label", { class: "block text-lg font-semibold mb-2" }, "Video Link"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => form.value.VideoLink = $event,
                          type: "url",
                          class: "w-full border border-gray-300 shadow-sm rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, form.value.VideoLink]
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
                        createVNode("div", {
                          class: ["w-full border border-dashed border-gray-300 rounded-md p-6 text-center text-lg text-gray-500 relative", { "bg-gray-100": isFileDragged.value }],
                          onDragover: withModifiers(handleDragOver, ["prevent"]),
                          onDrop: withModifiers(handleDrop, ["prevent"]),
                          onClick: triggerFileInput
                        }, [
                          createVNode("input", {
                            ref: "fileInput",
                            type: "file",
                            accept: "image/*",
                            class: "hidden",
                            onChange: handleFileChange
                          }, null, 544),
                          imagePreview.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mb-4"
                          }, [
                            createVNode("img", {
                              src: imagePreview.value,
                              alt: "Recipe Preview",
                              class: "w-full h-auto max-h-48 object-cover rounded-md"
                            }, null, 8, ["src"])
                          ])) : createCommentVNode("", true),
                          createVNode("span", { class: "text-orange-500 cursor-pointer" }, "Drag & Drop your image here or click to browse")
                        ], 34)
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
                          createVNode("option", null, "Select an option"),
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
                      createVNode("div", { class: "col-span-3 flex justify-center mt-6" }, [
                        createVNode("button", {
                          type: "submit",
                          class: "bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-md shadow-md mr-6"
                        }, " Create "),
                        createVNode("a", { href: "/chef/dashboard" }, [
                          createVNode("button", {
                            type: "button",
                            class: "bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-md shadow-md"
                          }, " Cancel ")
                        ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Chef/Create_post.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Create_post = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-467f5947"]]);
export {
  Create_post as default
};
