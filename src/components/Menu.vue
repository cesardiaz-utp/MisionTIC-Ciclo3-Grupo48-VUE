<template>
  <v-list>
    <v-list-item v-for="item in items" :key="item.title" :to="item.page" link >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { icon: "mdi-home", title: "Home", page: "/" },
        { icon: "mdi-account-supervisor-circle", title: "Supervisors", page: "/supervisor" },
        { icon: "mdi-clock-start", title: "Clock-in", page: "/clock" },
        { icon: "mdi-account", title: "Users", page: "/user" },
        { icon: "mdi-help-circle", title: "About", page: "/about" },
      ],
    };
  },
};
</script>

<style>
</style>