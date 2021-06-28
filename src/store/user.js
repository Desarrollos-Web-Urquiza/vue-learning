'use strict'

export default  {
    namespaced: true,
    state: {
       username: "Soy username",
    },
    getters: {
        title: state => state.title,
        username: state => state.username
    },
    actions: {
      async GET_USERNAME({commit}, pk) {
          const res = await fetch(`http://localhost:3000/username/${pk}`)
          const usernamePromise = res.json()
          usernamePromise.then((usernameResolve) => {
              console.log(usernameResolve.usernames);
              commit('SET_USERNAME', usernameResolve.usernames)
          });
      }
    },
    mutations: {
      SET_USERNAME(state, username)  {
          state.username = username    
      }
    }
} 