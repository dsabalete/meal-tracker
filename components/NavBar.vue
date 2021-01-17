<template>
  <div class="h-16 lg:h-20 bg-white text-blue-400 flex justify-between">
    <div class="flex">
      <nuxt-link to="/">
        <div class="p-2 md:p-4 lg:p-6">
          <svg width="42" height="42" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z"
            />
          </svg>
        </div>
      </nuxt-link>
      <nuxt-link to="/">
        <div class="font-semibold text-xl pt-6 lg:text-4xl">Meal Tracker</div>
      </nuxt-link>
    </div>
    <div class="flex justify-end">
      <div class="icon-profile">
        <IconProfile />
      </div>
      <div class="p-2 md:p-4 lg:p-6">
        <svg width="42" height="42" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
