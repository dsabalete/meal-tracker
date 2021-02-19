<template>
  <div class="h-screen main-container">
    <UiHeader />

    <main class="bg-light dark:text-white dark:bg-dark">
      <Nuxt />
    </main>

    <UiFooter class="md:hidden" />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
