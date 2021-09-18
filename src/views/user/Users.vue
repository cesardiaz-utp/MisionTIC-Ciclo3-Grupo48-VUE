<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          v-for="user in users"
          :key="user.id"
          lg="3"
          md="4"
          sm="6"
          xs="12"
        >
          <UserInfo :user="user" v-on:update="updateList()" />
        </v-col>
      </v-row>
    </v-container>
    <v-btn
      id="addButton"
      color="primary"
      dark
      absolute
      top
      right
      fab
      to="/user/new"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import UserInfo from "../../components/UserInfo.vue";

export default {
  components: {
    UserInfo,
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.updateList();
  },
  methods: {
    updateList() {
      console.log("updateList");
      let userList = JSON.parse(localStorage.getItem("userList"));
      if (userList != undefined) {
        this.users = userList;
      }
    },
  },
};
</script>

<style scope>
#addButton {
  top: 8px;
}
</style>