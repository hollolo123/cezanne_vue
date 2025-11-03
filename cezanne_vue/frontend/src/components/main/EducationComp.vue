<template>
  <div class="education">
    <div class="inner">
      <div class="tabLayout">
        <h2>세잔 교육과정</h2>
        <p class="text">세잔직업전문학교의 전문적인 수업과정을 안내해드립니다.</p>
        <div class="tabMenu">
          <ul>
            <li 
              :class="{ active : selectTabType === 'all'}"
              @click= "selectTabType = 'all'"
            >
            <!-- 
              :class="{ active : 조건 }"
              click하면 selectTabType이 'all'로 바뀌고, 
              이 조건이 true 이므로 active 클래스 적용 
            -->
              <router-link to="#">전체보기</router-link>
            </li>
            <li 
              :class="{ active : selectTabType === 'edu_value_1'}"
              @click = "selectTabType = 'edu_value_1'"
            >
              <router-link to="#">국가기간·전략사업</router-link>
            </li>
            <li 
              :class="{ active : selectTabType === 'edu_value_2'}"
              @click = "selectTabType = 'edu_value_2'"
            >
              <router-link to="#">근로자과정</router-link>
            </li>
            <li 
              :class="{ active : selectTabType === 'edu_value_3'}"
              @click = "selectTabType = 'edu_value_3'"
            >
              <router-link to="#">산업구조변화대응특화훈련</router-link>
            </li>
          </ul>
        </div>
        <div class="moreBtn">
          <router-link to="/portfolio">
            더보러가기 <i class="arr-icon arr-icon1"></i>
          </router-link>
        </div>
      </div>
      <div class="tabListWrap">
        <p class="refer_text">
          <span class="ico_slide"></span>좌우로 움직여서 확인하실 수 있습니다.
        </p>
        <EduListComp :educationData = "filterEduData" />
      </div>
    </div>
  </div>
</template>

<script>
import EduListComp from './EduListComp.vue';
import { educationData } from '@/data/main/education_data';
export default {
  data() {
    return {
      educationData,
      selectTabType : 'all',
    }
  },
  components : {
    EduListComp
  },
  computed : {
    // 가공된 데이터 정의
    filterEduData() {
      if(this.selectTabType === 'all') {
        return this.educationData;
      }
      return this.educationData.filter(item => item.type === this.selectTabType);
    }
    
  },
  
}
</script>

<style lang="scss">
  @use '@/styles/main/educatiuon' as *;
</style>