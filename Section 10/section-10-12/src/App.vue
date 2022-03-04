<template>
  <div id="app">
    <hello-world #default="{user, fav}">
      <p>Hello {{ user.name }}</p>
      <p>Your favorites food are</p>
      <ul>
        <li v-for="f in fav" :key="f">{{ f }}</li>
      </ul>
    </hello-world>
  </div>
</template>

<script>
  import HelloWorld from "./components/HelloWorld.vue";

  export default {
    name: "App",
    components: {
      HelloWorld,
    },
  };
</script>
