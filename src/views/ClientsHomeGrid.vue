<script lang="ts">
import ClientHomeGridItem from './single_items/ClientHomeGridItem.vue'
import clients from '../data/clients'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import SwiperCore from 'swiper'
SwiperCore.use([Autoplay])
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

export default {
  components: { ClientHomeGridItem, Swiper, SwiperSlide },

  data: () => {
    return {
      // Get first 3 clients for homepage display
      clients: clients,
    }
  },
}
</script>

<template>
  <!-- Only show title when not on homepage -->
  <div v-if="!$route.path.includes('home')" class="text-center mb-12 mt-12">
    <h2 class="font-general-semibold text-3xl font-bold text-custom-dark dark:text-white mb-4">
      Our Clients
    </h2>
  </div>

  <!-- clients Grid -->
  <div class="max-w-7xl mx-auto px-4">
    <Swiper
      :slides-per-view="4"
      :space-between="24"
      :slides-per-group="1"
      :loop="true"
      :grab-cursor="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      class="my-8"
    >
      <SwiperSlide v-for="client in clients" :key="client.id">
        <ClientHomeGridItem :client="client" />
      </SwiperSlide>
    </Swiper>
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
