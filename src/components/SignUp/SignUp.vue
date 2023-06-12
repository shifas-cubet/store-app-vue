<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" @submit.prevent="onSignUp()">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div class="mt-2">

                        <input 
                        id="email" 
                        name="email"
                        v-model.trim="v$.email.$model" 
                        type="email" 
                        autocomplete="email" 
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <!-- <div class="text-red-700" v-if="formSubmitted && v$.email.$error">Please enter a valid email address.</div> -->
                        <div class="text-red-700" v-if="formSubmitted && v$.email.required.$invalid">Please enter a valid email address.</div>
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    </div>
                    <div class="mt-2">
                        <input 
                        id="password" 
                        name="password" 
                        v-model.trim="v$.password.$model"
                        type="password" 
                        autocomplete="current-password" 
                        required
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <div class="text-red-700" v-if="formSubmitted && (v$.password.$error || v$.password.$invalid)">
                            Please enter a valid password. (Password should contain 8 characters, with atleast one number, one special character and one Uppercase letter)
                        </div>
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="confirm-password" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                    </div>
                    <div class="mt-2">
                        <input 
                        id="confirm-password" 
                        name="password" 
                        v-model.trim="v$.password_confirmation.$model"
                        type="password" 
                        required
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <div class="text-red-700" v-if="formSubmitted && v$.password_confirmation.$error">Please confirm your password.</div>
                        <div class="text-red-700" v-if="formSubmitted && form.password_confirmation !== form.password">Passwords do not match.</div>

                    </div>
                </div>

                <div>
                    <label for="phone_number" class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                    <div class="mt-2">
                        <input 
                        id="phone_number" 
                        name="phone_number"
                        v-model.trim="v$.phone_number.$model" 
                        type="text" 
                        autocomplete="phone_number" 
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <div class="text-red-700" v-if="formSubmitted && v$.phone_number.$invalid">Phone number should contain 10 digits.</div>
                    </div>
                </div>

                <div>
                    <label for="street" class="block text-sm font-medium leading-6 text-gray-900">Street</label>
                    <div class="mt-2">

                        <input 
                        id="street" 
                        name="street"
                        v-model.trim="v$.street.$model" 
                        type="text" 
                        autocomplete="street" 
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <!-- <div class="text-red-700" v-if="formSubmitted && v$.email.$error">Please enter a valid email address.</div> -->
                        <div class="text-red-700" v-if="formSubmitted && v$.street.required.$invalid">Street is required.</div>
                    </div>
                </div>

                <div>
                    <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                    <div class="mt-2">

                        <input 
                        id="city" 
                        name="city"
                        v-model.trim="v$.city.$model" 
                        type="text" 
                        autocomplete="city" 
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <!-- <div class="text-red-700" v-if="formSubmitted && v$.email.$error">Please enter a valid email address.</div> -->
                        <div class="text-red-700" v-if="formSubmitted && v$.city.required.$invalid">City is required.</div>
                    </div>
                </div>

                <div>
                    <label for="state" class="block text-sm font-medium leading-6 text-gray-900">State</label>
                    <div class="mt-2">

                        <input 
                        id="state" 
                        name="state"
                        v-model.trim="v$.state.$model" 
                        type="text" 
                        autocomplete="state" 
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <!-- <div class="text-red-700" v-if="formSubmitted && v$.email.$error">Please enter a valid email address.</div> -->
                        <div class="text-red-700" v-if="formSubmitted && v$.state.required.$invalid">State is required.</div>
                    </div>
                </div>

                <div>
                    <label for="zip" class="block text-sm font-medium leading-6 text-gray-900">Zip</label>
                    <div class="mt-2">

                        <input 
                        id="zip" 
                        name="zip"
                        v-model.trim="v$.zip.$model" 
                        type="text" 
                        autocomplete="zip" 
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <!-- <div class="text-red-700" v-if="formSubmitted && v$.email.$error">Please enter a valid email address.</div> -->
                        <div class="text-red-700" v-if="formSubmitted && v$.zip.required.$invalid">Zip is required.</div>
                    </div>
                </div>

                <div>
                    <button type="submit"
                        :disabled="formSubmitted && v$.$errors.length > 0"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                        Up</button>
                </div>
            </form>

            <div class="text-center">
                <v-snackbar
                :color="apiResponseStatus ? 'green-lighten-1' : 'red-lighten-1'"
                v-model="snackbar"
                absolute="true"
                z-index="9999"
                :timeout="timeout">
                {{ apiResponseMessage }}
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
            persistent="true"
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
import { reactive, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, helpers, minLength, maxLength } from '@vuelidate/validators';
import { inject } from 'vue';
import config from '@/config';
import { useRouter } from 'vue-router';
import { watch } from 'vue';

export default {
    name: 'SignUp',
    setup() {
        const router = useRouter();
        const form = reactive({
            email: 'shifashassan32@mailinator.com',
            password: 'Shifas1995$',
            password_confirmation: 'Shifas1995$',
            phone_number: '8129894205',
            street: 'Panjaramukk',
            city: 'Thrissur',
            state: 'Kerala',
            zip: '680-501'
        });
        const formSubmitted = ref(false);
        const apiResponseMessage = ref('');
        const apiResponseStatus = ref(false);
        const snackbar = ref(false);
        const overlay = ref(false);


        const rules = {
            email: {required, email},
            password: {required, regex: helpers.regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)},
            password_confirmation: {required},
            phone_number: {required, minLength: minLength(10), maxLength: maxLength(10)},
            street: {required},
            city: {required},
            state: {required},
            zip: {required}
        }

        const v$ = useVuelidate(rules, form);

        const $axios = inject('axios');

        const onSignUp = async () => {
            formSubmitted.value = true;
            if(v$.value.$invalid) {
                return;
            }
            try {
                const response = await $axios.post(`${config.apiBaseURL}/sign-up`, form);
                apiResponseMessage.value = response?.data?.message;
                apiResponseStatus.value = true;
                overlay.value = true;
            } catch (error) {
                apiResponseMessage.value = error?.response?.data?.message;
                apiResponseStatus.value = false;

            }
            snackbar.value = true;
            
        }

        watch(overlay, (overlayVal) => {
            if(overlayVal) {
                setTimeout(() => {
                    overlay.value = false
                    router.push({ name: 'Login' });
                }, 5000)
            }
        });

        return {
            form,
            formSubmitted,
            v$,
            onSignUp,
            snackbar,
            timeout: 5000,
            apiResponseMessage,
            apiResponseStatus,
            overlay
        }
    }
}
</script>