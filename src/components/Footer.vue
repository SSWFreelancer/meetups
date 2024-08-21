<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__text"><b>Vue 3 Course</b> © 2022-2024</div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Footer extends Vue {}
</script>

<style lang="sass" scoped>
.footer
    padding: 40px 0
    font-size: 18px
    &__text
        text-align: center
        & b
            color: #4c6bb6
</style>
