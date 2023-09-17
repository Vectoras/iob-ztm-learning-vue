let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
    };
  },
  beforeCreate() {
    console.log("beforeCreate() has been called", this.message);
  },
  created() {
    console.log("created() has been called", this.message);
  },
  beforeMount() {
    console.log("beforeMount() has been called", this.$el);
  },
  mounted() {
    console.log("mounted() has been called", this.$el);
  },
  beforeUpdate() {
    console.log("beforeUpdate() has been called");
  },
  updated() {
    console.log("updated() has been called");
  },
  beforeUnmount() {
    console.log("beforeUnmount() has been called");
  },
  unmounted() {
    console.log("unmounted() has been called");
  },
});

vm.mount("#app");

// setTimeout(() => {
//   vm.mount("#app");
// }, 3000);
