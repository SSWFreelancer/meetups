<template>
  <form class="form" @submit.prevent="register">
    <div class="form__container">
      <div class="form__content">
        <Title>Регистрация</Title>
        <Input v-model="email" type="email">Email</Input>
        <Input v-model="name" type="text">Имя</Input>
        <Input v-model="password" type="password">Пароль</Input>
        <Input v-model="confirmPassword" type="password">Повтор пароля</Input>
        <div class="form__agree">
          <input v-model="agree" required type="checkbox" id="agree" />
          <label for="agree"> <span></span> Я согласен с условиями </label>
        </div>
        <Button type="submit">Зарегистрироваться</Button>
        <div class="form__bottom">
          Уже есть аккаунт?
          <router-link to="/signin">Войдите</router-link>
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
