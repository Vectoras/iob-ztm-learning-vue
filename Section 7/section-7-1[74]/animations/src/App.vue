<template>
  <button type="button" @click="flag = !flag">Toggle</button>

  <!-- <transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">Hello World!</h2>
    <h2 v-else key="secondary">Bye bye!</h2>
  </transition> -->

  <!-- <transition name="zoom" appear type="">
    <h2 v-if="flag" key="main">Hello World!</h2>
  </transition> -->

  <!-- <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="true"
    name="fade"
  >
    <h2 v-if="flag">Hey</h2>
  </transition> -->

  <button type="button" @click="addItem">Add</button>

  <ul>
    <transition-group
      name="fade"
      enter-active-class="animate__animated animated__flipInX"
      leave-active-class="animate__animated animated__flipOutX"
    >
      <li v-for="(number, index) in numbers" :key="number" @click="removeItem(index)">
        {{ number }}
      </li>
    </transition-group>
  </ul>
</template>

<script>
  export default {
    name: "App",
    components: {},
    data() {
      return {
        flag: true,
        numbers: [1, 2, 3, 4, 5],
      };
    },
    methods: {
      removeItem(index) {
        this.numbers.splice(index, 1);
      },
      addItem() {
        const num = Math.floor(Math.random() * 100 + 1);
        const index = Math.floor(Math.random() * this.numbers.length);
        this.numbers.splice(index, 0, num);
      },
      beforeEnter(el) {
        console.log("@before-enter", el);
      },
      enter(el) {
        console.log("@enter", el);

        // const animation = el.animate([{ transform: "scale3d(0,0,0)" }, {}], { duration: 1000 });
        // animation.onfinish = () => done();
      },
      afterEnter(el) {
        console.log("@after-enter", el);
      },
      beforeLeave(el) {
        console.log("@before-leave", el);
      },
      leave(el) {
        console.log("@leave", el);

        // const animation = el.animate([{}, { transform: "scale3d(0,0,0)" }], { duration: 1000 });
        // animation.onfinish = () => done();
      },
      afterLeave(el) {
        console.log("@after-leave", el);
      },
    },
  };
</script>

<style>
  .animated__flipOutX {
    position: absolute;
  }

  .animate__animated {
    animation-duration: 1.5s;
  }

  li {
    font-size: 22px;
    cursor: pointer;
  }

  h2 {
    width: 400px;
    padding: 20px;
    margin: 20px;
  }

  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-active {
    transition: all 0.75s linear;
  }
  .fade-leave-active {
    position: absolute;
  }
  .fade-leave-to {
    transition: all 0.75s linear;
    opacity: 0;
  }
  .fade-move {
    transition: all 0.75s linear;
  }

  .zoom-enter-from {
    opacity: 0;
  }
  .zoom-leave-to {
    opacity: 0;
  }

  .zoom-enter-active {
    animation: zoom-in 1s linear forwards;
    transition: all 2s linear;
  }
  .zoom-leave-active {
    animation: zoom-out 1s linear forwards;
    transition: all 2s linear;
  }

  @keyframes zoom-in {
    from {
      transform: scale(0, 0);
    }
    to {
      transform: scale(1, 1);
    }
  }
  @keyframes zoom-out {
    from {
      transform: scale(1, 1);
    }
    to {
      transform: scale(0, 0);
    }
  }
</style>
