<template>
  <div id="app" class="wrapper">
    <Header />
    <div class="page">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
@Component({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {}
</script>
<style lang="sass">
.wrapper
  display: flex
  flex-direction: column
  overflow: hidden
  min-height: 100%
.page
  flex:1 1 auto
  padding: 40px 0
  background: #f8f9fc
</style>
