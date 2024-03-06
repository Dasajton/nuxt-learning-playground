<script setup>
const links = [
  { name: 'Home', url: '/' },
  { name: 'Display', url: '/display' },
]

let darkMode = ref(false)

onMounted(() => {
  darkMode.value = JSON.parse(window.localStorage.getItem('darkMode')) || false
  if (darkMode.value) {
    document.documentElement.classList.add('dark')
  }
})

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  document.documentElement.classList.toggle('dark')
  window.localStorage.setItem('darkMode', JSON.stringify(darkMode.value))
}
</script>

<template>
  <nav
    class="mb-4 flex h-12 w-full items-center justify-between bg-white/10 px-4 text-white shadow-md shadow-indigo-900 dark:shadow-teal-500"
  >
    <NuxtLink to="/">
      <h1 class="font-bold">Nuxt</h1>
    </NuxtLink>

    <ul class="flex justify-center space-x-4">
      <button @click="toggleDarkMode" class="ml-4 text-white">
        <Icon v-if="darkMode" name="ph:moon-fill" class="text-teal-300" />
        <Icon v-else name="ph:sun-fill" class="text-teal-300" />
      </button>
      <li v-for="link in links" :key="link.name">
        <NuxtLink
          :to="link.url"
          class="rounded-lg px-2 py-1 text-lg text-teal-100 transition duration-300 hover:text-white"
          active-class="text-white bg-teal-100/30"
          >{{ link.name }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
