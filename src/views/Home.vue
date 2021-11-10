<script>
  import {
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
            i++;
            store.dispatch('handleLoading', i === data.length);
          }
        });
      }
      onMounted(() => {
        init();
      })
      return {

      }
    }
  }
</script>
<template>
<div class="homepage">
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