<template>
  <header>
    <div :class="$style.util">
      <div class="inner">
        <ul>
          <li><router-link to="/">회원가입</router-link></li>
          <li><router-link to="/">로그인</router-link></li>
        </ul>
      </div>
    </div>
    <div :class="$style.header__in">
      <div :class="$style.inner">
        <div :class="$style.logo">대전세잔직업전문학교</div>
        <div :class="$style.m__gnb">
          <button type="button">
            <span :class="$style.bar1"></span>
            <span :class="$style.bar2"></span>
            <span :class="$style.bar3"></span>
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

<style lang="scss" module>
  @use '@/styles/layout/header' as *;
</style>