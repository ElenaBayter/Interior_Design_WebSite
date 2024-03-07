<template>
  <div>
    <div class="categorie_btns" >
      <button @click="addTagToFilter(categorie)" v-for="categorie in categories" :key="categorie.id" class="categorie_btn">{{ categorie }}</button>
    </div>
    <div class="progectcard">
      <img class="progectcard__img" :src='progect.src' alt="picture">
      <div class="progectcard_bottom">
        <div class="progectcard_bottom_left">
          <h4 class="blogcard__title">{{ progect.title }}</h4>
          <a href="#" class="progectcard__path">{{ progect.path }}</a>
        </div>
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
        <circle class="link" cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
        <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></a>
      </div>

      
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: 'CategoriesInfo',
  props: {
      progect: {
        type: Object,
        required: true
      }
    },
  data() {
    return {
      categories: ['Bathroom', 'Bedroom', 'Kitchen', 'Living area'],
      selectedTags: []
    };
  },

  methods: {
        addTagToFilter(tag) {
            if (!this.selectedTags.includes(tag)) {
                this.selectedTags.push(tag);
            } else {
                this.selectedTags = this.selectedTags.filter(t => t !== tag);
            }
        }
    },  
    computed: {
        filteredArticles() {
            return this.progects.filter(progect =>
            progect.tags.some(tag => this.selectedTags.includes(tag))
            );
        }
    }
};
</script>
<style>
.categorie_btns{
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #CDA274;
  border-radius: 18px;
}
.categorie_btn{
  color: #292F36;
  text-align: center;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: 0.36px;
  border-radius: 18px;
  border: none;
  display: flex;
  padding: 26px 66px;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.categorie_btn:hover{
  background-color: #CDA274;
  color: #FFF
}
.progectcard_bottom{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>