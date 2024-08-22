<template>
  <div class="home">
    <div class="home__container">
      <div class="home__top">
        <nav class="home__nav">
          <button
            :class="{ active: filter === 'all' }"
            @click="setFilter('all')"
          >
            {{ $t("message.all") }}
          </button>
          <button
            :class="{ active: filter === 'closed' }"
            @click="setFilter('closed')"
          >
            {{ $t("message.past") }}
          </button>
          <button
            :class="{ active: filter === 'register' }"
            @click="setFilter('register')"
          >
            {{ $t("message.expected") }}
          </button>
        </nav>
        <div class="home__actions">
          <div class="home__search">
            <img src="@/assets/images/icons/search.svg" alt="" />
            <input
              type="text"
              :placeholder="$t('message.search')"
              v-model="searchQuery"
            />
          </div>
        </div>
      </div>
      <div class="home__cards" v-if="filteredMeetups.length > 0">
        <router-link
          v-for="meetup in filteredMeetups"
          :key="meetup.id"
          :to="{ name: 'meetup', params: { id: meetup.id } }"
        >
          <CardThumb
            :title="meetup.title"
            :image="meetup.image"
            :organizer="meetup.organizer"
            :dateIso="meetup.dateIso"
            :place="meetup.place"
            :type="meetup.type"
          />
        </router-link>
      </div>
      <div v-else class="home__none">{{ $t("message.noMatches") }}</div>
    </div>
    <SuccessMessage
      v-if="this.$store.state.justLoggedIn"
      message="Вы вошли в аккаунт"
      :visible="showSuccess"
    />
  </div>
</template>

<script lang="ts">
import meetupsData from "@/mixins/meetups.js";
import { Component, Vue } from "vue-property-decorator";
import CardThumb from "@/components/CardThumb.vue";
import SuccessMessage from "./SuccessMessage.vue";
@Component({
  components: {
    CardThumb,
    SuccessMessage,
  },
})
export default class HomePage extends Vue {
  showSuccess: boolean = false;
  mounted() {
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 2000);
  }
  meetups = meetupsData.data().meetups;
  filter: string = "all";
  setFilter(filter: string) {
    this.filter = filter;
  }
  searchQuery: string = "";
  get filteredMeetups() {
    let filtered = this.meetups;
    if (this.filter !== "all") {
      filtered = filtered.filter((meetup) => meetup.type === this.filter);
    }

    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (meetup) =>
          meetup.title.toLowerCase().includes(query) ||
          meetup.organizer.toLowerCase().includes(query)
      );
    }

    return filtered;
  }
}
</script>

<style lang="sass" scoped>
.home
  &__container
    width: 100%
    display: flex
    flex-direction: column
    gap: 24px
  &__cards
    display: flex
    flex-direction: column
    gap: 24px
  &__none
    font-size: 40px
    text-align: center
    color: #4c6bb6
    font-weight: 700
    margin-top: 40px
    @media(max-width: 600px)
      font-size: 32px

  &__top
    display: flex
    align-items: center
    gap:20px
    flex-wrap: wrap
    justify-content: space-between
    @media(max-width: 767px)
      flex-direction: column
      align-items: stretch

  &__nav
    display: flex
    align-items: center
    flex-wrap: wrap
    gap:16px
    @media(max-width: 767px)
      gap:4px

    & button
      padding: 6px 16px
      border-radius: 22px
      border: 2px solid transparent
      color: #4c6bb6
      font-weight: 400
      background: transparent
      font-size: 20px
      transition: .2s border-color
      @media(max-width: 767px)
        padding: 6px 8px
      &.active
        border-color: #4c6bb6
  &__actions
    display: flex
    flex-wrap: wrap
    align-items: center
    gap: 20px
  &__search
    position: relative
    flex:1 1 auto
    max-width: 300px
    @media(max-width: 767px)
      max-width: 100%
    & input
      padding: 9px 20px
      padding-left: 50px
      border: 2px solid #b8c5e2
      background-color: #fff
      border-radius: 22px
      font-weight: 500
      width: 100%
      min-width: 0
      font-size: 20px
      transition: .2s border-color
      &::placeholder
          color: #b8c5e2
          transition: all 0.3s ease 0s
      &:focus
          border-color: #4c6bb6
          &::placeholder
              opacity: 0
    & img
      position: absolute
      left: 16px
      top: 50%
      width: 24px
      transform: translate(0, -50%)
      pointer-events: none
      user-select: none
</style>
