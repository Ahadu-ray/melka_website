<template>
  <div class="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
  
  >
    <div
      class="relative z-10 text-center max-w-4xl mx-auto px-4 py-8 rounded-lg shadow-lg bg-white"
    >
      <p class="text-xl md:text-3xl font-bold leading-tight mb-6 font-inter">
        Monitoring Evaluation Learning Knowledge and Accountability (MELKA) Consulting Service (MCS)
        is a private consultancy firm based in Ethiopia.
      </p>
      <p class="text-md md:text-xl leading-relaxed font-inter">
        We specialize in data collection, monitoring, evaluation and Learning (MEL), and technical
        assistance for development and humanitarian programming across Ethiopia.
      </p>
    </div>
  </div>
  <ServicesHomeGrid />
  <SectorsHomeGrid />
  <ClientsHomeGrid />
</template>

<script lang="ts">
import backgroundImage from '../data/assets';
import ClientsHomeGrid from './ClientsHomeGrid.vue'
import SectorsHomeGrid from './SectorsHomeGrid.vue'
import ServicesHomeGrid from './ServicesHomeGrid.vue'

export default {
  name: 'HomePage',
  components: {
    ServicesHomeGrid,
    SectorsHomeGrid,
    ClientsHomeGrid,
  },
    data: () => {
    return {
      theme: "",
      backgroundImage: backgroundImage,
    };
  },

}
</script>

<style scoped></style>
