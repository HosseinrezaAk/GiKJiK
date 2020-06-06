<template>
    <div class="navbar">
        <v-toolbar app flat class="grey lighten-4" >
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">GiK</span>
                <span>JiK</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn text color="grey">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>

            </v-btn>
        </v-toolbar>
        <v-navigation-drawer app 
        class="teal accent-3"
        v-model="drawer"
        absolute
        bottom
        temporary
         >
            <p> test </p>

        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false
            }
        },
        
    }
</script>