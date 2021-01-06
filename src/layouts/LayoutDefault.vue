<template>
    <div>
        <NavBar />
        <slot />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
    name: 'LayoutDefault',
    components: {
        NavBar,
    },
}
</script>

<style lang="sass" scoped></style>
