<template>
  <div class="tab__contents">
    <div id="tab1" class="tab__content active">
      <div class="edu-contents">
        <div v-for="item in educationData" :key="item.id" class="content con-tag1">
          <router-link :to="`/education/${item.id}`">
          <!-- <router-link :to="{ name: 'educationDetail', params : { id : item.id } }"> -->
            <img :src="item.thumbNail" :alt="item.subTitle">
            <span>{{ item.value }}</span>
            <h4>{{ item.subTitle }}</h4>
          </router-link>
          <router-link to="#"  
            :href="item.url" 
            target="_blank"
            class="btn-join"
          >수강신청</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props : {
    educationData : {
      type : Array,
      required : true, 
      default : () => []
    }
  },  
}
</script>