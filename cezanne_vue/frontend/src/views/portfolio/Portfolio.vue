<template>
  <!-- Container -->
  <div id="container">
    <TopBtn />
    <!-- sub_visual -->
    <SubVisual :subTopCont="subTopCont" /> 
    <!-- contents_body -->
    <div id="contents_body">
      <!-- inner -->
      <div class="inner">
        <div class="common__tab">
          <!-- tab -->
          <ul class="tab__list">
            <li
              :class="{ active : selectedType === 'all'}"
              @click="selectedType = 'all'"
            >
              <router-link to="#">전체</router-link>
            </li>
            <li
              :class="{ active : selectedType === 'web'}"
              @click="selectedType = 'web'"
            >
              <router-link to="#">웹 과정</router-link>
            </li>
            <li
              :class="{ active : selectedType === 'edit'}"
              @click="selectedType = 'edit'"
            >
              <router-link to="#">편집 과정</router-link>
            </li>
            <li
              :class="{ active : selectedType === 'meta'}"
              @click="selectedType = 'meta'"
            >
              <router-link to="#">메타버스 과정</router-link>
            </li>
          </ul>

          <div class="tab__contents">
            <div class="tab__content active">
              <div class="common__top">
                <div>
                    <span>total</span>
                    <strong data-count></strong>
                </div>
                <!-- search -->
                <div class="top__search">
                    <div class="input__wrap">
                      <input 
                          type="text" 
                          name="search" 
                          id="search" 
                          autocomplete="off"
                          placeholder="검색"
                      >
                      <button type="button"><i class="ri-search-line"></i></button>
                    </div>
                </div>
              </div> 
              <!-- portfolio List -->
              <PortfolioList :portfolioData="portfolioFilter"/>
            </div>
          </div>
        </div>
      </div> <!-- end : inner -->
    </div> <!-- end : contents_body -->
  </div>
</template>

<script>
import TopBtn from '@/components/common/TopBtn.vue';
import SubVisual from '@/components/common/SubVisual.vue';
import PortfolioList from '@/components/portfolio/PortfolioList.vue';
import { portfolioData } from '@/data/main/portfolio_data';

export default {
  components : {
    TopBtn,
    SubVisual,
    PortfolioList,    
  },
  data() {
    return {
      portfolioData,
      selectedType : 'all',
      subTopCont : {
        className : 'port',
        title : "포트폴리오",
        desc : '대전세잔직업전문학교는 디자인 교육에 전문적인 학교로서 \n테크놀로지와 어우러진 삶을 더욱 풍요롭고 아름답게 만드는 디자인 발전을 위해 최선을 다하고 있습니다.',
        url : '/portfolio/'
      }
    }
  },
  computed : {
    portfolioFilter() {
      if(this.selectedType === 'all') {
        return portfolioData
      }
      return this.portfolioData.filter(item => item.type === this.selectedType);
    }
  }
}
</script>

<style lang="scss"> 
  @use '@/styles/portfolio/portfolio.scss';
</style>