<script setup>
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Message from 'primevue/message';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { Form } from '@primevue/forms';
import { useRouter } from 'vue-router';

import { reactive } from 'vue';

const router = useRouter()
const toast = useToast();
const initialValues = reactive({
  email: '',
});

const resolver = ({ values }) => {
  const errors = {};

  if (!values.email) {
    errors.email = [{ message: '請輸入電子郵件。' }];
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = [{ message: '請輸入有效的電子郵件地址。' }];
  }

  return {
    values,
    errors
  };
};

const onFormSubmit = ({ valid, values }) => {
  if (valid) {
    toast.add({
      severity: 'success',
      summary: '登入成功',
      life: 3000
    });
  }
  console.log('登入表單', values)
};


</script>
<template>
  <div id="ForgetPasswordView">
    <div class="h-full">
      <div class="container h-full flex justify-center items-center">
        <Card class="h-auto bg-pickled-bluewood-100">
          <template #title>
            <div class="text-center text-[30px] mt-[20px]">找回密碼</div>
          </template>
          <template #content>
            <Toast />
            <!-- *forget password表單 -->
            <Form
              v-slot="$form"
              :initialValues
              :resolver
              @submit="onFormSubmit"
            >
              <div class="flex flex-col items-center gap-4 my-[40px] mx-[60px]">
                <div>
                  <FloatLabel variant="in">
                    <InputText
                      id="password"
                      type="email"
                      name="email"
                      variant="filled"
                      autocomplete="current-email"
                      :pt="{
                        root: {
                          class: 'w-[400px] rounded-none border-0 border-b-2 border-pickled-bluewood-200 focus:ring-0 focus:border-pickled-bluewood-300 outline-none peer'
                        }
                      }"
                    />
                    <label
                      for="email"
                      class="text-alto-950 peer-focus:text-pickled-bluewood-600"
                    >
                      email：
                    </label>
                  </FloatLabel>
                  <Message
                    severity="error"
                    size="small"
                    variant="simple"
                    :style="{ visibility: $form.email?.invalid ? 'visible' : 'hidden' }"
                  >
                    {{ $form.email?.invalid ? $form.email.error?.message : '佔位' }}
                  </Message>
                </div>
                <div class="mt-[40px] flex flex-col">
                  <Button
                    type="submit"
                    label="確認"
                    class="w-[400px] h-[50px] rounded-none bg-pickled-bluewood-200 text-pickled-bluewood-950 border-none hover:bg-pickled-bluewood-300 "
                    />
                  <Button
                    type="submit"
                    label="返回"
                    class="w-[400px] h-[50px] mt-4 rounded-none bg-alto-200 text-alto-950 border-none hover:bg-alto-300 "
                    @click="() => router.push('/auth/login')"
                  />
                </div>
              </div>
            </Form>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<style>
#ForgetPasswordView {
  height: calc(100% - 140px);
}
</style>
