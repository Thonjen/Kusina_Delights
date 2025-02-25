import axios from "axios";
import { debounce } from "lodash";
import { useSSRContext, mergeProps, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$3 = {
  data() {
    return {
      logo: "/storage/logo3.png",
      searchQuery: "",
      recipes: [],
      userDropdownOpen: false,
      recipeDropdownOpen: false,
      dropdownTopPosition: 0
    };
  },
  computed: {
    filteredRecipes() {
      return this.recipes.filter(
        (recipe) => recipe.RecipeTitle.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  watch: {
    searchQuery: "debouncedFetchRecipes"
  },
  methods: {
    toggleUserDropdown() {
      this.userDropdownOpen = !this.userDropdownOpen;
    },
    closeUserDropdown() {
      this.userDropdownOpen = false;
    },
    toggleRecipeDropdown(state) {
      this.recipeDropdownOpen = state;
      this.updateDropdownPosition();
    },
    closeRecipeDropdown() {
      this.recipeDropdownOpen = false;
    },
    handleClickOutside(event) {
      const dropdown = this.$el.querySelector(".relative.text-center");
      const searchDropdown = this.$el.querySelector(".relative.flex.items-center");
      if (dropdown && !dropdown.contains(event.target)) {
        this.closeUserDropdown();
      }
      if (searchDropdown && !searchDropdown.contains(event.target)) {
        this.closeRecipeDropdown();
      }
    },
    logout() {
      this.$inertia.post("/logout");
    },
    async fetchRecipes(query) {
      const trimmedQuery = query.trim();
      if (!trimmedQuery) {
        this.recipes = [];
        this.toggleRecipeDropdown(false);
        return;
      }
      try {
        const { data } = await axios.get("/api/recipes", {
          params: { search: trimmedQuery }
        });
        this.recipes = data;
        this.toggleRecipeDropdown(data.length > 0);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        this.toggleRecipeDropdown(false);
      }
    },
    debouncedFetchRecipes: debounce(function(query) {
      this.fetchRecipes(query);
    }, 300),
    updateDropdownPosition() {
      const inputElement = this.$el.querySelector("input");
      if (inputElement) {
        const inputRect = inputElement.getBoundingClientRect();
        this.dropdownTopPosition = inputRect.bottom + window.scrollY - 65;
      }
    }
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-white text-black-100 font-sans shadow-md" }, _attrs))}><div class="bg-yellow-300 h-[30px]"></div><div class="container mx-auto px-4 flex justify-between items-center h-[113px]"><a href="/" class="flex items-center space-x-4 text-normal white-shadow"><img${ssrRenderAttr("src", $data.logo)} alt="Logo" class="h-20"><span>Kusina Delights</span></a><nav class="hidden md:flex space-x-6 font-bold text-normal"><a href="/" class="hover:text-gray-500">Home</a><a href="/allrecipes" class="hover:text-gray-500">Recipes</a><a href="/aboutus" class="hover:text-gray-500">About Us</a></nav><div class="flex flex-col items-center space-y-2">`);
  if (_ctx.$page.props.auth.user) {
    _push(`<div class="relative text-center"><button class="flex items-center space-x-2 text-sm font-bold text-small hover:text-gray-500 focus:outline-none"><span>Hello, ${ssrInterpolate(_ctx.$page.props.auth.user.name)}</span><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>`);
    if ($data.userDropdownOpen) {
      _push(`<div class="absolute right-0.5 left-0.5 mt-2 w-45 bg-white border border-gray-200 rounded shadow-lg z-50"><a href="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a><button class="w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center"> Logout </button></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<div class="flex space-x-4 text-sm font-bold text-small"><a href="/login" class="hover:text-gray-500">Login</a><span>|</span><a href="/register" class="hover:text-gray-500">Sign Up</a></div>`);
  }
  _push(`<div class="relative flex items-center bg-gray-100 border border-gray-300 rounded-3xl px-2 py-2"><input${ssrRenderAttr("value", $data.searchQuery)} type="text" placeholder="Search recipes..." class="text-small px-2 w-40 bg-transparent outline-none focus:outline-none focus:ring-0 border-none placeholder-gray-500"><button class="text-gray-600 px-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5"><circle cx="10" cy="10" r="6" stroke="currentColor" stroke-width="2"></circle><line x1="16" y1="16" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round"></line></svg></button>`);
  if ($data.recipes.length && $data.recipeDropdownOpen) {
    _push(`<div class="absolute w-[28vh] bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-72 overflow-y-auto transition-all duration-300 ease-in-out" style="${ssrRenderStyle({
      top: `${$data.dropdownTopPosition}px`,
      left: "2vh"
    })}"><!--[-->`);
    ssrRenderList($options.filteredRecipes, (recipe) => {
      _push(`<a${ssrRenderAttr("href", `/api/recipes/${recipe.RecipeID}`)} class="block px-4 py-3 text-sm text-gray-700 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200 ease-in-out flex items-center space-x-4">`);
      if (recipe.RecipePhoto) {
        _push(`<img${ssrRenderAttr("src", recipe.RecipePhoto)} alt="Recipe Image" class="h-10 w-10 object-cover rounded-full">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(recipe.RecipeTitle)}</span></a>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></header>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/frontend/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  props: {
    icon: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: "#"
      // Default to "#" if no link is provided
    },
    ariaLabel: {
      type: String,
      default: "Social media icon"
      // Default label for accessibility
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-10 h-10 bg-yellow-100 rounded-md shadow-md flex items-center justify-center hover:bg-yellow-200 transition" }, _attrs))}><a${ssrRenderAttr("href", $props.link)}${ssrRenderAttr("aria-label", $props.ariaLabel)} class="text-lg text-gray-800 hover:text-gray-900"${ssrRenderAttr("title", $props.ariaLabel)}><i class="${ssrRenderClass(`fab fa-${$props.icon}`)}"></i></a></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/frontend/SocialIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SocialIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: {
    SocialIcon
  },
  data() {
    return {
      logo: "/storage/logo3.png"
      // Adjust this based on your public path
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SocialIcon = resolveComponent("SocialIcon");
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-yellow-300 text-black font-sans border-t border-gray-300" }, _attrs))}><div class="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center h-full text-lg"><a href="#" class="flex items-center space-x-4 font-bold"><img${ssrRenderAttr("src", $data.logo)} alt="Kusina Delights Logo" class="h-20 w-auto"><span class="text-xl">Kusina Delights</span></a><div class="flex flex-col items-center md:items-start"><h2 class="font-bold text-lg mb-2">Our Socials</h2><div class="flex space-x-4">`);
  _push(ssrRenderComponent(_component_SocialIcon, {
    icon: "facebook-f",
    link: "https://facebook.com",
    ariaLabel: "Visit our Facebook page"
  }, null, _parent));
  _push(ssrRenderComponent(_component_SocialIcon, {
    icon: "twitter",
    link: "https://twitter.com",
    ariaLabel: "Visit our Twitter page"
  }, null, _parent));
  _push(ssrRenderComponent(_component_SocialIcon, {
    icon: "youtube",
    link: "https://youtube.com",
    ariaLabel: "Visit our YouTube channel"
  }, null, _parent));
  _push(ssrRenderComponent(_component_SocialIcon, {
    icon: "pinterest",
    link: "https://pinterest.com",
    ariaLabel: "Visit our Pinterest page"
  }, null, _parent));
  _push(`</div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/frontend/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Header,
    Footer
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = resolveComponent("Header");
  const _component_Footer = resolveComponent("Footer");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<main class="">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/frontend.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Layout as L
};
