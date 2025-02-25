<template>
  <footer class="bg-yellow-300 text-black font-sans border-t border-gray-300">
    <div class="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center h-full text-lg">
      <!-- Logo Section -->
      <a href="#" class="flex items-center space-x-4 font-bold">
        <img :src="logo" alt="Kusina Delights Logo" class="h-20 w-auto" />
        <span class="text-xl">Kusina Delights</span>
      </a>
      
      <!-- Social Links Section -->
      <div class="flex flex-col items-center md:items-start">
        <h2 class="font-bold text-lg mb-2">Our Socials</h2>
        <div class="flex space-x-4">
          <SocialIcon icon="facebook-f" link="https://facebook.com" ariaLabel="Visit our Facebook page" />
          <SocialIcon icon="twitter" link="https://twitter.com" ariaLabel="Visit our Twitter page" />
          <SocialIcon icon="youtube" link="https://youtube.com" ariaLabel="Visit our YouTube channel" />
          <SocialIcon icon="pinterest" link="https://pinterest.com" ariaLabel="Visit our Pinterest page" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialIcon from './SocialIcon.vue'; // Import the SocialIcon component

export default {
  components: {
    SocialIcon,
  },
  data() {
    return {
      logo: '/storage/logo3.png', // Adjust this based on your public path
    };
  },
};
</script>
