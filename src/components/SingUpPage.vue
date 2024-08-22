<template>
  <form class="form" @submit.prevent="register">
    <div class="form__container">
      <div class="form__content">
        <Title> {{ $t("message.signup") }}</Title>
        <Input v-model="email" type="email">Email</Input>
        <Input v-model="name" type="text">{{ $t("message.name") }}</Input>
        <Input v-model="password" type="password">{{
          $t("message.password")
        }}</Input>
        <Input v-model="confirmPassword" type="password">{{
          $t("message.rePassword")
        }}</Input>
        <div class="form__agree">
          <input v-model="agree" required type="checkbox" id="agree" />
          <label for="agree">
            <span></span> {{ $t("message.agreement") }}
          </label>
        </div>
        <Button type="submit">{{ $t("message.signup") }}</Button>
        <div class="form__bottom">
          {{ $t("message.haveAccount") }}
          <router-link to="/signin">{{ $t("message.login") }}</router-link>
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
export default class SingUpPage extends Vue {
  email: string = "";
  name: string = "";
  password: string = "";
  confirmPassword: string = "";
  agree: boolean = false;
  errorMessage: string = "";
  showError: boolean = false;

  register() {
    if (this.password === this.confirmPassword) {
      const userData = {
        email: this.email,
        name: this.name,
        password: this.password,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      this.$router.push("/");
      this.$store.commit("login");
    } else {
      this.displayError("Пароли не совпадают");
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
