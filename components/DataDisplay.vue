<script setup>
import axios from 'axios'

const props = defineProps({
  title: {
    type: String,
    default: 'Heading',
  },
})

const route = useRoute()
const itemType = route.path.split('/')[2]

let data = []
const itemList = ref(data)

const itemCountText = computed(
  () => `There are ${itemList.value.length} ${itemType}`
)

const fetchItemList = async () => {
  try {
    const url = `http://jsonplaceholder.typicode.com/${itemType}`
    const response = await axios.get(url)
    itemList.value = response.data
  } catch (error) {
    console.error(error)
  }
}

useFetch(`http://jsonplaceholder.typicode.com/${itemType}`, (response) => {
  itemList.value = response.data
})

onMounted(() => {
  fetchItemList()
})
</script>

<template>
  <div class="bg-emerald-100/30">
    <h2>
      {{ title }}
    </h2>
    <p class="text-xl font-medium text-indigo-900">
      {{ itemCountText }}
    </p>
    <div>
      <slot name="items" :itemList="itemList" />
    </div>
  </div>
</template>
