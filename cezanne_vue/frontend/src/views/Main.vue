<template>
  <div id="container">
    <div class="contents">
      <MainSlideComp />
      <div class="inner">
        <PortfolioComp />
        <EducationComp />
        <ConsultComp />
      </div>
    </div>
  </div>
</template>

<script>
  import MainSlideComp from '@/components/main/MainSlideComp.vue';
  import PortfolioComp from '@/components/main/PortfolioComp.vue';
  import EducationComp from '@/components/main/EducationComp.vue';
  import ConsultComp from '@/components/main/ConsultComp.vue';

  export default {
    components : {
      MainSlideComp,
      PortfolioComp,
      EducationComp,
      ConsultComp
    }
  }
</script>

<style lang="scss">
  @use '@/styles/main/main' as *;
  
</style>