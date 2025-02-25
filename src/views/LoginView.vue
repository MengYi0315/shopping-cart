<script setup>
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Card from 'primevue/card';
import Button from 'primevue/button';
import { ref } from 'vue';

const account = ref('');
const password = ref('')
</script>
<template>
  <div id="LoginView">
    <div class="container h-full flex justify-center">
      <Card class="w-1/2 h-auto mt-[50px]">
        <template #title>
          <div class="text-center text-[30px]">登入</div>
        </template>
        <template #content>
          <div class="flex flex-col items-center gap-4 mt-[20px]">
            <FloatLabel variant="in">
              <InputText
                id="account"
                v-model="account"
                variant="filled"
                :pt="{
                  root: {
                    class: 'w-[300px]'
                  }
                }"
              />
              <label for="account">帳號：</label>
            </FloatLabel>
            <FloatLabel variant="in">
              <InputText
                id="password"
                v-model="password"
                variant="filled"
                :pt="{
                  root: {
                    class: 'w-[300px]'
                  }
                }"

              />
              <label for="password">密碼：</label>
            </FloatLabel>
            <div class="mt-[20px]">
              <Button
                label="登入"
                class="w-[300px] h-[50px] bg-pickled-bluewood-200 text-pickled-bluewood-950 border-none hover:bg-pickled-bluewood-300 "
              />
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style>
#LoginView {
  height: calc(100% - 140px);
}
</style>
