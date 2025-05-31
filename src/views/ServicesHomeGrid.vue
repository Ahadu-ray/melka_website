<script lang="ts">
import ServicesHomeGridItem from './ServicesHomeGridItem.vue'
import services from '../data/services'

export default {
  components: { ServicesHomeGridItem },

  data: () => {
    return {
      // Get first 3 services for homepage display
      services: services.slice(0, 3),
    }
  },
}
</script>

<template>
  <!-- Only show title when not on homepage -->
  <div v-if="!$route.path.includes('home')" class="text-center mb-12">
    <h2 class="font-general-semibold text-3xl font-bold text-custom-dark dark:text-white mb-4">
      Services
    </h2>
  </div>

  <!-- Services Grid -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-7xl px-4">
    <ServicesHomeGridItem v-for="service in services" :key="service.id" :service="service" />
  </div>
</template>

<style scoped>
.bg-custom-dark {
  background-color: rgb(24 32 48 / var(--tw-bg-opacity, 1));
}

.text-custom-dark {
  color: rgb(24 32 48 / var(--tw-text-opacity, 1));
}

.text-gold {
  color: #a4895a;
}

.bg-gold {
  background-color: #a4895a;
}

.rounded-xl {
  border-radius: 1rem;
}
</style>
