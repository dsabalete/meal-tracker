<template>
  <div class="flex flex-col flex-grow space-y-12 text-blue-400 max-h-full">
    <UiColorSwitch />

    <div class="logo mx-auto">
      <IconLogo width="200" height="200" />
    </div>

    <div class="mx-auto">
      <h1 class="font-sans font-bold text-4xl">MealTracker</h1>
    </div>

    <div
      class="p-4 w-2/3 mx-auto shadow-lg rounded-lg bg-white dark:bg-gray-700 text-center"
    >
      <nuxt-link
        to="/login"
        class="text-blue-400 dark:text-blue-100 font-bold text-2xl"
      >
        Login
      </nuxt-link>
    </div>

    <div
      class="p-4 w-2/3 mx-auto shadow-lg rounded-lg bg-blue-400 dark:bg-blue-700 text-center"
    >
      <nuxt-link
        to="/createAccount"
        class="text-white dark:text-blue-100 font-bold text-2xl"
      >
        Create account
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>
