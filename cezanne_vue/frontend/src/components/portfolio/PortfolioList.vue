<template>
  <section class="portfolio">
    <ul class="portfolio__list">
      
      
      <li class="portfolio-card" v-for="item in portfolioData" :key="item.id">
        <a :href="item.url" class="portfolio-card__link">

          <figure class="portfolio-card__img">
            <img :src="item.img" :alt="item.num">
            <!-- + 아이콘 -->
            <i class="ri-add-line plus-icon"></i>
          </figure>

          <!-- list content -->
          <div class="portfolio-card__body">
            <h3 class="portfolio-card__title">{{ item.num }}</h3>
            <p class="portfolio-card__desc">
              {{ item.eduTitle }}
            </p>
            <p class="portfolio-card__date">{{ item.date }}</p>
            <p class="portfolio-card__name">{{ item.name }}</p>
            <span class="portfolio-card__view">view <i class="ri-arrow-right-long-line"></i></span>
          </div>
        </a>
      </li>
      
    </ul>
  </section>
</template>

<script>
  export default {
    props : {
      portfolioData : {
        type : Array,
        required : true,
        default : () => []
      }
    }
  }
</script>