<script setup>
import DefaultHeader from '@/components/DefaultHeader.vue';
</script>
<template>
  <div id="DefaultLayout" class="container h-screen">
    <DefaultHeader />
    <router-view />
  </div>
</template>
