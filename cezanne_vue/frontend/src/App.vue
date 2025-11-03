<template>
  <div id="wrap">
    <!-- popup :: sitemap -->
    <PopSiteMap />
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
  import PopSiteMap from './components/layout/PopSiteMap.vue';
  import 'primeicons/primeicons.css'

  export default {
    components : {
      PopSiteMap,
      Header,
      Footer,
    },
    setup() {

    }
  }
</script>

<style lang="scss">
  
</style>