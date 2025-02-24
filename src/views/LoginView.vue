<script setup>
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';
import { ref } from 'vue';
// const value1 = ref(null);
const account = ref('');
const password = ref('')
// const value3 = ref(null);
</script>
<template>
  <div id="LoginView">
    <h1>登入</h1>
    <div class="flex justify-center align-center gap-6">
      <FloatLabel variant="in">
        <InputText
          id="account"
          v-model="account"
          variant="filled"
        />
        <label for="account">帳號：</label>
      </FloatLabel>
      <FloatLabel variant="in">
        <InputText
          id="password"
          v-model="password"
          variant="filled"
        />
        <label for="password">密碼：</label>
      </FloatLabel>
    </div>
    <Button
      label="Check"
      icon="pi pi-check"
      class="bg-indigo-500 hover:bg-indigo-700 border-0 rounded-xl"
    />
  </div>
</template>

<style>

</style>
