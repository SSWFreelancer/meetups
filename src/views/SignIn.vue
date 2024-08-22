<template>
  <SingInPage />
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SingInPage from "@/components/SignInPage.vue";
@Component({
  components: {
    SingInPage,
  },
})
export default class SingInView extends Vue {
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>
