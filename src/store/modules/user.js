import api from '@/api/auth.js'

export default {
    state: {
      isAuth: !!localStorage.getItem('token')
    },
    
    mutations: {
      LOGIN(state) {
        state.isAuth = true
      },
      LOGOUT(state) {
        state.isAuth = false
      }
    },

    actions: {
      LOGIN(context, {email, password}) {
        return api.login(email, password)
          .then((response) => {
            localStorage.setItem('token', response.data.user.token)
            console.log(response)
            context.commit('LOGIN')
          })
          .catch((error) => {
            throw error
        })
      },
      LOGOUT(context) {
        context.commit('LOGOUT')
        localStorage.removeItem('token')
      },
      REGISTER(context, {username, email, password}) {
        return api.register(username, email, password)
          .then((response) => { 
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },

    getters: {
      GET_ACCESS(state) {
        return state.isAuth
      }
    },

    namespaced: true

  }