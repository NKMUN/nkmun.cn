<template>
  <div class="copyright">
    <div class="line"> </div>
    <span class="copyright-text">© 2011-2018 Nanking International Model United Nations Conference for High School Students, All Rights Reserved.</span>
    <span class="copyright-text">汇文国际中学生模拟联合国大会组委会 版权所有 <a class="link" href="http://www.miitbeian.gov.cn">苏ICP备15062651号</a></span>
  </div>
</template>

<script>
export default {
  name: 'copyright',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .copyright {
    width: 100%;
    min-width: 1200px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-top: 20px;
  }

  .line {
    height: 1px;
    width: 100%;
    background: #e5e5e5;
    margin-bottom: 20px;
  }

  .copyright-text {
    opacity: 0.3;
    color: #00253d;
    font-size: 14px;
  }

  .link {
    color: #000;
    text-decoration: none;
  }

  .link:hover {
    color: #177cf9;
  }

  .link:active {
    color: #000;
  }
</style>
