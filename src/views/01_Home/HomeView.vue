<script setup>
import { ref, onMounted } from 'vue';
import Aos from 'aos';
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import Card from 'primevue/card';

import carousel1 from '@/assets/carousels/carousel1.jpg';
import carousel2 from '@/assets/carousels/carousel2.jpg';

import '../01_Home/HomeView.scss';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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

const categorys_data = ref([
  {
    category: '鉛筆',
    icon: 'pencil',
    id: '1',
  },
  {
    category: '原子筆',
    icon: 'pen-clip',
    id: '2',
  },
  {
    category: '鋼筆',
    icon: 'pen-fancy',
    id: '3',
  },
  {
    category: '橡皮擦',
    icon: 'eraser',
    id: '4',
  },
  {
    category: '背包',
    icon: 'briefcase',
    id: '1',
  },
  {
    category: '書籍',
    icon: 'book',
    id: '1',
  },
]);


onMounted(() => {
  Aos.init();
});
</script>

<template>
  <div id="Home">
    <Carousel
      :value="products"
      :numVisible="1"
      :numScroll="1"
      circular
      :autoplayInterval="5000"
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
        // indicatorButton: {
        //   class: 'active:bg-pickled-bluewood-600'
        // }
      }"
    >
      <template #item="item">
        <div class="transition-all delay-150 border border-surface-200 dark:border-surface-700 rounded-none h-[calc(100%-16px)] my-2">
          <div class="h-full">
            <div class="relative mx-auto ">
              <img
                :src=item.data.img
                :alt="item.data.title"
                class="w-full h-full object-cover"
              />
              <div class="absolute right-20 bottom-10 bg-alto-50 bg-opacity-90 shadow-md px-[40px] py-[20px] transform hover:scale-105 hover:bg-opacity-100 transition-all duration-300">
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
                  <div class="w-full flex gap-4">
                    <Button
                      icon="pi pi-heart"
                      label="加入追蹤"
                      :pt="{
                        root: {
                          class: 'border-none'
                        }
                      }"
                      class="rounded-none bg-red-300 hover:bg-red-500"
                    />
                    <Button
                      icon="pi pi-shopping-cart"
                      label="立即購買"
                      :pt="{
                        root: {
                          class: 'border-none'
                        }
                      }"
                      class="rounded-none bg-william-400 hover:bg-william-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Carousel>

    <div class="mx-[50px] mt-[100px] pb-[50px]">
      <Card
        class="bg-white border-0"
        :pt="{
          body: {
            class: 'bg-white border-none rounded-0'
          },
          title: {
            class: 'text-[25px] py-[10px]'
          }
        }"
        data-aos="fade-up"
      >
        <template #title>
          商品分類
        </template>
        <template #content>
          <div class="grid grid-cols-6 gap-5">
            <div
              v-for="(item, index) in categorys_data"
              :key="index"
              class="flex flex-col items-center justify-around w-[200px] h-[160px] transition-all hover:bg-pickled-bluewood-400 hover:text-pickled-bluewood-100"
            >
              <FontAwesomeIcon :icon="item.icon" class="text-[35px] p-[20px]"/>
              <div class="text-[18px] py-[10px]">
                {{ item.category }}
              </div>
            </div>
          </div>
        </template>


      </Card>

    </div>

  </div>
</template>
