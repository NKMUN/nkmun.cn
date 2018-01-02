<template>
  <div class="nav">
    <a class="navbar-logo" href="/"><img alt="Logo" src="/static/images/logo_white.png" class="logo"></a>
    <ul class="navbar">
      <li class="navbar-item" :class="{'active-item': this.$route.path === '/previous'}"><a href="/previous">往届回顾</a></li>
      <li class="navbar-item" :class="{'active-item': this.$route.path === '/contact'}"><a href="/contact">联系我们</a></li>
      <li class="navbar-item" :class="{'active-item': this.$route.path === '/resource'}"><a href="/resource">资源下载</a></li>
      <li class="navbar-item"><a href="http://hi.nkmun.cn">Hi 汇文</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    min-width: 1200px;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
  }

  .navbar-logo {
    outline: none;
  }

  .logo {
    width: auto;
    height: 100px;
  }

  .navbar {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    padding: 0;
    margin: 0;
  }

  .navbar-item {
    margin: auto;
  }

  .navbar-item a {
    display: inline-block;
    width: 120px;
    font-size: 18px;
    color: #fff;
    text-decoration: none;
  }

  .active-item a{
    color: #00b9f7;
  }

  .navbar-item a:hover {
    color: #fff;
  }

  .active-item a:hover{
    color: #00b9f7;
  }

  .navbar-item a:active {
    color: #fff;
  }

  .active-item a:active{
    color: #00b9f7;
  }

  .navbar-item a:visited {
    color: #fff;
  }

  .active-item a:visited{
    color: #00b9f7;
  }
</style>
