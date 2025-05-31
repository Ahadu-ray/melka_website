<template>
  <header class="bg-black absolute top-0 left-0 w-full z-10 py-4">
    <nav class="container mx-auto px-4 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <img src="../../assets/logo.png" alt="JaRcoo Logo" class="w-20 h-20" />
      </div>

      <div class="hidden md:flex space-x-8">
        <router-link
          to="/"
          class="text-white hover:text-gray-300 transition-colors duration-300 font-inter"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="text-white hover:text-gray-300 transition-colors duration-300 font-inter"
          >About</router-link
        >
        <router-link
          to="/services"
          class="text-white hover:text-gray-300 transition-colors duration-300 font-inter"
          >Services</router-link
        >
        <router-link
          to="/publications"
          class="text-white hover:text-gray-300 transition-colors duration-300 font-inter"
          >Publications</router-link
        >
        <router-link
          to="/work-with-us"
          class="text-white hover:text-gray-300 transition-colors duration-300 font-inter"
          >Work with us</router-link
        >
        <router-link
          to="/contact"
          class="text-white hover:text-gray-300 transition-colors duration-300 font-inter"
          >Contact</router-link
        >
      </div>

      <button @click="toggleMobileMenu" class="md:hidden text-white focus:outline-none">
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-4 6h4"
          ></path>
        </svg>
      </button>
    </nav>

    <transition name="slide-fade">
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 z-20"
      >
        <button
          @click="toggleMobileMenu"
          class="absolute top-4 right-4 text-white focus:outline-none"
        >
          <svg
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <router-link
          @click="toggleMobileMenu"
          to="/"
          class="text-white text-3xl font-inter hover:text-gray-300 transition-colors duration-300"
          >Home</router-link
        >
        <router-link
          @click="toggleMobileMenu"
          to="/about"
          class="text-white text-3xl font-inter hover:text-gray-300 transition-colors duration-300"
          >About</router-link
        >
        <router-link
          @click="toggleMobileMenu"
          to="/services"
          class="text-white text-3xl font-inter hover:text-gray-300 transition-colors duration-300"
          >Services</router-link
        >
        <router-link
          @click="toggleMobileMenu"
          to="/publications"
          class="text-white text-3xl font-inter hover:text-gray-300 transition-colors duration-300"
          >Publications</router-link
        >
        <router-link
          @click="toggleMobileMenu"
          to="/work-with-us"
          class="text-white text-3xl font-inter hover:text-gray-300 transition-colors duration-300"
          >Work with us</router-link
        >
        <router-link
          @click="toggleMobileMenu"
          to="/contact"
          class="text-white text-3xl font-inter hover:text-gray-300 transition-colors duration-300"
          >Contact</router-link
        >
      </div>
    </transition>
  </header>
</template>

<script lang="ts">
export default {
  name: 'AppHeader',
  data() {
    return {
      isMobileMenuOpen: false,
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
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
