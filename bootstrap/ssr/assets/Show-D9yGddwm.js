import { withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { InertiaLink } from "@inertiajs/inertia-vue3";
import "@inertiajs/inertia";
import { L as Layout } from "./backend-DaIRI2w_.js";
import "./ApplicationLogo-3H3I4iid.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./DropdownLink-DStkidMI.js";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    user: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            _push2(`<div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg"${_scopeId}><h1 class="text-3xl font-semibold text-center mb-6"${_scopeId}>User Details</h1><div class="grid grid-cols-2 gap-6"${_scopeId}><div class="mb-4"${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Name</label><p class="mt-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100"${_scopeId}>${ssrInterpolate(__props.user.name)}</p></div><div class="mb-4"${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Email</label><p class="mt-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100"${_scopeId}>${ssrInterpolate(__props.user.email)}</p></div><div class="mb-4"${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Role</label><p class="mt-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100"${_scopeId}>${ssrInterpolate(__props.user.Roles)}</p></div><div class="mb-4"${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>First Name</label><p class="mt-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100"${_scopeId}>${ssrInterpolate(((_a = __props.user.profile) == null ? void 0 : _a.FirstName) || "N/A")}</p></div><div class="mb-4"${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Last Name</label><p class="mt-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100"${_scopeId}>${ssrInterpolate(((_b = __props.user.profile) == null ? void 0 : _b.LastName) || "N/A")}</p></div><div class="mb-4"${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Middle Name</label><p class="mt-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100"${_scopeId}>${ssrInterpolate(((_c = __props.user.profile) == null ? void 0 : _c.MiddleName) || "N/A")}</p></div><div class="mb-4"${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Introduction</label><p class="mt-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100"${_scopeId}>${ssrInterpolate(((_d = __props.user.profile) == null ? void 0 : _d.Introduction) || "N/A")}</p></div><div class="mb-4"${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Profile Image</label><div class="mt-2"${_scopeId}>`);
            if ((_e = __props.user.profile) == null ? void 0 : _e.ProfileImage) {
              _push2(`<img${ssrRenderAttr("src", _ctx.route("storage", __props.user.profile.ProfileImage))} alt="Profile Image" class="w-20 h-20 rounded-full object-cover"${_scopeId}>`);
            } else {
              _push2(`<p class="text-gray-500"${_scopeId}>No image uploaded</p>`);
            }
            _push2(`</div></div>`);
            if (__props.user.Roles === "chef") {
              _push2(`<div class="mb-4"${_scopeId}><label class="block text-sm font-medium text-gray-700"${_scopeId}>Income</label><p class="mt-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100"${_scopeId}>${ssrInterpolate(((_f = __props.user.chef) == null ? void 0 : _f.Income) || "N/A")}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-6 flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(InertiaLink), {
              to: _ctx.route("users.index"),
              class: "px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Back to Users `);
                } else {
                  return [
                    createTextVNode(" Back to Users ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg" }, [
                createVNode("h1", { class: "text-3xl font-semibold text-center mb-6" }, "User Details"),
                createVNode("div", { class: "grid grid-cols-2 gap-6" }, [
                  createVNode("div", { class: "mb-4" }, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Name"),
                    createVNode("p", { class: "mt-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100" }, toDisplayString(__props.user.name), 1)
                  ]),
                  createVNode("div", { class: "mb-4" }, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Email"),
                    createVNode("p", { class: "mt-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100" }, toDisplayString(__props.user.email), 1)
                  ]),
                  createVNode("div", { class: "mb-4" }, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Role"),
                    createVNode("p", { class: "mt-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100" }, toDisplayString(__props.user.Roles), 1)
                  ]),
                  createVNode("div", { class: "mb-4" }, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "First Name"),
                    createVNode("p", { class: "mt-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100" }, toDisplayString(((_g = __props.user.profile) == null ? void 0 : _g.FirstName) || "N/A"), 1)
                  ]),
                  createVNode("div", { class: "mb-4" }, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Last Name"),
                    createVNode("p", { class: "mt-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100" }, toDisplayString(((_h = __props.user.profile) == null ? void 0 : _h.LastName) || "N/A"), 1)
                  ]),
                  createVNode("div", { class: "mb-4" }, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Middle Name"),
                    createVNode("p", { class: "mt-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100" }, toDisplayString(((_i = __props.user.profile) == null ? void 0 : _i.MiddleName) || "N/A"), 1)
                  ]),
                  createVNode("div", { class: "mb-4" }, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Introduction"),
                    createVNode("p", { class: "mt-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100" }, toDisplayString(((_j = __props.user.profile) == null ? void 0 : _j.Introduction) || "N/A"), 1)
                  ]),
                  createVNode("div", { class: "mb-4" }, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Profile Image"),
                    createVNode("div", { class: "mt-2" }, [
                      ((_k = __props.user.profile) == null ? void 0 : _k.ProfileImage) ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: _ctx.route("storage", __props.user.profile.ProfileImage),
                        alt: "Profile Image",
                        class: "w-20 h-20 rounded-full object-cover"
                      }, null, 8, ["src"])) : (openBlock(), createBlock("p", {
                        key: 1,
                        class: "text-gray-500"
                      }, "No image uploaded"))
                    ])
                  ]),
                  __props.user.Roles === "chef" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mb-4"
                  }, [
                    createVNode("label", { class: "block text-sm font-medium text-gray-700" }, "Income"),
                    createVNode("p", { class: "mt-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-100" }, toDisplayString(((_l = __props.user.chef) == null ? void 0 : _l.Income) || "N/A"), 1)
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "mt-6 flex justify-center" }, [
                  createVNode(unref(InertiaLink), {
                    to: _ctx.route("users.index"),
                    class: "px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Back to Users ")
                    ]),
                    _: 1
                  }, 8, ["to"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
