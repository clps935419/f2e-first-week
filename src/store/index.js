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
        searchResult: [],//搜尋完的所有資料
        finalSearchResult:[],//判斷完畢分頁處理完的結果
        isSearch: false,
        showPageNum: 20, //一頁顯示幾筆
        isShowPage: false,//是否顯示頁數元件
        currentPageIndex: 1, //目前在第幾頁
        currentTotalShowPageNum:0,//目前頁面能顯示幾頁
    },
    mutations: {
        setLoading(state, data) {
            state.isLoading = data;
        },
        setSearch(state, data) {
            //搜尋結果
            console.log('setSearch', data);
            state.searchResult = data;
            //重製目前頁數
            state.currentPageIndex = 1;
            //重製顯示page元件
            state.isShowPage = false;
            //重製總共能顯示幾頁
            state.currentTotalShowPageNum = 0;

            //計算目前能顯示幾頁
            if (data.length > state.showPageNum) {
                state.currentTotalShowPageNum = Math.ceil(
                    data.length / state.showPageNum
                );
                state.isShowPage = true;
                //計算資料的起始值跟最大值
                const maxNum = state.currentPageIndex * state.showPageNum;
                const minNum =
                    state.currentPageIndex * state.showPageNum -
                    state.showPageNum +
                    1;
                const filterResult = state.searchResult.filter(
                    (item, index) => {
                        let num = index + 1;
                        return num >= minNum && num <= maxNum;
                    }
                );
                state.finalSearchResult = filterResult;

            } else {
                state.currentTotalShowPageNum = 0;
                state.isShowPage = false;
                state.finalSearchResult = data;
            }
        },
        setIsSearch(state, data) {
            state.isSearch = data;
        },
        setPageIndex(state, data) {
            state.currentPageIndex = data;
        },
        setPageShow(state,data){
            state.isShowPage = data;
        },
    },
    actions: {
        handleLoading(context, data) {
            context.commit('setLoading', data);
        },
        handleIsSearch(context, data) {
            context.commit('setIsSearch', data);
        },
        handlePageIndex(context, data) {
            context.commit('setPageIndex', data);
        },
        handlePageShow(context, data) {
            context.commit('setPageShow', data);
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
            return state.isLoading;
        },
        getSearchResult(state) {
            return state.searchResult;
        },
        getIsSearch(state) {
            return state.isSearch;
        },
        getShowPageNum(state) {
            return state.showPageNum;
        },
        getTotalShowPageNum(state){
            return state.currentTotalShowPageNum;
        },
        getIsShowPage(state){
            return state.isShowPage;
        },
        //拿到分頁的搜尋結果
        getPageSearchResult(state){
            //計算資料的起始值跟最大值
            const maxNum = state.currentPageIndex * state.showPageNum;
            const minNum =
                state.currentPageIndex * state.showPageNum -
                state.showPageNum +
                1;
            const filterResult = state.searchResult.filter((item, index) => {
                let num = index + 1;
                return num >= minNum && num <= maxNum;
            });
            return filterResult;
        }
    },
    modules: {
        Homepage,
    },
});
