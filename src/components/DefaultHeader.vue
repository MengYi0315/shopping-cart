<script setup>
import Menubar from 'primevue/menubar';
import { InputText } from 'primevue';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';
import { Form } from '@primevue/forms';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
  {
    label: '首頁',
    icon: 'pi pi-fw pi-home',
    command: () => {
      router.push('/');
    }
  },
  {
    label: '分類',
    icon: 'pi pi-fw pi-th-large',
    command: () => {
      router.push('/category');
    }
  },
  {
    label: '購物車',
    icon: 'pi pi-fw pi-shopping-cart',
    command: () => {
      router.push('/cart');
    }
  },
  // {
  //   label: '編輯',
  //   icon: 'pi pi-fw pi-pencil',
  //   items: [
  //     {
  //       label: '新增',
  //       icon: 'pi pi-fw pi-plus',
  //     },
  //     {
  //       label: '刪除',
  //       icon: 'pi pi-fw pi-trash'
  //     }
  //   ]
  // },
  {
    label: '登入',
    icon: 'pi pi-fw pi-sign-in',
    command: () => {
      router.push('/auth/login');
    }
  }
  // {
  //   label: '使用者',
  //   icon: 'pi pi-fw pi-user',
  //   items: [
  //     {
  //       label: '個人資料',
  //       icon: 'pi pi-fw pi-user-edit'
  //     },
  //     {
  //       label: '登出',
  //       icon: 'pi pi-fw pi-power-off'
  //     }
  //   ]
  // }
]);
const initialValues = reactive({
  search: '',
});

const onFormSubmit = ({ values }) => {
  console.log('查詢', values)
  if (Object.values(values).every(item => item !== '')) {
    router.push('/search');
  }
};

</script>

<template>
  <div class="h-[140px] bg-pickled-bluewood-600 flex flex-col justify-between">
    <div class="px-[12px] py-[8px] flex justify-between">
      <div class="w-1/4 flex items-center">
         <!-- *logo -->
        <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8">
          <path
            d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
            fill="var(--p-primary-color)"
          />
          <path
            d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
            fill="var(--p-text-color)"
          />
        </svg>
      </div>
      <div class="w-[50%] flex justify-center">
        <Form
          :initialValues
          @submit="onFormSubmit"
          class="w-full"
        >
          <FloatLabel variant="in" class="w-full relative">
            <InputText
              id="search_label"
              name="search"
              autocomplete="off"
              class="w-full rounded-none border-t-0 border-l-0 border-r-0 border-b-1 border-alto-50 text-alto-50 bg-transparent hover:bg-pickled-bluewood-200/10 focus:bg-pickled-bluewood-200/30 transition-colors duration-300"
            />
            <label for="search_label" class="text-alto-50">查詢：</label>
            <div class="absolute inset-y-0 right-0 flex items-center">
              <Button
                type="submit"
                icon="pi pi-search"
                variant="text"
                aria-label="Filter"
                class="h-[40px] text-alto-50 rounded-none hover:bg-pickled-bluewood-200 hover:text-alto-950"
              />
            </div>
          </FloatLabel>
        </Form>
      </div>
      <div class="w-1/4 flex justify-end items-center gap-4 text-alto-50">
        <span
          class="hover:underline"
          @click="() => router.push('/auth/register')"
        >
          註冊
        </span>
        <div class="border-l-[1px] w-[1px] h-4"></div>
        <span
          class="hover:underline"
          @click="() => router.push('/auth/login')"
        >
          登入
        </span>
      </div>
    </div>
    <Menubar
      :model="items"
      :pt="{
        root: { class: 'bg-pickled-bluewood-600 justify-center border-0 pb-0' },
        rootList: { class: 'w-[50%] flex justify-center gap-0' },
        start: { class: 'w-1/4' },
        end: { class: 'w-1/4 m-0 flex justify-end' },
        itemContent: {
          class: 'rounded-none text-alto-50 hover:text-alto-950 hover:bg-pickled-bluewood-200 focus:text-alto-950 focus:bg-pickled-bluewood-200 focus:outline-none group'
        },
        itemLink: {
          class: 'w-[120px] px-[15px] py-[20px] justify-center'
        },
        submenuIcon: {
          class: 'text-alto-50 group-hover:text-alto-950'
        },
        itemIcon: {
          class: 'text-alto-50 group-hover:text-alto-950'
        },
        submenu: {
          class: 'bg-pickled-bluewood-400 rounded-none p-0'

        }
      }"
    >
    </Menubar>
  </div>
</template>


<style scoped>
.p-menubar {
  --p-menubar-item-focus-background: #6ba4c5;
  --p-menubar-item-active-background: #6ba4c5
}
</style>
