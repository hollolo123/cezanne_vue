<template>
  <header>
    <div class="util">
      <div class="inner">
        <ul>
          <li><router-link to="/">회원가입</router-link></li>
          <li><router-link to="/">로그인</router-link></li>
        </ul>
      </div>
    </div>
    <div class="header__in">
      <div class="inner">
        <div class="logo">대전세잔직업전문학교</div>
        <div class="m__gnb">
          <button type="button">
            <span class="bar1"></span>
            <span class="bar2"></span>
            <span class="bar3"></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">
  @use '@/styles/layout/header' as *;
</style>
