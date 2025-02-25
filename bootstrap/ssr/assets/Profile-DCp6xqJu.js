import { reactive, ref, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, withDirectives, vModelText, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { L as Layout } from "./frontend-qce4MpuY.js";
import { usePage } from "@inertiajs/vue3";
import "axios";
import "lodash";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Profile",
  __ssrInlineRender: true,
  setup(__props) {
    const { props } = usePage();
    const user = reactive(props.user);
    const profile = reactive(props.profile);
    const reviews = reactive(props.reviews);
    const isEditing = ref(false);
    const newIntroduction = ref(profile.introduction);
    function toggleEdit() {
      isEditing.value = !isEditing.value;
    }
    function saveIntroduction() {
      isEditing.value = false;
      updateIntroduction(newIntroduction.value);
    }
    function updateIntroduction(introduction) {
      axios.post("/update-introduction", { introduction }).then((response) => {
        profile.introduction = introduction;
      }).catch((error) => {
        console.error(error);
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DropdownLink = resolveComponent("DropdownLink");
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative h-[998px] overflow-hidden"${_scopeId}><div class="absolute inset-0 -m-[20px]"${_scopeId}><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png')", "filter": "brightness(0.3) blur(20px)" })}"${_scopeId}></div></div><div class="flex items-center justify-center h-full relative px-12 sm:px-16 lg:px-20"${_scopeId}><div class="bg-white w-full max-w-[1600px] p-12 sm:p-16 lg:p-20 rounded-2xl shadow-lg flex gap-12"${_scopeId}><div class="bg-yellow-300 w-full h-[80vh] sm:w-1/3 p-12 rounded-[2rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)] relative"${_scopeId}><div class="absolute top-6 right-6 text-black-100cursor-pointer"${_scopeId}><a href="/profile_edit"${_scopeId}><i class="fas fa-pen text-4xl"${_scopeId}></i></a></div><div class="flex flex-col items-center"${_scopeId}><img${ssrRenderAttr("src", user.ProfileImage ? `/storage/${user.ProfileImage}` : "https://via.placeholder.com/403x212")} alt="Profile Image" class="w-48 h-48 rounded-full object-cover shadow-md"${_scopeId}><p class="text-center mt-8 font-semibold text-2xl"${_scopeId}>${ssrInterpolate(user.name)}</p><div class="mt-10 border-t-4 border-black-100 w-full"${_scopeId}></div><div class="w-full mt-6 pl-6 text-left space-y-2"${_scopeId}><p class="text-small text-black"${_scopeId}><span class="font-medium font-semibold text-black"${_scopeId}>Email:</span> ${ssrInterpolate(user.email)}</p><p class="text-small text-black"${_scopeId}><span class="font-medium font-semibold text-black"${_scopeId}>Date Joined:</span> ${ssrInterpolate(user.date_joined)}</p></div></div>`);
            _push2(ssrRenderComponent(_component_DropdownLink, {
              href: _ctx.route("logout"),
              method: "post",
              as: "button",
              class: "absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-green-300 text-black py-2 px-10 rounded-2xl font-semibold shadow-[5px_5px_15px_rgba(0,0,0,0.3)] text-small"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log out `);
                } else {
                  return [
                    createTextVNode(" Log out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col w-full sm:w-2/3 gap-12"${_scopeId}><div class="bg-yellow-300 p-10 rounded-lg shadow-md relative rounded-[2.3rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)]"${_scopeId}><div class="absolute top-6 right-6 text-black-100 cursor-pointer"${_scopeId}><i class="fas fa-pen text-3xl"${_scopeId}></i></div><h2 class="font-semibold text-2xl mb-4"${_scopeId}>Bio:</h2>`);
            if (isEditing.value) {
              _push2(`<div${_scopeId}><input${ssrRenderAttr("value", newIntroduction.value)} type="text" class="border p-2 rounded-md w-full" placeholder="Enter your introduction"${_scopeId}><button class="bg-green-300 text-black p-2 rounded-md mt-2"${_scopeId}>Save</button></div>`);
            } else {
              _push2(`<div${_scopeId}><p class="text-small italic text-black-100"${_scopeId}><span class="font-semibold"${_scopeId}></span> ${ssrInterpolate(profile.introduction)}</p></div>`);
            }
            _push2(`</div><div class="bg-yellow-300 p-10 rounded-lg shadow-md rounded-[2.3rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)]"${_scopeId}><h2 class="font-semibold text-3xl text-black-100 mb-8 border-b-2 border-black-100 pb-4"${_scopeId}>History:</h2><ul class="space-y-8"${_scopeId}>`);
            if (typeof reviews === "string") {
              _push2(`<li class="text-sm text-black-100"${_scopeId}>${ssrInterpolate(reviews)}</li>`);
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
            _push2(`</ul></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative h-[998px] overflow-hidden" }, [
                createVNode("div", { class: "absolute inset-0 -m-[20px]" }, [
                  createVNode("div", {
                    class: "absolute inset-0 bg-cover bg-center",
                    style: { "background-image": "url('https://c.animaapp.com/9OBfntRB/img/sheelah-brennan-uaevmc51ttw-unsplash-1.png')", "filter": "brightness(0.3) blur(20px)" }
                  })
                ]),
                createVNode("div", { class: "flex items-center justify-center h-full relative px-12 sm:px-16 lg:px-20" }, [
                  createVNode("div", { class: "bg-white w-full max-w-[1600px] p-12 sm:p-16 lg:p-20 rounded-2xl shadow-lg flex gap-12" }, [
                    createVNode("div", { class: "bg-yellow-300 w-full h-[80vh] sm:w-1/3 p-12 rounded-[2rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)] relative" }, [
                      createVNode("div", { class: "absolute top-6 right-6 text-black-100cursor-pointer" }, [
                        createVNode("a", { href: "/profile_edit" }, [
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
                      createVNode(_component_DropdownLink, {
                        href: _ctx.route("logout"),
                        method: "post",
                        as: "button",
                        class: "absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-green-300 text-black py-2 px-10 rounded-2xl font-semibold shadow-[5px_5px_15px_rgba(0,0,0,0.3)] text-small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Log out ")
                        ]),
                        _: 1
                      }, 8, ["href"])
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
                        createVNode("h2", { class: "font-semibold text-3xl text-black-100 mb-8 border-b-2 border-black-100 pb-4" }, "History:"),
                        createVNode("ul", { class: "space-y-8" }, [
                          typeof reviews === "string" ? (openBlock(), createBlock("li", {
                            key: 0,
                            class: "text-sm text-black-100"
                          }, toDisplayString(reviews), 1)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(reviews, (review, index) => {
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
                        ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Chef/Profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
