<script>
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
  setup(){
    const store = useStore();
    const init = ()=>{
      store.dispatch('Homepage/handleInit').then((res)=>{
        handleData(res); 
      });
    };
    const handleData = (data)=>{
      let i = 0;
      data.forEach(item => {
        const img = new Image();
        img.src = item.Picture.PictureUrl1;
        img.onload=()=>{
          i++;
          store.dispatch('handleLoading',i===data.length);
        }
      });
    }
    onMounted(()=>{
      init();
    })
    return{

    }
  }
}
</script>
<template>
  home
</template>
