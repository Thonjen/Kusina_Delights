import { useSSRContext, mergeProps, ref, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createTextVNode, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { usePage } from "@inertiajs/inertia-vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-3H3I4iid.js";
import { _ as _sfc_main$3, a as _sfc_main$4 } from "./DropdownLink-DStkidMI.js";
import { Link } from "@inertiajs/vue3";
const logoPath = "/storage/logo3.png";
const _sfc_main$2 = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const { url } = usePage();
    const currentUrl = typeof url === "string" ? url : (url == null ? void 0 : url.path) || "";
    const isActive = (basePath) => currentUrl.startsWith(basePath);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar" }, _attrs))} data-v-6d106081><div class="w-64 min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 shadow-xl" data-v-6d106081><div class="flex items-center px-6 py-6 border-b border-yellow-400/30 backdrop-blur-sm" data-v-6d106081><img${ssrRenderAttr("src", logoPath)} alt="Logo" class="h-12 w-auto object-contain drop-shadow-md" data-v-6d106081><h1 class="ml-4 text-xl font-bold text-gray-800 tracking-tight" data-v-6d106081>Kusina Delights</h1></div><nav class="mt-8 px-4 space-y-2" data-v-6d106081><!--[-->`);
      ssrRenderList([
        { href: "/dashboard", icon: "fas fa-home", label: "Dashboard" },
        { href: "/recipes", icon: "fas fa-clipboard", label: "Recipes" },
        { href: "/reviews", icon: "fas fa-star", label: "Reviews" },
        { href: "/users", icon: "fas fa-users", label: "Users" }
      ], (item, index) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="${ssrRenderClass([
          "flex items-center px-4 py-3 rounded-lg transition-all duration-200 ease-out",
          "hover:transform hover:scale-102 hover:shadow-md",
          isActive(item.href) ? "bg-yellow-100/80 text-yellow-800 font-medium shadow-sm border border-yellow-200/50" : "text-gray-700 hover:bg-white/50 hover:text-gray-900"
        ])}" data-v-6d106081><i class="${ssrRenderClass([item.icon, "text-lg w-6"])}" data-v-6d106081></i><span class="ml-3 text-sm font-medium" data-v-6d106081>${ssrInterpolate(item.label)}</span></a>`);
      });
      _push(`<!--]--></nav></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/backend/Sidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6d106081"]]);
const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(_attrs)} data-v-90ceaeb8><div class="mx-auto max-w-7xl mb-10" data-v-90ceaeb8><div class="flex h-16 justify-between" data-v-90ceaeb8><div class="flex" data-v-90ceaeb8><div class="flex shrink-0 items-center" data-v-90ceaeb8>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard")
      }, null, _parent));
      _push(`</div></div><div class="hidden sm:ms-6 sm:flex sm:items-center" data-v-90ceaeb8><div class="relative ms-3" data-v-90ceaeb8>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-flex rounded-md" data-v-90ceaeb8${_scopeId}><button type="button" class="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-lg font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none" data-v-90ceaeb8${_scopeId}><span class="mr-2" data-v-90ceaeb8${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)}</span><svg class="${ssrRenderClass([{ "rotate-180": isOpen.value }, "transition-transform duration-300 w-4 h-4 text-gray-500"])}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-90ceaeb8${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-v-90ceaeb8${_scopeId}></path></svg></button></span>`);
          } else {
            return [
              createVNode("span", { class: "inline-flex rounded-md" }, [
                createVNode("button", {
                  type: "button",
                  class: "inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-lg font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none",
                  onClick: toggleDropdown
                }, [
                  createVNode("span", { class: "mr-2" }, toDisplayString(_ctx.$page.props.auth.user.name), 1),
                  (openBlock(), createBlock("svg", {
                    class: [{ "rotate-180": isOpen.value }, "transition-transform duration-300 w-4 h-4 text-gray-500"],
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M19 9l-7 7-7-7"
                    })
                  ], 2))
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
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-90ceaeb8"]]);
const _sfc_main = {
  components: {
    Sidebar,
    Header
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
