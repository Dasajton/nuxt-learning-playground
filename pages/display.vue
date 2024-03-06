<script setup>
useHead({
  title: 'Display',
})

const links = [
  { name: 'Photos', url: '/display/photos' },
  { name: 'Todos', url: '/display/todos' },
  { name: 'Users', url: '/display/users' },
]
</script>

<template>
  <h1>Display</h1>

  <ul class="my-4 flex items-center justify-center gap-4">
    <li v-for="link in links" :key="link.name">
      <NuxtLink
        :to="link.url"
        class="rounded bg-teal-100/50 px-2 py-1 text-lg text-white transition duration-300"
        active-class="bg-teal-400/60"
        >{{ link.name }}</NuxtLink
      >
    </li>
  </ul>

  <NuxtPage />
</template>

<style scoped></style>
