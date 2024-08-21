<template>
  <form class="form">
    <div class="form__container">
      <div class="form__content">
        <Title>Вход </Title>
        <Input type="email" placeholder="demo@email">Email</Input>
        <Input type="password" placeholder="password">Пароль</Input>
        <Button>Войти</Button>
        <div class="form__bottom">
          Нет аккаунта?
          <router-link to="/signup">Зарегистрируйтесь</router-link>
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
export default class SingIn extends Vue {}
</script>
