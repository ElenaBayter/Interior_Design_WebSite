<template>
  <div>
    <section class="blog-banner">
      <div class="intro">
        <h2 class="intro__title">Articles & News</h2>
        <p class="intro__breadcrumps"><router-link to="home" class="intro__breadcrumps">Home</router-link> / <router-link to="blog" class="intro__breadcrumps">Blog</router-link></p>
      </div>
    </section>
    <section class="post center">
        <h3 class="post_title">Latest Post</h3>
        <div class="postbox">
            <img class="postbox__img" src="../assets/img/latestPost.png" alt="post picture">
            <div class="postbox__texts">
                <h3 class="postbox__texts_title">Low Cost Latest Invented Interior Designing Ideas</h3>
                <p class="postbox__texts_desc">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p>
                <p class="postbox__texts_desc">Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                <div class="date-link">
                    <p class="date">26 December,2022</p>
                    <router-link to="details"><svg class="date-link_link" xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                        <circle cx="26" cy="26.5" r="26" fill="#F4F0EC"/>
                        <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></router-link>
                </div>
            </div>
        </div>
    </section>
    <section  class="blog center">
        <h2 class="blog__heading_title flex_start">Articles & News</h2>
        <div class="blog__content" id="root">
            <div v-for="article in articles" :key="article.id">
                <div class="blogcard">
                    <img class="blogcard__img" :src='article.src' alt="article">
                    <h4 class="blogcard__title">{{ article.title}}</h4>
                    <div class="blogcard__bottom">
                        <p class="blogcard__bottom_date">{{article.date}} </p>
                        <router-link to="/details"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                            <circle class="link" cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
                            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg></router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
export default {
    name: 'BlogComp',

    data() {
        return {
            articles: [
              {title: 'Let’s Get Solution For Building Construction Work', src: require("../assets/img/ArticlesNews1.png"), date: '26 December,2022', tegs: ['Bedroom', 'Building']},
              {title: 'Low Cost Latest Invented Interior Designing Ideas', src: require("../assets/img/ArticlesNews2.png"), date: '22 December,2022', tegs: ['Building', 'architecture']},
              {title: 'Best For Any Office & Business Interior Solution', src: require("../assets/img/ArticlesNews3.png"), date: '25 December,2022', tegs: ['Kitchen','Kitchen planning']},
              {title: 'Let’s Get Solution For Building Construction Work', src: require("../assets/img/ArticlesNews4.png"), date: '26 December,2022', tegs: ['Building', 'Bedroom']},
              {title: 'Low Cost Latest Invented Interior Designing Ideas', src: require("../assets/img/ArticlesNews5.png"), date: '22 December,2022', tegs: ['Bedroom', 'architecture']},
              {title: 'Best For Any Office & Business Interior Solution', src: require("../assets/img/ArticlesNews6.png"), date: '25 December,2022', tegs: ['Kitchen planning', 'architecture']}
            ]
        };
    },

};
</script>

<style lang="css" scoped>
.blog-banner {
  background-image: url(../assets/img/BlogBanner.jpg);
  height: 353px;
}

.intro {
  padding: 41px 78px;
  border-radius: 37px 37px 0px 0px;
  background: #FFF;
  position: absolute;
  top: 318px;
  left: calc((100vw - 518px) / 2);
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

.post {
  padding-top: 100px;
}
.post_title {
  color: #292F36;
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-size: 50px;
  font-weight: 400;
  line-height: 125%; /* 62.5px */
  letter-spacing: 1px;
}

.postbox {
  display: flex;
  padding: 21px;
  margin-bottom: 41px;
}
.postbox__img {
  border-radius: 50px;
  width: 45%;
}
.postbox__texts {
  display: flex;
  flex-direction: column;
  padding: 50px;
}
.postbox__texts_title {
  color: #292F36;
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-size: 25px;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
  margin-bottom: 22px;
}
.postbox__texts_desc {
  color: #4D5053;
  font-size: 22px;
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
  margin-bottom: 50px;
}

.date-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.date-link_link:hover {
  scale: 1.07;
}

.date {
  color: #4D5053;
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.16px;
  text-transform: capitalize;
}
.flex_start {
  display: flex;
  justify-content: flex-start;
}
.blog {
  padding-top: 96px;
}
.blog__heading {
  margin-bottom: 52px;
}
.blog__heading_title {
  color: #292F36;
  text-align: center;
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-size: 50px;
  font-weight: 400;
  line-height: 125%; /* 62.5px */
  letter-spacing: 1px;
  margin-bottom: 12px;
}
.blog__heading_desc {
  color: #4D5053;
  text-align: center;
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-size: 22px;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}
.blog__content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 27px;
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


</style>