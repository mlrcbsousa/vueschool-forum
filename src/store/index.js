import Vue from 'vue'
import Vuex from 'vuex'
import sourceData from '@/data';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...sourceData,
    authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
  },

  getters: {
    authUser (state) {
      return state.users[state.authId]
    }
  },

  actions: {
    createPost ({ commit, state }, post) {
      const postId = 'greatPost' + Math.random()
      post['.key'] = postId
      post.userId = state.authId
      post.publishedAt = Math.floor(Date.now() / 1000)

      commit('setPost', { post, postId })
      commit('appendPostToThread', { postId, threadId: post.threadId })
      commit('appendPostToUser', { postId, userId: post.userId })
    },

    updateUser ({ commit }, user) {
      commit('setUser', { userId: user['.key'], user })
    }
  },

  mutations: {
    setUser (state, { user, userId }) {
      Vue.set(state.users, userId, user)
    },
    setPost (state, { post, postId }) {
      Vue.set(state.posts, postId, post)
    },
    appendPostToThread (state, { postId, threadId }) {
      const thread = state.threads[threadId]
      Vue.set(thread.posts, postId, postId)
    },
    appendPostToUser (state, { postId, userId }) {
      const user = state.users[userId]
      Vue.set(user.posts, postId, postId)
    }
  }
})
