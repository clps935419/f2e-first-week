<script>
import { ref ,computed} from '@vue/reactivity'
import { watch } from '@vue/runtime-core';
import {useStore} from 'vuex'
import {useSearchHandle} from '@/composition-api/'
export default {
    setup(){
        const store = useStore();
        const btnActivePage = ref(1);
        const {
            getSearchResultLength,
            getShowPageNum,
            handleTotalShowPageNum,
            handleIsShowPage,
            handleIsSearch,
            handleIsLoading,
            } = useSearchHandle();
        
        //點擊知道目前在哪一頁
        const getCurrentPageNum = (e)=>{
            btnActivePage.value = parseInt(e.target.textContent);
            console.log('****',btnActivePage);
            store.dispatch('handlePageIndex',parseInt(e.target.textContent));
        }
        return{
            btnActivePage,
            handleIsSearch,
            getCurrentPageNum,
            handleTotalShowPageNum,
            handleIsShowPage,
            handleIsLoading
        }
    }
}
</script>
<template>
  <div class="page" v-if="handleIsSearch && handleIsShowPage && !handleIsLoading">
      <div class="page_prev">&lt;&lt;</div>
      <ul class="page_item-box">
          <li v-for="n in handleTotalShowPageNum" :key="n" @click="getCurrentPageNum" :class="{active:n === btnActivePage}">{{n}}</li>
      </ul>
      <div class="page_end">&gt;&gt;</div>
  </div>
</template>
<style lang="scss" scoped>
.page{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    color:#ff1d6c;
    .page_prev{
            height: 30px;
            line-height: 30px;
            cursor: pointer;
            padding: 0px 10px;
    }
    .page_end{
            height: 30px;
            line-height: 30px;
            cursor: pointer;
            padding: 0px 10px;
    }
    .page_item-box{
        display: flex;
        >li{
            padding: 5px 10px;
            height: 30px;
            cursor: pointer;
            &.active{
                background-color: #ff1d6c;
                color: white;
            }
        }
    }
}
</style>