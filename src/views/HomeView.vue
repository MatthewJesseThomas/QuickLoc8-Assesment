<template>
  <div class="home">
    <SplashScreenComponent/>
  </div>
  <div>
    <Map/>
  </div>
</template>

<script>
// @ is an alias to /src
import SplashScreenComponent from '@/components/SplashScreenComponent.vue'
import Map from '@/components/MapComponent.vue';

export default {
  name: 'HomeView',
  components: {
    SplashScreenComponent,
    Map
  }
};


</script>

<style scoped>
.home{
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>