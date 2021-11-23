import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

export function getSearchHandle() {
    const store = useStore();
    const getSearchResult = computed(() => {
        return store.getters['getSearchResult'];
    });
    const getSearchResultLength = computed(() => {
        return store.getters['getSearchResult'].length;
    });
    const getShowPageNum = computed(()=>{
        return store.getters['getShowPageNum'];
    })
    const handleIsSearch = computed(() => {
        return store.getters['getIsSearch'];
    });
    const handleIsLoading = computed(() => {
        return store.getters['getIsLoading'];
    });
    const handleIsShowPage = computed(()=>{
        return store.getters['getIsShowPage'];
    });
    const handleTotalShowPageNum = computed(() =>{
        return store.getters['getTotalShowPageNum'];
    })
    return {
        getSearchResult,
        handleIsSearch,
        handleIsLoading,
        getSearchResultLength,
        getShowPageNum,
        handleTotalShowPageNum,
        handleIsShowPage,
    };
}
