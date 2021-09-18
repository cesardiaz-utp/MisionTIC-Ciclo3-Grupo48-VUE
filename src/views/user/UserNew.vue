<template>
  <div>
    <v-img :src="photo"></v-img>
    <v-text-field label="Photo URL" v-model="photo">
      <v-icon slot="prepend" color="blue"> mdi-camera </v-icon>
    </v-text-field>
    <v-text-field
      label="Name"
      prepend-icon="mdi-account"
      :rules="rulesName"
      hide-details="auto"
      v-model="name"
    ></v-text-field>
    <v-text-field
      label="Job"
      prepend-icon="mdi-briefcase"
      v-model="job"
    ></v-text-field>
    <v-textarea
      label="Description"
      prepend-icon="mdi-image-text"
      v-model="description"
    ></v-textarea>
    <div>
      <v-btn id="boton" color="primary" v-on:click="saveUser()">Guardar</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgf15TbnFLSAc-3wEfB9aCPVFPFgtAaQ4-aU-NMqr07G0i8XeESWmpICBKHN9GyMZkUbw&usqp=CAU

  data() {
    return {
      photo: "",
      name: "",
      job: "",
      description: "",

      rulesName: [
        (value) => !!value || "Required.",
        (value) => (value && value.length >= 5) || "Min 5 characters",
      ],
    };
  },
  methods: {
    saveUser() {
      let userList = JSON.parse(localStorage.getItem("userList"));
      if (userList == undefined) {
        userList = [];
      }

      let idUser = localStorage.getItem("idUser");
      if(idUser  == undefined) {
          idUser = 1;
      } else {
          idUser = parseInt(idUser) + 1;
      }

      const user = {
        id: idUser,
        photo: this.photo,
        name: this.name,
        job: this.job,
        desc: this.description,
      };

      userList.push(user);
      this.photo = "";
      this.name = "";
      this.job = "";
      this.description = "";

      localStorage.setItem("userList", JSON.stringify(userList));
      localStorage.setItem("idUser", idUser);
    },
  },
};
</script>

<style scoped>
#boton {
  float: right;
}
</style>>