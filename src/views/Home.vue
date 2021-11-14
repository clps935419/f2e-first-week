<script>
  import {
    computed,
    onMounted
  } from '@vue/runtime-core';
  import {
    useStore
  } from 'vuex';
  import Activity from '@/components/Home/Activity.vue';
  import Restaurant from '@/components/Home/Restaurant.vue'

  export default {
    components: {
      Activity,
      Restaurant
    },
    setup() {
      const store = useStore();
      const init = () => {
        console.log('ini')
        store.dispatch('handleIsSearch',false);
        store.dispatch('Homepage/handleInit').then((res) => {
          handleData(res);
        });
      };
      const handleData = (data) => {
        let i = 0;
        data.forEach(item => {
          const img = new Image();
          img.src = item.Picture.PictureUrl1;
          img.onload = () => {
            let isLoading = false;
            i++;
            if(i === data.length){
              isLoading = false;
            }else{
              isLoading = true;
            }
            store.dispatch('handleLoading', isLoading);
          }
        });
      }
      const handleIsSearch = computed(()=>{
        return store.getters['getIsSearch'];
      });
      onMounted(() => {
        init();
      })
      return {
        handleIsSearch
      }
    }
  }
</script>
<template>
<div class="homepage" v-if="!handleIsSearch">
  <Activity />
  <Restaurant />
</div>
</template>
<style lang="scss" scoped>
.homepage{
  width: 85%;
  margin: 0 auto;
  padding-top: 90px;
  padding-bottom: 85px;
}
</style>