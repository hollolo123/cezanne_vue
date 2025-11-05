<template>
  <div id="contents_body">
    <div class="inner">
      <div class="gallery__detail">
        <div class="logo__img">
          <img src="@/assets/images/common/logo.png" alt="logo">
        </div>
        <h3 class="title">전기내선 설치, 유지보수 및 효율적 배선 설계 전문가 양성과정 1기 수료식</h3>
        <div class="img">
          <img src="@/assets/images/community/gallery/gallery_thumb1.jpg" alt="">
        </div>
        <p>
          전기내선 설치, 유지보수 및 효율적 배선 설계 전문가 양성과정 1기 수료식이 25.07.28에 진행되었습니다. <br>
          그동안 모두 고생 많으셨습니다!
        </p>
        <div class="grid__img">
          <img src="@/assets/images/community/gallery/1/gallery_cont1.jpg" alt="">
          <img src="@/assets/images/community/gallery/1/gallery_cont2.jpg" alt="">
          <img src="@/assets/images/community/gallery/1/gallery_cont3.jpg" alt="">
          <img src="@/assets/images/community/gallery/1/gallery_cont4.jpg" alt="">
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
  export default {

  }
</script>

<style lang="scss">
  @use '@/styles/community/gallery.scss';
</style>