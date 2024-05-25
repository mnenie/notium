<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';
import { vAutoAnimate } from '@formkit/auto-animate/vue';
import { Loader2 } from 'lucide-vue-next';
import { Label } from '@/components/ui/label';
import { useAuthStore } from '~/store/auth.store';

const formSchema = toTypedSchema(
  z.object({
    email: z
      .string({ required_error: 'Email is a required field' })
      .nonempty('Email is a required field')
      .email('Email must be a valid'),
    password: z
      .string({ required_error: 'Password is a required field' })
      .nonempty('Password is a required field')
      .min(8, 'Password must be at least 8 characters')
  })
);

const { handleSubmit, isFieldDirty } = useForm({
  validationSchema: formSchema
});

const { value: email } = useField<string>('email');
const { value: password } = useField<string>('password');

const authStore = useAuthStore();
const { isLoading } = storeToRefs(authStore);
const { login, registration } = authStore;

const route = useRoute();
const localPath = useLocalePath();

const onSubmit = handleSubmit(async (values) => {
  try {
    if (route.path === localPath(LOGIN_ROUTE)) {
      await login({ ...values });
    } else if (route.path === localPath(REGISTRATION_ROUTE)) {
      await registration({ ...values });
    }
  } catch (err) {
    console.log(err);
  }
});
</script>
<template>
  <div :class="$attrs.class">
    <form @submit.prevent="onSubmit">
      <div class="grid gap-6">
        <div class="grid gap-4">
          <UiFormField v-slot="{ componentField }" name="email" :validate-on-blur="!isFieldDirty">
            <UiFormItem class="grid justify-items-start gap-2" v-auto-animate>
              <Label for="email"> Email </Label>
              <UiFormControl>
                <UiInput
                  v-model="email"
                  v-bind="componentField"
                  id="email"
                  placeholder="user@example.com"
                  type="email"
                  :disabled="isLoading"
                />
              </UiFormControl>
              <UiFormMessage />
            </UiFormItem>
          </UiFormField>
          <UiFormField v-slot="{ componentField }" name="password" :validate-on-blur="!isFieldDirty">
            <UiFormItem class="grid justify-items-start gap-2" v-auto-animate>
              <Label for="password"> Password </Label>
              <UiFormControl>
                <UiInput
                  v-model="password"
                  v-bind="componentField"
                  id="password"
                  placeholder="user_password_example"
                  type="password"
                  :disabled="isLoading"
                />
              </UiFormControl>
              <UiFormMessage />
            </UiFormItem>
          </UiFormField>
        </div>
        <div class="grid gap-2">
          <UiButton :disabled="isLoading">
            <Loader2 v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
            {{ $route.path === localPath(LOGIN_ROUTE) ? 'Sign In with Email' : 'Sign Up with Email' }}
          </UiButton>
          <p class="text-sm text-[#72717a] dark:text-zinc-300">
            {{ $route.path === localPath(LOGIN_ROUTE) ? `Don't have an account?` : 'Have an account?' }}
            <span
              @click="
                $route.path === localPath(LOGIN_ROUTE)
                  ? navigateTo(localPath(REGISTRATION_ROUTE))
                  : navigateTo(localPath(LOGIN_ROUTE))
              "
              class="cursor-pointer underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-300/80"
            >
              {{ $route.path === localPath(LOGIN_ROUTE) ? `Sign Up Now` : 'Sign In Now' }}
            </span>
          </p>
        </div>
      </div>
    </form>
  </div>
</template>
