import { withCtx, unref, createVNode, withModifiers, createTextVNode, withDirectives, vModelText, vModelSelect, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/inertia-vue3";
import { L as Layout } from "./backend-DaIRI2w_.js";
import "./ApplicationLogo-3H3I4iid.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./DropdownLink-DStkidMI.js";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      role: "user",
      chef: { income: "0.00" },
      profile: { first_name: "", last_name: "", middle_name: "", introduction: "", profile_image: null }
    });
    const handleImageChange = (event) => {
      form.profile.profile_image = event.target.files[0];
    };
    const buildFormData = () => {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("password", form.password);
      formData.append("password_confirmation", form.password_confirmation);
      formData.append("role", form.role);
      if (form.role === "chef") formData.append("chef_income", form.chef.income);
      formData.append("profile[first_name]", form.profile.first_name);
      formData.append("profile[last_name]", form.profile.last_name);
      formData.append("profile[middle_name]", form.profile.middle_name);
      formData.append("profile[introduction]", form.profile.introduction);
      if (form.profile.profile_image) formData.append("profile[profile_image]", form.profile.profile_image);
      return formData;
    };
    const submitForm = () => {
      form.post(route("users.store"), { data: buildFormData() });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg"${_scopeId}><h1 class="text-3xl font-semibold text-center mb-8"${_scopeId}>Create User</h1><form enctype="multipart/form-data" class="grid grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label for="name" class="block text-gray-700 font-medium"${_scopeId}>Name<span class="text-red-500"${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).name)} id="name" type="text" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required${_scopeId}></div><div${_scopeId}><label for="email" class="block text-gray-700 font-medium"${_scopeId}>Email</label><input${ssrRenderAttr("value", unref(form).email)} id="email" type="email" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required${_scopeId}></div><div${_scopeId}><label for="password" class="block text-gray-700 font-medium"${_scopeId}>Password</label><input${ssrRenderAttr("value", unref(form).password)} id="password" type="password" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required${_scopeId}></div><div${_scopeId}><label for="password_confirmation" class="block text-gray-700 font-medium"${_scopeId}>Confirm Password</label><input${ssrRenderAttr("value", unref(form).password_confirmation)} id="password_confirmation" type="password" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required${_scopeId}></div><div${_scopeId}><label for="role" class="block text-gray-700 font-medium"${_scopeId}>Role</label><select id="role" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required${_scopeId}><option value="admin"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "admin") : ssrLooseEqual(unref(form).role, "admin")) ? " selected" : ""}${_scopeId}>Admin</option><option value="chef"${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, "chef") : ssrLooseEqual(unref(form).role, "chef")) ? " selected" : ""}${_scopeId}>Chef</option><option value="user" selected${_scopeId}>User</option></select></div>`);
            if (unref(form).role === "chef") {
              _push2(`<div${_scopeId}><label for="income" class="block text-gray-700 font-medium"${_scopeId}>Income</label><input readonly${ssrRenderAttr("value", unref(form).chef.income)} id="income" type="number" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div${_scopeId}><label for="first_name" class="block text-gray-700 font-medium"${_scopeId}>First Name</label><input${ssrRenderAttr("value", unref(form).profile.first_name)} id="first_name" type="text" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required${_scopeId}></div><div${_scopeId}><label for="last_name" class="block text-gray-700 font-medium"${_scopeId}>Last Name</label><input${ssrRenderAttr("value", unref(form).profile.last_name)} id="last_name" type="text" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none" required${_scopeId}></div><div${_scopeId}><label for="middle_name" class="block text-gray-700 font-medium"${_scopeId}>Middle Name</label><input${ssrRenderAttr("value", unref(form).profile.middle_name)} id="middle_name" type="text" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}></div><div${_scopeId}><label for="introduction" class="block text-gray-700 font-medium"${_scopeId}>Introduction</label><textarea id="introduction" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}>${ssrInterpolate(unref(form).profile.introduction)}</textarea></div><div${_scopeId}><label for="profile_image" class="block text-gray-700 font-medium"${_scopeId}>Profile Image</label><input id="profile_image" type="file" class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-gray-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"${_scopeId}></div><div class="col-span-2 flex justify-center mt-6"${_scopeId}><button type="submit" class="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-500"${_scopeId}>Create User</button></div></form></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg" }, [
                createVNode("h1", { class: "text-3xl font-semibold text-center mb-8" }, "Create User"),
                createVNode("form", {
                  onSubmit: withModifiers(submitForm, ["prevent"]),
                  enctype: "multipart/form-data",
                  class: "grid grid-cols-2 gap-6"
                }, [
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "name",
                      class: "block text-gray-700 font-medium"
                    }, [
                      createTextVNode("Name"),
                      createVNode("span", { class: "text-red-500" }, "*")
                    ]),
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
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "email",
                      class: "block text-gray-700 font-medium"
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
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "password",
                      class: "block text-gray-700 font-medium"
                    }, "Password"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      id: "password",
                      type: "password",
                      class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none",
                      required: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).password]
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "password_confirmation",
                      class: "block text-gray-700 font-medium"
                    }, "Confirm Password"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                      id: "password_confirmation",
                      type: "password",
                      class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none",
                      required: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).password_confirmation]
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "role",
                      class: "block text-gray-700 font-medium"
                    }, "Role"),
                    withDirectives(createVNode("select", {
                      "onUpdate:modelValue": ($event) => unref(form).role = $event,
                      id: "role",
                      class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none",
                      required: ""
                    }, [
                      createVNode("option", { value: "admin" }, "Admin"),
                      createVNode("option", { value: "chef" }, "Chef"),
                      createVNode("option", {
                        value: "user",
                        selected: ""
                      }, "User")
                    ], 8, ["onUpdate:modelValue"]), [
                      [vModelSelect, unref(form).role]
                    ])
                  ]),
                  unref(form).role === "chef" ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("label", {
                      for: "income",
                      class: "block text-gray-700 font-medium"
                    }, "Income"),
                    withDirectives(createVNode("input", {
                      readonly: "",
                      "onUpdate:modelValue": ($event) => unref(form).chef.income = $event,
                      id: "income",
                      type: "number",
                      class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).chef.income]
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "first_name",
                      class: "block text-gray-700 font-medium"
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
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "last_name",
                      class: "block text-gray-700 font-medium"
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
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "middle_name",
                      class: "block text-gray-700 font-medium"
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
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "introduction",
                      class: "block text-gray-700 font-medium"
                    }, "Introduction"),
                    withDirectives(createVNode("textarea", {
                      "onUpdate:modelValue": ($event) => unref(form).profile.introduction = $event,
                      id: "introduction",
                      class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).profile.introduction]
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "profile_image",
                      class: "block text-gray-700 font-medium"
                    }, "Profile Image"),
                    createVNode("input", {
                      ref: "profile_image",
                      onChange: handleImageChange,
                      id: "profile_image",
                      type: "file",
                      class: "w-full mt-1 px-3 py-2 border border-gray-300 rounded-md text-gray-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    }, null, 544)
                  ]),
                  createVNode("div", { class: "col-span-2 flex justify-center mt-6" }, [
                    createVNode("button", {
                      type: "submit",
                      class: "px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-500"
                    }, "Create User")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
