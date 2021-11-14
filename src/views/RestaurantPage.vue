<template>
  <div class="restaurant">
    <Restaurant/>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import Restaurant from '@/components/Home/Restaurant.vue'
export default {
  components: {
      Restaurant
    },
  setup(){
    const store = useStore();
    const init = ()=>{
      store.dispatch('handleIsSearch',false);
    }
    onMounted(()=>{
      init();
    })
    return{

    }
  }
}
</script>

<style scoped lang="scss">
.restaurant{
  width: 85%;
  margin: 0 auto;
  padding-top: 90px;
  padding-bottom: 85px;
}
</style>

