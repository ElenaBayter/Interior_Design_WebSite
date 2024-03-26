<template>
    <div>
      <div class="header center">
        <div class="header__left">
            <a href="./index.html"><img class="logo" src="../assets/img/LogoMain.png" alt="logo"></a>
        </div>
        <div class="header__right">
            <nav class="menubar">
                <a class="menubar__icon" href="./index.html">Home</a>
                <a class="menubar__icon" href="#">Progect</a>
                <a class="menubar__icon" href="#">Blog</a>
            </nav>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderComp',

    data() {
        return {
            
        };
    },
};
</script>

<style lang="css" scoped>
.center {
  padding-left: calc(50% - 47vw);
  padding-right: calc(50% - 47vw);
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
  font-size: 20;
  line-height: 25px;
  align-items: center;
  color: #292F36;
}
</style>