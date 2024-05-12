<script>
import { store } from "../store.js";

export default {
    props: {
        movieObj: Object
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
    <div class="movie-card" :style="{ backgroundImage: `url('${this.store.posterUrl + movieObj.poster_path}')` }">
        <div class="movie-card-desc p-4">
            <p>Titolo: {{movieObj.title}}</p>
            <p>Titolo originale: {{movieObj.original_title}}</p>
            <p class="overview">Overview: {{movieObj.overview}}</p>
            <div class="mb-3 mt-5 text-center">
                <img :src="showFlag(movieObj.original_language)" alt="" v-if="showFlag(movieObj.original_language) != 'Bandiera non disponibile'">
                <p v-else>{{showFlag(movieObj.original_language)}}</p>
            </div>
            <div class="text-center">
                <span v-for="curStar in voteTrasform(movieObj.vote_average)"><i class="fa-solid fa-star"></i></span>
                <span v-for="curStar in (5 - voteTrasform(movieObj.vote_average))"><i class="fa-regular fa-star"></i></span>          
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.movie-card {
    height: 500px;
    background-position: center;
    background-size: cover;
}

.movie-card-desc{
    display: none;
}

.movie-card:hover .movie-card-desc {
    height: 500px;

    color: white;
    background-color: black;
    display: block;

    .overview {
        font-size: .8rem;
    }

    img {
        width: 50px;
    }
}
</style>