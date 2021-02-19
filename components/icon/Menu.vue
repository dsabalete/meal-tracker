<template>
  <IconBase view-box="0 0 24 24" icon-name="menu" v-bind="$props">
    <path
      fill="currentColor"
      d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
    />
  </IconBase>
</template>

<script>
import IconMixin from '@/mixins/IconMixin.vue'
export default {
  name: 'IconMenu',
  mixins: [IconMixin],
}
</script>
