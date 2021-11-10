import { apiGetActivity, apiGetRestaurant } from '@/api/index.js';
export default {
    namespaced: true,
    state: {
        popularActivity: [], //熱門活動
        popularRestaurant: [], //熱門餐廳
    },
    mutations: {
        init(state, data) {
            state.popularActivity = data.popularActivity;
            state.popularRestaurant = data.popularRestaurant;
        },
    },
    actions: {
        async handleInit(context, data) {
            console.log('測試', apiGetRestaurant);
            try {
                let tmpObj = {};
                const res = await apiGetActivity();
                const res2 = await apiGetRestaurant();

                tmpObj.popularActivity = res.data;
                tmpObj.popularRestaurant = res2.data;

                console.log('re32', res2);
                context.commit('init', tmpObj);
                return res.data;
            } catch (error) {
                console.error('error', error);
            }
        },
    },
    getters: {
        getPopularActivity(state) {
            console.log('get', state.popularActivity);
            return state.popularActivity;
        },
        getPopularRestaurant(state) {
            console.log('get', state.popularRestaurant);
            return state.popularRestaurant;
        },
    },
};
