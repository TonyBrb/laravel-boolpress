<template>
  <div>
    <Header />
    <!-- qui si iniettano tuttii componenti dalle rotte -->
    <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/partials/Header.vue';

export default {
  name: 'App',
  components:{
    Header,
  }
}
</script>

<style lang="scss">

</style>