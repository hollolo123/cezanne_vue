<template>
  <div id="wrap">
    <TopBtn/>
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
  import TopBtn from './components/common/TopBtn.vue';
  import 'primeicons/primeicons.css'

  export default {
    components : {
      TopBtn,
      PopSiteMap,
      Header,
      Footer,
    },
    data() {
      return {
        isOpen : false
      }
    },
    watch : {
      $route() {
        if(this.isOpen){
          this.isOpen = false;
        }
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