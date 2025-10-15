<template>
  <div id="topBtn" :class="{ scrolled : isScrolled }">
    <button type="button" @click="scrollTop"><i class="pi pi-arrow-up"></i></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolled : false
    }
  },
  methods : {
    scrollTop() {
      window.scrollTo({
        top:0, 
        behavior : 'smooth'
      })
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 200;
    }
  },
  mounted() {
    // 페이지 로드 후 스크롤 이벤트 등록
    // 이 시점에서만 window.scrollY 동작 함 
    window.addEventListener('scroll', this.handleScroll)
  }, 
  beforeUnmount() {
    // 컴포넌트 사라질때 이벤트 제거(메모리 누수방지지)
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss">
  @use '@/styles/common/common.scss' as *;
</style>  