<script>
import Header from './components/Haeder.vue';
import Banner from './components/Banner.vue';
import Footer from './components/Footer.vue';
import Loading from './components/Loading.vue';
import SearchResult from './components/SearchResult.vue';
import Page from '@/components/Page.vue'
import Dialog from '@/components/Dialog.vue'

import {useDialogHandle} from '@/composition-api/'

export default {
  components:{
    Header,
    Banner,
    Footer,
    Loading,
    SearchResult,
    Page,
    Dialog
  },
  setup() {
    const{
      getShade,
      handleShadeOpen,
      handleDialogOpen
      } = useDialogHandle();
    const closeShade = ()=>{
      console.log('點--')
      handleShadeOpen(false);
      handleDialogOpen(false);
    }
    return{
      getShade,
      closeShade
    }
  },
}
</script>
<template>
  <div class="wrapper">
  <Header/>
  <Banner/>
  <div class="content">
  <Loading/>  
  <SearchResult/>
  <Page/>
  <router-view/>
  </div>
  <Footer/>
  </div>
  <!-- 遮罩 -->
  <div :class="['shade',{show:getShade}]" @click="closeShade"></div>
  <Dialog/>
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
.shade{
  display: none;
  width: 100%;
  height: 100Vh;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  &.show{
    display: block;
  }
}

</style>
