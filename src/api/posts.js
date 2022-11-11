import api from '@/api/api'

export default {
    getPostsList(page) {
        return api
            .get(`articles?limit=10&offset=${page}`);
    },
}