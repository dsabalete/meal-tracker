<template>
    <div
        class="flex flex-col text-blue-400 bg-gradient-to-b from-white to-blue-400 h-screen"
    >
        <div class="mt-20 logo mx-auto">
            <svg width="96" height="96" viewBox="0 0 24 24">
                <path
                    d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z"
                />
            </svg>
        </div>

        <h1 class="mt-4 mx-auto font-sans font-bold text-4xl">
            {{ title }}
        </h1>

        <router-link
            to="/login"
            class="mt-48 p-4 w-2/3 mx-auto shadow-lg rounded-lg bg-white
                text-blue-400 font-bold text-2xl text-center"
        >
            Login
        </router-link>

        <router-link
            to="/createAccount"
            class="p-4 w-2/3 mx-auto mt-8 shadow-lg rounded-lg bg-blue-400 
                text-white font-bold text-2xl text-center"
        >
            Create account
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {},
    data() {
        return {
            title: 'MealTracker'
        }
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
.logo svg {
    fill: currentColor;
}
</style>
