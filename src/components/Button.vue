<template>
  <button>
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Button extends Vue {}
</script>
<style lang="sass" scoped>
button
    display: inline-block
    padding: 10px 24px
    font-weight: 700
    font-size: 20px
    color: #fff
    text-align: center
    background-color:#4c6bb6
    transition: all 0.3s ease 0s
    &:hover
        background-color: #92b1fd
</style>
