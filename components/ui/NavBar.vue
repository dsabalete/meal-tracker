<template>
  <div
    class="h-16 lg:h-20 bg-white text-blue-400 dark:bg-black dark:text-blue-600 flex justify-between"
  >
    <div class="flex">
      <nuxt-link to="/">
        <div class="p-2 md:p-4 lg:p-6">
          <IconLogo />
        </div>
      </nuxt-link>
      <nuxt-link to="/">
        <div class="font-semibold text-xl pt-6 lg:text-4xl">Meal Tracker</div>
      </nuxt-link>
    </div>
    <div class="flex justify-end">
      <ProfileIcon />
      <div class="p-2 lg:p-4">
        <IconMenu />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiNavBar',
}
</script>
