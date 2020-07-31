<template>
    <div class="navbar">
        
        <v-toolbar flat class="teal lighten-5" >
            
             <v-app-bar-nav-icon color="teal accent-4" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase " >
                <span class="font-weight-light " style="color:#00BFA5;" >GiK</span>
                <span  style="color:#00BFA5;">JiK</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            
            <app-show-members-popup></app-show-members-popup>
            
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
                        <p class="white--text subtitle-1 mt-3" align="center">
                            {{username}}
                        </p>
                    </v-flex>

                    <v-flex mb-5>
                        <!-- @projectAdded="snackbar=true" -->
                        
                    </v-flex>
                </v-layout>

            <v-list dense nav>
                <v-list-item    v-for="link in links" :key="link.text" router :to="link.route" >
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
    import axios from 'axios'
    import CreateClassPopup from './CreateClassPopup'
    import ShowMembersPopup from './ShowMembersPopup'
    export default {
        components:{
           appCreateClassPopup :CreateClassPopup,
           appShowMembersPopup : ShowMembersPopup
        },
        data() {
            return {
                username:'',
                drawer: true,
                links: [
                    { icon: 'featured_video', text: 'Class',route:'/classScreen' },
                    { icon: 'check_circle_outline', text: 'Quiz',route:'/quiz' },
                    { icon: 'aspect_ratio', text: 'White board',route:'/whiteboard'},
                    { icon: 'announcement', text: 'News',route:'/news'}
                    
                ],
                std_dep:[],
                teacher_dep:[],
                owner_dep:[],
                dialog:false
                
            }
        },
        methods:{
            move:function(){
                this.$router.push({name :'User'})
            }
        },
        created(){
            axios.get('http://127.0.0.1:8000/username/retrieve/')
            .then(response =>{
                this.username = response.data.username
                console.log(this.username)
            })
        }
        
    }
</script>