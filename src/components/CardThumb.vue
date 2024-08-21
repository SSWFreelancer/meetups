<template>
  <div class="card-thumb">
    <div class="card-thumb__image">
      <img v-if="image" :src="image" alt="" />
      <img v-else src="@/assets/images/defaultcard.svg" alt="" />
      <div class="card-thumb__title">{{ title }}</div>
    </div>
    <div class="card-thumb__content">
      <div
        :class="type == 'register' ? 'card-thumb__dec' : 'card-thumb__dec red'"
      >
        {{ type == "register" ? "Участвую" : "Закрыто" }}
      </div>
      <ul>
        <li>
          <img src="@/assets/images/icons/user.svg" alt="" />
          {{ organizer }}
        </li>
        <li>
          <img src="@/assets/images/icons/location.svg" alt="" />
          {{ place }}
        </li>
        <li>
          <img src="@/assets/images/icons/cal.svg" alt="" />
          {{ dateIso }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class CardThumb extends Vue {
  @Prop({ required: true }) title!: string;
  @Prop({ required: true }) image!: string;
  @Prop({ required: true }) dateIso!: string;
  @Prop({ required: true }) organizer!: string;
  @Prop({ required: true }) place!: string;
  @Prop({ required: true }) type!: string;
}
</script>

<style lang="sass" scoped>
.card-thumb
    cursor: pointer
    display: grid
    grid-template-columns: 1fr 1fr
    box-shadow: 0 2px 16px #0000001f
    overflow: hidden
    @media(max-width: 767px)
        display: block
    &__dec
        position: absolute
        right: 0
        top: 0
        font-size: 16px
        background: #dff2ec
        color: #24a37e
        padding: 4px 8px
        border-radius: 0 0 0 8px
        &.red
            background: #ffa9b0
            color: #db3851
    &__image
        min-height: 220px
        position: relative
        display: flex
        justify-content: center
        align-items: center
        overflow: hidden
        padding: 20px
        &:after
            content: ''
            position: absolute
            left: 0
            top: 0
            width: 100%
            height: 100%
            background: linear-gradient(0deg,rgba(0,0,0,.4),rgba(0,0,0,.4))
            z-index: 0
            pointer-events: none
        & img
            position: absolute
            left: 0
            top: 0
            width: 100%
            height: 100%
            object-fit: cover
            z-index: 0
            transition: all 0.3s ease 0s
        .card-thumb:hover & img
            transform: scale(1.1)
    &__title
        color: #fff
        position: relative
        z-index: 2
        text-wrap:balance
        font-size: 32px
        font-weight: 700
        text-align: center
    &__content
        position: relative
        background: #fff
        padding: 30px
        display: flex
        flex-direction: column
        justify-content: center
        border-left: 5px solid #4c6bb6
        @media(max-width: 767px)
            border-left: none
            border-top: 5px solid #4c6bb6
        & ul
            display: flex
            flex-direction: column
            gap: 10px
            & li
                display: flex
                align-items: center
                gap: 10px
                font-size: 18px
                & img
                    width: 25px
                    flex:0 0 25px
</style>
