<template>
  <div>
    <HeaderComp />
    <section class="blog-banner categories-banner">
      <div class="intro">
        <h2 class="intro__title">Our Project</h2>
        <p class="intro__breadcrumps"><a>Home</a> / <a>Project</a></p>
      </div>
    </section>
    <CategoriesInfo :progect="progect" v-for="progect in filteredArticles" :key="progect.id" />
    <FooterComp />
  </div>
</template>

<script>
 import CategoriesInfo from './components/CategoriesInfo.vue'
 import HeaderComp from './components/HeaderComp.vue'
 import FooterComp from './components/FooterComp.vue'
export default {
  name: 'CategoriesComp',
  components: {
      CategoriesInfo,
      HeaderComp,
      FooterComp
    },

  data() {
    return {
      progects: [
        {title: 'Minimal Bedroom', path: 'Decor / Kitchen', tags: ['Decor', 'Kitchen'], src: require("../assets/img/categories1.png")},
        {title: 'Minimal Bedroom', path: 'Decor / Living area', tags: ['Decor', 'Living area'], src: require("../assets/img/categories2.png")},
        {title: 'Classic Minimal Bedroom', path: 'Decor / Bedroom', tags: ['Decor', 'Bathroom'], src: require("../assets/img/categories3.png")},
        {title: 'Modern Bedroom', path: 'Decor / Living area', tags: ['Decor', 'Living area'], src: require("../assets/img/categories3.png")},
        {title: 'Minimal Bedroom Table', path: 'Decor / Bedroom', tags: ['Decor', 'Bedroom'], src: require("../assets/img/categories4.png")},
        {title: 'System Table', path: 'Decor / Bedroom', tags: ['Decor', 'Bedroom'], src: require("../assets/img/categories5.png")},
        {title: 'Modern Bedroom', path: 'Decor / Bedroom', tags: ['Decor', 'Bedroom'], src: require("../assets/img/categories6.png")},
        {title: 'Modern Bedroom', path: 'Decor / Bedroom', tags: ['Decor', 'Bedroom'], src: require("../assets/img/categories7.png")}
      ],
    };
  },


  methods: {
    
  },
};
</script>
<style>
.categories-banner{
    background-color: #F4F0EC;
}
</style>