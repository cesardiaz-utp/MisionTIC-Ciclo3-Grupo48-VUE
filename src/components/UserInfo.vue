<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200px" :src="user.photo">
      <v-card-title>{{ user.name }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0"> {{ user.job }} </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ user.desc }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" v-on:click="editUser(user.id)"> Edit </v-btn>

      <v-btn color="red" dark @click="deleteUser(user.id)"> Delete </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["user"],
  methods: {
    editUser(id) {
      console.log("editar", id);
    },
    deleteUser(id) {
      let userList = JSON.parse(localStorage.getItem("userList"));
      if (userList == undefined) {
        console.error("La lista no contiene el usuario con id: "+id);
        return;
      }

      userList = userList.filter((user) => user.id != id);
      localStorage.setItem("userList", JSON.stringify(userList));
      this.$emit('update');
    },
  },
};
</script>

<style>
</style>