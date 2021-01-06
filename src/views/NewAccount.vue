<template>
    <div>
        New account
    </div>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault.vue'

export default {
    name: 'NewAccount',
    created() {
        this.$emit('update:layout', LayoutDefault)
    },
}
</script>

<style lang="sass" scoped></style>
