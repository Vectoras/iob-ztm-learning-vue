<template>
  <h1>About Page</h1>
</template>

<script>
  export default {
    name: "AboutComponent",
    unmounted() {
      console.log("About component unmounted");
    },
    activated() {
      console.log("About component activated");
    },
    deactivated() {
      console.log("About component deactivated");
    },
  };
</script>

<style></style>
