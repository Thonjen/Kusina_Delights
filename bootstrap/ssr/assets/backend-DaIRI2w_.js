import { useSSRContext, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { usePage } from "@inertiajs/inertia-vue3";
import { A as ApplicationLogo } from "./ApplicationLogo-3H3I4iid.js";
import { _ as _sfc_main$3, a as _sfc_main$4 } from "./DropdownLink-DStkidMI.js";
import { Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const logoPath = "/storage/logo3.png";
const _sfc_main$2 = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const { url } = usePage();
    const currentUrl = typeof url === "string" ? url : (url == null ? void 0 : url.path) || "";
    const isActive = (basePath) => currentUrl.startsWith(basePath);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar" }, _attrs))}><div class="bg-yellow-300 w-64 min-h-screen bg-white shadow-md"><div class="flex items-center px-6 py-4"><img${ssrRenderAttr("src", logoPath)} alt="Logo" class="h-14"><h1 class="ml-3 text-lg font-bold">Kusina Delights</h1></div><nav class="mt-6"><a href="/dashboard" class="${ssrRenderClass([
        "flex items-center px-6 py-3 font-semibold",
        isActive("/dashboard") ? "bg-yellow-200 text-gray-900" : "hover:bg-gray-100"
      ])}"><i class="fas fa-home mr-3"></i> Dashboard </a><a href="/recipes" class="${ssrRenderClass([
        "flex items-center px-6 py-3",
        isActive("/recipes") ? "bg-yellow-200 text-gray-900" : "hover:bg-gray-100"
      ])}"><i class="fas fa-clipboard mr-3"></i> Recipes </a><a href="/reviews" class="${ssrRenderClass([
        "flex items-center px-6 py-3",
        isActive("/reviews") ? "bg-yellow-200 text-gray-900" : "hover:bg-gray-100"
      ])}"><i class="fas fa-star mr-3"></i> Reviews </a><a href="/users" class="${ssrRenderClass([
        "flex items-center px-6 py-3",
        isActive("/users") ? "bg-yellow-200 text-gray-900" : "hover:bg-gray-100"
      ])}"><i class="fas fa-users mr-3"></i> Users </a></nav></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/backend/Sidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(_attrs)}><div class="mx-auto max-w-7xl mb-10"><div class="flex h-16 justify-between"><div class="flex"><div class="flex shrink-0 items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "block h-9 w-auto fill-current text-gray-800" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationLogo, { class: "block h-9 w-auto fill-current text-gray-800" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden sm:ms-6 sm:flex sm:items-center"><div class="relative ms-3">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)} <svg class="-me-0.5 ms-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
          } else {
            return [
              createVNode("span", { class: "inline-flex rounded-md" }, [
                createVNode("button", {
                  type: "button",
                  class: "inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                }, [
                  createTextVNode(toDisplayString(_ctx.$page.props.auth.user.name) + " ", 1),
                  (openBlock(), createBlock("svg", {
                    class: "-me-0.5 ms-2 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, {
              href: _ctx.route("home"),
              class: "hover:text-gray-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Home`);
                } else {
                  return [
                    createTextVNode("Home")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              href: _ctx.route("logout"),
              method: "post",
              as: "button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out `);
                } else {
                  return [
                    createTextVNode(" Log Out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$4, {
                href: _ctx.route("home"),
                class: "hover:text-gray-500"
              }, {
                default: withCtx(() => [
                  createTextVNode("Home")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$4, {
                href: _ctx.route("logout"),
                method: "post",
                as: "button"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Log Out ")
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/backend/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  components: {
    Sidebar: _sfc_main$2,
    Header: _sfc_main$1
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = resolveComponent("Sidebar");
  const _component_Header = resolveComponent("Header");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-layout" }, _attrs))}><div class="max-w-full mx-auto flex h-screen">`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<main class="flex-1 pl-10 pr-10 pt-5 overflow-y-auto">`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/backend.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Layout as L
};
