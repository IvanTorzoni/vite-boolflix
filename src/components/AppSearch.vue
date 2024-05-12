<script>
import { store } from "../store.js";

export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <label for="inputText"></label>
    <input type="text" id="inputText" placeholder="Search..." v-model="this.store.searchQuery"> 
    <button @click="$emit('searchClicked')">Vai</button>
</template>

<style scoped>
    button {
        border: none;
        background-color: white;
        border-radius: 5px;
        padding: 5px 10px;
    }

    #inputText {
    border: none;
    padding: 5px 10px;
    outline-color: red;
    border-radius: 5px;
    margin: 0 10px;
}
</style>