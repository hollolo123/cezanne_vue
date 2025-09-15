<template>
  <footer>
    <div :class="$style.footer">
      <div :class="$style.ftr__menu">
        <ul :class="inner">
          <li><a href="#">학교소개</a></li>
          <li><a href="#">이용약관</a></li>
          <li><a href="#" :class="$style.privacy">개인정보처리방침</a></li>
          <li><a href="#">찾아오시는 길</a></li>
        </ul>
      </div>
      <div :class="$style.familySite">
        family__site
      </div>
      <div :class="$style.ftr__info">
        <div :class="$style.ftr__logo"><span>대전세잔직업전문학교</span></div>
        <address>
          <p>대전 중구 중앙로 137번길 36 대전세잔직업전문학교</p>
          <p>사업자등록번호 : 305-90-66359</p>
          <p><span :class="$style.white">Tel . 042)252-1153</span> Fax. 042)252-1105</p>
          <small>&copy 대전세잔직업전문학교. All rights Reserved.</small>
        </address>
        <div :class="$style.sns">
          <button type="button"><i class="ri-youtube-line"></i></button>
          <button type="button"><i class="ri-facebook-fill"></i></button>
          <button type="button"><i class="ri-instagram-line"></i></button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" module>
  @use '@/styles/layout/footer' as *;
</style>