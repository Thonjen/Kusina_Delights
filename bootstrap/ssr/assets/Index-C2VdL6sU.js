import { withCtx, unref, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { InertiaLink } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import { L as Layout } from "./backend-B8jYqHuT.js";
import Swal from "sweetalert2";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-3H3I4iid.js";
import "./DropdownLink-DStkidMI.js";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    users: Array
  },
  setup(__props) {
    const submitDelete = async (userId) => {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
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
        Inertia.delete(`/users/${userId}`);
        Swal.fire({
          title: "Deleted!",
          text: "User has been deleted.",
          icon: "success",
          confirmButtonText: "Okay"
        });
      } else {
        Swal.fire({
          title: "Cancelled",
          text: "User deletion was cancelled.",
          icon: "info",
          confirmButtonText: "Okay"
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"${_scopeId}><div class="flex justify-between items-center mb-6"${_scopeId}><h2 class="text-2xl font-bold text-gray-800"${_scopeId}>User Management</h2>`);
            _push2(ssrRenderComponent(unref(InertiaLink), {
              href: "/users/create",
              class: "inline-flex items-center px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="mr-2"${_scopeId2}>+</span> New User `);
                } else {
                  return [
                    createVNode("span", { class: "mr-2" }, "+"),
                    createTextVNode(" New User ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="bg-white rounded-xl shadow-lg overflow-hidden"${_scopeId}><div class="overflow-x-auto"${_scopeId}><table class="min-w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr${_scopeId}><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>Name</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>Email</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>Role</th><th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}>Actions</th></tr></thead><tbody class="bg-white divide-y divide-gray-200"${_scopeId}><!--[-->`);
            ssrRenderList(__props.users, (user) => {
              _push2(`<tr class="hover:bg-gray-50 transition-colors duration-200"${_scopeId}><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"${_scopeId}>${ssrInterpolate(user.name)}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(user.email)}</td><td class="px-6 py-4 whitespace-nowrap"${_scopeId}><span class="${ssrRenderClass([{
                "bg-red-100 text-red-800": user.Roles === "admin",
                "bg-yellow-100 text-yellow-800": user.Roles === "chef",
                "bg-green-100 text-green-800": user.Roles === "user"
              }, "px-2 inline-flex text-xs leading-5 font-semibold rounded-full"])}"${_scopeId}>${ssrInterpolate(user.Roles)}</span></td><td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium"${_scopeId}><div class="flex items-center justify-center space-x-4"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(InertiaLink), {
                href: `/users/${user.id}`,
                class: "text-blue-600 hover:text-blue-900"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` View `);
                  } else {
                    return [
                      createTextVNode(" View ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(InertiaLink), {
                href: `/users/${user.id}/edit`,
                class: "text-orange-600 hover:text-orange-900"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Edit `);
                  } else {
                    return [
                      createTextVNode(" Edit ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<button class="text-red-600 hover:text-red-900"${_scopeId}> Delete </button></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "flex justify-between items-center mb-6" }, [
                  createVNode("h2", { class: "text-2xl font-bold text-gray-800" }, "User Management"),
                  createVNode(unref(InertiaLink), {
                    href: "/users/create",
                    class: "inline-flex items-center px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "mr-2" }, "+"),
                      createTextVNode(" New User ")
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "bg-white rounded-xl shadow-lg overflow-hidden" }, [
                  createVNode("div", { class: "overflow-x-auto" }, [
                    createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                      createVNode("thead", { class: "bg-gray-50" }, [
                        createVNode("tr", null, [
                          createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Name"),
                          createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Email"),
                          createVNode("th", { class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Role"),
                          createVNode("th", { class: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Actions")
                        ])
                      ]),
                      createVNode("tbody", { class: "bg-white divide-y divide-gray-200" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.users, (user) => {
                          return openBlock(), createBlock("tr", {
                            key: user.id,
                            class: "hover:bg-gray-50 transition-colors duration-200"
                          }, [
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-sm text-gray-900" }, toDisplayString(user.name), 1),
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(user.email), 1),
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap" }, [
                              createVNode("span", {
                                class: ["px-2 inline-flex text-xs leading-5 font-semibold rounded-full", {
                                  "bg-red-100 text-red-800": user.Roles === "admin",
                                  "bg-yellow-100 text-yellow-800": user.Roles === "chef",
                                  "bg-green-100 text-green-800": user.Roles === "user"
                                }]
                              }, toDisplayString(user.Roles), 3)
                            ]),
                            createVNode("td", { class: "px-6 py-4 whitespace-nowrap text-center text-sm font-medium" }, [
                              createVNode("div", { class: "flex items-center justify-center space-x-4" }, [
                                createVNode(unref(InertiaLink), {
                                  href: `/users/${user.id}`,
                                  class: "text-blue-600 hover:text-blue-900"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" View ")
                                  ]),
                                  _: 2
                                }, 1032, ["href"]),
                                createVNode(unref(InertiaLink), {
                                  href: `/users/${user.id}/edit`,
                                  class: "text-orange-600 hover:text-orange-900"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Edit ")
                                  ]),
                                  _: 2
                                }, 1032, ["href"]),
                                createVNode("button", {
                                  onClick: ($event) => submitDelete(user.id),
                                  class: "text-red-600 hover:text-red-900"
                                }, " Delete ", 8, ["onClick"])
                              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
