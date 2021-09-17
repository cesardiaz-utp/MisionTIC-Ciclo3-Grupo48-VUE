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
          <UserInfo :user="user" />
        </v-col>
      </v-row>
    </v-container>
    <v-btn color="primary" dark absolute bottom right fab>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import UserInfo from "../components/UserInfo.vue";

export default {
  components: {
    UserInfo,
  },
  data() {
    return {
      users: [
        {
          id: 1,
          photo:
            "https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/f8e03dd1-0ee7-4e30-9585-37b973c05747.jpg",
          name: "Cesar Diaz",
          job: "Teacher",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex repellendus omnis maxime, obcaecati ducimus labore, beatae consequatur nesciunt doloremque distinctio neque saepe porro nam voluptas quasi aliquam ullam eaque officiis.",
        },
        {
          id: 2,
          photo:
            "https://s1.eestatic.com/2021/07/05/como/594201686_194270706_1706x960.jpg",
          name: "Laura Hernandez",
          job: "Student",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex repellendus omnis maxime, obcaecati ducimus labore, beatae consequatur nesciunt doloremque distinctio neque saepe porro nam voluptas quasi aliquam ullam eaque officiis.",
        },
        {
          id: 3,
          photo:
            "https://img.freepik.com/foto-gratis/cierrese-encima-retrato-cara-joven-hombre-barbudo_171337-2887.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
          name: "Alejandro Jimenez",
          job: "Student",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex repellendus omnis maxime, obcaecati ducimus labore, beatae consequatur nesciunt doloremque distinctio neque saepe porro nam voluptas quasi aliquam ullam eaque officiis.",
        },

        {
          id: 4,
          photo:
            "https://www.clinicamenorca.com/wp-content/uploads/2020/03/adelgazar-cara.jpg",
          name: "Keren Mafla",
          job: "Student",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex repellendus omnis maxime, obcaecati ducimus labore, beatae consequatur nesciunt doloremque distinctio neque saepe porro nam voluptas quasi aliquam ullam eaque officiis.",
        },
        {
          id: 5,
          photo:
            "https://static3.mujerhoy.com/www/multimedia/201906/04/media/cortadas/bruma-facial-hidratacion-cara-bobbi-brown-apertura--739x554.jpg",
          name: "Arely Barrera",
          job: "Student",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex repellendus omnis maxime, obcaecati ducimus labore, beatae consequatur nesciunt doloremque distinctio neque saepe porro nam voluptas quasi aliquam ullam eaque officiis.",
        },
        {
          id: 6,
          photo:
            "https://phantom-telva.unidadeditorial.es/1a05e4d35b783498470b2100143b0158/crop/0x0/2048x1152/resize/1200/f/webp/assets/multimedia/imagenes/2020/01/15/15791248564144.jpg",
          name: "Maria Tangarife",
          job: "Student",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex repellendus omnis maxime, obcaecati ducimus labore, beatae consequatur nesciunt doloremque distinctio neque saepe porro nam voluptas quasi aliquam ullam eaque officiis.",
        },
      ],
    };
  },
};
</script>

<style>
</style>