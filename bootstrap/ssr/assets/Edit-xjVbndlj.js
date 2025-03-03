import { watch, withCtx, unref, createVNode, withModifiers, withDirectives, vModelText, vModelSelect, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate } from "vue/server-renderer";
import "@inertiajs/vue3";
import { L as Layout } from "./backend-B8jYqHuT.js";
import { useForm } from "@inertiajs/inertia-vue3";
import Swal from "sweetalert2";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-3H3I4iid.js";
import "./DropdownLink-DStkidMI.js";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    user: Object
  },
  setup(__props) {
    const props = __props;
    const profile = props.user.profile || {
      first_name: "",
      last_name: "",
      middle_name: "",
      introduction: "",
      profile_image: ""
    };
    const form = useForm({
      name: props.user.name,
      email: props.user.email,
      password: "",
      password_confirmation: "",
      role: props.user.Roles,
      profile: {
        first_name: profile.FirstName,
        last_name: profile.LastName,
        middle_name: profile.MiddleName,
        introduction: profile.Introduction,
        profile_image: profile.ProfileImage ? route("storage", profile.ProfileImage) : null
      },
      chef: {
        income: props.user.chef ? props.user.chef.Income : 0
      }
    });
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          form.profile.profile_image = reader.result;
        };
        reader.readAsDataURL(file);
      }
    };
    const submitForm = async () => {
      try {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: "Do you want to update this user's information?",
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
          iconColor: "rgba(255, 219, 99, 1)"
          // Golden yellow for icon color for consistency
        });
        if (result.isConfirmed) {
          form.put(route("users.update", props.user.id), {
            preserveScroll: true,
            onSuccess: () => {
              Swal.fire({
                title: "Success!",
                text: "User updated successfully.",
                icon: "success",
                confirmButtonText: "Okay"
              });
            },
            onError: (errors) => {
              console.error(errors);
              Swal.fire({
                title: "Error!",
                text: "There was an error updating the user.",
                icon: "error",
                confirmButtonText: "Try Again"
              });
            }
          });
        } else {
          Swal.fire({
            title: "Cancelled",
            text: "No changes were made.",
            icon: "info",
            confirmButtonText: "Okay"
          });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        Swal.fire({
          title: "Error!",
          text: "There was an issue with your submission. Please try again.",
          icon: "error",
          confirmButtonText: "Okay"
        });
      }
    };
    watch(
      () => form.role,
      async (newRole, oldRole) => {
        if (oldRole === "chef" && (newRole === "admin" || newRole === "user")) {
          const confirmed = await Swal.fire({
            title: `Changing role from Chef to ${newRole}`,
            text: `This will delete all chef-related data for this user. Do you want to proceed?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, proceed!",
            cancelButtonText: "No, go back!",
            background: "rgba(255, 255, 255, 1)",
            // White background for clarity
            confirmButtonColor: "rgba(204, 162, 35, 1)",
            // Golden Yellow for confirm button
            cancelButtonColor: "rgba(54, 69, 79, 1)",
            // Charcoal Gray for cancel button
            iconColor: "rgba(255, 219, 99, 1)"
            // Golden yellow for icon color
          });
          if (!confirmed.isConfirmed) {
            form.role = oldRole;
          }
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg"${_scopeId}><h1 class="text-3xl font-semibold text-center mb-6"${_scopeId}>Edit User</h1><form enctype="multipart/form-data"${_scopeId}><div class="grid grid-cols-2 gap-6"${_scopeId}><div class="mb-4"${_scopeId}><label for="name" class="block text-sm font-medium text-gray-700"${_scopeId}>Name</label><input${ssrRenderAttr("value", unref(form).name)} id="name" type="text" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required${_scopeId}></div><div class="mb-4"${_scopeId}><label for="email" class="block text-sm font-medium text-gray-700"${_scopeId}>Email</label><input${ssrRenderAttr("value", unref(form).email)} id="email" type="email" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required${_scopeId}></div><div class="mb-4"${_scopeId}><label for="password" class="block text-sm font-medium text-gray-700"${_scopeId}>Password</label><input${ssrRenderAttr("value", unref(form).password)} id="password" type="password" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}></div><div class="mb-4"${_scopeId}><label for="password_confirmation" class="block text-sm font-medium text-gray-700"${_scopeId}>Confirm Password</label><input${ssrRenderAttr("value", unref(form).password_confirmation)} id="password_confirmation" type="password" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}></div><div class="mb-4"${_scopeId}><label for="role" class="block text-sm font-medium text-gray-700"${_scopeId}>Role</label><select id="role" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required${_scopeId}><option value="admin"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "admin") : ssrLooseEqual(unref(form).role, "admin")) ? " selected" : ""}${_scopeId}>Admin</option><option value="chef"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "chef") : ssrLooseEqual(unref(form).role, "chef")) ? " selected" : ""}${_scopeId}>Chef</option><option value="user"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "user") : ssrLooseEqual(unref(form).role, "user")) ? " selected" : ""}${_scopeId}>User</option></select></div><div class="mb-4"${_scopeId}><label for="first_name" class="block text-sm font-medium text-gray-700"${_scopeId}>First Name</label><input${ssrRenderAttr("value", unref(form).profile.first_name)} id="first_name" type="text" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required${_scopeId}></div><div class="mb-4"${_scopeId}><label for="last_name" class="block text-sm font-medium text-gray-700"${_scopeId}>Last Name</label><input${ssrRenderAttr("value", unref(form).profile.last_name)} id="last_name" type="text" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required${_scopeId}></div><div class="mb-4"${_scopeId}><label for="middle_name" class="block text-sm font-medium text-gray-700"${_scopeId}>Middle Name</label><input${ssrRenderAttr("value", unref(form).profile.middle_name)} id="middle_name" type="text" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}></div><div class="mb-4"${_scopeId}><label for="introduction" class="block text-sm font-medium text-gray-700"${_scopeId}>Introduction</label><textarea id="introduction" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}>${ssrInterpolate(unref(form).profile.introduction)}</textarea></div><div class="mb-4"${_scopeId}><label for="profile_image" class="block text-sm font-medium text-gray-700"${_scopeId}>Profile Image</label><input id="profile_image" type="file" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}>`);
            if (unref(form).profile.profile_image) {
              _push2(`<div class="mt-2"${_scopeId}><img${ssrRenderAttr("src", unref(form).profile.profile_image)} alt="Profile Image" class="w-20 h-20 rounded-full object-cover"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (unref(form).role === "chef") {
              _push2(`<div class="mb-4"${_scopeId}><label for="income" class="block text-sm font-medium text-gray-700"${_scopeId}>Income</label><input${ssrRenderAttr("value", unref(form).chef.income)} id="income" type="number" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="col-span-2 flex justify-center space-x-6 mt-6"${_scopeId}><button type="submit" class="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-500"${_scopeId}>Update User</button></div></div></form></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg" }, [
                createVNode("h1", { class: "text-3xl font-semibold text-center mb-6" }, "Edit User"),
                createVNode("form", {
                  onSubmit: withModifiers(submitForm, ["prevent"]),
                  enctype: "multipart/form-data"
                }, [
                  createVNode("div", { class: "grid grid-cols-2 gap-6" }, [
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("label", {
                        for: "name",
                        class: "block text-sm font-medium text-gray-700"
                      }, "Name"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        id: "name",
                        type: "text",
                        class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).name]
                      ])
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("label", {
                        for: "email",
                        class: "block text-sm font-medium text-gray-700"
                      }, "Email"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        id: "email",
                        type: "email",
                        class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).email]
                      ])
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("label", {
                        for: "password",
                        class: "block text-sm font-medium text-gray-700"
                      }, "Password"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        id: "password",
                        type: "password",
                        class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).password]
                      ])
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("label", {
                        for: "password_confirmation",
                        class: "block text-sm font-medium text-gray-700"
                      }, "Confirm Password"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                        id: "password_confirmation",
                        type: "password",
                        class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).password_confirmation]
                      ])
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("label", {
                        for: "role",
                        class: "block text-sm font-medium text-gray-700"
                      }, "Role"),
                      withDirectives(createVNode("select", {
                        "onUpdate:modelValue": ($event) => unref(form).role = $event,
                        id: "role",
                        class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none",
                        required: ""
                      }, [
                        createVNode("option", { value: "admin" }, "Admin"),
                        createVNode("option", { value: "chef" }, "Chef"),
                        createVNode("option", { value: "user" }, "User")
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, unref(form).role]
                      ])
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("label", {
                        for: "first_name",
                        class: "block text-sm font-medium text-gray-700"
                      }, "First Name"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).profile.first_name = $event,
                        id: "first_name",
                        type: "text",
                        class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).profile.first_name]
                      ])
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("label", {
                        for: "last_name",
                        class: "block text-sm font-medium text-gray-700"
                      }, "Last Name"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).profile.last_name = $event,
                        id: "last_name",
                        type: "text",
                        class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).profile.last_name]
                      ])
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("label", {
                        for: "middle_name",
                        class: "block text-sm font-medium text-gray-700"
                      }, "Middle Name"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).profile.middle_name = $event,
                        id: "middle_name",
                        type: "text",
                        class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).profile.middle_name]
                      ])
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("label", {
                        for: "introduction",
                        class: "block text-sm font-medium text-gray-700"
                      }, "Introduction"),
                      withDirectives(createVNode("textarea", {
                        "onUpdate:modelValue": ($event) => unref(form).profile.introduction = $event,
                        id: "introduction",
                        class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).profile.introduction]
                      ])
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("label", {
                        for: "profile_image",
                        class: "block text-sm font-medium text-gray-700"
                      }, "Profile Image"),
                      createVNode("input", {
                        ref: "profile_image",
                        onChange: handleImageChange,
                        id: "profile_image",
                        type: "file",
                        class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                      }, null, 544),
                      unref(form).profile.profile_image ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "mt-2"
                      }, [
                        createVNode("img", {
                          src: unref(form).profile.profile_image,
                          alt: "Profile Image",
                          class: "w-20 h-20 rounded-full object-cover"
                        }, null, 8, ["src"])
                      ])) : createCommentVNode("", true)
                    ]),
                    unref(form).role === "chef" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mb-4"
                    }, [
                      createVNode("label", {
                        for: "income",
                        class: "block text-sm font-medium text-gray-700"
                      }, "Income"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(form).chef.income = $event,
                        id: "income",
                        type: "number",
                        class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).chef.income]
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "col-span-2 flex justify-center space-x-6 mt-6" }, [
                      createVNode("button", {
                        type: "submit",
                        class: "px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-500"
                      }, "Update User")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
