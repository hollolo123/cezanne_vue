<template>
  <div class="education">
    <div class="inner">
      <div class="tabLayout">
        <h2>세잔 교육과정</h2>
        <p class="text">세잔직업전문학교의 전문적인 수업과정을 안내해드립니다.</p>
        <div class="tabMenu">
          <!-- <ul>
            <li ref="edu_value_all" @click="tabClick('all')" ><router-link 
            to="#">전체보기</router-link></li>
            <li ref="edu_value_1" @click="tabClick('edu_value_1')" 
            ><router-link to="#">국가기간·전략사업</router-link></li>
            <li ref="edu_value_2" @click="tabClick('edu_value_2')" 
            ><router-link to="#">근로자과정</router-link></li>
            <li ref="edu_value_3" @click="tabClick('edu_value_3')" 
            ><router-link to="#">산업구조변화대응특화훈련</router-link></
            li>
          </ul> -->
          <ul>
            <li 
              :class="{active : selectTabType === 'all'}" 
              @click="selectTabType = 'all'" 
            >
              <router-link to="#">전체보기</router-link>
            </li>
            <li 
              :class="{active : selectTabType === 'edu_value_1'}" 
              @click="selectTabType = 'edu_value_1'" 
            >
              <router-link to="#">국가기간·전략사업</router-link>
            </li>
            <li 
              :class="{active : selectTabType === 'edu_value_2'}" 
              @click="selectTabType = 'edu_value_2'" 
            >
              <router-link to="#">근로자과정</router-link>
            </li>
            <li 
              :class="{active : selectTabType === 'edu_value_3'}" 
              @click="selectTabType = 'edu_value_3'" 
            >
              <router-link to="#">산업구조변화대응특화훈련</router-link>
            </li>
          </ul>
        </div>
        <div class="moreBtn">
          <router-link to="#">
            더보러가기 <i class="arr-icon arr-icon1"></i>
          </router-link>
        </div>
      </div>
      <div class="tabListWrap">
        <p class="refer_text">
          <span class="ico_slide"></span>좌우로 움직여서 확인하실 수 있습니다.
        </p>
        <EduListComp :educationData="filterEduData" />
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
      // 데이터 초기 설정값 : tab 전체보기기
      selectTabType: 'all'
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
      return this.educationData.filter(tab => tab.type === this.selectTabType)
    }
  },
  methods : {
    /**  tab 클릭 이벤트 핸들러
    // 클릭 할 때마다 클릭 이벤트에 명시해준 인수들이 tabClick 함수에 매개변수로 전달됨
    // type은 tamplate 에서 명시해준 인수들이 출력됨 
    // (명시해준 인수들은 위에서 data-type="all" 이런식으로 명시해준 인수들이 type에 전달됨)
    // tabClick(type) {
    //   active class 제거
    //   this.$refs.edu_value_all.classList.remove('active')
    //   this.$refs.edu_value_1.classList.remove('active')
    //   this.$refs.edu_value_2.classList.remove('active')
    //   this.$refs.edu_value_3.classList.remove('active')
    //  type 이 맞으면 active class 추가 
    //   if(type === 'all') {
    //     this.$refs.edu_value_all.classList.add('active')
    //   }
    //   if(type === 'edu_value_1') {
    //     this.$refs.edu_value_1.classList.add('active')
    //   }
    //   if(type === 'edu_value_2') {
    //     this.$refs.edu_value_2.classList.add('active')
    //   }
    //   if(type === 'edu_value_3') {
    //     this.$refs.edu_value_3.classList.add('active')
    //   }
    //   console.log(type);
    //   // 들어온 값이 type에 전달됨
    //   this.selectTabType = type;
    // }
    */
  },
  
}
</script>

<style lang="scss">
  @use '@/styles/main/educatiuon' as *;
</style>