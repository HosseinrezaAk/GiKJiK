<template>
    <div class="navbar">
        <v-toolbar app flat class="teal lighten-5" >
            <v-app-bar-nav-icon color="teal accent-4" @click="drawer = !drawer"></v-app-bar-nav-icon>
            
            <v-toolbar-title class="text-uppercase " >
                <span class="font-weight-light " style="color:#00BFA5;" >GiK</span>
                <span  style="color:#00BFA5;">JiK</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn rounded text color="teal accent-4">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>

            </v-btn>
        </v-toolbar>
        <v-navigation-drawer app 
        class="teal accent-4"
        color="teal"
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