<template>
  <div class="previous">
    <div v-title="'汇文国际 | 往届回顾'"></div>
    <Navbar></Navbar>
    <div class="container">
      <div class="tab">
        <ul class="tab-list">
          <li class="tab-item" :class="{'tab-item-active': activeTab === '2011'}" @click="changeActiveTab('2011')">2011</li>
          <li class="tab-item" :class="{'tab-item-active': activeTab === '2012'}" @click="changeActiveTab('2012')">2012</li>
          <li class="tab-item" :class="{'tab-item-active': activeTab === '2013'}" @click="changeActiveTab('2013')">2013</li>
          <li class="tab-item" :class="{'tab-item-active': activeTab === '2014'}" @click="changeActiveTab('2014')">2014</li>
          <li class="tab-item" :class="{'tab-item-active': activeTab === '2015'}" @click="changeActiveTab('2015')">2015</li>
          <li class="tab-item" :class="{'tab-item-active': activeTab === '2016'}" @click="changeActiveTab('2016')">2016</li>
          <li class="tab-item" :class="{'tab-item-active': activeTab === '2016ss'}" @click="changeActiveTab('2016ss')">2016ss</li>
          <li class="tab-item" :class="{'tab-item-active': activeTab === '2017'}" @click="changeActiveTab('2017')">2017</li>
          <li class="tab-item" :class="{'tab-item-active': activeTab === '2017ss'}" @click="changeActiveTab('2017ss')">2017ss</li>
        </ul>
      </div>
      <div class="intro-list">
        <div class="intro-conference">
          <h2>{{conferenceIntro.title}}</h2>
          <p class="chinesetext">{{conferenceIntro.introCN}}</p>
          <p>{{conferenceIntro.introEN}}</p>
        </div>
        <div class="committee">
          <h2 v-if="activeTab !== '2011'">会场设置</h2>
          <Committee2012 v-if="activeTab === '2012'"></Committee2012>
          <Committee2013 v-if="activeTab === '2013'"></Committee2013>
          <Committee2014 v-if="activeTab === '2014'"></Committee2014>
          <Committee2015 v-if="activeTab === '2015'"></Committee2015>
          <Committee2016 v-if="activeTab === '2016'"></Committee2016>
          <Committee2016ss v-if="activeTab === '2016ss'"></Committee2016ss>
          <Committee2017 v-if="activeTab === '2017'"></Committee2017>
          <Committee2017ss v-if="activeTab === '2017ss'"></Committee2017ss>
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
import {conference2011, conference2012, conference2013, conference2014, conference2015, conference2016, conference2016ss, conference2017, conference2017ss} from '../assets/PreviousList.js'
import Committee2012 from './Previous/Committee2012'
import Committee2013 from './Previous/Committee2013'
import Committee2014 from './Previous/Committee2014'
import Committee2015 from './Previous/Committee2015'
import Committee2016 from './Previous/Committee2016'
import Committee2016ss from './Previous/Committee2016ss'
import Committee2017 from './Previous/Committee2017'
import Committee2017ss from './Previous/Committee2017ss'
export default {
  name: 'previous',
  components: {
    Navbar,
    Footbar,
    Copyright,
    Committee2012,
    Committee2013,
    Committee2014,
    Committee2015,
    Committee2016,
    Committee2016ss,
    Committee2017,
    Committee2017ss
  },
  data () {
    return {
      activeTab: '2011'
    }
  },
  computed: {
    conferenceIntro: function () {
      var tab = this.activeTab
      switch (tab) {
        case '2011':
          return conference2011
        case '2012':
          return conference2012
        case '2013':
          return conference2013
        case '2014':
          return conference2014
        case '2015':
          return conference2015
        case '2016':
          return conference2016
        case '2016ss':
          return conference2016ss
        case '2017':
          return conference2017
        case '2017ss':
          return conference2017ss
      }
    }
  },
  methods: {
    changeActiveTab: function (tab) {
      this.activeTab = tab
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .previous {
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

  .intro-list {
    margin: 0 auto;
    width: 1200px;
    text-align: left;
  }
  
  p {
    text-align: justify;
  }

</style>
