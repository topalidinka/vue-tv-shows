import api from '../../services/api';

export default {

    namespaced: true,

    state: {

    },

    getters: {

    },

    mutations: {

    },

    actions: {
        async searchShows(context, { query }) {
            return api.get(`/api/search/shows?q=${query}`);
        },
    },

};
