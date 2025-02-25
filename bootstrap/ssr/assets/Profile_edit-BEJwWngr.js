import { ref, onMounted, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, createTextVNode, Fragment, renderList, withDirectives, vModelDynamic, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderDynamicModel } from "vue/server-renderer";
import axios from "axios";
import Swal from "sweetalert2";
import { L as Layout } from "./frontend-CWpoDOF_.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "lodash";
const _sfc_main = {
  __name: "Profile_edit",
  __ssrInlineRender: true,
  setup(__props) {
    const profileImage = ref(null);
    const editMode = ref(false);
    const accountFields = ref([]);
    const confirmPassword = ref("");
    const profileData = ref({});
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/api/profile");
        const { user, profile } = response.data;
        profileData.value = {
          name: user.name,
          email: user.email,
          date_joined: user.created_at
        };
        accountFields.value = [
          { id: "first_name", label: "First Name", type: "text", value: profile.first_name, placeholder: "John" },
          { id: "last_name", label: "Last Name", type: "text", value: profile.last_name, placeholder: "Doe" },
          { id: "name", label: "Username", type: "text", value: user.name, placeholder: "johndoe123" },
          { id: "email", label: "Email", type: "email", value: user.email, placeholder: "john.doe@example.com" },
          { id: "password", label: "Password", type: "password", value: "", placeholder: "**************" }
        ];
        profileImage.value = user.ProfileImage ? `/storage/${user.ProfileImage}` : null;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error fetching profile data!"
        });
      }
    };
    const saveProfile = async () => {
      try {
        const payload = accountFields.value.reduce((acc, field) => {
          acc[field.id] = field.value;
          return acc;
        }, {});
        payload.password_confirmation = confirmPassword.value;
        await axios.post("/profile/update", payload);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Profile updated successfully."
        });
        editMode.value = false;
        fetchProfile();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to update profile."
        });
      }
    };
    const toggleEditMode = () => {
      if (editMode.value) {
        saveProfile();
      } else {
        editMode.value = true;
      }
    };
    const updateProfilePicture = async (event) => {
      const file = event.target.files[0];
      if (file) {
        const formData = new FormData();
        formData.append("ProfileImage", file);
        formData.append("first_name", accountFields.value[0].value);
        formData.append("last_name", accountFields.value[1].value);
        formData.append("name", accountFields.value[2].value);
        formData.append("email", accountFields.value[3].value);
        try {
          const response = await axios.post("/profile/update", formData, {
            headers: { "Content-Type": "multipart/form-data" }
          });
          profileImage.value = `/storage/${response.data.ProfileImage}`;
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Profile picture updated successfully."
          });
          editMode.value = false;
          fetchProfile();
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to update profile picture."
          });
        }
      } else {
        Swal.fire({
          icon: "warning",
          title: "No file selected",
          text: "Please select an image to upload."
        });
      }
    };
    onMounted(fetchProfile);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative overflow-hidden" data-v-2c6c05c2${_scopeId}><div class="absolute inset-0 -m-[20px]" data-v-2c6c05c2${_scopeId}><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png')", "filter": "brightness(0.3) blur(20px)" })}" data-v-2c6c05c2${_scopeId}></div></div><div class="flex items-center justify-center h-full relative px-8 sm:px-12 lg:px-16 mt-10 mb-10" data-v-2c6c05c2${_scopeId}><div class="bg-white w-full max-w-[1400px] p-10 sm:p-16 lg:p-20 rounded-2xl shadow-lg flex gap-10 flex-wrap lg:flex-nowrap" data-v-2c6c05c2${_scopeId}><div class="bg-yellow-300 flex-1 h-[600px] p-10 rounded-[2rem] shadow-md relative" data-v-2c6c05c2${_scopeId}><div class="absolute top-4 right-4 text-gray-600 cursor-pointer" data-v-2c6c05c2${_scopeId}><a href="/profile" data-v-2c6c05c2${_scopeId}><i class="fas fa-pen text-2xl" data-v-2c6c05c2${_scopeId}></i></a></div><div class="flex flex-col items-center" data-v-2c6c05c2${_scopeId}><div class="relative w-48 h-48 rounded-full shadow-md bg-gray-200 overflow-hidden" data-v-2c6c05c2${_scopeId}><label for="profile_picture" class="cursor-pointer w-full h-full block" data-v-2c6c05c2${_scopeId}>`);
            if (profileImage.value) {
              _push2(`<img${ssrRenderAttr("src", profileImage.value)} alt="Profile Picture" class="w-full h-full object-cover" data-v-2c6c05c2${_scopeId}>`);
            } else {
              _push2(`<i class="fas fa-user text-8xl text-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" data-v-2c6c05c2${_scopeId}></i>`);
            }
            _push2(`</label>`);
            if (editMode.value) {
              _push2(`<input type="file" id="profile_picture" class="hidden" accept="image/*" data-v-2c6c05c2${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-6 w-full border-t-4 border-black-100" data-v-2c6c05c2${_scopeId}></div><p class="text-center mt-6 font-semibold text-2xl" data-v-2c6c05c2${_scopeId}>${ssrInterpolate(profileData.value.name || "N/A")}</p><div class="w-full text-left mt-4 pl-4" data-v-2c6c05c2${_scopeId}><p class="text-sm font-medium" data-v-2c6c05c2${_scopeId}>Email: ${ssrInterpolate(profileData.value.email || "N/A")}</p><p class="text-sm font-medium" data-v-2c6c05c2${_scopeId}>Date Joined: ${ssrInterpolate(profileData.value.date_joined || "N/A")}</p></div><a href="/profile" class="text-blue-500" data-v-2c6c05c2${_scopeId}>Go Back</a></div></div><div class="bg-yellow-300 flex-[2] p-8 sm:p-12 rounded-2xl shadow-lg relative" data-v-2c6c05c2${_scopeId}><div class="absolute top-4 right-4 text-gray-600 cursor-pointer" data-v-2c6c05c2${_scopeId}><button class="" data-v-2c6c05c2${_scopeId}>${ssrInterpolate(editMode.value ? "Save" : "Edit")} <i class="${ssrRenderClass([editMode.value ? "fa-solid fa-floppy-disk" : "fas fa-pen", "text-2xl mr-2 transition-all duration-300 text-normal"])}" data-v-2c6c05c2${_scopeId}></i></button></div><h2 class="font-semibold text-2xl mb-8 text-center text-gray-800" data-v-2c6c05c2${_scopeId}>Account</h2><div class="grid grid-cols-1 sm:grid-cols-2 gap-8" data-v-2c6c05c2${_scopeId}><!--[-->`);
            ssrRenderList(accountFields.value, (field) => {
              _push2(`<div class="space-y-4" data-v-2c6c05c2${_scopeId}><label${ssrRenderAttr("for", field.id)} class="block text-sm font-bold text-gray-700" data-v-2c6c05c2${_scopeId}>${ssrInterpolate(field.label)}</label><div class="relative" data-v-2c6c05c2${_scopeId}>`);
              if (!editMode.value) {
                _push2(`<div class="w-full p-4 rounded-lg text-gray-800 bg-gray-100 border border-gray-300 hover:bg-gray-200 transition-all duration-200 ease-in-out" data-v-2c6c05c2${_scopeId}><p class="text-sm text-gray-600" data-v-2c6c05c2${_scopeId}>${ssrInterpolate(field.value || field.placeholder)}</p></div>`);
              } else {
                _push2(`<input${ssrRenderAttr("id", field.id)}${ssrRenderAttr("type", field.type)}${ssrRenderDynamicModel(field.type, field.value, null)}${ssrRenderAttr("placeholder", field.placeholder)} class="w-full border border-gray-300 p-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-150 ease-in-out" data-v-2c6c05c2${_scopeId}>`);
              }
              if (editMode.value && field.id === "password") {
                _push2(`<div class="relative mt-4" data-v-2c6c05c2${_scopeId}><label for="confirm_password" class="block text-sm font-medium text-gray-700" data-v-2c6c05c2${_scopeId}>Confirm Password</label><input${ssrRenderAttr("value", confirmPassword.value)} id="confirm_password" type="password" placeholder="Confirm Password" class="w-full border border-gray-300 p-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-150 ease-in-out" data-v-2c6c05c2${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative overflow-hidden" }, [
                createVNode("div", { class: "absolute inset-0 -m-[20px]" }, [
                  createVNode("div", {
                    class: "absolute inset-0 bg-cover bg-center",
                    style: { "background-image": "url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png')", "filter": "brightness(0.3) blur(20px)" }
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-center h-full relative px-8 sm:px-12 lg:px-16 mt-10 mb-10" }, [
                  createVNode("div", { class: "bg-white w-full max-w-[1400px] p-10 sm:p-16 lg:p-20 rounded-2xl shadow-lg flex gap-10 flex-wrap lg:flex-nowrap" }, [
                    createVNode("div", { class: "bg-yellow-300 flex-1 h-[600px] p-10 rounded-[2rem] shadow-md relative" }, [
                      createVNode("div", { class: "absolute top-4 right-4 text-gray-600 cursor-pointer" }, [
                        createVNode("a", { href: "/profile" }, [
                          createVNode("i", { class: "fas fa-pen text-2xl" })
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col items-center" }, [
                        createVNode("div", { class: "relative w-48 h-48 rounded-full shadow-md bg-gray-200 overflow-hidden" }, [
                          createVNode("label", {
                            for: "profile_picture",
                            class: "cursor-pointer w-full h-full block"
                          }, [
                            profileImage.value ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: profileImage.value,
                              alt: "Profile Picture",
                              class: "w-full h-full object-cover"
                            }, null, 8, ["src"])) : (openBlock(), createBlock("i", {
                              key: 1,
                              class: "fas fa-user text-8xl text-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            }))
                          ]),
                          editMode.value ? (openBlock(), createBlock("input", {
                            key: 0,
                            type: "file",
                            id: "profile_picture",
                            class: "hidden",
                            accept: "image/*",
                            onChange: updateProfilePicture
                          }, null, 32)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "mt-6 w-full border-t-4 border-black-100" }),
                        createVNode("p", { class: "text-center mt-6 font-semibold text-2xl" }, toDisplayString(profileData.value.name || "N/A"), 1),
                        createVNode("div", { class: "w-full text-left mt-4 pl-4" }, [
                          createVNode("p", { class: "text-sm font-medium" }, "Email: " + toDisplayString(profileData.value.email || "N/A"), 1),
                          createVNode("p", { class: "text-sm font-medium" }, "Date Joined: " + toDisplayString(profileData.value.date_joined || "N/A"), 1)
                        ]),
                        createVNode("a", {
                          href: "/profile",
                          class: "text-blue-500"
                        }, "Go Back")
                      ])
                    ]),
                    createVNode("div", { class: "bg-yellow-300 flex-[2] p-8 sm:p-12 rounded-2xl shadow-lg relative" }, [
                      createVNode("div", { class: "absolute top-4 right-4 text-gray-600 cursor-pointer" }, [
                        createVNode("button", {
                          class: "",
                          onClick: toggleEditMode
                        }, [
                          createTextVNode(toDisplayString(editMode.value ? "Save" : "Edit") + " ", 1),
                          createVNode("i", {
                            class: [editMode.value ? "fa-solid fa-floppy-disk" : "fas fa-pen", "text-2xl mr-2 transition-all duration-300 text-normal"]
                          }, null, 2)
                        ])
                      ]),
                      createVNode("h2", { class: "font-semibold text-2xl mb-8 text-center text-gray-800" }, "Account"),
                      createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-8" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(accountFields.value, (field) => {
                          return openBlock(), createBlock("div", {
                            key: field.id,
                            class: "space-y-4"
                          }, [
                            createVNode("label", {
                              for: field.id,
                              class: "block text-sm font-bold text-gray-700"
                            }, toDisplayString(field.label), 9, ["for"]),
                            createVNode("div", { class: "relative" }, [
                              !editMode.value ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "w-full p-4 rounded-lg text-gray-800 bg-gray-100 border border-gray-300 hover:bg-gray-200 transition-all duration-200 ease-in-out"
                              }, [
                                createVNode("p", { class: "text-sm text-gray-600" }, toDisplayString(field.value || field.placeholder), 1)
                              ])) : withDirectives((openBlock(), createBlock("input", {
                                key: 1,
                                id: field.id,
                                type: field.type,
                                "onUpdate:modelValue": ($event) => field.value = $event,
                                placeholder: field.placeholder,
                                class: "w-full border border-gray-300 p-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-150 ease-in-out"
                              }, null, 8, ["id", "type", "onUpdate:modelValue", "placeholder"])), [
                                [vModelDynamic, field.value]
                              ]),
                              editMode.value && field.id === "password" ? (openBlock(), createBlock("div", {
                                key: 2,
                                class: "relative mt-4"
                              }, [
                                createVNode("label", {
                                  for: "confirm_password",
                                  class: "block text-sm font-medium text-gray-700"
                                }, "Confirm Password"),
                                withDirectives(createVNode("input", {
                                  "onUpdate:modelValue": ($event) => confirmPassword.value = $event,
                                  id: "confirm_password",
                                  type: "password",
                                  placeholder: "Confirm Password",
                                  class: "w-full border border-gray-300 p-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-150 ease-in-out"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelText, confirmPassword.value]
                                ])
                              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Chef/Profile_edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Profile_edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2c6c05c2"]]);
export {
  Profile_edit as default
};
