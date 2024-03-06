<script setup></script>

<template>
  <div class="grid grid-cols-6">
    <div class="col-start-1 col-end-2 bg-indigo-500/70 text-3xl">
      Layout Left
    </div>

    <div class="col-start-2 col-end-6">
      <h3 class="text-center text-3xl">Layout Top</h3>
      <slot />
    </div>

    <div class="col-start-6 col-end-7 bg-teal-500/70 text-3xl">
      Layout Right
    </div>
  </div>
</template>

<style scoped></style>
