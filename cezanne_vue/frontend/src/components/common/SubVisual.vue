<template>
  <div :class="`sub_visual ${subTopCont.className}`">
    <div class="inner">
      <div class="sub_visual_text">
        <h2>{{ subTopCont.title }}</h2>
        <p>{{ subTopCont.desc }}</p>
      </div>
      <div class="bread">
        <ul>
          <li><router-link to="/"><span class="pi pi-home"></span></router-link></li>
          <li><span class="pi pi-chevron-right"></span></li>
          <li><router-link to="/portfolio/">{{ subTopCont.title }}</router-link></li>
        </ul>
      </div>
    </div> 
  </div>
</template>

<script>
  export default {
    props : {
      subTopCont : {
        type : Object,
      }
    }
  }
</script>

<style lang="scss">
  @use '@/styles/common/subvisual.scss';
</style>