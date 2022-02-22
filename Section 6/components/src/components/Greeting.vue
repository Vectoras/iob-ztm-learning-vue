<template>
  <p v-if="age < 25">You must be 25 years or older to view this message</p>
  <p v-else>{{ msg }}!</p>
</template>

<script>
  export default {
    name: "GreetingComponent",
    data() {
      return {
        msg: "Hello World",
      };
    },
    props: ["age"],
  };
</script>

<style scoped lang="scss">
  $color: red;

  p {
    color: $color;
  }
</style>
