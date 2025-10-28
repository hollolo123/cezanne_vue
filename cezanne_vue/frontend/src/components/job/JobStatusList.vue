<template>
  <div class="job__wrap">
    <div class="job__item" v-for="list in jobStatusList" :key="list.id">
      <router-link to="/">
        <div class="item__img">
          <img :src="list.img" alt="test">
        </div>
        <div class="item__content">
          <p class="name">{{ list.name }}</p>
          <p>{{ list.company }}</p>
          <p>{{ list.message }}</p>
        </div>
    </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props : {
      jobStatusList : {
        type : Array,
        required : true,
        default : () => []
      }
    }
  }
</script>

<style lang="scss">
</style>