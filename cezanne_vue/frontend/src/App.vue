<template>
  <div id="wrap">
    <!-- popup :: sitemap -->
    <PopSiteMap v-if="isOpen" @pop-sitemap="popSiteMap" />
    <Header @pop-sitemap="popSiteMap" />
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
    data() {
      return {
        isOpen : false
      }
    },
    methods : {
      popSiteMap() {
        this.isOpen = !this.isOpen;
      }
    }
  }
</script>

<style lang="scss">
  
</style>