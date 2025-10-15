<template>
  <!-- Container -->
  <div id="container">
    <!-- sub_visual -->
    <SubVisual :subTopCont = "subTopCont" /> 
    <!-- portfolio -->
    
  </div>
</template>

<script>
import SubVisual from '@/components/common/SubVisual.vue';
  export default {
    components : {
      SubVisual,
    },
    data() {
      return {
        subTopCont : {
          className : 'port',
          title : "포트폴리오",
          desc : '대전세잔직업전문학교는 디자인 교육에 전문적인 학교로서 테크놀로지와 어우러진 삶을 더욱 풍요롭고 아름답게 만드는 디자인 발전을 위해 최선을 다하고 있습니다.',
          url : '/portfolio/'
        }
      }
    }
  }
</script>

<style lang="scss"> 
  @use '@/styles/portfolio/portfolio.scss';
</style>