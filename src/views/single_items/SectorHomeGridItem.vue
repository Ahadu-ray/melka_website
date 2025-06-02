<script lang="ts">
export default {
  props: ['sector'],
  computed: {
    // Get first 3 items for preview
  },
}
</script>

<template>
  <div
    class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
  >
    <!-- sector Header with Icon -->
    <div
      class="h-32 bg-gradient-to-r from-custom-dark to-custom-dark-light flex items-center justify-center relative overflow-hidden"
    >
      <!-- Decorative circles in background -->
      <div class="absolute top-0 left-0 w-24 h-24 rounded-full bg-gold/10 -ml-12 -mt-12"></div>
      <div class="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-gold/10 -mr-16 -mb-16"></div>

      <!-- sector Icon -->
      <div class="relative z-10">
        <h3 class="font-bold text-xl text-center">{{ sector.title }}</h3>
      </div>
    </div>

    <!-- sector Content -->
    <!-- <div class="p-6">
      <router-link
        :to="`/sectors#${sector.title.toLowerCase().replace(/\s+/g, '-')}`"
        class="inline-flex items-center font-medium hover:/80 transition-colors"
      >
        View details
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 ml-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </router-link>
    </div> -->
  </div>
</template>

<style scoped>
.bg-custom-dark {
  background-color: rgb(24 32 48 / var(--tw-bg-opacity, 1));
}

.bg-custom-dark-light {
  background-color: rgb(34 45 65 / var(--tw-bg-opacity, 1));
}

.text-custom-dark {
  color: rgb(24 32 48 / var(--tw-text-opacity, 1));
}

.bg-gold {
  background-color: #a4895a;
}

.rounded-xl {
  border-radius: 1rem;
}
</style>
