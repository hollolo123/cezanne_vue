<template>
  <!-- Container -->
  <div id="container">
    <TopBtn />
    <!-- Sub Visual -->
    <SubVisual :subTopCont = "subTopCont" />
    <div id="contents_body" class="gallery">
      <div class="inner"> 
        <div class="gallery__list">
          <div v-for="item in galleryData" :key="item.id">
            <router-link :to="`/community/gallery/galleryDetail/${item.id}`" class="gallery__item">
              <div class="item__img">
                <img :src="item.thumNail"  alt="thumb">       
                <div class="item__img__info">
                  <span>{{ item.title}}</span>      
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBtn from '@/components/common/TopBtn.vue';
  import SubVisual from '@/components/common/SubVisual.vue';
  import { galleryData } from '@/data/gallery/gallery_data';

  export default {
    components : {
      TopBtn,
      SubVisual
    },
    data() {
      return {
        subTopCont : {
          className : 'gallery',
          title : '세잔 갤러리',
          title2 : '세잔 갤러리',
          desc : '생생한 사진으로 만나는 대전세잔직업전문학교의 소식입니다.',
          url : '/community/notice',
          url2 : '/community/gallery',
        },
        galleryData
      }
    }
  }
</script>

<style lang="scss">
  @use '@/styles/community/gallery.scss';
</style>