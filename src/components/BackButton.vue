<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section>
    <div class="py-6 px-6 w-screen bg-green-50">
      <RouterLink class="text-green-500 hover:text-green-600 flex items-center" to="/jobs">
        <i class="pi pi-arrow-circle-left mr-3"></i> Back to Job Listings
      </RouterLink>
    </div>
  </section>
</template>
