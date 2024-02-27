<template>
    <div>
        <footer class="footer center">
        <div class="footer__logo">
            <a href="./index.html"><img class="footer__logo_pic" src="../assets/img/LogoMain.png" alt="logo"></a>
            <p class="footer__logo_desc">It is a long established fact that a reader will be distracted lookings.</p>
            <div class="footer__links">
                <a href="#"><img class="footer__links_item" src="../assets/img/twiter.png" alt="twitter"></a>
                <a href="#"><img class="footer__links_item" src="../assets/img/linkdIn.png" alt="LinkdIn"></a>
            </div>
        </div>
        <div class="footer__pages">
            <h4 class="footer__pages_title">Pages</h4>
            <a class="footer__pages_page" href="./index.html">Home</a>
            <a class="footer__pages_page" href="#">Project</a>
            <a class="footer__pages_page" href="#">Blog</a>
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
    name: 'FooterComp',

    data() {
        return {
            
        };
    },

};
</script>

<style lang="css" scoped>
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
</style>