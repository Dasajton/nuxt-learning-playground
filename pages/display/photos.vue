<template>
  <Html>
    <Head>
      <Title>Todos</Title>
    </Head>
  </Html>

  <div class="m-2 flex flex-col items-center">
    <DataDisplay
      class="m-2 w-full rounded-lg p-4 md:w-2/3"
      title="Photo Gallery"
    >
      <template #items="slotProps">
        <ul
          class="m-4 grid grid-cols-3 justify-items-center gap-4 md:grid-cols-5 xl:grid-cols-8"
        >
          <li v-for="photo in slotProps.itemList" :key="photo.id" class="">
            <img :src="photo.thumbnailUrl" alt="photo" class="rounded" />
          </li>
        </ul>
      </template>
    </DataDisplay>
  </div>
</template>
