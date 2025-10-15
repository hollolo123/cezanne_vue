<template>
  <swiper 
    class="tabList"
    :slidesPerView="1"
    :spaceBetween="30"
    :grabCursor="true"
    :scrollbar="{
      el: '.swiper-scrollbar',  
    }"
    :freeMode="true"
    :breakpoints="{
      620 : {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768 : {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200 : {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }"
    :modules="modules"
  >
    <swiper-slide class="listBox" v-for="item in educationData" :key="item.id">
      <p class="listImg">
        <router-link to="#" :href="item.url" target="_blank" class="listlink" :style="{ backgroundImage: `url(${item.img})` }"></router-link>
      </p>
      <ul>  
        <li class="type">{{ item.type }}</li>        
        <li class="class">{{ item.value }}</li>
        <li class="title">{{ item.eduTitle}}</li>
        <li class="date">{{ item.date }}</li>
      </ul>
      <button type="button" class="go" :href="item.url" target="_blank">수강신청바로가기</button>
    </swiper-slide>
    <div class="swiper-scrollbar"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/free-mode';
  import 'swiper/css/scrollbar';
  import { FreeMode, Scrollbar } from 'swiper/modules';

  export default {
    setup() {
      return {
        modules: [FreeMode, Scrollbar]
      }
    },
    components : {
      Swiper,
      SwiperSlide
    },
    props:{
      educationData : {
        type : Array,
        required : true,    // 필수 입력 값 : true 반드시 들어와야 하는 데이터
        default : () => []  // 기본 값 : 빈 값일 경우 빈 배열로 초기값 설정하겠다 
      }
    },
  }
</script>

<style lang="scss">
  @use '@/styles/main/educatiuon' as *;
</style>