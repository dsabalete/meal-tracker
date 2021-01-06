<template>
    <!-- <button>
            Login with Google
        </button> 

        <div>OR</div>
        -->

    <div class="flex flex-col justify-start bg-gray-100 h-screen w-full">
        <input
            type="text"
            placeholder="email"
            class="form-input block w-2/3 rounded-lg border-4 border-blue-400 mt-32 p-4 
                self-center text-center font-bold"
        />
        <input
            type="password"
            placeholder="password"
            class="form-input block w-2/3 rounded-lg border-4 border-blue-400 mt-7 p-4 
                self-center text-center"
        />
        <button
            class="form-input block w-2/3 rounded-lg mt-7 p-4 self-center bg-white 
                text-blue-400 shadow-md font-bold text-xl"
        >
            Login
        </button>
    </div>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault.vue'

export default {
    name: 'Login',
    components: {},
    created() {
        this.$emit('update:layout', LayoutDefault)
    },
}
</script>

<style lang="scss" scoped></style>
