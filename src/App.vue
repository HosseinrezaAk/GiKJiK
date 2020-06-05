<template>
  <v-app>
    <v-content>
      <app-entrance></app-entrance>
    </v-content>
  </v-app>
</template>

<script>

// import Home from './views/Home'
import Entrance from './views/Entrance'
export default {
  name: 'App',

  components: {
    
    appEntrance : Entrance

  },

  data: () => ({
    //
  }),
};
</script>
