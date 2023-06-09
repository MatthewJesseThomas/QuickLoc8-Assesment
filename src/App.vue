<template>
  <NavBarComponent/>
  <main>
    <router-view/>
  </main>
  <FooterBottomComponent/>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue'
import FooterBottomComponent from './components/FooterBottomComponent.vue'
export default {
  components: {
    FooterBottomComponent,
    NavBarComponent
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  overflow-y: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 100vh;
}
</style>