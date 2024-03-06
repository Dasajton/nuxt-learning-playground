<script setup>
import { ref } from 'vue'

defineProps({
    name: {
        type: String,
        default: 'David Sajitz',
    },
    username: {
        type: String,
        default: 'Dasajton',
    },
    address: {
        type: String,
        default: 'Dortmund',
    },
    email: {
        type: String,
        default: 'davidsajitz@gmail.com',
    },
    website: {
        type: String,
        default: 'davidsajitz.com',
    },
})

const accordionOpen = ref(false)
</script>

<template>
    <div
        class="mx-auto w-5/6 rounded-lg bg-indigo-100/70 p-4 md:w-3/4 dark:bg-indigo-200/70"
    >
        <button
            @click="accordionOpen = !accordionOpen"
            class="flex w-full items-center justify-between px-2"
        >
            <h2 class="text-2xl font-bold text-indigo-600">{{ name }}</h2>
            <span class="text-3xl text-indigo-600">
                <template v-if="accordionOpen">-</template>
                <template v-else>+</template>
            </span>
        </button>
        <div
            :class="`grid overflow-hidden text-indigo-500 transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`"
        >
            <div class="overflow-hidden px-4">
                <h3 class="text-xl text-teal-600">{{ username }}</h3>
                <div class="my-2 flex flex-col gap-2">
                    <p
                        class="rounded bg-indigo-100/40 p-1"
                        v-html="address"
                    ></p>
                    <p class="rounded bg-indigo-100/40 p-1">{{ email }}</p>
                    <p class="rounded bg-indigo-100/40 p-1">{{ website }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
