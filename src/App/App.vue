<template>
  <div id="app">
    <header-component />
    <main>
      <hello-component :name="name" :initialEnthusiasm="initialEnthusiasm" />
        <router-view></router-view>
    </main>
    <footer-component />
  </div>
</template>

<script>
  import Vue from "vue";
  import HelloComponent from "../Hello";
  import HeaderComponent from "../components/Header/Header";
  import FooterComponent from "../components/Footer/Footer";

  export default Vue.extend({
    data() {
      return {
        name: "world",
        initialEnthusiasm: 5
      }
    },
    components: {
      HeaderComponent,
      FooterComponent,
      HelloComponent
    }
  });
</script>

<style scoped>
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  main {
    padding: 10px 0;
  }
</style>
