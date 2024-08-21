<template>
  <SingUpPage />
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SingUpPage from "@/components/SingUpPage.vue";
@Component({
  components: {
    SingUpPage,
  },
})
export default class SingUpView extends Vue {}
</script>
