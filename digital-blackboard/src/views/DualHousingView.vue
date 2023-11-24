<template>
  <NavBar/>
  <DualHousing/>
</template>

<script>
  import {defineComponent} from "vue";
  import DualHousing from "@/components/Niggl/DualHousing.vue";
  import NavBar from "@/components/Niggl/NavBar.vue";

  export default defineComponent({
    components: {DualHousing, NavBar}
  })
</script>