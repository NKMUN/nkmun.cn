<template>
  <div class="footer">
    <div class="logo">
      <img class="logo-img" src="/static/images/logo_full.png">
    </div>
    <div class="wechat">
      <span class="title">官方微信</span>
      <img class="wechat-qrcode" src="/static/images/wechat.png">
      <span>微信号：汇文国际</span>
    </div>
    <div class="other">
      <div class="weibo">
        <span class="title">官方微博</span>
        <span>微博：<a class="link" href="http://weibo.com/nkmunc">汇文国际</a></span>
      </div>
      <div class="email">
        <span class="title">官方邮箱</span>
        <span>汇文国际组委会：<a class="link" href="mailto:staff@nkmun.cn">staff@nkmun.cn</a></span>
        <span>汇文国际2018学术团队：<a class="link" href="mailto:2018@nkmun.cn">2018@nkmun.cn</a></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer {
    width: 100%;
    min-width: 1200px;
    height: 175px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    margin-top: 50px;
  }

  .logo, .wechat, .other, .weibo, .email {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    font-size: 16px;
  }

  .logo, .wechat, .other {
    margin: 0 80px;
  }

  .other {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
  }

  .logo-img {
    height: 175px;
  }

  .weibo {
    text-align: left;
  }

  .email {
    margin-top: 10px;
    text-align: left;
  }

  .wechat-qrcode {
    width: 120px;
    height: 120px;
    margin: auto;
  }

  .title {
    font-size: 22px;
  }

  .link {
    color: #000;
    text-decoration: none;
  }

  .link:hover {
    color: #52a0fa;
  }

  .link:active {
    color: #000;
  }
</style>
