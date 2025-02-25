import { withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { InertiaLink } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import { L as Layout } from "./backend-DaIRI2w_.js";
import "./ApplicationLogo-3H3I4iid.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./DropdownLink-DStkidMI.js";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    users: Array
  },
  setup(__props) {
    const submitDelete = (userId) => {
      if (confirm("Are you sure you want to delete this user?")) {
        Inertia.delete(`/users/${userId}`);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between items-center mb-4"${_scopeId}><h2 class="text-2xl font-semibold text-gray-700"${_scopeId}>User List</h2>`);
            _push2(ssrRenderComponent(unref(InertiaLink), {
              href: "/users/create",
              class: "bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` New User `);
                } else {
                  return [
                    createTextVNode(" New User ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="overflow-x-auto bg-white shadow-md rounded-lg"${_scopeId}><div class="p-4 border-t"${_scopeId}><div class="flex mb-2 font-semibold text-gray-700"${_scopeId}><div class="flex-1"${_scopeId}>Name</div><div class="flex-1"${_scopeId}>Email</div><div class="flex-1 text-center"${_scopeId}>Actions</div></div><!--[-->`);
            ssrRenderList(__props.users, (user) => {
              _push2(`<div class="flex justify-between items-center py-3 border-b hover:bg-gray-50"${_scopeId}><div class="flex-1"${_scopeId}><p class="text-lg font-medium"${_scopeId}>${ssrInterpolate(user.name)}</p></div><div class="flex-1"${_scopeId}><p class="text-sm text-gray-500"${_scopeId}>${ssrInterpolate(user.email)}</p></div><div class="flex-1 text-center space-x-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(InertiaLink), {
                href: "/users/" + user.id,
                class: "text-green-500 hover:text-green-700"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Show `);
                  } else {
                    return [
                      createTextVNode(" Show ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(InertiaLink), {
                href: "/users/" + user.id + "/edit",
                class: "text-blue-500 hover:text-blue-700"
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
              _push2(`<button class="text-red-500 hover:text-red-700"${_scopeId}> Delete </button></div></div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                createVNode("h2", { class: "text-2xl font-semibold text-gray-700" }, "User List"),
                createVNode(unref(InertiaLink), {
                  href: "/users/create",
                  class: "bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" New User ")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "overflow-x-auto bg-white shadow-md rounded-lg" }, [
                createVNode("div", { class: "p-4 border-t" }, [
                  createVNode("div", { class: "flex mb-2 font-semibold text-gray-700" }, [
                    createVNode("div", { class: "flex-1" }, "Name"),
                    createVNode("div", { class: "flex-1" }, "Email"),
                    createVNode("div", { class: "flex-1 text-center" }, "Actions")
                  ]),
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.users, (user) => {
                    return openBlock(), createBlock("div", {
                      key: user.id,
                      class: "flex justify-between items-center py-3 border-b hover:bg-gray-50"
                    }, [
                      createVNode("div", { class: "flex-1" }, [
                        createVNode("p", { class: "text-lg font-medium" }, toDisplayString(user.name), 1)
                      ]),
                      createVNode("div", { class: "flex-1" }, [
                        createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(user.email), 1)
                      ]),
                      createVNode("div", { class: "flex-1 text-center space-x-2" }, [
                        createVNode(unref(InertiaLink), {
                          href: "/users/" + user.id,
                          class: "text-green-500 hover:text-green-700"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Show ")
                          ]),
                          _: 2
                        }, 1032, ["href"]),
                        createVNode(unref(InertiaLink), {
                          href: "/users/" + user.id + "/edit",
                          class: "text-blue-500 hover:text-blue-700"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Edit ")
                          ]),
                          _: 2
                        }, 1032, ["href"]),
                        createVNode("button", {
                          onClick: ($event) => submitDelete(user.id),
                          class: "text-red-500 hover:text-red-700"
                        }, " Delete ", 8, ["onClick"])
                      ])
                    ]);
                  }), 128))
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
