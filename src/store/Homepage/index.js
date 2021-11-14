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
            try {
                let tmpObj = {};
                const res = await apiGetActivity();
                const res2 = await apiGetRestaurant();

                tmpObj.popularActivity = res.data;
                tmpObj.popularRestaurant = res2.data;

                context.commit('init', tmpObj);
                return res.data;
            } catch (error) {
            }
        },
    },
    getters: {
        getPopularActivity(state) {
            return state.popularActivity;
        },
        getPopularRestaurant(state) {
            return state.popularRestaurant;
        },
    },
};
