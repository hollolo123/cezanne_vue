<template>
  <div :id="$style.container">
    <div :class="$style.contents">
      <div :class="$style.inner">
        이 쪽은 Main 영역입니다.
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" module>
  @use '@/styles/main' as *;
</style>