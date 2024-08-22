<template>
  <div class="input">
    <label>
      <slot></slot>
    </label>
    <input
      :type="type"
      :required="required"
      :placeholder="placeholder"
      v-model="inputValue"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Model } from "vue-property-decorator";
@Component
export default class Input extends Vue {
  @Prop({ required: false }) type!: string;
  @Prop({ required: false }) placeholder!: string;
  @Prop({ required: false, default: true }) required!: boolean;

  @Model("input", { type: String }) value!: string;

  get inputValue(): string {
    return this.value;
  }

  set inputValue(val: string) {
    this.$emit("input", val);
  }
}
</script>

<style lang="sass" scoped>
.input
    display: flex
    flex-direction: column
    & label
        font-weight: 400
        font-size: 20px
        line-height: 28px
        margin-bottom: 10px
    & input
        padding: 11px 16px
        border-radius: 8px
        border: 2px solid #b8c5e2
        font-weight: 500
        font-size: 20px
        line-height: 28px
        transition: .2s border-color
        background-color: #fff
        &::placeholder
            color: #b8c5e2
            transition: all 0.3s ease 0s
        &:focus
            border-color: #4c6bb6
            &::placeholder
                opacity: 0
</style>
