import { useStore } from "vuex";
import { computed } from '@vue/reactivity';

export function getDialogHandle(){
    const store = useStore();
    const getShade = computed(() => {
        return store.getters['getOpenShade'];
    });
    const getIsOpenDialog = computed(()=>{
        return store.getters['getIsOpenDialog'];
    });
    const getDialogContent = computed(()=>{
        return store.getters['getDialogContent'];
    });
    const handleShadeOpen = (data)=>{
        console.log('dat',data)
        store.dispatch('handleShadeOpen', data);
    };
    const handleDialogOpen = (data)=>{
        store.dispatch('handleDialogOpen',data);
    }
    return {
        getShade,
        getIsOpenDialog,
        getDialogContent,
        handleShadeOpen,
        handleDialogOpen,
    };
}