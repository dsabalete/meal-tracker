<template>
  <div
    class="flex flex-col space-y-12 bg-gray-100 dark:bg-black dark:text-blue-600 h-screen"
  >
    <div class="mt-8 text-blue-400 text-center font-bold text-2xl">
      Create user account
    </div>

    <input
      type="text"
      placeholder="First name"
      class="form-input block w-2/3 rounded-lg border-4 border-blue-400 p-4 self-center text-center focus:outline-none focus:border-blue-500"
    />

    <input
      type="text"
      placeholder="Last name"
      class="form-input block w-2/3 rounded-lg border-4 border-blue-400 p-4 self-center text-center focus:outline-none focus:border-blue-500"
    />

    <input
      type="text"
      placeholder="Email"
      class="form-input block w-2/3 rounded-lg border-4 border-blue-400 p-4 self-center text-center focus:outline-none focus:border-blue-500"
    />

    <input
      type="password"
      placeholder="password"
      class="form-input block w-2/3 rounded-lg border-4 border-blue-400 p-4 self-center text-center focus:outline-none focus:border-blue-500"
    />

    <button
      class="form-input block w-2/3 rounded-lg p-4 self-center bg-white text-blue-400 shadow-md font-bold text-xl focus:outline-none"
    >
      Create
    </button>
  </div>
</template>

<script>
export default {
  layout: 'login',
}
</script>
