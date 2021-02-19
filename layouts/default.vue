<template>
  <div class="h-screen main-container">
    <Header />

    <main class="bg-light dark:text-white dark:bg-dark">
      <Nuxt />
    </main>

    <Footer class="md:hidden" />
  </div>
</template>

<script>
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
  },
}
</script>
