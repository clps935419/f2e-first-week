import { createStore } from 'vuex'
import Homepage from './Homepage'
export default createStore({
    state: {
        isLoading: true,
    },
    mutations: {
        setLoading(state,data){
            state.isLoading = data;
        }
    },
    actions: {
        handleLoading(context, data) {
            context.commit('setLoading', data);
        },
    },
    getters: {
        getIsLoading(state) {
            return state.isLoading;
        },
    },
    modules: {
        Homepage,
    },
});
