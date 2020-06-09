<template>
    <div class="navbar">
        
        <v-toolbar flat class="teal lighten-5" >
            
             <v-app-bar-nav-icon color="teal accent-4" @click="drawer = !drawer"></v-app-bar-nav-icon>
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
                        
                    </v-flex>
                </v-layout>

            <v-list dense nav>
                <v-list-item  v-for="pop in popups" :key="pop.text" router :to="pop.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{ pop.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">
                            {{ pop.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    import CreateClassPopup from './CreateClassPopup'
    export default {
        components:{
           appCreateClassPopup :CreateClassPopup
        },
        data() {
            return {
                drawer: true,
                popups: [
                   
                    { icon: 'check_circle_outline', text: 'Make a Quiz',route:'/about' },
                    { icon: 'aspect_ratio', text: 'White board',route:'/user'},
                    { icon: 'announcement', text: 'News',route:''}
                    
                ],
                dialog:false
                
            }
        },
        methods:{
            move:function(){
                this.$router.push({name :'User'})
            }
        }
        
    }
</script>