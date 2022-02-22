<template>
  <h3>Hey!</h3>

  <greeting-component :age="age"></greeting-component>
  <user-component :age="age" :ageChangeFn="updateAgeCB" @age-change="updateAge"></user-component>
</template>

<script>
  import GreetingComponent from "./components/Greeting.vue";
  import UserComponent from "./components/User.vue";

  export default {
    name: "App",
    components: {
      GreetingComponent,
      UserComponent,
    },
    data() {
      return {
        age: 20,
      };
    },
    methods: {
      updateAge(num) {
        this.age += num;
      },
      updateAgeCB(num) {
        this.age += num;
      },
    },
  };
</script>
