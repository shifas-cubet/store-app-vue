<template>
    <div class="p-6">
        <form @submit.prevent="handleSubmit">
            <div class="space-y-12">
                <div class="border-b border-gray-900/10 pb-12">

                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-6">
                        <div class="sm:col-span-4">
                            <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Product</label>
                            <div class="mt-2">
                                <input 
                                v-model="product_name"
                                type="text" 
                                name="street-address" 
                                id="street-address" 
                                autocomplete="street-address"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>


                        <div class="sm:col-span-4">
                            <label for="username"
                                class="block text-sm font-medium leading-6 text-gray-900">Attributes</label>

                            <div class="mt-2 flex space-x-4">

                                <template v-for="(attribute, index) in attributes" :key="index">
                                    <input 
                                type="text" 
                                name="street-address" 
                                v-model="attributes[index]"
                                id="street-address" 
                                autocomplete="street-address"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            
                                    <button
                                    @click="onRemoveAttribute(index)"
                    class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">X</button>

                                </template>
                                

                            
                            </div>
                        </div>

                    </div>

                    <button
                    @click="addAttribute()"
                    class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Line</button>

                </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                <button type="submit"
                    class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
        </form>

    </div>
</template>

<script>
import { reactive, ref } from 'vue';


export default {
 name: 'Home', 
 setup() {
    
    const product_name = ref('');
    const attributes = ref([]);

    const addAttribute = () => {
        attributes.value.push('')
    }

    const onRemoveAttribute = (index) => {
        attributes.value.splice(index, 1);
    }

    const handleSubmit = () => {

    }


    return {
        product_name,
        attributes,
        addAttribute,
        onRemoveAttribute
    }

 }
}


</script>