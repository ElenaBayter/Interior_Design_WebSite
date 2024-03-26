<template>
  <div id="app">
    <div class="header center">
        <div class="header__left">
            <router-link to="home"><img class="logo" src="@/assets/img/LogoMain.png" alt="logo"></router-link>
        </div>
        <div class="header__right">
            <nav class="menubar">
                <router-link to="home" class="menubar__icon">Home</router-link>
                <router-link to="categories" class="menubar__icon">Progect</router-link>
                <router-link to="blog" class="menubar__icon">Blog</router-link>
            </nav>
        </div>
    </div>
    <router-view />
    <footer class="footer center">
        <div class="footer__logo">
            <router-link to="home"><img class="footer__logo_pic" src="@/assets/img/LogoMain.png" alt="logo"></router-link>
            <p class="footer__logo_desc">It is a long established fact that a reader will be distracted lookings.</p>
            <div class="footer__links">
                <a href="#"><img class="footer__links_item" src="@/assets/img/twiter.png" alt="twitter"></a>
                <a href="#"><img class="footer__links_item" src="@/assets/img/linkdIn.png" alt="LinkdIn"></a>
            </div>
        </div>
        <div class="footer__pages">
            <h4 class="footer__pages_title">Pages</h4>
            <router-link to="home" class="footer__pages_page">Home</router-link>
            <router-link to="categories" class="footer__pages_page">Project</router-link>
            <router-link to="blog" class="footer__pages_page">Blog</router-link>
        </div>
        <div class="footer__contacts">
            <h4 class="footer__contacts_title">Contacts</h4>
            <p class="footer__contacts_address">55 East Birchwood Ave. Brooklyn, New York 11201 </p>
            <a class="footer__contacts_desc" href="mailto:contact@interno.com">contact@interno.com</a>
            <a class="footer__contacts_desc" href="tel:(123) 456 - 7890">(123) 456 - 7890</a>
        </div>
    </footer>
    
    
  </div>
</template>

<script>


export default {
  name: 'App',
  created(){
    this.$router.push({name: 'home'})
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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 44px;
  padding-bottom: 44px;
}
.logo {
  width: 169px;
}
.menubar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 31px;
}
.menubar__icon {
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-size: 20px;
  line-height: 25px;
  align-items: center;
  color: #292F36;
}
.footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 96px;
  padding-bottom: 70px;
}
.footer__logo_pic {
  width: 177px;
}
.footer__logo_desc {
  color: #4D5053;
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-size: 22px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
  margin-top: 18px;
  margin-bottom: 31px;
}
.footer__links {
  display: flex;
  gap: 54px;
}
.footer__links_item:hover{
  scale: 1.2;
  transition: all 0.3s;
}
.footer__pages {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer__pages_title {
  color: #292F36;
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-size: 25px;
  font-weight: 400;
  line-height: 125%;
  margin-bottom: 9px;
}
.footer__pages_page {
  color: #4D5053;
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-size: 22px;
  font-weight: 400;
  line-height: 300%;
  letter-spacing: 0.22px;
}
.footer__pages_page:hover{
  scale: 1.1;
  transition: all 0.5s;
}
.footer__contacts {
  display: flex;
  flex-direction: column;
}
.footer__contacts_title {
  color: #292F36;
  font-family: "DM Serif Display", serif;
  font-style: normal;
  font-size: 25px;
  font-weight: 400;
  line-height: 125%;
  margin-bottom: 26px;
}
.footer__contacts_address {
  color: #4D5053;
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-size: 22px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.22px;
}
.footer__contacts_desc {
  color: #4D5053;
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-size: 22px;
  font-weight: 400;
  line-height: 300%;
  letter-spacing: 0.22px;
}
</style>./components/CategoriesComp.vue
