<template>
  <div class="slider-wrapper">
    <img v-for="(img, index) in imgs" :src="img.src" class="slider" :class="{active: currentIndex === index}" :key="index">

    <div class="btns_block">
      <button @click="switchImage(-1)" class="slider_btn left">&lt;</button>
      <button @click="switchImage(1)" class="slider_btn right">&gt;</button>
    </div>
    
    <div class="navigation-dots">
      <span v-for="(img, index) in imgs" :class="{active: currentIndex === index}" :key="index" @click="setCurrentIndex(index)" class="dot"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderComp',

  data() {
    return {
        imgs: [{src: require("../assets/img/ArticleImg1.png")}, {src: require("../assets/img/categories1.png")}, {src: require("../assets/img/categories2.png")}],
        currentIndex: 0
    };
  },
  methods: {
    switchImage(direction) {
      this.currentIndex = (this.currentIndex + direction + this.imgs.length) % this.imgs.length;
    },
    setCurrentIndex(index) {
      this.currentIndex = index;
    }
  },
}
</script>
<style>
.slider{
    display: none;
    margin-bottom: 20px;
    margin-top: 30px;
    height: 60vh;
    width: 100%;
    border-radius: 60px;
}
.slider_btn{
    padding: 10px;
    font-size: medium;
    font-weight: 500;
    border-radius: 15px;
    background-color: burlywood;
    border: none;
}
.active{
    display: flex;
    justify-content: center;
}
 .btns_block{
    display: flex;
    justify-content: center;
    gap: 20px;
} 
.slider-wrapper {
  position: relative;
  width: 60vw;
}
.slider_btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
}
.left {
  left: 10px;
}
.right {
  right: 10px;
}
.navigation-dots {
  text-align: center;
  padding-top: 20px;
}
.dot {
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
  cursor: pointer;
}
.dot.active {
  background-color: #717171;
}
</style>
