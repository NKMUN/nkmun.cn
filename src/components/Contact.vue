<template>
  <div class="contact">
    <div v-title="'汇文国际 | 联系我们'"></div>
    <Navbar></Navbar>
    <div class="container">
      <table class="contact-list">
        <tr>
          <th>姓名</th>
          <th>手机</th>
          <th>QQ</th>
          <th>负责地区</th>
        </tr>
        <tr v-for="item of contactList">
          <td class="name">{{item.name}}</td>
          <td class="mobile">{{item.mobile}}</td>
          <td class="qq">{{item.qq}}</td>
          <td class="area">{{item.area}}</td>
        </tr>
      </table>
    </div>
    <Footbar></Footbar>
    <Copyright></Copyright>
  </div>
</template>

<script>
import Navbar from './Nav'
import Footbar from './Footer'
import Copyright from './Copyright'
export default {
  name: 'contact',
  components: {
    Navbar,
    Footbar,
    Copyright
  },
  data () {
    return {
      contactList: [{
        name: '朱诗叶',
        mobile: '13122555970',
        qq: '1738097440',
        area: '总负责、上海、青海、西藏、贵州'
      }, {
        name: '吴怡然',
        mobile: '13269168055',
        qq: '632530764',
        area: '北京、内蒙古、黑龙江、吉林'
      }, {
        name: '刘晨阳',
        mobile: '13390790569',
        qq: '609350977',
        area: '广西、陕西、江西、甘肃、新疆'
      }, {
        name: '侯宁哲',
        mobile: '-',
        qq: '592176227',
        area: '天津、江苏、河南、河北'
      }, {
        name: '崔琦',
        mobile: '15221599778',
        qq: '781787825',
        area: '浙江、云南、山东、山西'
      }, {
        name: '赵晨瑞',
        mobile: '18862158020',
        qq: '1540777364',
        area: '安徽、辽宁、湖南、湖北、宁夏'
      }, {
        name: '苏庭宽',
        mobile: '18111239906',
        qq: '645897057',
        area: '广东、重庆、四川、海南、福建'
      }, {
        name: '骆恬馨',
        mobile: '+886 922885983',
        qq: '3145180465',
        area: '台湾、香港、澳门、海外'
      }, {
        name: '赵致宇',
        mobile: '+886 988432863',
        qq: '2790465697',
        area: '台湾、香港、澳门、海外'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contact {
    width: 100%;
    min-width: 1200px;
  }

  .nav {
    background-image: linear-gradient(-45deg,rgba(30,133,219,.95),rgba(0,61,126,.95));
  }

  .container {
    width: 100%;
    min-width: 1200px;
    min-height: 700px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
  }

  .contact-list {
    margin: auto;
    font-size: 18px;
    line-height: 35px;
    border: 1px solid #e5e5e5;
    border-collapse: collapse;
  }

  .contact-list th {
    border: 1px solid #e5e5e5;
  }

  .contact-list td {
    border: 1px solid #e5e5e5;
  }

  .contact-list .name {
    min-width: 100px;
  }

  .contact-list .mobile {
    min-width: 175px;
  }

  .contact-list .qq {
    min-width: 150px;
  }

  .contact-list .area {
    min-width: 350px;
  }
</style>
