<script>
import { store } from "../store.js";

export default {
    props: {
        tvObj: Object
    },

    data() {
        return{
            store
        }
    },

    methods: {
        voteTrasform(vote){
            vote = Math.floor(vote / 2) + 1
            if (vote < 0){
                return 0
            } else if (vote > 5 )
                return 5
            else {
                return vote
            }
        },
        showFlag(curFlag){
            let imgUrl = ""
            switch(curFlag){
                case "en":
                    imgUrl = "../src/assets/img/united-kingdom.png"
                    break;
                case "it":
                    imgUrl = "../src/assets/img/italy.png"
                    break; 
                case "fr":
                    imgUrl = "../src/assets/img/france.png"
                    break; 
                case "ja":
                    imgUrl = "../src/assets/img/japan.png"
                    break;
                default:
                    return "Bandiera non disponibile"   
            }
            return imgUrl
        }
    }
}
</script>

<template>
    <div class="tv-card" :style="{ backgroundImage : `url('${this.store.posterUrl + tvObj.poster_path}')` }">
        <div class="tv-card-desc p-4">
            <p>Titolo: {{tvObj.name}}</p>
            <p>Titolo originale: {{tvObj.original_name}}</p>
            <p class="overview">Overview: {{tvObj.overview}}</p>

            <div class="mb-3 mt-5 text-center">
                <img :src="showFlag(tvObj.original_language)" alt="" v-if="showFlag(tvObj.original_language) != 'Bandiera non disponibile'">
                <p v-else>{{showFlag(tvObj.original_language)}}</p>
            </div>
            <div class="text-center">
                <span v-for="curStar in voteTrasform(tvObj.vote_average)"><i class="fa-solid fa-star"></i></span>
                <span v-for="curStar in (5 - voteTrasform(tvObj.vote_average))"><i class="fa-regular fa-star"></i></span>          
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.tv-card {
    height: 500px;
    background-position: center;
    background-size: cover;
}

.tv-card-desc{
    display: none;
}

.tv-card:hover .tv-card-desc {
    height: 500px;

    color: white;
    background-color: black;
    display: block;

    .overview{
        font-size: .8rem;
    }

    img {
        width: 50px;
    }
}
</style>