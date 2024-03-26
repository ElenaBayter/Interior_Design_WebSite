<template>
  <div>
    <section class="pd_banner"></section>
    <section class="pd_content center">
      <div class="pd_text_container">
        <h2 class="pd_title">Minimal Look Bedrooms</h2>
        <p class="pd_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.</p>
        <p class="pd_desc">In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>
      </div>
    </section>
    <div class="carousel_container">
      <SliderComp />
    </div>
    
  </div>
</template>

<script>
import SliderComp from '@/components/SliderComp.vue';
export default {
  name: 'ProgectDetails',
  components: {
    SliderComp
  }
};
</script>
<style>
    .pd_banner{
        background-image: url(../assets/img/ArticleBanner.jpg);
        background-position: center;
        height: 350px;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .pd_content{
        padding-top: 200px;
        padding-bottom: 100px;
        display: flex;
        justify-content: center;
    }
    .pd_title{
        color: #292F36;
        font-family: "DM Serif Display";
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1px;
        margin-bottom: 13px;
    }
    .pd_desc{
        color: #4D5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; 
        letter-spacing: 0.22px;
    }
    .pd_text_container{
        max-width: 658px;
    }
    .carousel_container{
        display: flex;
        justify-content: center;
    }


</style>