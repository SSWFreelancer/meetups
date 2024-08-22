<template>
  <form class="form" @submit.prevent="login">
    <div class="form__container">
      <div class="form__content">
        <Title> {{ $t("message.login") }} </Title>
        <Input v-model="email" type="email" placeholder="demo@email"
          >Email</Input
        >
        <Input v-model="password" type="password" placeholder="password">{{
          $t("message.password")
        }}</Input>
        <Button>{{ $t("message.login") }}</Button>
        <div class="form__bottom">
          {{ $t("message.noAccount") }}
          <router-link to="/signup">{{ $t("message.signup") }}</router-link>
        </div>
      </div>
    </div>
    <ErrorMessage :message="errorMessage" :visible="showError" />
  </form>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Title from "@/components/Title.vue";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import ErrorMessage from "./ErrorMessage.vue";
@Component({
  components: {
    Title,
    Input,
    Button,
    ErrorMessage,
  },
})
export default class SingInPage extends Vue {
  email: string = "";
  password: string = "";
  errorMessage: string = "";
  showError: boolean = false;
  login() {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === this.email && user.password === this.password) {
        this.$router.push("/");
        this.$store.commit("login");
      } else {
        this.displayError("Неверный email или пароль");
      }
    } else {
      this.displayError("Пользователь не найден");
    }
  }
  displayError(message: string) {
    this.errorMessage = message;
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
    }, 2000);
  }
}
</script>
