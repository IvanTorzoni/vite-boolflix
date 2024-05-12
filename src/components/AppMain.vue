<script>
import { store } from '../store'
import AppMovie from './AppMovie.vue';
import AppTv from "./AppTv.vue";


export default {

    components: {
        AppMovie,
        AppTv
    },

    data(){
        return{
            store
        }
    },
    methods: {

    }
}
</script>

<template>
    <main>

        <div class="movies-list container-fluid">
            <h2 class="text-center p-5">FILM</h2>
            <ul class="d-flex flex-wrap">
                <li v-for="curMovie in this.store.moviesArray" class="list-item">
                    <AppMovie :movieObj="curMovie"/>
                </li>
            </ul>
        </div>
        <div class="tv-list container-fluid">
            <h2 class="text-center p-5">SERIE TV</h2>
            <ul class="d-flex flex-wrap">
                <li v-for="curTv in this.store.tvArray" class="list-item">
                    <AppTv :tvObj="curTv"/>
                </li>
            </ul>
        </div>
    </main>
</template>

<style scoped lang="scss">

main {
    background-color: grey;
}

.list-item{
    width: 342px;
    list-style-type: none;
}
</style>