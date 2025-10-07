<template>
  <div class="education">
    <div class="inner">
      <div class="tabLayout">
        <h2>세잔 교육과정</h2>
        <p class="text">세잔직업전문학교의 전문적인 수업과정을 안내해드립니다.</p>
        <div class="tabMenu">
          <ul>
            <li class="active"><a href="#">전체보기</a></li>
            <li><a href="#">국가기간·전략사업</a></li>
            <li><a href="#">근로자과정</a></li>
            <li><a href="#">산업구조변화대응특화훈련</a></li>
          </ul>
        </div>
        <div class="moreBtn"><a href="#">더보러가기</a></div>
      </div>
      <div class="tabListWrap scrollbar">
        <p class="refer_text">
          <span class="ico_slide"></span>좌우로 움직여서 확인하실 수 있습니다.
        </p>
        <div class="tabList">
          <div class="listBox" v-for="item in educationData" :key="item.id">
            <p class="listImg">
              <a :href="item.url" target="_blank" class="listlink" :style="{ backgroundImage: `url(${item.img})` }"></a>
            </p>
            <ul>
              <li class="class">{{ item.value }}</li>
              <li class="title">{{ item.eduTitle}}</li>
              <li class="date">{{ item.date }}</li>
            </ul>
            <button type="button" class="go" :href="item.url" target="_blank">수강신청바로가기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { educationData } from '@/data/main/education_data';

export default {
  data() {
    return {
      educationData
    }
  }
}
</script>

<style lang="scss">
  @use '@/styles/main/educatiuon' as *;
</style>