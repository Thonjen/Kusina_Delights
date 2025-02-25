import { onMounted, withCtx, unref, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { L as Layout } from "./backend-B8jYqHuT.js";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement, BarController, LineController, Title, Tooltip, Legend } from "chart.js";
import { UsersIcon, BookOpenIcon, StarIcon, UserGroupIcon, ChartBarIcon } from "@heroicons/vue/24/outline";
import "@inertiajs/inertia-vue3";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-3H3I4iid.js";
import "./DropdownLink-DStkidMI.js";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    totalUsers: Number,
    totalPosts: Number,
    totalReviews: Number,
    totalChefs: Number,
    totalViews: Number,
    usersPerDay: Array,
    viewsPerDay: Array
  },
  setup(__props) {
    Chart.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      BarElement,
      BarController,
      LineController,
      Title,
      Tooltip,
      Legend
    );
    const props = __props;
    const drawUsersChart = () => {
      const ctx = document.getElementById("usersChart").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          datasets: [{
            label: "Total Users per Day",
            data: props.usersPerDay,
            backgroundColor: "rgba(255, 159, 64, 0.2)",
            borderColor: "rgba(255, 159, 64, 1)",
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    };
    const drawViewsChart = () => {
      const ctx = document.getElementById("viewsChart").getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          datasets: [{
            label: "Recipe Views per Day",
            data: props.viewsPerDay,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    };
    onMounted(() => {
      drawUsersChart();
      drawViewsChart();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-6 mb-6"${_scopeId}><div class="p-6 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"${_scopeId}><div class="flex items-center gap-4 mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(UsersIcon), { class: "h-6 w-6 text-orange-500" }, null, _parent2, _scopeId));
            _push2(`<p class="text-sm text-gray-500"${_scopeId}>Total Users</p></div><p class="text-2xl font-bold text-gray-800"${_scopeId}>${ssrInterpolate(__props.totalUsers)}</p></div><div class="p-6 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"${_scopeId}><div class="flex items-center gap-4 mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(BookOpenIcon), { class: "h-6 w-6 text-blue-500" }, null, _parent2, _scopeId));
            _push2(`<p class="text-sm text-gray-500"${_scopeId}>Total Recipes</p></div><p class="text-2xl font-bold text-gray-800"${_scopeId}>${ssrInterpolate(__props.totalPosts)}</p></div><div class="p-6 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"${_scopeId}><div class="flex items-center gap-4 mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(StarIcon), { class: "h-6 w-6 text-yellow-500" }, null, _parent2, _scopeId));
            _push2(`<p class="text-sm text-gray-500"${_scopeId}>Total Reviews</p></div><p class="text-2xl font-bold text-gray-800"${_scopeId}>${ssrInterpolate(__props.totalReviews)}</p></div><div class="p-6 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"${_scopeId}><div class="flex items-center gap-4 mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(UserGroupIcon), { class: "h-6 w-6 text-green-500" }, null, _parent2, _scopeId));
            _push2(`<p class="text-sm text-gray-500"${_scopeId}>Total Chefs</p></div><p class="text-2xl font-bold text-gray-800"${_scopeId}>${ssrInterpolate(__props.totalChefs)}</p></div><div class="p-6 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"${_scopeId}><div class="flex items-center gap-4 mb-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ChartBarIcon), { class: "h-6 w-6 text-purple-500" }, null, _parent2, _scopeId));
            _push2(`<p class="text-sm text-gray-500"${_scopeId}>Total Views</p></div><p class="text-2xl font-bold text-gray-800"${_scopeId}>${ssrInterpolate(__props.totalViews)}</p></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div class="p-6 bg-white rounded-lg shadow-lg"${_scopeId}><h3 class="text-lg font-semibold text-gray-800"${_scopeId}>Users Per Day of the Week</h3><canvas id="usersChart" height="200"${_scopeId}></canvas></div><div class="p-6 bg-white rounded-lg shadow-lg"${_scopeId}><h3 class="text-lg font-semibold text-gray-800"${_scopeId}>Recipe Views Per Day of the Week</h3><canvas id="viewsChart" height="200"${_scopeId}></canvas></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-6 mb-6" }, [
                createVNode("div", { class: "p-6 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" }, [
                  createVNode("div", { class: "flex items-center gap-4 mb-2" }, [
                    createVNode(unref(UsersIcon), { class: "h-6 w-6 text-orange-500" }),
                    createVNode("p", { class: "text-sm text-gray-500" }, "Total Users")
                  ]),
                  createVNode("p", { class: "text-2xl font-bold text-gray-800" }, toDisplayString(__props.totalUsers), 1)
                ]),
                createVNode("div", { class: "p-6 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" }, [
                  createVNode("div", { class: "flex items-center gap-4 mb-2" }, [
                    createVNode(unref(BookOpenIcon), { class: "h-6 w-6 text-blue-500" }),
                    createVNode("p", { class: "text-sm text-gray-500" }, "Total Recipes")
                  ]),
                  createVNode("p", { class: "text-2xl font-bold text-gray-800" }, toDisplayString(__props.totalPosts), 1)
                ]),
                createVNode("div", { class: "p-6 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" }, [
                  createVNode("div", { class: "flex items-center gap-4 mb-2" }, [
                    createVNode(unref(StarIcon), { class: "h-6 w-6 text-yellow-500" }),
                    createVNode("p", { class: "text-sm text-gray-500" }, "Total Reviews")
                  ]),
                  createVNode("p", { class: "text-2xl font-bold text-gray-800" }, toDisplayString(__props.totalReviews), 1)
                ]),
                createVNode("div", { class: "p-6 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" }, [
                  createVNode("div", { class: "flex items-center gap-4 mb-2" }, [
                    createVNode(unref(UserGroupIcon), { class: "h-6 w-6 text-green-500" }),
                    createVNode("p", { class: "text-sm text-gray-500" }, "Total Chefs")
                  ]),
                  createVNode("p", { class: "text-2xl font-bold text-gray-800" }, toDisplayString(__props.totalChefs), 1)
                ]),
                createVNode("div", { class: "p-6 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" }, [
                  createVNode("div", { class: "flex items-center gap-4 mb-2" }, [
                    createVNode(unref(ChartBarIcon), { class: "h-6 w-6 text-purple-500" }),
                    createVNode("p", { class: "text-sm text-gray-500" }, "Total Views")
                  ]),
                  createVNode("p", { class: "text-2xl font-bold text-gray-800" }, toDisplayString(__props.totalViews), 1)
                ])
              ]),
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                createVNode("div", { class: "p-6 bg-white rounded-lg shadow-lg" }, [
                  createVNode("h3", { class: "text-lg font-semibold text-gray-800" }, "Users Per Day of the Week"),
                  createVNode("canvas", {
                    id: "usersChart",
                    height: "200"
                  })
                ]),
                createVNode("div", { class: "p-6 bg-white rounded-lg shadow-lg" }, [
                  createVNode("h3", { class: "text-lg font-semibold text-gray-800" }, "Recipe Views Per Day of the Week"),
                  createVNode("canvas", {
                    id: "viewsChart",
                    height: "200"
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
