<template>
  <HomePage />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomePage from "@/components/HomePage.vue";
@Component({
  components: {
    HomePage,
  },
})
export default class HomeView extends Vue {
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>
