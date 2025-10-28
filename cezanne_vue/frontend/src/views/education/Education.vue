<template>
  <!-- Container -->
  <div id="container">
    <TopBtn />
    <SubVisual :subTopCont="subTopCont" />
    <div id="contents_body">
      <div class="inner">
        <div class="common__tab">
          <!-- tab -->
          <ul class="tab__list">
            <li 
              :class="{ active : selectedType === 'all' }" 
              @click="selectedType = 'all'"
            >
              <router-link to="#">전체</router-link>
            </li>
            <li 
              :class="{ active : selectedType === 'edu_value_1'}"
              @click="selectedType = 'edu_value_1'"
            >
              <router-link to="#">산업구조변화대응특화훈련</router-link>
            </li>
            <li
              :class="{ active : selectedType === 'edu_value_2'}"
              @click="selectedType = 'edu_value_2'"
            >
              <router-link to="#">국가기간 및 전략산업</router-link>
            </li>
            <li
              :class="{ active : selectedType === 'edu_value_3'}"
              @click="selectedType = 'edu_value_3'"
            >
              <router-link to="#">근로자 과정</router-link>
            </li>
          </ul>
          <!-- tab contents -->
          <EduListComp :educationData="filterData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBtn from '@/components/common/TopBtn.vue';
import SubVisual from '@/components/common/SubVisual.vue';
import EduListComp from '@/components/education/EduListComp.vue';
import { educationData } from '@/data/main/education_data';

export default {
  components : {
    TopBtn,
    SubVisual,
    EduListComp
  },
  data() {
    return {
      educationData,
      selectedType : 'all',
      subTopCont : {
        className : 'edu',
        title : '교육 과정', 
        desc : '대전세잔직업전문학교에서는 취업과 실무정보를 면밀히 분석하여 \n성공적이고 효율적으로 디자이너가 되는 길을 열어드립니다.',
        url : '/education/'
      }
    }
  },
  computed : {
    filterData() {
      if(this.selectedType === 'all') {
        return educationData
      }
      return this.educationData.filter(item => item.type === this.selectedType);
    }
  }
}
</script>

<style lang="scss">
  @use '@/styles/education/education.scss'
</style>