<template>
        <b-card v
          :title="movie.title"
          :img-src="'https://image.tmdb.org/t/p/w1000_and_h563_face'+movie.backdrop_path"
          img-alt="Image"
          img-top
        >
          <b-card-text>{{movie.overview}}</b-card-text>
          <b-button to="/detail" @click="setData2()">View Detail</b-button>
        </b-card>
</template>

<script>

    import { mapState } from "vuex";

    export default {
        name: "bcar",
        props:{
            movie:{
                type: Object,
                default:{}
            }
        },
        methods:{
            setData2 : function(){
                this.$store.commit("setData",this.movie);
            }
        }


    }
</script>

<style scoped>

</style>
