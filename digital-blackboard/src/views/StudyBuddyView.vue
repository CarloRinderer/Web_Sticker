<template>
    <NavBar/>
    <StudyBuddy/>
</template>

<script>
import {defineComponent} from "vue";
import StudyBuddy from "@/components/Niggl/StudyBuddy.vue";
import NavBar from "@/components/Niggl/NavBar.vue";

export default defineComponent({
  components: {StudyBuddy, NavBar}
})
</script>

<style>

</style>