<script setup>
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import { ref } from 'vue';

const products = ref([
  {
    img: '123',
    title: '456',
    price: '789'
  },
  {
    img: '123',
    title: '456',
    price: '789'
  },
  {
    img: '123',
    title: '456',
    price: '789'
  },
  {
    img: '123',
    title: '456',
    price: '789'
  }
]);

</script>

<template>
  <div id="HomeView">
    <Carousel
      :value="products"
      :numVisible="1"
      :numScroll="1"
      circular
      :pt="{
        root: {
          class: 'h-[500px]'
        },
        contentContainer: {
          class: 'h-[100%] justify-between'
        },
        content: {
          class: 'h-[450px]'
        },
        viewport: {
          class: 'h-[100%]'
        },
        itemList: {
          class: 'h-[100%]'
        },

      }"
    >
      <template #item="item">
        <div class="border border-surface-200 dark:border-surface-700 rounded h-[calc(100%-16px)] m-2 p-4">
          <div class="mb-4">
            <div class="relative mx-auto">
              <!-- <img :src="'https://primefaces.org/cdn/primevue/images/product/' + item.data.image" :alt="item.data.name" class="w-full rounded" />
              <Tag :value="item.data.inventoryStatus" :severity="getSeverity(item.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/> -->
            </div>
          </div>
          <div class="mb-4 font-medium">{{ item.data.title }}</div>
          <div class="flex justify-between items-center">
            <div class="mt-0 font-semibold text-xl">${{ item.data.price }}</div>
            <span>
              <Button icon="pi pi-heart" severity="secondary" outlined />
              <Button icon="pi pi-shopping-cart" class="ml-2"/>
            </span>
          </div>
        </div>
      </template>
    </Carousel>


    Home
  </div>
</template>
