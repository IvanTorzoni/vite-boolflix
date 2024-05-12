<script>
import axios from 'axios';
import {store} from "../store.js"
import AppSearch from './AppSearch.vue'

export default {
components: { AppSearch },
    data() {
        return {
            store
        }
    },
    
    methods: {
        search(){
        axios.get("https://api.themoviedb.org/3/search/movie", {
            params: {
            api_key: this.store.apiKey,
            query: this.store.searchQuery
            }
            }).then((resp) => {
            this.store.moviesArray = resp.data.results;
            })

            // Chiamata serie tv
            axios.get("https://api.themoviedb.org/3/search/tv", {
                params: {
                api_key: this.store.apiKey,
                query: this.store.searchQuery
            }
            }).then((resp) => {
            this.store.tvArray = resp.data.results;
            })
        },
    }
    
}
</script>

<template>
    <header class="pt-5 pb-5 bg-black">
        <div class="container d-flex justify-content-between">
            <div><h1 class="logo">BOOLFLIX</h1></div>
            <div>
                <AppSearch @searchClicked="search"/>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
.logo{
    color: red;
}
</style>