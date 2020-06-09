<template>
    <div class="navbar">
        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
            <span>Awesome! you added new class.</span>
            <v-btn text color="white" @click="snackbar = false">Close</v-btn>
        </v-snackbar>
        <v-toolbar flat class="teal lighten-5" >
            
            
            <v-toolbar-title class="text-uppercase " >
                <span class="font-weight-light " style="color:#00BFA5;" >GiK</span>
                <span  style="color:#00BFA5;">JiK</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            

            <v-btn @click="move" rounded text color="teal accent-4">
                <span>Leave Class</span>
                <v-icon right>exit_to_app</v-icon>

            </v-btn>
        </v-toolbar>
        <v-navigation-drawer app 
            class="teal accent-5"
            color="teal"
            v-model="drawer"
            bottom
            
                >
                <v-layout column align-center>
                    <v-flex class="mt-8 mb-5">
                        <v-avatar size="100">
                            <img src="/avatar-1.png" alt="">
                        </v-avatar>
                        <p class="white--text subtitle-1 mt-3">
                            Hosseinreza
                        </p>
                    </v-flex>

                    <v-flex mb-5>
                        <!-- @projectAdded="snackbar=true" -->
                        <app-popup ></app-popup>
                    </v-flex>
                </v-layout>

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
    import Popup from './Popup'
    export default {
        components:{
            appPopup :Popup
        },
        data() {
            return {
                drawer: true,
                links: [
                    { icon: 'supervised_user_circle', text: 'Members', route: '/userHome'},
                    { icon: 'class', text: 'Class Manager', route: '/classmanagment'},
                    { icon: 'person', text: 'Team', route: '/about'}
                    
                ],
                
            }
        },
        methods:{
            move:function(){
                this.$router.push({name :'User'})
            }
        }
        
    }
</script>