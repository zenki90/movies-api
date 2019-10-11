import Vuex from "vuex"
import Vue from "vue";

Vue.use(Vuex)

const store = () => {

  return new Vuex.Store({
    state :{
      movies:[]
    },
    mutations : {
      async setMovies(state, movies){
        state.movies = movies;
      },
      async setData(state, data){
        state.dataMovie = data;
      },
    },
    actions:{
      async getMovies(context){
        let result = await this.$axios.$get('movie/popular?api_key=1f8689e240f206fdf271aa4b305f2889\n');
        context.commit('setMovies', result.results);
      }
    }
  })
}

export default store;
