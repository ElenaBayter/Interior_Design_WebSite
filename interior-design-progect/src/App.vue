<template>
  <div id="app">
    <HeaderComp/>
    <!-- <MainPageComp/> -->
    <!-- <BlogComp/> -->
    <DetailsComp/>
    <FooterComp/>

  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
// import MainPageComp from './components/MainPageComp.vue';
import FooterComp from './components/FooterComp.vue';
// import BlogComp from './components/BlogComp.vue';
import DetailsComp from './components/DetailsComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    // MainPageComp, 
    FooterComp,
    // BlogComp,
    DetailsComp
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
/* @font-face {
  font-family: 'dm';
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  src: local('dm'), url('assets/fonts/dm.woff2') format('woff2'),
  url('assets/fonts/dm.woff') format('woff');
}

@font-face {
  font-family: 'jost';
  src: url('assets/fonts/jost.woff2') format('woff2'),
  url('assets/fonts/jost.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'jost_italic';
  src: url('assets/fonts/jost-italic.woff2') format('woff2'),
  url('assets/fonts/jost-italic.woff') format('woff');
  font-weight: normal;
  font-style: normal;
} */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
.center{
  padding-left: calc(50% - 47vw);
  padding-right: calc(50% - 47vw)
}
</style>
