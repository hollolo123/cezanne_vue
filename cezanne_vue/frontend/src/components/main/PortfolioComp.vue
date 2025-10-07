<template>
  <div class="portfolio">
    <div class="textbg bg1">CEZANNE VOCATIONAL SCHOOL</div>
    <div class="inner">
      <h2>Portfolio</h2>
      <div class="cardSlide_wrap">
        <swiper class="slideArea"
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }"
          :pagination="true"
          :modules="modules"
        >
          <swiper-slide v-for="item in portfolioData" :key="item.id">
            <div class="item">
              <img :src="item.img" />
              <div class="itemInfo">
                <ul>
                  <li>{{ item.text }}</li>
                  <li class="eduTitle">{{item.eduTitle}}</li>
                  <li class="go"><a :href="item.url" target="_blank">포트폴리오 바로가기</a></li>
                </ul>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="textbg bg2">CEZANNE VOCATIONAL SCHOOL</div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import { portfolioData } from '@/data/main/portfolio_data';

export default {
  components : {
    Swiper, 
    SwiperSlide 
  },
  data() {
    return {
      portfolioData
    }
  },
  setup() {
    return {
      modules : [Pagination, EffectCoverflow],
      
    }
  }
}

</script>

<style lang="scss">
  @use '@/styles/main/portfolio' as *;
</style>