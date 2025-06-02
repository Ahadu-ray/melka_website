<script lang="ts">
import SectorHomeGridItem from './single_items/SectorHomeGridItem.vue'
import sectors from '../data/sectors'

export default {
  components: { SectorHomeGridItem },

  data: () => {
    return {
      // Get first 3 sectors for homepage display
      sectors: sectors,
    }
  },
}
</script>

<template>
  <!-- Only show title when not on homepage -->
  <div v-if="!$route.path.includes('home')" class="text-center mb-12 mt-12">
    <h2 class="font-general-semibold text-3xl font-bold text-custom-dark dark:text-white mb-4">
      Sector
    </h2>
  </div>

  <!-- sectors Grid -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-7xl px-4">
    <SectorHomeGridItem v-for="sector in sectors" :key="sector.id" :sector="sector" />
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
