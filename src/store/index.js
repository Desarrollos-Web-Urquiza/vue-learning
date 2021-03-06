import Vue from 'vue'
import Vuex from 'vuex'
import usersStore from './user'
//youtube.com/watch?v=sVlD7PCRj8Q
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "Soy titulo de Vuex",
  },
  getter:   {
    title: state => state.title,
  },
  modules:{
    user:  usersStore
  }
})