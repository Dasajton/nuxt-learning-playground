<template>
  <Html>
    <Head>
      <Title>Todos</Title>
    </Head>
  </Html>

  <div class="m-2 flex flex-col items-center">
    <DataDisplay class="m-2 w-full rounded-lg p-4 md:w-2/3" title="Todo List">
      <template #items="slotProps">
        <ul>
          <li
            v-for="todo in slotProps.itemList"
            :key="todo.id"
            class="m-2 rounded bg-indigo-600/50 p-2"
          >
            <NuxtLink :to="`/display/todos/${todo.id}`">
              <input type="checkbox" :checked="todo.completed" />
              {{ todo.title }}
            </NuxtLink>
          </li>
        </ul>
      </template>
    </DataDisplay>
  </div>
</template>
