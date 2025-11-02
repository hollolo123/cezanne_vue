<template>
  <div class="job__wrap">
    <div class="job__item" v-for="item in jobList" :key="item.id">
      <router-link :to="`/job/detail/${item.id}`">
        <div class="item__img">
          <img :src="item.img" alt="test">
        </div>
        <div class="item__content">
          <p class="name">{{ item.name }}</p>
          <p>{{ item.company }}</p>
          <p>{{ item.message }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props : {
      jobList : {
        type : Array,
        required : true,
        default : () => []
      }
    }
  }
</script>

<style lang="scss">
</style>