<template>
  <div class="resource">
    <div v-title="'汇文国际 | 资源下载'"></div>
    <Navbar></Navbar>
    <div class="container">
      <div class="tab">
        <ul class="tab-list">
          <li class="tab-item" :class="{'tab-item-active': activeTab === '2018'}" @click="changeActiveTab('2018')">2018</li>
          <li class="tab-item" :class="{'tab-item-active': activeTab === '2017ss'}" @click="changeActiveTab('2017ss')">2017ss</li>
          <li class="tab-item" :class="{'tab-item-active': activeTab === '2017'}" @click="changeActiveTab('2017')">2017</li>
          <li class="tab-item" :class="{'tab-item-active': activeTab === '2016ss'}" @click="changeActiveTab('2016ss')">2016ss</li>
          <li class="tab-item" :class="{'tab-item-active': activeTab === '2016'}" @click="changeActiveTab('2016')">2016</li>
          <li class="tab-item" :class="{'tab-item-active': activeTab === '2015'}" @click="changeActiveTab('2015')">2015</li>
          <li class="tab-item" :class="{'tab-item-active': activeTab === '2014'}" @click="changeActiveTab('2014')">2014</li>
          <li class="tab-item" :class="{'tab-item-active': activeTab === '2013'}" @click="changeActiveTab('2013')">2013</li>
          <li class="tab-item" :class="{'tab-item-active': activeTab === '2012'}" @click="changeActiveTab('2012')">2012</li>
        </ul>
      </div>
      <div class="file-list">
        <span class="file-category" v-if="noticeFileList !== undefined">会议通告</span>
        <div class="file-container" v-if="noticeFileList !== undefined">
          <div class="file-item" v-for="item of noticeFileList">
            <a class="file-link" :href="item.src">
              <img class="pdf-logo" src="/static/images/pdf.png">
              <span class="file-name" v-html="item.name"></span>
            </a>
          </div>
        </div>      
        <span class="file-category" v-if="bgFileList !== undefined">背景文件</span>
        <div class="file-container" v-if="bgFileList !== undefined">
          <div class="file-item" v-for="item of bgFileList">
            <a class="file-link" :href="item.src">
              <img class="pdf-logo" src="/static/images/pdf.png">
              <span class="file-name" v-html="item.name"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footbar></Footbar>
    <Copyright></Copyright>
  </div>
</template>

<script>
import Navbar from './Nav'
import Footbar from './Footer'
import Copyright from './Copyright'
import {noticeFileList2018, noticeFileList2017ss, noticeFileList2017, noticeFileList2016ss, noticeFileList2016, noticeFileList2015, noticeFileList2014, noticeFileList2013, noticeFileList2012} from '../assets/NoticeFileList.js'
import {bgFileList2018, bgFileList2017ss, bgFileList2017, bgFileList2016ss} from '../assets/BGFileList.js'
export default {
  name: 'resource',
  components: {
    Navbar,
    Footbar,
    Copyright
  },
  data () {
    return {
      activeTab: '2018'
    }
  },
  computed: {
    noticeFileList: function () {
      var tab = this.activeTab
      switch (tab) {
        case '2018':
          return noticeFileList2018
        case '2017ss':
          return noticeFileList2017ss
        case '2017':
          return noticeFileList2017
        case '2016ss':
          return noticeFileList2016ss
        case '2016':
          return noticeFileList2016
        case '2015':
          return noticeFileList2015
        case '2014':
          return noticeFileList2014
        case '2013':
          return noticeFileList2013
        case '2012':
          return noticeFileList2012
      }
    },
    bgFileList: function () {
      var tab = this.activeTab
      switch (tab) {
        case '2018':
          return bgFileList2018
        case '2017ss':
          return bgFileList2017ss
        case '2017':
          return bgFileList2017
        case '2016ss':
          return bgFileList2016ss
      }
    }
  },
  methods: {
    changeActiveTab: function (tab) {
      this.activeTab = tab
    },
    openFile: function (src) {
      this.$router.push(src)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .resource {
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

  .tab {
    margin: 50px auto 0 auto;
  }

  .tab-list {
    width: 1200px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #e5e5e5;
    list-style: none;
    padding: 0;
  }

  .tab-item {
    width: 75px;
    margin-right: 40px;
    padding-bottom: 15px;
    text-align: center;
    color: #00253d;
    cursor: pointer;
  }
  
  .tab-item-active {
    border-bottom: 2px solid #00b9f7;
  }

  .file-list {
    margin: 0 auto;
    width: 1200px;
    text-align: left;
  }

  .file-category {
    display: inline-block;
    font-size: 22px;
    color: #00253d;
    margin-top: 15px;
  }

  .file-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space;
    align-content: center;
    margin-top: 25px;
  }

  .file-item {
    width: 180px;
    height: 140px;
    margin: 0 20px 20px 0;
    background-color: #db4437;
    position: relative;
  }

  .file-link {
    display: block;
    width: 180px;
    height: 140px;
  }

  .pdf-logo {
    width: 30px;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }

  .file-name {
    display: inline-block;
    color: #fff;
    width: 160px;
    margin: 10px;
    font-size: 16px;
    line-height: 20px;
  }
</style>
