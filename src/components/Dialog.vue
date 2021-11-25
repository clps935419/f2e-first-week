<script>
import { useStore } from 'vuex'
import {useDialogHandle} from '@/composition-api/'
import { watch } from '@vue/runtime-core';
export default {
    setup(){
        const store = useStore();
        const {
            getIsOpenDialog,
            getDialogContent,
            getShade,
             handleShadeOpen,
            handleDialogOpen
            } = useDialogHandle();
        const closeDialogEvent =(e)=>{
            if(e.target.className.indexOf('dialog-item') === -1){
                 handleShadeOpen(false);
                handleDialogOpen(false);
            }
        }    
        watch(getDialogContent,(item)=>{
            console.log('igetDialogContent',item);
        });    
        return{
            getIsOpenDialog,
            getDialogContent,
            getShade,
            closeDialogEvent
        }
    }
}
</script>
<template>
  <div class="dialog-wrapper" v-if="getIsOpenDialog && getShade" @click="closeDialogEvent">
      <div class="dialog-item">
          測試用-{{getDialogContent.Name}}
      </div>
  </div>
</template>
<style lang="scss" scoped>
.dialog-wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  outline: 0;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dialog-item{
    width: 500px;
    background: white;
}
</style>