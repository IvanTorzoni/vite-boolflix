<script>
import { store } from './store';
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';

export default {

  components: { 
    AppMain,
    AppHeader,
  },

  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style>

</style>