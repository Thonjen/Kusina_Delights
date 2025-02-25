import { reactive, ref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, withDirectives, vModelText, Fragment, renderList, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { L as Layout } from "./frontend-CWpoDOF_.js";
import { usePage } from "@inertiajs/vue3";
import Swal from "sweetalert2";
import "axios";
import "lodash";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const logo = "/storage/logo3.png";
const _sfc_main = {
  __name: "Profile",
  __ssrInlineRender: true,
  setup(__props) {
    const { props } = usePage();
    const user = reactive({
      ...props.user,
      role: props.user.role
    });
    const profile = reactive(props.profile);
    const reviews = reactive(props.reviews);
    const isEditing = ref(false);
    const newIntroduction = ref(profile.introduction);
    function toggleEdit() {
      isEditing.value = !isEditing.value;
    }
    function changePage(url) {
      if (url) {
        axios.get(url).then((response) => {
          if (response.data && response.data.data) {
            reviews.data = response.data.data;
            reviews.links = response.data.links;
          } else {
            console.error("Unexpected response structure:", response);
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Failed to fetch data. Please try again later."
            });
          }
        }).catch((error) => {
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to load the next page."
          });
        });
      } else {
        console.warn("Invalid URL passed to changePage method.");
      }
    }
    function saveIntroduction() {
      if (!newIntroduction.value.trim()) {
        Swal.fire({
          icon: "warning",
          title: "Validation Error",
          text: "Introduction cannot be empty."
        });
        return;
      }
      isEditing.value = false;
      updateIntroduction(newIntroduction.value);
    }
    function updateIntroduction(introduction) {
      Swal.fire({
        title: "Saving...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });
      axios.post("/update-introduction", { introduction }).then((response) => {
        profile.introduction = introduction;
        Swal.fire({
          icon: "success",
          title: "Saved!",
          text: "Your introduction has been updated."
        });
      }).catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to update your introduction. Please try again."
        });
      });
    }
    function logout() {
      Swal.fire({
        title: "Are you sure?",
        text: "You will be logged out.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, logout"
      }).then((result) => {
        if (result.isConfirmed) {
          this.$inertia.post("/logout");
        }
      });
    }
    const showModal = ref(false);
    const message = ref("");
    const files = ref([]);
    const isSubmitting = ref(false);
    const handleFileUpload = (event) => {
      files.value = Array.from(event.target.files);
    };
    const submitApplication = async () => {
      if (!message.value.trim() || files.value.length === 0) {
        Swal.fire({
          icon: "warning",
          title: "Validation Error",
          text: "Message and at least one file are required."
        });
        return;
      }
      const formData = new FormData();
      formData.append("message", message.value);
      formData.append("user_id", user.id);
      formData.append("user_name", user.name);
      formData.append("user_email", user.email);
      files.value.forEach((file, index) => {
        formData.append(`files[${index}]`, file);
      });
      try {
        isSubmitting.value = true;
        Swal.fire({
          title: "Submitting...",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          }
        });
        const response = await axios.post("/apply-chef", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        Swal.fire({
          icon: "success",
          title: "Application Sent",
          text: response.data.message
        });
        resetModal();
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to send application. Please try again."
        });
      } finally {
        isSubmitting.value = false;
      }
    };
    const resetModal = () => {
      showModal.value = false;
      message.value = "";
      files.value = [];
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative overflow-hidden"${_scopeId}><div class="absolute inset-0 -m-[20px]"${_scopeId}><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png')", "filter": "brightness(0.3) blur(20px)" })}"${_scopeId}></div></div><div class="flex items-center justify-center h-full relative px-12 sm:px-16 lg:px-20 mt-10 mb-10"${_scopeId}><div class="bg-white w-full max-w-[1600px] p-12 sm:p-16 lg:p-20 rounded-2xl shadow-lg flex gap-12"${_scopeId}><div class="bg-yellow-300 w-full h-[80vh] sm:w-1/3 p-12 rounded-[2rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)] relative"${_scopeId}><div class="absolute top-6 right-6 text-black-100 cursor-pointer"${_scopeId}><a href="/profile/edit"${_scopeId}><i class="fas fa-pen text-4xl"${_scopeId}></i></a></div><div class="flex flex-col items-center"${_scopeId}><img${ssrRenderAttr("src", user.ProfileImage ? `/storage/${user.ProfileImage}` : "https://via.placeholder.com/403x212")} alt="Profile Image" class="w-48 h-48 rounded-full object-cover shadow-md"${_scopeId}><p class="text-center mt-8 font-semibold text-2xl"${_scopeId}>${ssrInterpolate(user.name)}</p><div class="mt-10 border-t-4 border-black-100 w-full"${_scopeId}></div><div class="w-full mt-6 pl-6 text-left space-y-2"${_scopeId}><p class="text-small text-black"${_scopeId}><span class="font-medium font-semibold text-black"${_scopeId}>Email:</span> ${ssrInterpolate(user.email)}</p><p class="text-small text-black"${_scopeId}><span class="font-medium font-semibold text-black"${_scopeId}>Date Joined:</span> ${ssrInterpolate(user.date_joined)}</p></div></div><div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col space-y-4"${_scopeId}>`);
            if (user.role === "admin") {
              _push2(`<a href="/dashboard" class="w-[20vh] bg-green-300 text-black py-2 px-10 rounded-2xl font-semibold shadow-[5px_5px_15px_rgba(0,0,0,0.3)] text-small flex items-center justify-center text-center"${_scopeId}> Admin Dashboard </a>`);
            } else {
              _push2(`<!---->`);
            }
            if (user.role === "chef") {
              _push2(`<a href="/chef/dashboard" class="w-[20vh] bg-green-300 text-black py-2 px-10 rounded-2xl font-semibold shadow-[5px_5px_15px_rgba(0,0,0,0.3)] text-small flex items-center justify-center text-center"${_scopeId}> Chef Dashboard </a>`);
            } else {
              _push2(`<!---->`);
            }
            if (user.role === "user") {
              _push2(`<button class="w-[20vh] bg-green-300 text-black py-2 px-10 rounded-2xl font-semibold shadow-[5px_5px_15px_rgba(0,0,0,0.3)] text-small flex items-center justify-center text-center"${_scopeId}> Apply to be a Chef </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<button class="w-[20vh] bg-green-300 text-black py-2 px-10 rounded-2xl font-semibold shadow-[5px_5px_15px_rgba(0,0,0,0.3)] text-small flex items-center justify-center text-center"${_scopeId}> Logout </button></div></div><div class="flex flex-col w-full sm:w-2/3 gap-12"${_scopeId}><div class="bg-yellow-300 p-10 rounded-lg shadow-md relative rounded-[2.3rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)]"${_scopeId}><div class="absolute top-6 right-6 text-black-100 cursor-pointer"${_scopeId}><i class="fas fa-pen text-3xl"${_scopeId}></i></div><h2 class="font-semibold text-2xl mb-4"${_scopeId}>Bio:</h2>`);
            if (isEditing.value) {
              _push2(`<div${_scopeId}><input${ssrRenderAttr("value", newIntroduction.value)} type="text" class="border p-2 rounded-md w-full" placeholder="Enter your introduction"${_scopeId}><button class="bg-green-300 text-black p-2 rounded-md mt-2"${_scopeId}>Save</button></div>`);
            } else {
              _push2(`<div${_scopeId}><p class="text-small italic text-black-100"${_scopeId}><span class="font-semibold"${_scopeId}></span> ${ssrInterpolate(profile.introduction)}</p></div>`);
            }
            _push2(`</div><div class="bg-yellow-300 p-10 rounded-lg shadow-md rounded-[2.3rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)]"${_scopeId}><h2 class="font-semibold text-3xl text-black-100 mb-8 border-b-2 border-black-100 pb-4"${_scopeId}>Review History:</h2><ul class="space-y-8"${_scopeId}>`);
            if (reviews.length === 0) {
              _push2(`<li class="text-sm text-black-100"${_scopeId}> No reviews yet. </li>`);
            } else {
              _push2(`<!--[-->`);
              ssrRenderList(reviews, (review, index) => {
                _push2(`<li class="flex items-start gap-6 transition-transform transform hover:scale-105"${_scopeId}><img${ssrRenderAttr("src", review.RecipePhoto ? `/storage/${review.RecipePhoto}` : "https://via.placeholder.com/403x212")} alt="Recipe Image" class="w-24 h-24 rounded-md object-cover shadow-md border-2 border-yellow-500"${_scopeId}><div class="w-full"${_scopeId}><div class="flex justify-between mb-4"${_scopeId}><div class="w-2/4"${_scopeId}><div class="font-semibold text-lg text-black-100 mb-2"${_scopeId}>Recipe Title: ${ssrInterpolate(review.title)}</div><p class="text-black-100 italic text-small mb-4"${_scopeId}>Comment: ${ssrInterpolate(review.comment)}</p></div><div class="flex flex-col items-end w-2/4 gap-4"${_scopeId}><a${ssrRenderAttr("href", `/api/recipes/${review.recipe_id}`)} class="px-6 py-2 bg-yellow-400 text-black-100 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out"${_scopeId}> View Recipe </a><div class="flex items-center gap-1 text-yellow-400"${_scopeId}><p class="text-black-100 text-sm"${_scopeId}>Star rating:</p><!--[-->`);
                ssrRenderList(5, (star) => {
                  _push2(`<!--[-->`);
                  if (star <= review.stars) {
                    _push2(`<i class="fa fa-star w-5 h-5 text-yellow-500" style="${ssrRenderStyle({ "text-shadow": "1px 1px 2px rgba(0, 0, 0, 0.3)" })}" aria-hidden="true"${_scopeId}></i>`);
                  } else {
                    _push2(`<i class="fa fa-star w-5 h-5 text-black-100" style="${ssrRenderStyle({ "text-shadow": "1px 1px 2px rgba(0, 0, 0, 0.3)" })}" aria-hidden="true"${_scopeId}></i>`);
                  }
                  _push2(`<!--]-->`);
                });
                _push2(`<!--]--></div></div></div></div></li>`);
              });
              _push2(`<!--]-->`);
            }
            _push2(`</ul>`);
            if (reviews.links && reviews.links.length > 0) {
              _push2(`<div class="flex justify-center mt-8 space-x-4"${_scopeId}><!--[-->`);
              ssrRenderList(reviews.links, (link, index) => {
                _push2(`<button class="${ssrRenderClass(["px-4 py-2 rounded-md", link.active ? "bg-yellow-400 text-black" : "bg-white text-black"])}"${_scopeId}>${link.label ?? ""}</button>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
            if (showModal.value) {
              _push2(`<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"${_scopeId}><div class="bg-gradient-to-r from-yellow-200 to-yellow-300 w-full max-w-lg p-10 rounded-2xl shadow-3xl relative"${_scopeId}><button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-all" aria-label="Close Modal"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button><div class="flex justify-center mb-8"${_scopeId}><img${ssrRenderAttr("src", logo)} alt="Logo" class="h-36 w-36 object-contain shadow-lg rounded-full"${_scopeId}></div><h2 class="text-3xl font-extrabold text-gray-800 mb-8 text-center"${_scopeId}> Apply to Be a Chef </h2><p${_scopeId}><strong${_scopeId}>User ID:</strong> ${ssrInterpolate(user.id)}</p><p${_scopeId}><strong${_scopeId}>Name:</strong> ${ssrInterpolate(user.name)}</p><p${_scopeId}><strong${_scopeId}>Email:</strong> ${ssrInterpolate(user.email)}</p><form${_scopeId}><div class="mb-8"${_scopeId}><label for="message" class="block text-sm font-semibold text-gray-700 mb-3"${_scopeId}> Message: </label><textarea id="message" class="w-full border-2 border-yellow-500 rounded-lg p-4 text-gray-800 focus:ring-4 focus:ring-yellow-500 focus:outline-none resize-none transition-all" placeholder="Write your application message here..." rows="6" required${_scopeId}>${ssrInterpolate(message.value)}</textarea></div><div class="mb-8"${_scopeId}><label for="files" class="block text-sm font-semibold text-gray-700 mb-3"${_scopeId}> Upload Files: </label><input id="files" type="file" multiple class="w-full border-2 border-yellow-500 rounded-lg p-4 text-gray-800 focus:ring-4 focus:ring-yellow-500 focus:outline-none transition-all"${_scopeId}></div><div class="flex justify-between gap-6"${_scopeId}><button type="button" class="w-full py-4 px-6 bg-gray-200 text-gray-800 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-all"${_scopeId}> Cancel </button><button type="submit" class="w-full py-4 px-6 bg-yellow-500 text-white rounded-lg text-sm font-semibold hover:bg-yellow-600 shadow-2xl transition-all"${_scopeId}> Submit Application </button></div></form></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (isSubmitting.value) {
              _push2(`<div class="flex items-center justify-center"${_scopeId}><div class="spinner"${_scopeId}>Loading...</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative overflow-hidden" }, [
                createVNode("div", { class: "absolute inset-0 -m-[20px]" }, [
                  createVNode("div", {
                    class: "absolute inset-0 bg-cover bg-center",
                    style: { "background-image": "url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png')", "filter": "brightness(0.3) blur(20px)" }
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-center h-full relative px-12 sm:px-16 lg:px-20 mt-10 mb-10" }, [
                  createVNode("div", { class: "bg-white w-full max-w-[1600px] p-12 sm:p-16 lg:p-20 rounded-2xl shadow-lg flex gap-12" }, [
                    createVNode("div", { class: "bg-yellow-300 w-full h-[80vh] sm:w-1/3 p-12 rounded-[2rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)] relative" }, [
                      createVNode("div", { class: "absolute top-6 right-6 text-black-100 cursor-pointer" }, [
                        createVNode("a", { href: "/profile/edit" }, [
                          createVNode("i", { class: "fas fa-pen text-4xl" })
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col items-center" }, [
                        createVNode("img", {
                          src: user.ProfileImage ? `/storage/${user.ProfileImage}` : "https://via.placeholder.com/403x212",
                          alt: "Profile Image",
                          class: "w-48 h-48 rounded-full object-cover shadow-md"
                        }, null, 8, ["src"]),
                        createVNode("p", { class: "text-center mt-8 font-semibold text-2xl" }, toDisplayString(user.name), 1),
                        createVNode("div", { class: "mt-10 border-t-4 border-black-100 w-full" }),
                        createVNode("div", { class: "w-full mt-6 pl-6 text-left space-y-2" }, [
                          createVNode("p", { class: "text-small text-black" }, [
                            createVNode("span", { class: "font-medium font-semibold text-black" }, "Email:"),
                            createTextVNode(" " + toDisplayString(user.email), 1)
                          ]),
                          createVNode("p", { class: "text-small text-black" }, [
                            createVNode("span", { class: "font-medium font-semibold text-black" }, "Date Joined:"),
                            createTextVNode(" " + toDisplayString(user.date_joined), 1)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col space-y-4" }, [
                        user.role === "admin" ? (openBlock(), createBlock("a", {
                          key: 0,
                          href: "/dashboard",
                          class: "w-[20vh] bg-green-300 text-black py-2 px-10 rounded-2xl font-semibold shadow-[5px_5px_15px_rgba(0,0,0,0.3)] text-small flex items-center justify-center text-center"
                        }, " Admin Dashboard ")) : createCommentVNode("", true),
                        user.role === "chef" ? (openBlock(), createBlock("a", {
                          key: 1,
                          href: "/chef/dashboard",
                          class: "w-[20vh] bg-green-300 text-black py-2 px-10 rounded-2xl font-semibold shadow-[5px_5px_15px_rgba(0,0,0,0.3)] text-small flex items-center justify-center text-center"
                        }, " Chef Dashboard ")) : createCommentVNode("", true),
                        user.role === "user" ? (openBlock(), createBlock("button", {
                          key: 2,
                          onClick: ($event) => showModal.value = true,
                          class: "w-[20vh] bg-green-300 text-black py-2 px-10 rounded-2xl font-semibold shadow-[5px_5px_15px_rgba(0,0,0,0.3)] text-small flex items-center justify-center text-center"
                        }, " Apply to be a Chef ", 8, ["onClick"])) : createCommentVNode("", true),
                        createVNode("button", {
                          onClick: logout,
                          class: "w-[20vh] bg-green-300 text-black py-2 px-10 rounded-2xl font-semibold shadow-[5px_5px_15px_rgba(0,0,0,0.3)] text-small flex items-center justify-center text-center"
                        }, " Logout ")
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col w-full sm:w-2/3 gap-12" }, [
                      createVNode("div", { class: "bg-yellow-300 p-10 rounded-lg shadow-md relative rounded-[2.3rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)]" }, [
                        createVNode("div", {
                          class: "absolute top-6 right-6 text-black-100 cursor-pointer",
                          onClick: toggleEdit
                        }, [
                          createVNode("i", { class: "fas fa-pen text-3xl" })
                        ]),
                        createVNode("h2", { class: "font-semibold text-2xl mb-4" }, "Bio:"),
                        isEditing.value ? (openBlock(), createBlock("div", { key: 0 }, [
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => newIntroduction.value = $event,
                            type: "text",
                            class: "border p-2 rounded-md w-full",
                            placeholder: "Enter your introduction"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, newIntroduction.value]
                          ]),
                          createVNode("button", {
                            onClick: saveIntroduction,
                            class: "bg-green-300 text-black p-2 rounded-md mt-2"
                          }, "Save")
                        ])) : (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode("p", { class: "text-small italic text-black-100" }, [
                            createVNode("span", { class: "font-semibold" }),
                            createTextVNode(" " + toDisplayString(profile.introduction), 1)
                          ])
                        ]))
                      ]),
                      createVNode("div", { class: "bg-yellow-300 p-10 rounded-lg shadow-md rounded-[2.3rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)]" }, [
                        createVNode("h2", { class: "font-semibold text-3xl text-black-100 mb-8 border-b-2 border-black-100 pb-4" }, "Review History:"),
                        createVNode("ul", { class: "space-y-8" }, [
                          reviews.length === 0 ? (openBlock(), createBlock("li", {
                            key: 0,
                            class: "text-sm text-black-100"
                          }, " No reviews yet. ")) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(reviews, (review, index) => {
                            return openBlock(), createBlock("li", {
                              key: index,
                              class: "flex items-start gap-6 transition-transform transform hover:scale-105"
                            }, [
                              createVNode("img", {
                                src: review.RecipePhoto ? `/storage/${review.RecipePhoto}` : "https://via.placeholder.com/403x212",
                                alt: "Recipe Image",
                                class: "w-24 h-24 rounded-md object-cover shadow-md border-2 border-yellow-500"
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "w-full" }, [
                                createVNode("div", { class: "flex justify-between mb-4" }, [
                                  createVNode("div", { class: "w-2/4" }, [
                                    createVNode("div", { class: "font-semibold text-lg text-black-100 mb-2" }, "Recipe Title: " + toDisplayString(review.title), 1),
                                    createVNode("p", { class: "text-black-100 italic text-small mb-4" }, "Comment: " + toDisplayString(review.comment), 1)
                                  ]),
                                  createVNode("div", { class: "flex flex-col items-end w-2/4 gap-4" }, [
                                    createVNode("a", {
                                      href: `/api/recipes/${review.recipe_id}`,
                                      class: "px-6 py-2 bg-yellow-400 text-black-100 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out"
                                    }, " View Recipe ", 8, ["href"]),
                                    createVNode("div", { class: "flex items-center gap-1 text-yellow-400" }, [
                                      createVNode("p", { class: "text-black-100 text-sm" }, "Star rating:"),
                                      (openBlock(), createBlock(Fragment, null, renderList(5, (star) => {
                                        return openBlock(), createBlock(Fragment, null, [
                                          star <= review.stars ? (openBlock(), createBlock("i", {
                                            key: 0,
                                            class: "fa fa-star w-5 h-5 text-yellow-500",
                                            style: { "text-shadow": "1px 1px 2px rgba(0, 0, 0, 0.3)" },
                                            "aria-hidden": "true"
                                          })) : (openBlock(), createBlock("i", {
                                            key: 1,
                                            class: "fa fa-star w-5 h-5 text-black-100",
                                            style: { "text-shadow": "1px 1px 2px rgba(0, 0, 0, 0.3)" },
                                            "aria-hidden": "true"
                                          }))
                                        ], 64);
                                      }), 64))
                                    ])
                                  ])
                                ])
                              ])
                            ]);
                          }), 128))
                        ]),
                        reviews.links && reviews.links.length > 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex justify-center mt-8 space-x-4"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(reviews.links, (link, index) => {
                            return openBlock(), createBlock("button", {
                              key: index,
                              class: ["px-4 py-2 rounded-md", link.active ? "bg-yellow-400 text-black" : "bg-white text-black"],
                              onClick: ($event) => changePage(link.url),
                              innerHTML: link.label
                            }, null, 10, ["onClick", "innerHTML"]);
                          }), 128))
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  showModal.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                  }, [
                    createVNode("div", { class: "bg-gradient-to-r from-yellow-200 to-yellow-300 w-full max-w-lg p-10 rounded-2xl shadow-3xl relative" }, [
                      createVNode("button", {
                        onClick: ($event) => showModal.value = false,
                        class: "absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-all",
                        "aria-label": "Close Modal"
                      }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          "stroke-width": "1.5",
                          stroke: "currentColor",
                          class: "w-6 h-6"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M6 18L18 6M6 6l12 12"
                          })
                        ]))
                      ], 8, ["onClick"]),
                      createVNode("div", { class: "flex justify-center mb-8" }, [
                        createVNode("img", {
                          src: logo,
                          alt: "Logo",
                          class: "h-36 w-36 object-contain shadow-lg rounded-full"
                        })
                      ]),
                      createVNode("h2", { class: "text-3xl font-extrabold text-gray-800 mb-8 text-center" }, " Apply to Be a Chef "),
                      createVNode("p", null, [
                        createVNode("strong", null, "User ID:"),
                        createTextVNode(" " + toDisplayString(user.id), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "Name:"),
                        createTextVNode(" " + toDisplayString(user.name), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("strong", null, "Email:"),
                        createTextVNode(" " + toDisplayString(user.email), 1)
                      ]),
                      createVNode("form", {
                        onSubmit: withModifiers(submitApplication, ["prevent"])
                      }, [
                        createVNode("div", { class: "mb-8" }, [
                          createVNode("label", {
                            for: "message",
                            class: "block text-sm font-semibold text-gray-700 mb-3"
                          }, " Message: "),
                          withDirectives(createVNode("textarea", {
                            id: "message",
                            "onUpdate:modelValue": ($event) => message.value = $event,
                            class: "w-full border-2 border-yellow-500 rounded-lg p-4 text-gray-800 focus:ring-4 focus:ring-yellow-500 focus:outline-none resize-none transition-all",
                            placeholder: "Write your application message here...",
                            rows: "6",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, message.value]
                          ])
                        ]),
                        createVNode("div", { class: "mb-8" }, [
                          createVNode("label", {
                            for: "files",
                            class: "block text-sm font-semibold text-gray-700 mb-3"
                          }, " Upload Files: "),
                          createVNode("input", {
                            id: "files",
                            type: "file",
                            onChange: handleFileUpload,
                            multiple: "",
                            class: "w-full border-2 border-yellow-500 rounded-lg p-4 text-gray-800 focus:ring-4 focus:ring-yellow-500 focus:outline-none transition-all"
                          }, null, 32)
                        ]),
                        createVNode("div", { class: "flex justify-between gap-6" }, [
                          createVNode("button", {
                            type: "button",
                            onClick: ($event) => showModal.value = false,
                            class: "w-full py-4 px-6 bg-gray-200 text-gray-800 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-all"
                          }, " Cancel ", 8, ["onClick"]),
                          createVNode("button", {
                            type: "submit",
                            class: "w-full py-4 px-6 bg-yellow-500 text-white rounded-lg text-sm font-semibold hover:bg-yellow-600 shadow-2xl transition-all"
                          }, " Submit Application ")
                        ])
                      ], 32)
                    ])
                  ])) : createCommentVNode("", true),
                  isSubmitting.value ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "flex items-center justify-center"
                  }, [
                    createVNode("div", { class: "spinner" }, "Loading...")
                  ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Chef/Profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
