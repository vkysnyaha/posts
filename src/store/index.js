import { createStore } from 'vuex'
import user from '@/store/modules/user.js'
import post from '@/store/modules/post.js'

export default createStore({
  modules: {
    user,
    post
  }
})
