<template>
  <div class="container">
    <b-card-group columns class="mt-4">
      <Bcar v-for="(movie) in sortedMovies" :key="movie.id"
                      :movie="movie"
      />

    </b-card-group>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Bcar from "~/components/Bcar.vue";
import { mapState } from "vuex";

export default {
  layout: 'layouts/default',
  components: {
    Logo,
      Bcar
  },
    computed:{
      ...mapState({movies: state => state.movies}),
          sortedMovies(){
          return this.movies.sort((a,b)=>b.vote_average - a.vote_average);
        }
    },
    mounted(){
      this.$store.dispatch("getMovies");
    },
    data(){
    return {};
  }
};
</script>

<style>

</style>
