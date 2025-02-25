import { L as Layout } from "./frontend-CWpoDOF_.js";
import axios from "axios";
import Swal from "sweetalert2";
import { resolveComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, createCommentVNode, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "lodash";
const _sfc_main = {
  components: { Layout },
  props: {
    recipe: Object,
    viewCount: Number,
    user: Object
    // Pass authenticated user from the controller
  },
  data() {
    return {
      rating: 0,
      reviewText: "",
      userHasReviewed: false,
      // Check if the user has already reviewed
      editingReview: null,
      editReviewText: "",
      editRating: 0
    };
  },
  mounted() {
    this.userHasReviewed = this.recipe.reviews.some(
      (review) => {
        var _a;
        return review.user.id === ((_a = this.user) == null ? void 0 : _a.id);
      }
    );
  },
  methods: {
    setRating(star) {
      this.rating = star;
    },
    async submitReview() {
      if (!this.user) {
        alert("You must be logged in to submit a review.");
        return;
      }
      try {
        const response = await axios.post(`/api/recipes/${this.recipe.RecipeID}/reviews`, {
          review: this.reviewText,
          star: this.rating,
          user_id: this.user.id
          // Make sure to send the user.id here
        });
        this.recipe.reviews.push(response.data);
        this.reviewText = "";
        this.rating = 0;
        this.userHasReviewed = true;
        location.reload();
      } catch (error) {
        console.error("Error submitting review:", error);
      }
    },
    // Updated delete method with SweetAlert
    async deleteReview(reviewId) {
      if (!reviewId) {
        console.error("Review ID is undefined.");
        return;
      }
      try {
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
          iconColor: "rgba(255, 219, 99, 1)",
          // Use golden yellow for icon color for consistency
          customClass: {
            popup: "swal-popup"
            // Add a custom class for further styling if needed
          }
        });
        if (result.isConfirmed) {
          const response = await axios.delete(`/api/recipes/${this.recipe.RecipeID}/reviews/${reviewId}`);
          this.recipe.reviews = this.recipe.reviews.filter((review) => review.ReviewsID !== reviewId);
          location.reload();
        }
      } catch (error) {
        console.error("Error deleting review:", error);
      }
    },
    startEditing(review) {
      this.editingReview = review;
      this.editReviewText = review.Review;
      this.editRating = review.Star;
    },
    cancelEdit() {
      this.editingReview = null;
      this.editReviewText = "";
      this.editRating = 0;
    },
    async saveEdit() {
      if (!this.editingReview) return;
      try {
        const response = await axios.put(
          `/api/recipes/${this.recipe.RecipeID}/reviews/${this.editingReview.ReviewsID}`,
          {
            review: this.editReviewText,
            star: this.editRating
          }
        );
        Swal.fire({
          title: "Success!",
          text: "Review updated successfully",
          icon: "success",
          confirmButtonColor: "rgba(204, 162, 35, 1)"
        });
        const index = this.recipe.reviews.findIndex(
          (r) => r.ReviewsID === this.editingReview.ReviewsID
        );
        if (index !== -1) {
          this.recipe.reviews[index] = response.data;
        }
        this.cancelEdit();
        location.reload();
      } catch (error) {
        console.error("Error updating review:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to update review",
          icon: "error",
          confirmButtonColor: "rgba(204, 162, 35, 1)"
        });
      }
    },
    getEmbedUrl(url) {
      if (!url) return "";
      let videoId = "";
      if (url.includes("youtube.com/watch?v=")) {
        videoId = url.split("v=")[1];
      } else if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1];
      }
      if (videoId.includes("&")) {
        videoId = videoId.split("&")[0];
      }
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  _push(ssrRenderComponent(_component_Layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b, _c, _d;
      if (_push2) {
        _push2(`<div class="relative h-[362px]" data-v-b3bfe26c${_scopeId}><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ backgroundImage: "url('/storage/" + $props.recipe.RecipePhoto + "')", filter: "brightness(0.7)" })}" data-v-b3bfe26c${_scopeId}></div><div class="flex items-center justify-center h-full relative" data-v-b3bfe26c${_scopeId}><p class="text-white text-center px-4 text-large font-bold drop-shadow-xl white-shadow" data-v-b3bfe26c${_scopeId}>${ssrInterpolate($props.recipe.RecipeTitle)}</p><div class="absolute bottom-4 right-4 text-white text-lg bg-black opacity-70 px-4 py-2 rounded-full" data-v-b3bfe26c${_scopeId}> Views: ${ssrInterpolate($props.viewCount)}</div></div></div><div class="mx-auto text-left max-w-4xl my-4 text-small text-black-100 space-y-2" data-v-b3bfe26c${_scopeId}><div data-v-b3bfe26c${_scopeId}><p class="text-small font-bold" data-v-b3bfe26c${_scopeId}>Ingredients</p><ul class="list-disc pl-5" data-v-b3bfe26c${_scopeId}><!--[-->`);
        ssrRenderList($props.recipe.Ingredients.split("\n"), (ingredient, index) => {
          _push2(`<li data-v-b3bfe26c${_scopeId}>${ssrInterpolate(ingredient.trim())}</li>`);
        });
        _push2(`<!--]--></ul></div><br data-v-b3bfe26c${_scopeId}><div data-v-b3bfe26c${_scopeId}><p class="text-small font-bold" data-v-b3bfe26c${_scopeId}>How To Prepare</p><ol class="list-decimal pl-5 space-y-2 text-justify" data-v-b3bfe26c${_scopeId}><!--[-->`);
        ssrRenderList($props.recipe.Instructions.split("\n"), (step, index) => {
          _push2(`<li data-v-b3bfe26c${_scopeId}>${ssrInterpolate(step.trim())}</li>`);
        });
        _push2(`<!--]--></ol></div><br data-v-b3bfe26c${_scopeId}><div data-v-b3bfe26c${_scopeId}><p class="font-bold space-y-2" data-v-b3bfe26c${_scopeId}>Additional Information:</p><p data-v-b3bfe26c${_scopeId}><strong data-v-b3bfe26c${_scopeId}>Preparation Time:</strong> ${ssrInterpolate($props.recipe.Preparation || "N/A")} minutes</p><p data-v-b3bfe26c${_scopeId}><strong data-v-b3bfe26c${_scopeId}>Cooking Time:</strong> ${ssrInterpolate($props.recipe.CookingTime || "N/A")} minutes</p><p data-v-b3bfe26c${_scopeId}><strong data-v-b3bfe26c${_scopeId}>Difficulty:</strong> ${ssrInterpolate($props.recipe.Difficulty || "N/A")}</p><p data-v-b3bfe26c${_scopeId}><strong data-v-b3bfe26c${_scopeId}>Servings:</strong> ${ssrInterpolate($props.recipe.Servings || "N/A")}</p><p data-v-b3bfe26c${_scopeId}><strong data-v-b3bfe26c${_scopeId}>Recipe By:</strong> ${ssrInterpolate(((_b = (_a = $props.recipe.chef) == null ? void 0 : _a.user) == null ? void 0 : _b.name) || "Unknown")}</p></div><br data-v-b3bfe26c${_scopeId}><div data-v-b3bfe26c${_scopeId}><p class="font-bold" data-v-b3bfe26c${_scopeId}>Description</p><p class="text-justify" data-v-b3bfe26c${_scopeId}>${ssrInterpolate($props.recipe.Description)}</p></div></div>`);
        if ($props.recipe.VideoLink) {
          _push2(`<div class="mx-auto text-left max-w-4xl my-8" data-v-b3bfe26c${_scopeId}><p class="text-small font-bold mb-4" data-v-b3bfe26c${_scopeId}>Video Tutorial</p><div class="aspect-w-16 aspect-h-9" data-v-b3bfe26c${_scopeId}><iframe${ssrRenderAttr("src", $options.getEmbedUrl($props.recipe.VideoLink))} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full h-[480px] rounded-lg" data-v-b3bfe26c${_scopeId}></iframe></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="p-6 bg-gray-100 rounded-lg max-w-6xl mx-auto space-y-4 mt-8" data-v-b3bfe26c${_scopeId}><h2 class="text-2xl font-bold" data-v-b3bfe26c${_scopeId}>Reviews</h2>`);
        if (!$props.user) {
          _push2(`<div class="inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center" data-v-b3bfe26c${_scopeId}><p class="text-white text-center text-lg font-bold" data-v-b3bfe26c${_scopeId}> Log in to view or write a review. </p></div>`);
        } else {
          _push2(`<div data-v-b3bfe26c${_scopeId}>`);
          if ($props.recipe.reviews.length === 0) {
            _push2(`<div class="bg-white p-4 text-center text-gray-600 font-semibold" data-v-b3bfe26c${_scopeId}> No reviews yet. </div>`);
          } else {
            _push2(`<div class="bg-gray-200 rounded-lg p-4 space-y-4" data-v-b3bfe26c${_scopeId}><!--[-->`);
            ssrRenderList($props.recipe.reviews, (review, index) => {
              _push2(`<div class="bg-white rounded-lg p-4 flex justify-between items-start shadow-sm" data-v-b3bfe26c${_scopeId}><div data-v-b3bfe26c${_scopeId}><p class="flex items-center text-gray-700 font-bold" data-v-b3bfe26c${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="text-gray-500" data-v-b3bfe26c${_scopeId}><circle cx="12" cy="8" r="4" class="fill-current text-gray-600" data-v-b3bfe26c${_scopeId}></circle><path d="M12 14c-4 0-6 2-6 3v1h12v-1c0-1-2-3-6-3z" class="fill-current text-gray-600" data-v-b3bfe26c${_scopeId}></path></svg> ${ssrInterpolate(review.user.name || "Anonymous")}</p><p class="text-gray-600 mt-1" data-v-b3bfe26c${_scopeId}><i data-v-b3bfe26c${_scopeId}>${ssrInterpolate(review.Review)}</i></p></div><div class="flex flex-col items-center space-y-2" data-v-b3bfe26c${_scopeId}><div class="flex items-center space-x-1" data-v-b3bfe26c${_scopeId}><!--[-->`);
              ssrRenderList(5, (star) => {
                _push2(`<svg class="${ssrRenderClass({
                  "fill-yellow-500": review.Star >= star,
                  "fill-gray-300": review.Star < star,
                  "cursor-pointer": true,
                  "hover:fill-yellow-400": true,
                  "transition-colors": true
                })}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" data-v-b3bfe26c${_scopeId}><path${ssrRenderAttr("d", review.Star >= star ? "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" : "M12 15.4l3.76 2.28-1-4.17 3.27-2.84-4.28-.38L12 4.75l-1.75 5.68-4.28.38 3.27 2.84-1 4.17z")} data-v-b3bfe26c${_scopeId}></path></svg>`);
              });
              _push2(`<!--]--></div><div class="flex justify-center space-x-2" data-v-b3bfe26c${_scopeId}>`);
              if (review.user.id === $props.user.id) {
                _push2(`<button class="bg-blue-400 text-white font-semibold py-1 px-3 rounded-lg hover:bg-blue-500 text-sm" data-v-b3bfe26c${_scopeId}> Edit </button>`);
              } else {
                _push2(`<!---->`);
              }
              if (review.user.id === $props.user.id) {
                _push2(`<button class="bg-red-400 text-white font-semibold py-1 px-3 rounded-lg hover:bg-red-500 text-sm" data-v-b3bfe26c${_scopeId}> Delete </button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div>`);
            });
            _push2(`<!--]--></div>`);
          }
          _push2(`</div>`);
        }
        if (!$data.userHasReviewed) {
          _push2(`<div class="bg-gray-200 rounded-lg p-4 space-y-3" data-v-b3bfe26c${_scopeId}><textarea placeholder="Review*" class="w-full p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none text-small" data-v-b3bfe26c${_scopeId}>${ssrInterpolate($data.reviewText)}</textarea><div class="flex items-center space-x-1 text-2xl" data-v-b3bfe26c${_scopeId}><p data-v-b3bfe26c${_scopeId}>Rate:</p><!--[-->`);
          ssrRenderList(5, (star) => {
            _push2(`<svg class="${ssrRenderClass({
              "fill-yellow-500": $data.rating >= star,
              "fill-gray-300": $data.rating < star,
              "cursor-pointer": true,
              "hover:fill-yellow-400": true,
              "transition-colors": true
            })}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" data-v-b3bfe26c${_scopeId}><path${ssrRenderAttr("d", $data.rating >= star ? "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" : "M12 15.4l3.76 2.28-1-4.17 3.27-2.84-4.28-.38L12 4.75l-1.75 5.68-4.28.38 3.27 2.84-1 4.17z")} data-v-b3bfe26c${_scopeId}></path></svg>`);
          });
          _push2(`<!--]--></div><div class="flex justify-start space-x-2 mt-4" data-v-b3bfe26c${_scopeId}><button class="bg-green-400 text-white font-semibold py-2 px-36 rounded-2xl hover:bg-green-500 text-small" data-v-b3bfe26c${_scopeId}> Submit Review </button></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
        if ($data.editingReview) {
          _push2(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" data-v-b3bfe26c${_scopeId}><div class="bg-white p-6 rounded-lg w-96" data-v-b3bfe26c${_scopeId}><h3 class="text-lg font-bold mb-4" data-v-b3bfe26c${_scopeId}>Edit Review</h3><textarea class="w-full p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none text-small mb-4" data-v-b3bfe26c${_scopeId}>${ssrInterpolate($data.editReviewText)}</textarea><div class="flex items-center space-x-1 text-2xl mb-4" data-v-b3bfe26c${_scopeId}><p data-v-b3bfe26c${_scopeId}>Rate:</p><!--[-->`);
          ssrRenderList(5, (star) => {
            _push2(`<svg class="${ssrRenderClass({
              "fill-yellow-500": $data.editRating >= star,
              "fill-gray-300": $data.editRating < star,
              "cursor-pointer": true,
              "hover:fill-yellow-400": true,
              "transition-colors": true
            })}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" data-v-b3bfe26c${_scopeId}><path${ssrRenderAttr("d", $data.editRating >= star ? "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" : "M12 15.4l3.76 2.28-1-4.17 3.27-2.84-4.28-.38L12 4.75l-1.75 5.68-4.28.38 3.27 2.84-1 4.17z")} data-v-b3bfe26c${_scopeId}></path></svg>`);
          });
          _push2(`<!--]--></div><div class="flex justify-end space-x-2" data-v-b3bfe26c${_scopeId}><button class="bg-gray-400 text-white px-4 py-2 rounded" data-v-b3bfe26c${_scopeId}>Cancel</button><button class="bg-green-400 text-white px-4 py-2 rounded" data-v-b3bfe26c${_scopeId}>Save</button></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode("div", { class: "relative h-[362px]" }, [
            createVNode("div", {
              class: "absolute inset-0 bg-cover bg-center",
              style: { backgroundImage: "url('/storage/" + $props.recipe.RecipePhoto + "')", filter: "brightness(0.7)" }
            }, null, 4),
            createVNode("div", { class: "flex items-center justify-center h-full relative" }, [
              createVNode("p", { class: "text-white text-center px-4 text-large font-bold drop-shadow-xl white-shadow" }, toDisplayString($props.recipe.RecipeTitle), 1),
              createVNode("div", { class: "absolute bottom-4 right-4 text-white text-lg bg-black opacity-70 px-4 py-2 rounded-full" }, " Views: " + toDisplayString($props.viewCount), 1)
            ])
          ]),
          createVNode("div", { class: "mx-auto text-left max-w-4xl my-4 text-small text-black-100 space-y-2" }, [
            createVNode("div", null, [
              createVNode("p", { class: "text-small font-bold" }, "Ingredients"),
              createVNode("ul", { class: "list-disc pl-5" }, [
                (openBlock(true), createBlock(Fragment, null, renderList($props.recipe.Ingredients.split("\n"), (ingredient, index) => {
                  return openBlock(), createBlock("li", { key: index }, toDisplayString(ingredient.trim()), 1);
                }), 128))
              ])
            ]),
            createVNode("br"),
            createVNode("div", null, [
              createVNode("p", { class: "text-small font-bold" }, "How To Prepare"),
              createVNode("ol", { class: "list-decimal pl-5 space-y-2 text-justify" }, [
                (openBlock(true), createBlock(Fragment, null, renderList($props.recipe.Instructions.split("\n"), (step, index) => {
                  return openBlock(), createBlock("li", { key: index }, toDisplayString(step.trim()), 1);
                }), 128))
              ])
            ]),
            createVNode("br"),
            createVNode("div", null, [
              createVNode("p", { class: "font-bold space-y-2" }, "Additional Information:"),
              createVNode("p", null, [
                createVNode("strong", null, "Preparation Time:"),
                createTextVNode(" " + toDisplayString($props.recipe.Preparation || "N/A") + " minutes", 1)
              ]),
              createVNode("p", null, [
                createVNode("strong", null, "Cooking Time:"),
                createTextVNode(" " + toDisplayString($props.recipe.CookingTime || "N/A") + " minutes", 1)
              ]),
              createVNode("p", null, [
                createVNode("strong", null, "Difficulty:"),
                createTextVNode(" " + toDisplayString($props.recipe.Difficulty || "N/A"), 1)
              ]),
              createVNode("p", null, [
                createVNode("strong", null, "Servings:"),
                createTextVNode(" " + toDisplayString($props.recipe.Servings || "N/A"), 1)
              ]),
              createVNode("p", null, [
                createVNode("strong", null, "Recipe By:"),
                createTextVNode(" " + toDisplayString(((_d = (_c = $props.recipe.chef) == null ? void 0 : _c.user) == null ? void 0 : _d.name) || "Unknown"), 1)
              ])
            ]),
            createVNode("br"),
            createVNode("div", null, [
              createVNode("p", { class: "font-bold" }, "Description"),
              createVNode("p", { class: "text-justify" }, toDisplayString($props.recipe.Description), 1)
            ])
          ]),
          $props.recipe.VideoLink ? (openBlock(), createBlock("div", {
            key: 0,
            class: "mx-auto text-left max-w-4xl my-8"
          }, [
            createVNode("p", { class: "text-small font-bold mb-4" }, "Video Tutorial"),
            createVNode("div", { class: "aspect-w-16 aspect-h-9" }, [
              createVNode("iframe", {
                src: $options.getEmbedUrl($props.recipe.VideoLink),
                frameborder: "0",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowfullscreen: "",
                class: "w-full h-[480px] rounded-lg"
              }, null, 8, ["src"])
            ])
          ])) : createCommentVNode("", true),
          createVNode("div", { class: "p-6 bg-gray-100 rounded-lg max-w-6xl mx-auto space-y-4 mt-8" }, [
            createVNode("h2", { class: "text-2xl font-bold" }, "Reviews"),
            !$props.user ? (openBlock(), createBlock("div", {
              key: 0,
              class: "inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center"
            }, [
              createVNode("p", { class: "text-white text-center text-lg font-bold" }, " Log in to view or write a review. ")
            ])) : (openBlock(), createBlock("div", { key: 1 }, [
              $props.recipe.reviews.length === 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "bg-white p-4 text-center text-gray-600 font-semibold"
              }, " No reviews yet. ")) : (openBlock(), createBlock("div", {
                key: 1,
                class: "bg-gray-200 rounded-lg p-4 space-y-4"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList($props.recipe.reviews, (review, index) => {
                  return openBlock(), createBlock("div", {
                    key: index,
                    class: "bg-white rounded-lg p-4 flex justify-between items-start shadow-sm"
                  }, [
                    createVNode("div", null, [
                      createVNode("p", { class: "flex items-center text-gray-700 font-bold" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24",
                          width: "24",
                          height: "24",
                          class: "text-gray-500"
                        }, [
                          createVNode("circle", {
                            cx: "12",
                            cy: "8",
                            r: "4",
                            class: "fill-current text-gray-600"
                          }),
                          createVNode("path", {
                            d: "M12 14c-4 0-6 2-6 3v1h12v-1c0-1-2-3-6-3z",
                            class: "fill-current text-gray-600"
                          })
                        ])),
                        createTextVNode(" " + toDisplayString(review.user.name || "Anonymous"), 1)
                      ]),
                      createVNode("p", { class: "text-gray-600 mt-1" }, [
                        createVNode("i", null, toDisplayString(review.Review), 1)
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col items-center space-y-2" }, [
                      createVNode("div", { class: "flex items-center space-x-1" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(5, (star) => {
                          return createVNode("svg", {
                            key: star,
                            class: {
                              "fill-yellow-500": review.Star >= star,
                              "fill-gray-300": review.Star < star,
                              "cursor-pointer": true,
                              "hover:fill-yellow-400": true,
                              "transition-colors": true
                            },
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "24",
                            height: "24"
                          }, [
                            createVNode("path", {
                              d: review.Star >= star ? "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" : "M12 15.4l3.76 2.28-1-4.17 3.27-2.84-4.28-.38L12 4.75l-1.75 5.68-4.28.38 3.27 2.84-1 4.17z"
                            }, null, 8, ["d"])
                          ], 2);
                        }), 64))
                      ]),
                      createVNode("div", { class: "flex justify-center space-x-2" }, [
                        review.user.id === $props.user.id ? (openBlock(), createBlock("button", {
                          key: 0,
                          onClick: ($event) => $options.startEditing(review),
                          class: "bg-blue-400 text-white font-semibold py-1 px-3 rounded-lg hover:bg-blue-500 text-sm"
                        }, " Edit ", 8, ["onClick"])) : createCommentVNode("", true),
                        review.user.id === $props.user.id ? (openBlock(), createBlock("button", {
                          key: 1,
                          onClick: ($event) => $options.deleteReview(review.ReviewsID),
                          class: "bg-red-400 text-white font-semibold py-1 px-3 rounded-lg hover:bg-red-500 text-sm"
                        }, " Delete ", 8, ["onClick"])) : createCommentVNode("", true)
                      ])
                    ])
                  ]);
                }), 128))
              ]))
            ])),
            !$data.userHasReviewed ? (openBlock(), createBlock("div", {
              key: 2,
              class: "bg-gray-200 rounded-lg p-4 space-y-3"
            }, [
              withDirectives(createVNode("textarea", {
                "onUpdate:modelValue": ($event) => $data.reviewText = $event,
                placeholder: "Review*",
                class: "w-full p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none text-small"
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelText, $data.reviewText]
              ]),
              createVNode("div", { class: "flex items-center space-x-1 text-2xl" }, [
                createVNode("p", null, "Rate:"),
                (openBlock(), createBlock(Fragment, null, renderList(5, (star) => {
                  return createVNode("svg", {
                    key: star,
                    onClick: ($event) => $options.setRating(star),
                    class: {
                      "fill-yellow-500": $data.rating >= star,
                      "fill-gray-300": $data.rating < star,
                      "cursor-pointer": true,
                      "hover:fill-yellow-400": true,
                      "transition-colors": true
                    },
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "24",
                    height: "24"
                  }, [
                    createVNode("path", {
                      d: $data.rating >= star ? "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" : "M12 15.4l3.76 2.28-1-4.17 3.27-2.84-4.28-.38L12 4.75l-1.75 5.68-4.28.38 3.27 2.84-1 4.17z"
                    }, null, 8, ["d"])
                  ], 10, ["onClick"]);
                }), 64))
              ]),
              createVNode("div", { class: "flex justify-start space-x-2 mt-4" }, [
                createVNode("button", {
                  onClick: $options.submitReview,
                  class: "bg-green-400 text-white font-semibold py-2 px-36 rounded-2xl hover:bg-green-500 text-small"
                }, " Submit Review ", 8, ["onClick"])
              ])
            ])) : createCommentVNode("", true)
          ]),
          $data.editingReview ? (openBlock(), createBlock("div", {
            key: 1,
            class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          }, [
            createVNode("div", { class: "bg-white p-6 rounded-lg w-96" }, [
              createVNode("h3", { class: "text-lg font-bold mb-4" }, "Edit Review"),
              withDirectives(createVNode("textarea", {
                "onUpdate:modelValue": ($event) => $data.editReviewText = $event,
                class: "w-full p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none text-small mb-4"
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelText, $data.editReviewText]
              ]),
              createVNode("div", { class: "flex items-center space-x-1 text-2xl mb-4" }, [
                createVNode("p", null, "Rate:"),
                (openBlock(), createBlock(Fragment, null, renderList(5, (star) => {
                  return createVNode("svg", {
                    key: star,
                    onClick: ($event) => $data.editRating = star,
                    class: {
                      "fill-yellow-500": $data.editRating >= star,
                      "fill-gray-300": $data.editRating < star,
                      "cursor-pointer": true,
                      "hover:fill-yellow-400": true,
                      "transition-colors": true
                    },
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "24",
                    height: "24"
                  }, [
                    createVNode("path", {
                      d: $data.editRating >= star ? "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" : "M12 15.4l3.76 2.28-1-4.17 3.27-2.84-4.28-.38L12 4.75l-1.75 5.68-4.28.38 3.27 2.84-1 4.17z"
                    }, null, 8, ["d"])
                  ], 10, ["onClick"]);
                }), 64))
              ]),
              createVNode("div", { class: "flex justify-end space-x-2" }, [
                createVNode("button", {
                  onClick: $options.cancelEdit,
                  class: "bg-gray-400 text-white px-4 py-2 rounded"
                }, "Cancel", 8, ["onClick"]),
                createVNode("button", {
                  onClick: $options.saveEdit,
                  class: "bg-green-400 text-white px-4 py-2 rounded"
                }, "Save", 8, ["onClick"])
              ])
            ])
          ])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Webpages/ViewRecipe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ViewRecipe = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b3bfe26c"]]);
export {
  ViewRecipe as default
};
