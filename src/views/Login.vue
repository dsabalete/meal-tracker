<template>
    <div class="flex flex-col justify-start bg-gray-100 h-screen">
        <NavBar />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
    name: 'Login',
    components: {
        NavBar
    }
}
</script>

<style lang="scss" scoped>
.login {
}
</style>
