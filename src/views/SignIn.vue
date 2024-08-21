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
export default class SingInView extends Vue {}
</script>
