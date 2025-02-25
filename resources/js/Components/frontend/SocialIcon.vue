<template>
  <div class="w-10 h-10 bg-yellow-100 rounded-md shadow-md flex items-center justify-center hover:bg-yellow-200 transition">
    <a 
      :href="link" 
      :aria-label="ariaLabel" 
      class="text-lg text-gray-800 hover:text-gray-900"
      :title="ariaLabel"
    >
      <i :class="`fab fa-${icon}`"></i>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: "#" // Default to "#" if no link is provided
    },
    ariaLabel: {
      type: String,
      default: "Social media icon" // Default label for accessibility
    }
  }
};
</script>
