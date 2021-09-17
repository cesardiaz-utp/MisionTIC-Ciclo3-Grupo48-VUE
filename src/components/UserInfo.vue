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
      <v-btn color="primary" > Edit </v-btn>

      <v-btn color="red" dark> Delete </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["user"],
  mounted() {
    console.log("user: ", this.user);
  },
};
</script>

<style>
</style>