const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      middleName: "",
      lastName: "Doe",
      url: "https://google.com",
      raw_url: `<a href="https://google.com" target="_blank">Google</a>`,
      age: 20,
    };
  },
  computed: {
    fullName() {
      console.log("fullName() has been called as a computed property");
      return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
    },
  },
  methods: {
    increment() {
      this.age++;
    },
    updateLastName(message, event) {
      console.log(message);
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        console.log("watcher has been called");
        this.age = 20;
      }, 3000);
    },
  },
}).mount("#app");
