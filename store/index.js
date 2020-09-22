import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      blogPosts: null,
    }),
    mutations: {
      setBlogPosts(state, blogPosts) {
        state.blogPosts = blogPosts
      },
    },
    actions: {
      getBlogPosts(context) {
        // logic to get content from Kentico Cloud
      },
    },
  })
}

export default createStore
