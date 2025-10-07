<template>
  <!-- <div class="swiper mainSlide">
    <div class="swiper-wrapper">
      <div class="swiper-slide slide1" style="background-image: url('../../assets/images/main/visual_slide_01.jpg');">
        <div class="inner">
          <div class="h_slogan">
            실무 중심 커리큘럼 & 취업 연계지원 훈련기관인<br>
            대전세잔 직업전문학교와 함께 하세요.
          </div>
        </div> 
      </div>
      <div class="swiper-slide slide2" style="background-image: url('../../assets/images/main/visual_slide_02.jpg');">
        <div class="inner">
          <div class="h_slogan">
            실무 중심 커리큘럼 & 취업 연계지원 훈련기관인<br>
            대전세잔 직업전문학교와 함께 하세요.
          </div>
        </div>
      </div>
      <div class="swiper-slide slide3" style="background-image: url('../../assets/images/main/visual_slide_03.png');">
        <div class="inner">
          <div class="h_slogan">
            실무 중심 커리큘럼 & 취업 연계지원 훈련기관인<br>
            대전세잔 직업전문학교와 함께 하세요.
          </div>
        </div>
      </div>
      <div class="swiper-slide slide4" style="background-image: url('../../assets/images/main/visual_slide_04.png');">
        <div class="inner">
          <div class="h_slogan">
            실무 중심 커리큘럼 & 취업 연계지원 훈련기관인<br>
            대전세잔 직업전문학교와 함께 하세요.
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div> -->
  <div  >
    <swiper class="mainSlide"
    :modules="modules" 
    :pagination="true" 
    :autoplay="true"
    :loop="true"
    :speed="1000"
    :delay="3000"
    >
      <swiper-slide v-for="item in mainSlideData" :key="item.id">
        <div class="slide__img"><img :src="item.img" :alt="item.text"></div>
        <div class="inner">
          <div class="h_slogan">
            {{ item.text }}
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { mainSlideData } from '@/data/main/mainslide_data';

export default {
  components: {
    Swiper, 
    SwiperSlide 
  },
  data() {
    return {
      mainSlideData
    }
  },
  setup() {
    return {
      modules: [Autoplay, Pagination]
    }
  }
}

</script>

<style lang="scss">
  @use '@/styles/main/mainSlide' as *;
</style>
