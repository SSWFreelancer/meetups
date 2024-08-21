<template>
  <div class="card">
    <div class="card__image">
      <img v-if="meetup.image" :src="meetup.image" alt="" />
      <img v-else src="@/assets/images/defaultcard.svg" alt="" />
      <div class="card__title">{{ meetup.title }}</div>
    </div>
    <div class="card__container">
      <div class="card__content">
        <div class="card__body">
          <div class="card__nav">
            <a
              v-for="(tab, index) in tabs"
              :key="index"
              :class="{ active: activeTab === index }"
              @click="activeTab = index"
              >{{ tab.name }}
            </a>
          </div>
          <div v-if="activeTab === 0" class="card__description">
            {{ meetup.description }}
          </div>
          <div v-if="activeTab === 1" class="programm">
            <div class="programm__content" v-if="meetup?.agenda.length">
              <div
                class="programm__row"
                v-for="item in meetup.agenda"
                :key="item.id"
              >
                <p>
                  <img
                    v-if="item.type == 'registration'"
                    src="@/assets/images/icons/registration.svg"
                    alt=""
                  />
                  <img
                    v-else-if="item.type == 'talk'"
                    src="@/assets/images/icons/talk.svg"
                    alt=""
                  />
                  <img
                    v-else-if="item.coffee == 'coffee'"
                    src="@/assets/images/icons/coffee.svg"
                    alt=""
                  />
                  <img
                    v-else
                    src="@/assets/images/icons/registration.svg"
                    alt=""
                  />

                  {{ item.startsAt }} - {{ item.endsAt }}
                </p>
                <div class="programm__text">
                  <b>{{
                    item.title
                      ? item.title
                      : item.type === "coffee"
                      ? "Время перерыва на кофе"
                      : item.type === "closing"
                      ? "Закрытие"
                      : item.type === "registration"
                      ? "Регистрация"
                      : "Неизвестный тип"
                  }}</b>
                  <span>{{ item.description }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul class="card__list">
          <li>
            <img src="@/assets/images/icons/user.svg" alt="" />
            {{ meetup.organizer }}
          </li>
          <li>
            <img src="@/assets/images/icons/location.svg" alt="" />
            {{ meetup.place }}
          </li>
          <li>
            <img src="@/assets/images/icons/cal.svg" alt="" />
            {{ meetup.dateIso }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import meetupsData from "@/mixins/meetups.js";

@Component
export default class MeetUpPage extends Vue {
  activeTab = 0;
  tabs = [{ name: "Описание" }, { name: "Программа" }];

  meetup: any = {};
  mounted() {
    const id = Number(this.$route.params.id);
    this.fetchMeetup(id);
  }

  fetchMeetup(id: number) {
    this.meetup = meetupsData
      .data()
      .meetups.find((meetup: any) => meetup.id === id);
  }
}
</script>

<style lang="sass" scoped>
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
