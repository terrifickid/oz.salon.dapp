<template>
  <div class="flex mt-4 items-center">
    <button
      @click="$emit('ready')"
      class="flex border border-black hover:bg-black hover:text-white px-6 py-2 rounded-full items-center"
    >
      Ok
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 ml-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </button>
    <span class="text-sm ml-4">Press <b class="font-bold">Enter ↵</b></span>
  </div>
</template>
