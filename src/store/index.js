import { createStore } from 'vuex'
import Homepage from './Homepage'
import { 
    apiGetSpotSearch,
    apiGetRestaurantSearch,
    apiGetHotelSearch,
    apiGetActiveSearch
} from '@/api/index.js';
export default createStore({
    state: {
        isLoading: false,
        searchResult: [],
        isSearch:false
    },
    mutations: {
        setLoading(state, data) {
            state.isLoading = data;
        },
        setSearch(state, data) {
            console.log('setSearch', data);
            state.searchResult = data;
        },
        setIsSearch(state,data){
            state.isSearch = data;
        }
    },
    actions: {
        handleLoading(context, data) {
            context.commit('setLoading', data);
        },
        handleIsSearch(context,data){
            context.commit('setIsSearch', data);
        },
        async handleSearch(context, data) {
            //parms
            // searchText:searchText.value,
            // searchGroup:searchGroup.value,
            // searchLocate:searchLocate.value
            console.log('data', data);
            try {
                let res = [];
                switch (data.searchGroup) {
                    case 'restaurant':
                        console.log('restaur');
                        res = await apiGetRestaurantSearch(data);
                        context.commit('setSearch', res.data);
                        return res.data;
                        break;
                    case 'spot':
                        res = await apiGetSpotSearch(data);
                        context.commit('setSearch', res.data);
                        return res.data;

                        break;
                    case 'hotel':
                        res = await apiGetHotelSearch(data);
                        context.commit('setSearch', res.data);
                        return res.data;

                        break;
                    case 'activity':
                        res = await apiGetActiveSearch(data);
                        context.commit('setSearch', res.data);
                        return res.data;
                        break;
                    case '':
                        res = await apiGetRestaurantSearch(data);
                        let res2 = await apiGetSpotSearch(data);
                        let res3 = await apiGetHotelSearch(data);
                        let res4 = await apiGetHotelSearch(data);
                        let newArr = await res.data.concat(
                            res2.data,
                            res3.data,
                            res4.data
                        );
                        context.commit('setSearch', newArr);
                        return newArr;

                        break;
                    default:
                        break;
                }
            } catch (error) {
                console.log('err', error);
            }
        },
    },
    getters: {
        getIsLoading(state) {
            console.log('loading', state.isLoading);

            return state.isLoading;
        },
        getSearchResult(state){
            return state.searchResult;
        },
        getIsSearch(state){
            console.log('is search', state.isSearch);

            return state.isSearch;
        }
    },
    modules: {
        Homepage,
    },
});
