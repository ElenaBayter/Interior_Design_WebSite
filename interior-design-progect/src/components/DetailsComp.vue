<template>
    <div>
        <section class="details-banner"></section>
        <section class="contentbox center">
            <div class="content">
                <h2 class="content__title">Let’s Get Solution for Building
                    Construction Work</h2>
                <img class="content__img" src="../assets/img/content1.png" alt="kitchen photo">
                <div class="content__date">
                    <p class="content__date_text"></p>
                    <div class="content__breadcrumps">
                        <router-link to="home"  class="content__date_text">Interior /</router-link><router-link to="home" class="content__date_text">Home /</router-link><router-link to="blog" class="content__date_text">Decore</router-link>
                    </div>
                </div>
                <p class="content__desc">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p>
                    
                <p class="content__desc">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                <div class="quotes">
                    <img src="../assets/img/quotes.png" alt="quotes">
                    <p class="quotes__desc">The details are not the details. <br> They make the design.</p>
                </div>
                <h2 class="content__title">Design sprints are great</h2>
                <p class="content__desc">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                <ol>
                    <li class="list-item"><p class="content__desc">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p></li>
                    <li class="list-item"><p class="content__desc">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p></li>
                    <li class="list-item"><p class="content__desc">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p></li>
                </ol>
                <img class="content__img" src="../assets/img/content2.png" alt="content photo">
                <p class="content__desc">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                
            </div>
            
            <div class="tegs">
                <h4 class="tegs__title">Tags</h4>
                <button class="tegs__item" v-for="tag in tags" :key="tag" @click="addTagToFilter(tag)" href="">{{ tag }}</button>
            </div>
        </section> 
        <div id="root" class="blog__content">
                <div v-for="article in filteredArticles" :key="article.id">
                    <div class="blogcard">
                        <img class="blogcard__img" :src='article.src' alt="article">
                        <h4 class="blogcard__title">{{ article.title }}</h4>
                        <div class="blogcard__bottom">
                            <p class="blogcard__bottom_date">{{article.date}} </p>
                            <a href="#"><svg class="link_hover" xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                                <circle class="link" cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
                                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg></a>
                        </div>
                    </div>
                </div>
              </div>
    </div>
</template>

<script>
export default {
    name: 'DetailsComp',

    data() {
        return {
            tags: ['Kitchen', 'Bedroom', 'Building', 'architecture', 'Kitchen planning', 'Bedroom'],
                articles: [
                    {id: 1, title: 'Let’s Get Solution For Building Construction Work', src: require("../assets/img/ArticlesNews1.png"), date: '26 December,2022', tags: ['Bedroom', 'Building']},
                    {id: 2, title: 'Low Cost Latest Invented Interior Designing Ideas', src: require("../assets/img/ArticlesNews2.png"), date: '22 December,2022', tags: ['Building', 'architecture']},
                    {id: 3, title: 'Best For Any Office & Business Interior Solution', src: require("../assets/img/ArticlesNews3.png"), date: '25 December,2022', tags: ['Kitchen', 'Kitchen planning']},
                    {id: 4, title: 'Let’s Get Solution For Building Construction Work', src: require("../assets/img/ArticlesNews4.png"), date: '26 December,2022', tags: ['Building', 'Bedroom']},
                    {id: 5, title: 'Low Cost Latest Invented Interior Designing Ideas', src: require("../assets/img/ArticlesNews5.png"), date: '22 December,2022', tags: ['Bedroom', 'architecture']},
                    {id: 6, title: 'Best For Any Office & Business Interior Solution', src: require("../assets/img/ArticlesNews6.png"), date: '25 December,2022', tags: ['Kitchen planning', 'architecture']}
                ],
                selectedTags: [],
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
            return this.articles.filter(article =>
                article.tags.some(tag => this.selectedTags.includes(tag))
            );
        }
    }
};
</script>

<style lang="css" scoped>
.flex_start {
  display: flex;
  justify-content: flex-start;
}

.details-banner {
  background-image: url(../assets/img/DetailsBanner.jpg);
  background-position: center;
  height: 350px;
  background-size: cover;
  background-repeat: no-repeat;
}

.contentbox {
  display: flex;
  gap: 3vw;
  padding-top: 100px;
}

.content {
  width: 73vw;
}
.content__title {
  color: #292F36;
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-size: 50px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 1px;
  margin-bottom: 15px;
}
.content__img {
  border-radius: 50px;
  margin-bottom: 46px;
  width: 100%;
}
.content__date {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
}
.content__date_text {
  color: #4D5053;
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.16px;
  text-transform: capitalize;
}
.content__breadcrumps {
  color: #4D5053;
  font-size: 16px;
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.16px;
  text-transform: capitalize;
}
.content__desc {
  color: #4D5053;
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-size: 22px;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
  margin-bottom: 15px;
  text-align: justify;
}

.tegs {
  width: 22%;
}
.tegs__title {
  color: #292F36;
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-size: 25px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.5px;
  margin-bottom: 24px;
}
.tegs__item {
  color: #292F36;
  text-align: center;
  font-size: 18px;
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.36px;
  padding: 9px 30px;
  border-radius: 10px;
  background: #F4F0EC;
  border: none;
  margin-left: 10px;
  margin-bottom: 10px;
}
.tegs__item:focus {
  background: #292F36;
  color: #FFF;
}

.quotes {
  border-radius: 50px;
  background: #F4F0EC;
  padding-top: 53px;
  padding-bottom: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 27px;
}
.quotes__desc {
  color: #CDA274;
  text-align: center;
  font-family: "DM Serif Display";
  font-size: 25px;
  font-style: italic;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.5px;
}

ol li::marker {
  color: #CDA274;
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.4px;
}
.list-item {
  margin-bottom: 32px;
}

ol {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 20px;
}

.display-none {
  display: none;
}

.blogcard {
  padding: 21px;
  border: 1px solid #fff;
}
.blogcard__img {
  margin-bottom: 21px;
  max-width: 26vw;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}
.blogcard__title {
  color: #292F36;
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-size: 27px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.5px;
  width: 24vw;
}
.blogcard__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.blogcard__bottom_date {
  color: #4D5053;
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.16px;
  text-transform: capitalize;
}

.blogcard:hover {
  border-radius: 62px;
  border: 1px solid #E7E7E7;
  background: #F4F0EC;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
}

.blogcard:hover .link {
  fill: #FFF;
}
.blog__content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 27px;
}
.link_hover:hover{
  scale: 1.1;
}
</style>