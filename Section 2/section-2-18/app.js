let vm = Vue.createApp({
  data() {
    return {
      isPurple: false,
      selectedColor: "",
      size: 150,
    };
  },
  computed: {
    cicle_classes() {
      return { purple: this.isPurple };
    },
    inlineStyling() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
        lineHeight: `${this.size}px`,
        transform: `rotate(30deg)`,
      };
    },
  },
}).mount("#app");
