<template>
  <MeetUpPage/>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MeetUpPage from "@/components/MeetUpPage.vue";
@Component({
  components: {
    MeetUpPage
  }
})
export default class MeetupView extends Vue {
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>


.programm
  &__row
      padding:  20px 0
      border-bottom: 1px solid #dee1e1
      display: flex
      align-items: flex-start
      gap: 20px
      @media(max-width: 600px)
        padding: 15px 0
        gap: 10px
      & p
        flex: 0 0 150px
        display: flex
        align-items: flex-start
        gap: 10px
        font-size: 18px
        color: #4c6bb6
        @media(max-width: 600px)
          font-size: 16px
          flex: 0 0 100px
  &__text
    flex: 1 1 auto
    display: flex
    flex-direction: column
    gap: 10px
    font-weight: 400
    font-size: 18px
    & b
      text-transform: capitalize
      font-weight: 700
    @media(max-width: 600px)
      font-size: 16px



.card
  display: flex
  flex-direction: column
  gap: 40px
  &__image
    position: relative
    padding: 30px 20px
    height: 400px
    display: flex
    flex-direction: column
    justify-content: center
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
  &__title
    color: #fff
    text-align: center
    position: relative
    z-index: 1
    text-wrap:balance
    font-size: 60px
    font-weight: 900
    @media(max-width: 991px)
      font-size: calc(40px + (60 - 40) * ((100vw - 375px) / (991 - 375)))
  &__content
    display: flex
    align-items: flex-start
    gap:30px
    @media(max-width: 991px)
      flex-direction: column
      align-items: stretch
      gap:40px

  &__body
    display: flex
    flex-direction: column
    gap: 20px
    flex:1 1 auto
    @media(max-width: 991px)
      flex:0 0 auto

  &__description
    word-break: break-word
    font-size: 18px
  &__nav
    display: flex
    gap:20px
    border-bottom: 1px solid #dee1e1
    & a
      cursor: pointer
      font-size: 18px
      padding-bottom: 5px
      position: relative
      transition: all 0.3s ease 0s
      &:after
        content:''
        width: 0
        bottom: 0
        left: 50%
        height: 1px
        background: #4c6bb6
        position: absolute
        transition: all 0.3s ease 0s
      &:hover
        color: #4c6bb6
      &.active
        color: #4c6bb6
        &:after
          width: 100%
          left: 0
  &__list
    flex:0 0 30%
    position: sticky
    display: flex
    flex-direction: column
    gap: 12px
    @media(max-width: 991px)
      flex:0 0 auto

    & li
        display: flex
        align-items: center
        gap: 10px
        font-size: 18px
        & img
            width: 25px
            flex:0 0 25px
</style>
