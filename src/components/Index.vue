<template>
  <div class="index">
    <div v-title="'汇文国际 | 首页'"></div>
    <Navbar></Navbar>
    <img src="/static/images/background.jpg" class="background-pic"/>
    <div class="container">
      <span>相约南京 汇文等你</span>
      <a class="link" href="https://hi.nkmun.cn">和汇文Say 'Hi'</a>
    </div>
    <div class="copyright">
      <span class="copyright-text">© 2011-2018 Nanking International Model United Nations Conference for High School Students, All Rights Reserved.</span>
      <span class="copyright-text">汇文国际中学生模拟联合国大会组委会 版权所有 <a class="text-link" href="http://www.miitbeian.gov.cn">苏ICP备15062651号</a></span>
    </div>
  </div>
</template>

<script>
import Navbar from './Nav'
export default {
  name: 'index',
  components: {
    Navbar
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index {
    width: 100%;
    min-width: 1200px;
  }

  .background-pic {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    filter: brightness(80%);
  }

  .container {
    width: 100%;
    min-width: 1200px;
    margin-top: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  .container span {
    font-size: 48px;
    color: #fff;
  }

  .link {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    display: inline-block;
    margin: auto;
    width: 200px;
    height: 60px;
    background-color: #1e88f5;
    border-radius: 30px;
    margin-top: 50px;
    letter-spacing: 1px;
  }

  .link:hover {
    background-color: #52a0fa;
    box-shadow: 0 0 3px 0 rgba(30,136,245,.3);
  }

  .link:active {
    background-color: #1e88f5;
    box-shadow: 0 0 3px 0 rgba(30,136,245,.3), inset 1px 1px 3px 0 #004082;
  }

  .copyright {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    min-width: 1200px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    font-size: 14px;
  }

  .copyright-text {
    opacity: 0.7;
    color: #fff;
  }

  .text-link {
    color: #fff;
    text-decoration: none;
  }

  .text-link:hover {
    color: #52a0fa;
  }

  .text-link:active {
    color: #fff;
  }
</style>
