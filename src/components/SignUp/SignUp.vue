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
                    <button type="submit"
                        :disabled="formSubmitted && v$.$errors.length > 0"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                        Up</button>
                </div>
            </form>

        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';

export default {
    name: 'SignUp',
    setup() {

        const form = reactive({
            email: '',
            password: '',
            password_confirmation: ''
        });

        const formSubmitted = ref(false);

        const rules = {
            email: {required, email},
            password: {required, regex: helpers.regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)},
            password_confirmation: {required}
        }

        const v$ = useVuelidate(rules, form);

        const onSignUp = () => {
            formSubmitted.value = true;
            if(v$.value.$invalid) {
                return;
            }

            
        }

        return {
            form,
            formSubmitted,
            v$,
            onSignUp
        }
    }
}
</script>