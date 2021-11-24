<script>
import { ref ,computed} from '@vue/reactivity'
import { watch } from '@vue/runtime-core';
import {useStore} from 'vuex'
import {useSearchHandle} from '@/composition-api/'
export default {
    setup(){
        const store = useStore();
        const {
            handleTotalShowPageNum,
            handleIsShowPage,
            handleIsSearch,
            handleIsLoading,
            getCurrentPageIndex
            
            } = useSearchHandle();
        
        //點擊知道目前在哪一頁
        const getCurrentPageNum = (num)=>{
            store.dispatch('handlePageIndex',parseInt(num));
        };
        //測試用
        // watch(getCurrentPageIndex,(item)=>{
        //     console.log('ite',item);
        // });  
        return{
            handleIsSearch,
            getCurrentPageNum,
            handleTotalShowPageNum,
            handleIsShowPage,
            handleIsLoading,
            getCurrentPageIndex
        }
    }
}
</script>
<template>
  <div class="page" v-if="handleIsSearch && handleIsShowPage && !handleIsLoading">
      <div class="page_prev" @click="getCurrentPageNum(1)">&lt;&lt;</div>
      <ul class="page_item-box">
          <li v-for="n in handleTotalShowPageNum" :key="n" @click="getCurrentPageNum($event.target.textContent)" :class="{active:n == getCurrentPageIndex}">{{n}}</li>
      </ul>
      <div class="page_end" @click="getCurrentPageNum(handleTotalShowPageNum)">&gt;&gt;</div>
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
            padding: 7px 10px;
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