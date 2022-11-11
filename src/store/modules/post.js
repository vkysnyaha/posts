import api from '@/api/posts.js'

export default {
    state: {
        input: false,
        posts: []
    },
    
    mutations: {
      SET_INPUT_VALUE(state) {
        state.input = !state.input
      }
    },

    actions: {
      GET_POSTS_LIST(context, page) {
        return api.getPostsList(page)
          .then((response) => {
            context.state.posts = response.data.articles
            // debugger
          })
          .catch((error) => {
          })
      }
    },

    getters: {
        GET_INPUT_VALUE(state) {
            return state.input
        },
        GET_POSTS(state) {
          return state.posts
        }
    },

    namespaced: true

  }