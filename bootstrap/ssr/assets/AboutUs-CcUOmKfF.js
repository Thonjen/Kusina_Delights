import { onMounted, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { L as Layout } from "./frontend-CWpoDOF_.js";
import { usePage } from "@inertiajs/vue3";
import "axios";
import "lodash";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "AboutUs",
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      const { auth } = usePage().props;
      if (auth.user) {
        const script1 = document.createElement("script");
        script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
        document.head.appendChild(script1);
        const script2 = document.createElement("script");
        script2.src = "https://files.bpcontent.cloud/2024/12/16/16/20241216164133-I8MIRLQE.js";
        document.head.appendChild(script2);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative h-[362px]"${_scopeId}><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "url('https://c.animaapp.com/IjUIznOY/img/hero-image-1.png')", "filter": "brightness(0.5)" })}"${_scopeId}></div><div class="flex items-center justify-center h-full relative"${_scopeId}><p class="text-white text-center px-4 text-large font-bold drop-shadow-xl white-shadow"${_scopeId}> Discover and savor the rich flavors of Filipino snack culture at Kusina Delights! </p></div></div><div class="p-10 mx-auto max-w-[80%] mt-10"${_scopeId}><p class="text-black-100 text-center text-large font-bold drop-shadow-lg mb-2"${_scopeId}> About Us </p><p class="text-black-100 text-center text-normal drop-shadow-lg"${_scopeId}> Welcome to Kusina Delights, your ultimate destination for exploring the mouthwatering snacks of the Philippines! Our mission is to celebrate the rich culinary heritage of Filipino cuisine by showcasing a delightful array of traditional snacks that bring families and friends together. From crispy chips to sweet treats, each recipe is crafted with love and passion, reflecting the vibrant flavors and unique ingredients that make Filipino snacks so special. Join us on this delicious journey as we share our favorite recipes, cooking tips, and stories behind these beloved snacks, inviting you to savor the taste of the Philippines, one bite at a time. </p><p class="text-black-100 text-center text-large drop-shadow-lg mb-2 mt-20"${_scopeId}> Team members </p><div class="flex justify-center gap-20"${_scopeId}><div class="w-80 bg-white rounded-lg shadow-lg p-6 text-center max-w-screen-xl mb-10 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"${_scopeId}><img class="w-52 h-52 rounded-2xl mx-auto mb-4" src="/storage/TJ.jpg" alt="Profile Image"${_scopeId}><h2 class="text-normal font-semibold text-black-100"${_scopeId}>Thonjen P. Banguis</h2><p class="text-black-100 text-small"${_scopeId}>Project Leader</p><div class="flex justify-center gap-4 mt-4"${_scopeId}><a href="https://www.facebook.com/profile.php?id=100009494573792" target="_blank" class="bg-yellow-100 text-black-100 p-4 rounded-2xl hover:bg-yellow-500 transition"${_scopeId}><i class="fab fa-facebook-f text-2xl"${_scopeId}></i></a><a href="https://github.com/Thonjen" target="_blank" class="bg-yellow-100 text-black-100 p-4 rounded-2xl hover:bg-yellow-500 transition"${_scopeId}><i class="fab fa-github text-2xl"${_scopeId}></i></a><a href="#" target="_blank" class="bg-yellow-100 text-black-100 p-4 rounded-2xl hover:bg-yellow-500 transition"${_scopeId}><i class="fab fa-linkedin-in text-2xl"${_scopeId}></i></a></div></div><div class="w-80 bg-white rounded-lg shadow-lg p-6 text-center max-w-screen-xl mb-10 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"${_scopeId}><img class="w-52 h-52 rounded-2xl mx-auto mb-4" src="/storage/Ale.JPG" alt="Profile Image"${_scopeId}><h2 class="text-normal font-semibold text-black-100"${_scopeId}>Alejandro A. Cayasa</h2><p class="text-black-100 text-small"${_scopeId}>Project Designer</p><div class="flex justify-center gap-4 mt-4"${_scopeId}><a href="https://www.facebook.com/AlejandroACayasa" target="_blank" class="bg-yellow-100 text-black-100 p-4 rounded-xl hover:bg-yellow-500 transition"${_scopeId}><i class="fab fa-facebook-f text-2xl"${_scopeId}></i></a><a href="https://github.com/CodeNameCelestia" target="_blank" class="bg-yellow-100 text-black-100 p-4 rounded-xl hover:bg-yellow-500 transition"${_scopeId}><i class="fab fa-github text-2xl"${_scopeId}></i></a><a href="https://www.linkedin.com/in/obsidian-furry-%CA%95-%E1%B4%A5-%CA%94-270066236/" target="_blank" class="bg-yellow-100 text-black-100 p-4 rounded-xl hover:bg-yellow-500 transition"${_scopeId}><i class="fab fa-linkedin-in text-2xl"${_scopeId}></i></a></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative h-[362px]" }, [
                createVNode("div", {
                  class: "absolute inset-0 bg-cover bg-center",
                  style: { "background-image": "url('https://c.animaapp.com/IjUIznOY/img/hero-image-1.png')", "filter": "brightness(0.5)" }
                }),
                createVNode("div", { class: "flex items-center justify-center h-full relative" }, [
                  createVNode("p", { class: "text-white text-center px-4 text-large font-bold drop-shadow-xl white-shadow" }, " Discover and savor the rich flavors of Filipino snack culture at Kusina Delights! ")
                ])
              ]),
              createVNode("div", { class: "p-10 mx-auto max-w-[80%] mt-10" }, [
                createVNode("p", { class: "text-black-100 text-center text-large font-bold drop-shadow-lg mb-2" }, " About Us "),
                createVNode("p", { class: "text-black-100 text-center text-normal drop-shadow-lg" }, " Welcome to Kusina Delights, your ultimate destination for exploring the mouthwatering snacks of the Philippines! Our mission is to celebrate the rich culinary heritage of Filipino cuisine by showcasing a delightful array of traditional snacks that bring families and friends together. From crispy chips to sweet treats, each recipe is crafted with love and passion, reflecting the vibrant flavors and unique ingredients that make Filipino snacks so special. Join us on this delicious journey as we share our favorite recipes, cooking tips, and stories behind these beloved snacks, inviting you to savor the taste of the Philippines, one bite at a time. "),
                createVNode("p", { class: "text-black-100 text-center text-large drop-shadow-lg mb-2 mt-20" }, " Team members "),
                createVNode("div", { class: "flex justify-center gap-20" }, [
                  createVNode("div", { class: "w-80 bg-white rounded-lg shadow-lg p-6 text-center max-w-screen-xl mb-10 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" }, [
                    createVNode("img", {
                      class: "w-52 h-52 rounded-2xl mx-auto mb-4",
                      src: "/storage/TJ.jpg",
                      alt: "Profile Image"
                    }),
                    createVNode("h2", { class: "text-normal font-semibold text-black-100" }, "Thonjen P. Banguis"),
                    createVNode("p", { class: "text-black-100 text-small" }, "Project Leader"),
                    createVNode("div", { class: "flex justify-center gap-4 mt-4" }, [
                      createVNode("a", {
                        href: "https://www.facebook.com/profile.php?id=100009494573792",
                        target: "_blank",
                        class: "bg-yellow-100 text-black-100 p-4 rounded-2xl hover:bg-yellow-500 transition"
                      }, [
                        createVNode("i", { class: "fab fa-facebook-f text-2xl" })
                      ]),
                      createVNode("a", {
                        href: "https://github.com/Thonjen",
                        target: "_blank",
                        class: "bg-yellow-100 text-black-100 p-4 rounded-2xl hover:bg-yellow-500 transition"
                      }, [
                        createVNode("i", { class: "fab fa-github text-2xl" })
                      ]),
                      createVNode("a", {
                        href: "#",
                        target: "_blank",
                        class: "bg-yellow-100 text-black-100 p-4 rounded-2xl hover:bg-yellow-500 transition"
                      }, [
                        createVNode("i", { class: "fab fa-linkedin-in text-2xl" })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "w-80 bg-white rounded-lg shadow-lg p-6 text-center max-w-screen-xl mb-10 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" }, [
                    createVNode("img", {
                      class: "w-52 h-52 rounded-2xl mx-auto mb-4",
                      src: "/storage/Ale.JPG",
                      alt: "Profile Image"
                    }),
                    createVNode("h2", { class: "text-normal font-semibold text-black-100" }, "Alejandro A. Cayasa"),
                    createVNode("p", { class: "text-black-100 text-small" }, "Project Designer"),
                    createVNode("div", { class: "flex justify-center gap-4 mt-4" }, [
                      createVNode("a", {
                        href: "https://www.facebook.com/AlejandroACayasa",
                        target: "_blank",
                        class: "bg-yellow-100 text-black-100 p-4 rounded-xl hover:bg-yellow-500 transition"
                      }, [
                        createVNode("i", { class: "fab fa-facebook-f text-2xl" })
                      ]),
                      createVNode("a", {
                        href: "https://github.com/CodeNameCelestia",
                        target: "_blank",
                        class: "bg-yellow-100 text-black-100 p-4 rounded-xl hover:bg-yellow-500 transition"
                      }, [
                        createVNode("i", { class: "fab fa-github text-2xl" })
                      ]),
                      createVNode("a", {
                        href: "https://www.linkedin.com/in/obsidian-furry-%CA%95-%E1%B4%A5-%CA%94-270066236/",
                        target: "_blank",
                        class: "bg-yellow-100 text-black-100 p-4 rounded-xl hover:bg-yellow-500 transition"
                      }, [
                        createVNode("i", { class: "fab fa-linkedin-in text-2xl" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Webpages/AboutUs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
