<template>
  <Html>
    <Head>
      <Title>Users</Title>
    </Head>
  </Html>

  <div class="m-2 flex flex-col items-center">
    <DataDisplay class="m-2 w-full rounded-lg p-4 md:w-2/3" title="User List">
      <template #items="slotProps">
        <ul class="my-4 flex flex-col gap-3">
          <div v-for="user in slotProps.itemList" :key="user.id">
            <Accordion
              :name="user.name"
              :username="`Username: ${user.username}`"
              :address="`Address: <br/>
                        ${user.address.street}, 
                        ${user.address.suite}, 
                        ${user.address.city}`"
              :email="`Email: ${user.email}`"
              :website="`Website: ${user.website}`"
            />
          </div>
        </ul>
      </template>
    </DataDisplay>
  </div>
</template>
