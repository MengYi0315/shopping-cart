<script setup>
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Message from 'primevue/message';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { Form } from '@primevue/forms';

import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const toast = useToast();
const initialValues = reactive({
  account: '',
  password: '',
});

const resolver = ({ values }) => {
  const errors = {};

  if (!values.account) {
    errors.account = [{ message: '請輸入帳號' }];
  }

  if (!values.password) {
    errors.password = [{ message: '請輸入密碼' }];
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
  <div id="LoginView">
    <div class="h-full">
      <div class="container h-full flex justify-center items-center">
        <Card class="h-auto bg-pickled-bluewood-100">
          <template #title>
            <div class="text-center text-[30px] mt-[20px]">登入</div>
          </template>
          <template #content>
            <Toast />
            <!-- *login表單 -->
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
                      id="account"
                      name="account"
                      variant="filled"
                      autocomplete="username"
                      :pt="{
                        root: {
                          class: 'w-[400px] rounded-none border-0 border-b-2 border-pickled-bluewood-200 focus:ring-0 focus:border-pickled-bluewood-300 outline-none peer'
                        }
                      }"
                    />
                    <label
                      for="account"
                      class="text-alto-950 peer-focus:text-pickled-bluewood-600"
                    >
                      帳號：
                    </label>
                  </FloatLabel>
                  <Message
                    severity="error"
                    size="small"
                    variant="simple"
                    :style="{ visibility: $form.account?.invalid ? 'visible' : 'hidden' }"
                  >
                    {{ $form.account?.invalid ? $form.account.error?.message : '佔位' }}
                  </Message>
                </div>
                <div>
                  <FloatLabel variant="in">
                    <InputText
                      id="password"
                      type="password"
                      name="password"
                      variant="filled"
                      autocomplete="current-password"
                      :pt="{
                        root: {
                          class: 'w-[400px] rounded-none border-0 border-b-2 border-pickled-bluewood-200 focus:ring-0 focus:border-pickled-bluewood-300 outline-none peer'
                        }
                      }"
                    />
                    <label
                      for="password"
                      class="text-alto-950 peer-focus:text-pickled-bluewood-600"
                    >
                      密碼：
                    </label>
                  </FloatLabel>
                  <Message
                    severity="error"
                    size="small"
                    variant="simple"
                    :style="{ visibility: $form.password?.invalid ? 'visible' : 'hidden' }"
                  >
                    {{ $form.password?.invalid ? $form.password.error?.message : '佔位' }}
                  </Message>
                </div>
                <div class="mt-[20px]">
                  <Button
                    type="submit"
                    label="登入"
                    class="w-[400px] h-[50px] rounded-none bg-pickled-bluewood-200 text-pickled-bluewood-950 border-none hover:bg-pickled-bluewood-300 "
                    />
                  <div class="mt-2 flex justify-between">
                    <span
                      class="text-alto-950 no-underline hover:underline"
                      @click="() => router.push('/auth/forgetPassword')"
                    >
                      忘記密碼？
                    </span>
                    <span>
                      尚未註冊？
                      <span
                        class="text-alto-950 no-underline hover:underline hover:decoration-pickled-bluewood-500 hover:text-pickled-bluewood-500 transition-all"
                        @click="() => router.push('/auth/register')"
                      >
                        註冊
                      </span>
                    </span>
                  </div>
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
#LoginView {
  height: calc(100% - 140px);
}
</style>
