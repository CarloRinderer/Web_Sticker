<template>
  <NavBar />
  <HelloWorld />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/Niggl/HelloWorld.vue';
import NavBar from "@/components/Niggl/NavBar.vue";

export default defineComponent({
  name: 'HomeView',

  components: {
    NavBar,
    HelloWorld,
  }
});
</script>
