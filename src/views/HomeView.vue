<script setup>
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import { ref } from 'vue';
import carousel1 from '@/assets/carousels/carousel1.jpg';
import carousel2 from '@/assets/carousels/carousel2.jpg';

const products = ref([
  {
    img: carousel1,
    title: '全新夢幻藍色系列即將登場',
    price: '',
  },
  {
    img: carousel2,
    title: '粉色來襲！',
    price: ''
  },
  // {
  //   img: '123',
  //   title: '456',
  //   price: '789'
  // },
  // {
  //   img: '123',
  //   title: '456',
  //   price: '789'
  // }
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
        <div class="border border-surface-200 dark:border-surface-700 rounded-none h-[calc(100%-16px)] my-2 bg-gray-400">
          <div class="h-full">
            <div class="relative mx-auto h-full">
              <img
                :src=item.data.img
                :alt="item.data.title"
                class="w-full h-full object-cover"
              />
              <div class="absolute right-20 bottom-20 bg-alto-50 bg-opacity-80 px-[40px] py-[20px] hover:bg-opacity-100 transition-all">
                <div
                  class="mb-4 text-xl font-bold text-pickled-bluewood-600 text-shadow-md"
                  style="text-shadow: 2px 2px 4px rgba(200, 200, 200, 0.5);"
                >
                  {{ item.data.title }}
                </div>
                <div class="flex justify-between items-center">
                  <div
                    v-if="item.data.price !== ''"
                    class="mt-0 font-semibold text-xl"
                  >
                    ${{ item.data.price }}
                  </div>
                  <span>
                    <Button
                      icon="pi pi-heart"
                      label="加入追蹤"
                      severity="secondary"
                      outlined
                    />
                    <Button
                      icon="pi pi-shopping-cart"
                      label="立即購買"
                      class="ml-2"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Carousel>


    Home
  </div>
</template>
