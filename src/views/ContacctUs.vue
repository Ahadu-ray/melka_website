<template>
  <div class="max-w-6xl mx-auto p-6 space-y-12 py-36">
    <!-- Contact Info -->
    <div class="grid md:grid-cols-3 gap-8 text-center">
      <!-- Call Us -->
      <div>
        <h2 class="text-xl font-bold mb-2">Call Us</h2>
        <p>+251-115-577236 /59<br />+251-115-577276 /99</p>
      </div>

      <!-- Visit Our Office -->
      <div>
        <h2 class="text-xl font-bold mb-2">Visit Our Office</h2>
        <p>Old Airport area, behind the Seven Eleven Supermarket<br />Addis Ababa, Ethiopia</p>
      </div>
    </div>

    <hr class="my-6 border-gray-300" />

    <!-- Contact Form & Map -->
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Form -->
      <div>
        <h2 class="text-xl font-bold mb-4">Send us message.</h2>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label for="name" class="block font-medium">Name</label>
            <input v-model="form.name" id="name" type="text" class="w-full border rounded p-2" />
          </div>
          <div>
            <label for="email" class="block font-medium">Email</label>
            <input
              v-model="form.email"
              id="email"
              type="email"
              required
              class="w-full border rounded p-2"
            />
          </div>
          <div>
            <label for="message" class="block font-medium">Message</label>
            <textarea
              v-model="form.message"
              id="message"
              rows="4"
              class="w-full border rounded p-2"
            ></textarea>
          </div>
          <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Send
          </button>
        </form>
      </div>

      <!-- Google Map -->
      <div>
        <iframe
          loading="lazy"
          class="w-full h-80 rounded"
          src="https://maps.google.com/maps?q=JaRco%20Consulting%2C%20Old%20Airport%20Area%20Behind%20Switzerland%20Embassy%2C%20Addis%20Ababa&t=m&z=12&output=embed&iwloc=near"
          title="JaRco Consulting Map"
          aria-label="JaRco Consulting Map"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const handleSubmit = () => {
  // Replace this with real form handling logic (e.g., API call, EmailJS, Firebase)
  alert(`Message sent!\n\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`)

  // Reset form
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
/* Optional extra styles */
</style>
