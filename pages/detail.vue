<template>
  <div class="container">
    <b-card :title="this.dataMovie.title"
            :img-src="'https://image.tmdb.org/t/p/w1000_and_h563_face'+this.dataMovie.backdrop_path"
             img-alt="Image" img-top to="/detail">
      <b-card-text>
        {{this.dataMovie.overview}}
      </b-card-text>
  </b-card>
  </div>
</template>

<script>
    import { mapState } from "vuex";

    export default {
        layout: 'layouts/default',
        computed:{
            ...mapState({dataMovie: state => state.dataMovie}),

        },
        data(){
            return {
            };
        }
    };
</script>
