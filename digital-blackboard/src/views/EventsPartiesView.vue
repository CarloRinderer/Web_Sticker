<template>
  <NavBar/>
  <EventsParties/>
</template>

<script>
import {defineComponent} from "vue";
import EventsParties from "@/components/Sticker_app/NaviGator.vue";
import NavBar from "@/components/Niggl/NavBar.vue";

export default defineComponent({
  components: {EventsParties, NavBar}
})
</script>