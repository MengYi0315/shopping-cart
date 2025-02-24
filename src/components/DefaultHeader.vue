<script setup>
import Menubar from 'primevue/menubar';
import { InputText } from 'primevue';
import { ref } from 'vue';
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
    label: '編輯',
    icon: 'pi pi-fw pi-pencil',
    items: [
      {
        label: '新增',
        icon: 'pi pi-fw pi-plus',
      },
      {
        label: '刪除',
        icon: 'pi pi-fw pi-trash'
      }
    ]
  },
  {
    label: '登入',
    icon: 'pi pi-fw pi-sign-in',
    command: () => {
      router.push('/auth/login')
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

</script>

<template>
  <div class="card">
    <Menubar :model="items">
      <template #start>

      </template>
      <template #end>
        <InputText
          placeholder="Search"
          type="text"
          class="w-32 sm:w-auto"
        />
      </template>
    </Menubar>
  </div>
</template>


<style scoped>

</style>
