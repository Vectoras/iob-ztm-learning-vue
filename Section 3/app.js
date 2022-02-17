const vm = Vue.createApp({
  data() {
    return {
      perspective_v: 0,
      rotateX_v: 0,
      rotateY_v: 0,
      rotateZ_v: 0,
    };
  },
  computed: {
    perspective() {
      return `${this.perspective_v}px`;
    },
    rotateX() {
      return `${this.rotateX_v}deg`;
    },
    rotateY() {
      return `${this.rotateY_v}deg`;
    },
    rotateZ() {
      return `${this.rotateZ_v}deg`;
    },
    box_inlineStyling() {
      return {
        transform: `rotateX(${this.rotateX}) rotateY(${this.rotateY}) rotateZ(${this.rotateZ})`,
      };
    },
    container_inlineStyling() {
      return {
        perspective: this.perspective,
      };
    },
  },
  methods: {
    updatePerspective(event) {
      this.perspective_v = event.target.valueAsNumber;
    },
    updateRotateX(event) {
      this.rotateX_v = event.target.valueAsNumber;
    },
    updateRotateY(event) {
      this.rotateY_v = event.target.valueAsNumber;
    },
    updateRotateZ(event) {
      this.rotateZ_v = event.target.valueAsNumber;
    },
  },
  watch: {},
}).mount("#app");
