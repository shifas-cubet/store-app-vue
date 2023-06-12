<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" @submit.prevent="onLogin()">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div class="mt-2">
                        <input 
                        id="email" 
                        name="email" 
                        v-model.trim="v$.email.$model"
                        type="text" 
                        autocomplete="email" 
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <div 
                        class="text-red-700" 
                        v-if="formSubmitted && v$.email.$invalid">
                            Please provide valid email
                        </div>
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div class="text-sm">
                            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                        </div>
                    </div>

                    <div class="mt-2">
                        <input 
                        id="password" 
                        name="password" 
                        v-model.trim="v$.password.$model"
                        type="password" 
                        autocomplete="current-password" 
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <div 
                        class="text-red-700" 
                        v-if="formSubmitted && v$.password.required.$invalid">
                            Password is required
                        </div>
                    </div>
                </div>

                <div>
                    <button type="submit"
                        :disabled="formSubmitted && v$.$errors.length > 0"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                        in</button>
                </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                <router-link 
                class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" 
                to="/sign-up">Sign Up</router-link>
        
            </p>


            <div class="text-center">
                <v-snackbar
                :color="authStore.apiResponseStatus ? 'green-lighten-1' : 'red-lighten-1'"
                v-model="snackbar"
                absolute
                z-index="9999"
                timeout="3000">
                {{ authStore.apiResponseMessage }}
                <template v-slot:actions>
                    <v-btn
                    variant="text"
                    @click="snackbar = false"
                    >
                    Close
                    </v-btn>
                </template>
                </v-snackbar>
            </div>

            <v-overlay
            :model-value="overlay"
            class="align-center justify-center"
            persistent
            >
                <v-progress-circular
                    color="primary"
                    indeterminate
                    size="64"
                ></v-progress-circular>
            </v-overlay>


        </div>
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators'
import { reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'Login',
    setup() {
        const snackbar = ref(false)
        const overlay = ref(false);
        const authStore = useAuthStore();
        const router = useRouter();

        const form = reactive({
            email: 'shifashassan23@mailinator.com',
            password: '12345678$A'
        });

        const formSubmitted = ref(false);

        const rules = {
            email: {required, email},
            password: {required}
        };

        const v$ = useVuelidate(rules, form);

        const onLogin = async () => {
            formSubmitted.value = true;
            if(v$.value.$invalid) {
                return;
            }

            try {
                await authStore.login(form.email, form.password);
                overlay.value = true;
            } catch (error) {
                console.log('Login Failed', error);
            }

            snackbar.value = true;
        }

        watch(overlay, (overlayVal) => {
            if(overlayVal) {
                setTimeout(() => {
                    overlay.value = false
                    router.push({ name: 'ProductsListing' });
                }, 1000)
            }
        });


        return {
            form,
            formSubmitted,
            v$,
            onLogin,
            authStore,
            snackbar,
            overlay
        }

    }
}
</script>