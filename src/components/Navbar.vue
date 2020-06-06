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
            class="teal accent-5"
            color="teal"
            v-model="drawer"
            
            bottom
            temporary
                >
            <v-list dense nav>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">
                            {{ link.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false,
                links: [
                    { icon: 'dashboard', text: 'Dashboard', route: '/'},
                    { icon: 'folder', text: 'My Projects', route: '/home'},
                    { icon: 'person', text: 'Team', route: '/about'}
                    
                ]
            }
        },
        
    }
</script>