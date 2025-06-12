<template>
  <header class="bg-white absolute top-0 left-0 w-full z-10 py-1 shadow-lg">
    <nav class="container mx-auto px-4 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <img src="../../assets/logo.png" alt="JaRcoo Logo" class="w-20 h-20" />
      </div>

      <div class="hidden md:flex space-x-8">
        <router-link to="/" class="hover:text-gray-300 transition-colors duration-300 font-inter"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="hover:text-gray-300 transition-colors duration-300 font-inter"
          >About</router-link
        >
        <div class="" @mouseleave="showProductDropdown = false">
          <div
            class="green  hover:text-gray-300 transition-colors duration-300 font-inter"
            @click="showProductDropdown = !showProductDropdown"
            aria-label="Services"
          >
            Services
          </div>

          <div
            v-if="showProductDropdown"
            class="bg-white flex flex-col items-start sm:absolute w-72 bg-app-blue shadow-md rounded-md pr-5 pl-2 z-50"
          >
            <router-link
              to="/services/data"
              class="font-general-medium text-left block hover:text-gold dark:hover:text-gold py-1"
              @click="showProductDropdown = false"
            >
              Data Collection
            </router-link>
            <router-link
              to="/services/mel"
              class="font-general-medium text-left block hover:text-gold dark:hover:text-gold py-1"
              @click="showProductDropdown = false"
            >
              Monitoring and Evaluation
            </router-link>
            <router-link
              to="/services/tech"
              class="font-general-medium block hover:text-gold dark:hover:text-gold py-1"
              @click="showProductDropdown = false"
            >
              Tech Support
            </router-link>
          </div>
        </div>
        <router-link
          to="/publications"
          class="hover:text-gray-300 transition-colors duration-300 font-inter"
          >Publications</router-link
        >
        <router-link
          to="/work-with-us"
          class="hover:text-gray-300 transition-colors duration-300 font-inter"
          >Work with us</router-link
        >
        <router-link
          to="/contact"
          class="hover:text-gray-300 transition-colors duration-300 font-inter"
          >Contact</router-link
        >
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: 'AppHeader',
  data() {
    return {
      showProductDropdown: false,
    }
  },
}
</script>

<style scoped>
/* Add Inter font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

.font-inter {
  font-family: 'Inter', sans-serif;
}

/* Transition for mobile menu */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
