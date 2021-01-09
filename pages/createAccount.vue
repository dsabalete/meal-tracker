<template>
  <div class="flex flex-col justify-start bg-gray-100 h-screen w-full">
    <div class="mt-8 text-blue-400 text-center font-bold text-2xl">
      Create user account
    </div>

    <input
      type="text"
      placeholder="First name"
      class="form-input block w-2/3 rounded-lg border-4 border-blue-400 mt-12 p-4 self-center text-center focus:outline-none focus:border-blue-500"
    />
    <input
      type="text"
      placeholder="Last name"
      class="form-input block w-2/3 rounded-lg border-4 border-blue-400 mt-7 p-4 self-center text-center focus:outline-none focus:border-blue-500"
    />
    <input
      type="text"
      placeholder="Email"
      class="form-input block w-2/3 rounded-lg border-4 border-blue-400 mt-7 p-4 self-center text-center focus:outline-none focus:border-blue-500"
    />
    <input
      type="password"
      placeholder="password"
      class="form-input block w-2/3 rounded-lg border-4 border-blue-400 mt-7 p-4 self-center text-center focus:outline-none focus:border-blue-500"
    />
    <button
      class="form-input block w-2/3 rounded-lg mt-7 p-4 self-center bg-white text-blue-400 shadow-md font-bold text-xl focus:outline-none"
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
