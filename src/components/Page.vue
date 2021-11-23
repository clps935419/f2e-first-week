<script>
import { ref ,computed} from '@vue/reactivity'
import {useStore} from 'vuex'
export default {
    setup(){
        const pageNum =ref(10);
        const store = useStore();
        const handleIsSearch = computed(()=>{
        return store.getters['getIsSearch'];
    });
        return{
            pageNum,
            handleIsSearch
        }
    }
}
</script>
<template>
  <div class="page" v-if="handleIsSearch">
      <div class="page_prev">&lt;&lt;</div>
      <ul class="page_item-box">
          <li v-for="n in pageNum" :key="n">{{n}}</li>
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