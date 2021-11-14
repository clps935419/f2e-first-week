<template>
  <div class="spot">
    <Activity/>
  </div>
</template>
<script>
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import Activity from '@/components/Home/Activity.vue'
export default {
  components: {
    Activity
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
.spot{
  width: 85%;
  margin: 0 auto;
  padding-top: 90px;
  padding-bottom: 85px;
}
</style>