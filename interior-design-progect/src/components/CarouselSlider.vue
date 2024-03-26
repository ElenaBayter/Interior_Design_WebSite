<template>
  <div>
    <vue-marquee-slider id="marquee-slider-loop" :speed="30000" :space="50" :width="600" >
        <img class="carousel_img" v-for="(image, index) in images" :key="index"	:src="image.url"/>
    </vue-marquee-slider>
  </div>
</template>

<script>

export default {
  name: 'CarouselSlider',
  data() {
    return {
      images: [
        { url: require("../assets/img/ArticleImg1.png")},
        { url: require("../assets/img/ArticleImg1.png") },
        { url: require("../assets/img/ArticleImg1.png") }
      ]
    }
  }
}

  
</script>

<style>
    .carousel_img{
        border-radius: 50px;
    }
</style>
