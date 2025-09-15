<template>
  <div id="wrap">
    <Header />
    <main id="main">
      <!-- router : index.js -->
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
  import Header from './components/layout/Header.vue';
  import Footer from './components/layout/Footer.vue';

  export default {
    components : {
      Header,
      Footer
    },
    setup() {

    }
  }
</script>

<style lang="scss">
  
</style>