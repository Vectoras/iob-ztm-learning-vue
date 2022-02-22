<template>
  <select v-model="componentName">
    <option value="HomeComponent">Home</option>
    <option value="AboutComponent">About</option>
  </select>

  <component :is="componentName"></component>
</template>

<script>
  import HomeComponent from "./components/Home.vue";
  import AboutComponent from "./components/About.vue";

  export default {
    name: "App",
    components: {
      HomeComponent,
      AboutComponent,
    },
    data() {
      return {
        componentName: "HomeComponent",
      };
    },
  };
</script>
