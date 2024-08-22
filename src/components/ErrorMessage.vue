<template>
  <div :class="visible ? 'error-message visible' : 'error-message'">
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ErrorMessage extends Vue {
  @Prop({ default: "" }) message!: string;
  @Prop({ default: false }) visible!: boolean;
}
</script>

<style scoped lang="sass">
.error-message
  display: block
  background-color: #f8d7da
  color: #721c24
  padding: 15px
  border: 1px solid #f5c6cb
  border-radius: 4px
  position: fixed
  right: -50%
  top: 20px
  font-size: 20px
  transition: all 0.3s ease 0s
  pointer-events:none
  opacity:0
  visibility:hidden
  &.visible
    right: 25px
    pointer-events:auto
    opacity:1
    visibility:visible
</style>
