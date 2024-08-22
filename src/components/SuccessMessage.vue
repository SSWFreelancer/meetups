<template>
  <div :class="visible ? 'success-message visible' : 'success-message'">
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class SuccessMessage extends Vue {
  @Prop({ default: "" }) message!: string;
  @Prop({ default: false }) visible!: boolean;
}
</script>

<style scoped lang="sass">
.success-message
  display: block
  background: #dff2ec
  color: #24a37e
  padding: 15px
  border: 1px solid #24a37e
  border-radius: 4px
  position: fixed
  right: -100%
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
