<template>
  <header class="header">
    <div class="header__container">
      <router-link to="/"
        ><h1 class="header__title">{{ $t("message.logo") }}</h1></router-link
      >
      <nav class="header__menu">
        <router-link v-if="$route.path !== '/'" to="/" class="witharrow">
          {{ $t("message.backTolist") }}
        </router-link>
        <router-link v-if="!this.$store.state.isAuth" to="/signin">
          {{ $t("message.login") }}
        </router-link>
        <router-link v-if="!this.$store.state.isAuth" to="/signup">{{
          $t("message.signup")
        }}</router-link>
        <a v-if="this.$store.state.isAuth">{{ userName }}</a>
        <a @click="logout" v-if="this.$store.state.isAuth">{{
          $t("message.logout")
        }}</a>
        <div class="header__select">
          <select v-model="selectedLanguage" @change="changeLanguage">
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Header extends Vue {
  selectedLanguage: string = this.$i18n.locale;

  changeLanguage() {
    this.$i18n.locale = this.selectedLanguage;
    localStorage.setItem("language", this.selectedLanguage);
  }

  userName: string = "";
  mounted() {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      this.selectedLanguage = savedLanguage;
      this.$i18n.locale = savedLanguage;
    }

    const userString = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      this.userName = user.name;
    } else {
      console.log("No user found in localStorage");
    }
  }
  beforeUpdate() {
    const userString = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      this.userName = user.name;
    } else {
      console.log("No user found in localStorage");
    }
  }
  logout() {
    this.$router.push("/signin");
    this.$store.commit("logout");
  }
}
</script>

<style lang="sass" scoped>
.header
    padding: 30px 0
    &__title
        font-size: 40px
        font-weight: 700
        text-align: center
        text-transform: uppercase
    &__container
        display: flex
        flex-direction: column
        gap:30px
        align-items: center
        @media(max-width: 600px)
            align-items: stretch
    &__select
      position: relative
      & select
        width: 100%
        cursor: pointer
        border-radius: 16px
        border: 1px solid #b8c5e2
        padding: 10px 15px
        color: #34423f
        padding-right: 35px
        font-size: 18px
        appearance: none
        display: flex
        align-items: center
        transition: all 0.3s ease 0s
        gap: 10px
        &:hover
          border-color: #4c6bb6
      &:after
        content: ""
        position: absolute
        top: 50%
        right: 15px
        transform: translate(0, -60%) rotate(45deg)
        border: solid #cbd4e9
        border-width: 0 3px 3px 0
        display: inline-block
        padding: 3px

    &__menu
        display: flex
        flex-wrap: wrap
        row-gap: 15px
        align-items: center
        text-align: center
        @media(max-width: 600px)
            flex-direction: column
            flex-wrap: nowrap
            align-items: stretch
            text-align: left

        & a
            cursor: pointer
            padding: 0 20px
            font-size: 20px
            position: relative
            transition: all 0.3s ease 0s
            &:hover
                color: #4c6bb6
            &:after
                content: ""
                position: absolute
                left: 0
                top: 50%
                transform: translate(0, -50%)
                width: 5px
                height: 5px
                border-radius: 50%
                background-color: #cbd4e9
            &.witharrow
                &:after
                    display: none
                &:before
                    content:''
                    position: absolute
                    left: 0
                    top: 50%
                    transform: translate(0, -50%) rotate(135deg)
                    border: solid #cbd4e9
                    border-width: 0 3px 3px 0
                    display: inline-block
                    padding: 3px
</style>
