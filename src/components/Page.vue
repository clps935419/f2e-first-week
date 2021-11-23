<script>
import { ref ,computed} from '@vue/reactivity'
import { watch } from '@vue/runtime-core';
import {useStore} from 'vuex'
import {useSearchHandle} from '@/composition-api/'
export default {
    setup(){
        const store = useStore();
        const {
            getSearchResultLength,
            getShowPageNum,
            handleTotalShowPageNum,
            handleIsShowPage,
            handleIsSearch
            } = useSearchHandle();
        
        //點擊知道目前在哪一頁
        const getCurrentPageNum = (e)=>{
            store.dispatch('handlePageIndex',parseInt(e.target.textContent));
        }
        return{
            handleIsSearch,
            getCurrentPageNum,
            handleTotalShowPageNum,
            handleIsShowPage
        }
    }
}
</script>
<template>
  <div class="page" v-if="handleIsSearch && handleIsShowPage">
      <div class="page_prev">&lt;&lt;</div>
      <ul class="page_item-box">
          <li v-for="n in handleTotalShowPageNum" :key="n" @click="getCurrentPageNum">{{n}}</li>
      </ul>
      <div class="page_end">&gt;&gt;</div>
  </div>
</template>
<style lang="scss" scoped>
.page{
    display: flex;
    align-items: center;
    justify-content: center;
    .page_prev{
            border: black 1px solid;
            height: 30px;
            line-height: 30px;
    }
    .page_end{
            border: black 1px solid;
            height: 30px;
            line-height: 30px;


        
    }
    .page_item-box{
        display: flex;
        >li{
            padding: 5px;
            border: black 1px solid;
            height: 30px;
            border-left:none ;
        &:last-child{
            border-right: none;
        }
        }
    }
}
</style>