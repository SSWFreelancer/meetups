<template>
  <form class="form">
    <div class="form__container">
      <div class="form__content">
        <Title>Регистрация </Title>
        <Input type="email">Email</Input>
        <Input type="text">Имя</Input>
        <Input type="password">Пароль</Input>
        <Input type="password">Повтор пароля </Input>
        <div class="form__agree">
          <input required type="checkbox" id="agree" />
          <label for="agree"> <span></span> Я согласен с условиями </label>
        </div>
        <Button>Зарегистрироваться</Button>
        <div class="form__bottom">
          Уже есть аккаунт?
          <router-link to="/signin">Войдите</router-link>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Title from "@/components/Title.vue";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
@Component({
  components: {
    Title,
    Input,
    Button,
  },
})
export default class SingUpPage extends Vue {}
</script>
