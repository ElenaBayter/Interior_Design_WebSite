<template>
    <div>
        <section class="categories-banner">
            <div class="intro_categories">
            <h2 class="intro__title">Our Project</h2>
            <p class="intro__breadcrumps"><router-link to="home" class="intro__breadcrumps">Home</router-link> / <router-link to="categories" class="intro__breadcrumps">Project</router-link></p>
            </div>
        </section>
        <div class="categories_container center">
        <div class="categorie_btns" >
            <button @click="addTagToFilter(categorie)" v-for="categorie in categories" :key="categorie.id" class="categorie_btn">{{ categorie }}</button>
        </div>
      <section class="progectbox center" >
        <div class="progectbox_card" :progect="progect" v-for="progect in paginatedProgects" :key="progect.id">
            <img class="progectbox_card_img" :src='progect.src' alt="picture">
            <div class="progectbox_card_bottom">
              <div class="progectbox_card_bottom_left">
                <a href="#"><h4 class="progectbox_card_title">{{ progect.title }}</h4></a>
                <a href="#" class="progectbox_card_path">{{ progect.path }}</a>
              </div>
            <a href="#"><svg class="link_hover" xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
            <circle class="link" cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></a>
            </div>
        </div>
      </section>
      <div v-if="totalPages > 1" class="pagination">
        <router-link class="pagination_link" v-for="pageNumber in totalPages" :key="pageNumber" :to="getPageLink(pageNumber)">
          {{ pageNumber }}
        </router-link>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  
  
  export default {
    name: 'CategoriesPage',
    data() {
      return {
        progects: [
          {title: 'Minimal Bedroom', path: 'Decor / Kitchen', tags: ['Decor', 'Bathroom', 'Kitchen'], src: require("../assets/img/categories3.png")},
          {title: 'Minimal Bedroom', path: 'Decor / Living area', tags: ['Decor', 'Bathroom', 'Living area'], src: require("../assets/img/categories2.png")},
          {title: 'Classic Minimal Bedroom', path: 'Decor / Bedroom', tags: ['Decor', 'Bathroom'], src: require("../assets/img/categories2.png")},
          {title: 'Modern Bedroom', path: 'Decor / Living area', tags: ['Decor', 'Bathroom', 'Living area'], src: require("../assets/img/categories3.png")},
          {title: 'Minimal Bedroom Table', path: 'Decor / Bedroom', tags: ['Decor', 'Bathroom', 'Bedroom'], src: require("../assets/img/categories2.png")},
          {title: 'System Table', path: 'Decor / Bedroom', tags: ['Decor', 'Bathroom', 'Bedroom'], src: require("../assets/img/categories5.png")},
          {title: 'Modern Bedroom', path: 'Decor / Bedroom', tags: ['Decor', 'Bathroom', 'Bedroom'], src: require("../assets/img/categories6.png")},
          {title: 'Modern Bedroom', path: 'Decor / Bedroom', tags: ['Decor', 'Bathroom', 'Bedroom'], src: require("../assets/img/categories7.png")},
          {title: 'Minimal Bedroom Table', path: 'Decor / Bedroom', tags: ['Decor', 'Bedroom'], src: require("../assets/img/categories2.png")},
          {title: 'System Table', path: 'Decor / Bedroom', tags: ['Decor', 'Bedroom'], src: require("../assets/img/categories5.png")},
          {title: 'Modern Bedroom', path: 'Decor / Bedroom', tags: ['Decor', 'Bedroom'], src: require("../assets/img/categories6.png")},
          {title: 'Modern Bedroom', path: 'Decor / Bedroom', tags: ['Decor', 'Kitchen', 'Bedroom'], src: require("../assets/img/categories7.png")},
          {title: 'Modern Bedroom', path: 'Decor / Bedroom', tags: ['Decor', 'Bedroom'], src: require("../assets/img/categories6.png")},
          {title: 'Modern Bedroom', path: 'Decor / Bedroom', tags: ['Decor', 'Bedroom'], src: require("../assets/img/categories7.png")}
        ],
        categories: ['Bathroom', 'Bedroom', 'Kitchen', 'Living area'],
        selectedTags: [],
        itemsPerPage: 6,
      };
    },
    methods: {
          addTagToFilter(tag) {
            if (!this.selectedTags.includes(tag)) {
              this.selectedTags = [tag]; 
              this.$router.push({ name: 'categories', params: { pageNumber: 1 } }); 
            } else {
              this.selectedTags = this.selectedTags.filter(t => t !== tag);
            }
          },
          getCurrentPageNumber() {
            const pageNumberParam = parseInt(this.$route.params.pageNumber);
            return isNaN(pageNumberParam) || pageNumberParam < 1 ? 1 : pageNumberParam;
          },
          getPageLink(pageNumber) {
            return `/categories/${pageNumber}`;
          }
      },  
      computed: {
        filteredArticles() {
          if (this.selectedTags.length === 0 ){
            return this.progects;
          } else {
            return this.progects.filter(progect =>
              progect.tags.some(tag => this.selectedTags.includes(tag))
            )
          }
        },
        totalPages() {
          return Math.ceil(this.filteredArticles.length / this.itemsPerPage);
        },
        paginatedProgects() {
          const pageNumber = this.getCurrentPageNumber();
          const startIndex = (pageNumber - 1) * this.itemsPerPage;
          const endIndex = startIndex + this.itemsPerPage;
          return this.filteredArticles.slice(startIndex, endIndex); 
        }
      },
  };
  </script>
  <style>
    .categories-banner{
      background-color: #F4F0EC;
      height: 353px;
    }
    .intro_categories{
        padding: 41px 78px;
        border-radius: 37px 37px 0px 0px;
        background: #FFF;
        position: absolute;
        top: 318px;
        left: calc((100vw - 427px) / 2);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .intro__title {
        color: #292F36;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        -webkit-text-stroke-width: 1;
        -webkit-text-stroke-color: #000;
        font-size: 50px;
        font-family: "DM Serif Display", serif;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
    }
    .intro__breadcrumps {
        color: #4D5053;
        font-family: "Jost", sans-serif;
        font-style: normal;
        font-size: 22px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
    }
    .categories_container{
    padding-top: 20vh;
    padding-bottom: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .categorie_btns{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #CDA274;
    border-radius: 19px;
    margin-bottom: 50px;
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
    background-color: #FFF;
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
  .progectbox{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 37px;
    column-gap: 30px;
    columns: 2;
  }
  .progectbox_card{
    display: flex;
    flex-direction: column;
  }
  .progectbox_card_img{
    width: 100%;
  }
  .progectbox_card_bottom{
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .progectbox_card_bottom_left{
    display: flex;
    flex-direction: column;
  }
  .progectbox_card_title{
    color: #292F36;
    font-family: "DM Serif Display";
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 31.25px */
    letter-spacing: 0.5px;
  }
  .progectbox_card_path{
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
  }
  .link_hover:hover{
    scale: 1.1;
  }
  .pagination{
    padding-top: 61px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .pagination_link{
    width: 52px;
    height: 52px;
    color: #292F36;
    font-family: Jost;
    font-size: 16px;
    font-weight: 500;
    line-height: 52px;
    text-transform: capitalize;
    border: 1px solid #CDA274;
    border-radius: 50%;
    text-align: center;
  }
  .pagination_link:focus{
    background-color: #F4F0EC;
    border: none;
  }

  </style>