<template>
  <!-- Container -->
  <div id="container">
    <TopBtn />
    <!-- sub_visual -->
    <SubVisual :subTopCont = "subTopCont" /> 
    <!-- portfolio -->
    <div id="contents_body">
      <div class="inner">
        <div class="portfolio-title">
          <h3>대전세잔직업전문학교</h3>
        </div>
        <div class="portfolio-detail">
          <div class="portfolio-img"><img :src="portfolioData.detailImg"></div>
          <div class="portfolio-bg">
            <div class="portfolio-cont">
              <h3>PORTFOLIO</h3>
              <!-- 포트폴리오 소개 -->
              <ul class="portfolio-into">
                <li>
                  <h4>수강생</h4>
                  <p>{{ portfolioData.name }}</p>
                </li>
                <li>
                  <h4>과정</h4>
                  <p>{{ portfolioData.num }}</p>
                </li>
                <li>
                  <h4>과정명</h4>
                  <p>{{ portfolioData.eduTitle }}</p>
                </li>
                <li>
                  <h4>과정 기간</h4>
                  <p>{{ portfolioData.date }}</p>
                </li>
                <li>
                  <h4>URL</h4>
                  <a :href="portfolioData.portfolioUrl" target="_blank" class="portfolio-url">포트폴리오 바로가기</a>
                </li>
              </ul>
            </div>
          </div>
        </div> <!-- end : portfolio -->
        <!-- button -->
        <div class="detail__btn__container">
          <router-link to="/portfolio" type="button" class="btn__list">목록으로</router-link>
        </div>
      </div> <!-- end : inner -->
    </div> <!-- end : contents_body -->
  </div>
</template>

<script>
import TopBtn from '@/components/common/TopBtn.vue';
import SubVisual from '@/components/common/SubVisual.vue';
import { portfolioData } from '@/data/main/portfolio_data';

export default {
  components : {
    TopBtn,
    SubVisual,
  },
  data() {
    return {
      portfolioData: {},
      subTopCont : {
        className : 'port',
        title : "포트폴리오",
        desc : '대전세잔직업전문학교는 디자인 교육에 전문적인 학교로서 테크놀로지와 어우러진 삶을 더욱 풍요롭고 아름답게 만드는 디자인 발전을 위해 최선을 다하고 있습니다.',
        url : '/portfolio/'
      }
    }
  },
  mounted() {
    const id = parseInt(this.$route.params.id);
    this.portfolioData = portfolioData.find(item => item.id === id) || {};
  }
}
</script>

<style lang="scss"> 
  @use '@/styles/portfolio/portfolio.scss';
</style>