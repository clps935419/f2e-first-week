import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

export function getSearchHandle() {
    console.warn('進去')
    const store = useStore();
    const getSearchResult = computed(() => {
        return store.getters['getSearchResult'];
    });
    const handleIsSearch = computed(() => {
        return store.getters['getIsSearch'];
    });
    const handleIsLoading = computed(() => {
        return store.getters['getIsLoading'];
    });
    return {
        getSearchResult,
        handleIsSearch,
        handleIsLoading,
    };
}
