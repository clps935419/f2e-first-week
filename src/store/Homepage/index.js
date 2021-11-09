import { apiGetActivity } from '@/api/index.js';
import axios from 'axios';
export default {
    namespaced: true,
    state: {},
    mutations: {
        init() {

        },
    },
    actions: {
        async handleInit(context, data) {
            console.log('測試', apiGetActivity);
            try {
                const res = await apiGetActivity();
                console.log('re32', res);
                context.commit('init', res.data);
                return res.data;
            } catch (error) {
                console.error('error', error);
            }
        },
    },
    getters: {},
};
