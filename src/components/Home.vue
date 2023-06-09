<template>
    <div class="bg-gray-100 min-h-screen">
        <!-- Header -->
        <header class="bg-white shadow">
            <div class="container mx-auto">
                <Navbar />
            </div>
        </header>

        <!-- Main Content -->
        <main class="container mx-auto py-8 px-6">
            <router-view></router-view>
        </main>

        <!-- Footer -->
        <footer class="bg-gray-100">
            <div class="container mx-auto py-4 px-6">
                <div class="flex justify-between items-center">
                    <div>
                        <p class="text-gray-600">&copy; 2023 Your Company. All rights reserved.</p>
                    </div>
                    <div>
                        <ul class="flex space-x-4">
                            <li>
                                <a href="#" class="text-gray-600 hover:text-gray-800">Terms of Service</a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-600 hover:text-gray-800">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    </div>
</template>

<script>
import { reactive, ref } from 'vue';
import Navbar from './Navbar/Navbar.vue';


export default {
    name: "Home",
    components: { Navbar }
}


</script>