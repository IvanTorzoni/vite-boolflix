//File store globale

import {reactive} from "vue";

export const store = reactive ({
    //Array dei film
    moviesArray: [],
    //Array delle serie tv
    tvArray: [],
    //Key per chiamate API
    apiKey: "d65d96465b741b96df052f2b5f226cf5",
    //parametro per la ricerca tramite parola inserita
    searchQuery: "",
    //Dinamicizzazione delle immagini tramite concatenazione
    posterUrl: "https://image.tmdb.org/t/p/w342"
})