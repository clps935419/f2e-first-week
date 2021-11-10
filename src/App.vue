<script>
import Header from './components/Haeder.vue';
import Banner from './components/Banner.vue';
import Footer from './components/Footer.vue';
import Loading from './components/Loading.vue';

export default {
  components:{
    Header,
    Banner,
    Footer,
    Loading
  },
  setup() {
    
  },
}
</script>
<template>
  <div class="wrapper">
  <Header/>
  <Banner/>
  <div class="content">
  <Loading/>  
  <router-view/>
  </div>
  <Footer/>
  </div>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
</template>

<style lang="scss">
html,body,#app,.wrapper{
  height: 100%;
}
body{
  background-color: #F5F6FA;
}
.wrapper{
  
}
.content{
  min-height: 330px;
}

</style>
