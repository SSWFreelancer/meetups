<template>
  <h4 class="title">
    <slot></slot>
  </h4>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Title extends Vue {}
</script>

<style lang="sass" scoped>
.title
    font-size: 30px
    font-weight: 700
    text-align: center
</style>
