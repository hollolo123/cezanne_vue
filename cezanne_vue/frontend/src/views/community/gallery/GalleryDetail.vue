<template>
  <TopBtn />
  <!-- Sub Visual -->
  <SubVisual :subTopCont="subTopCont" />
  <div id="contents_body">
    <div class="inner">
      <div class="gallery__detail">
        <div>
          <div class="logo__img">
            <img src="@/assets/images/common/logo.png" alt="logo">
          </div>
          <h3 class="title">{{ galleryDetailData.title }}</h3>
          <div class="img">
            <img :src="galleryDetailData.thumNail" alt="">
          </div>
          <p class="contents">
            {{ galleryDetailData.contents }}
          </p>
          <div class="grid__img">
            <ul>
              <li v-for="item in galleryDetailData.img_list" :key="item.id">
                <img :src="`${item.img}`" alt="" />
              </li>
            </ul>
          </div>
        </div>
        <!-- Button -->
        <div class="detail__btn__container">
          <router-link to="/community/gallery" type="button" class="btn__list">목록으로</router-link>
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
    },
    computed : {
      galleryDetailData() {
        const id = parseInt(this.$route.params.id);
        return this.galleryData.find(item => item.id === id) || {};
      }
    }
  }
</script>

<style lang="scss">
  @use '@/styles/community/gallery.scss';
</style>