<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ double }}</p>
    <button type="button" @click.prevent="increment">Click me</button>

    <p>{{ name }}</p>

    <input type="text" v-model="phrase" />
    <p>{{ reversedPhrase }}</p>

    <button type="button" ref="btn">Button</button>
  </div>

  <app-alert :user="user" />
</template>

<script>
  import { ref, reactive, toRefs, onBeforeMount, onMounted } from "vue";
  import AppAlert from "@/components/Alert.vue";
  import { useNumber } from "@/hooks/number.js";
  import { usePhrase } from "@/hooks/phrase.js";

  export default {
    name: "App",
    components: {
      AppAlert,
    },
    setup() {
      const btn = ref(null);

      onBeforeMount(() => {
        console.log("onBeforeMount()");
      });
      onMounted(() => {
        console.log("onMounted()");

        btn.value.addEventListener("click", () => {
          console.log("button clicked");
        });
      });

      const user = reactive({
        name: "John",
        age: 20,
      });

      setTimeout(() => {
        user.name = "Luis";
      }, 3000);

      const { num, increment, double } = useNumber();
      const { phrase, reversedPhrase } = usePhrase();

      return {
        num,
        increment,
        ...toRefs(user),
        phrase,
        reversedPhrase,
        double,
        user,
        btn,
      };
    },
  };
</script>
