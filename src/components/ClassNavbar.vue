<template>
    <div class="navbar">
        
        <v-toolbar flat class="teal lighten-5" >
            
             <v-app-bar-nav-icon color="teal accent-4" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase " >
                <span class="font-weight-light " style="color:#00BFA5;" >GiK</span>
                <span  style="color:#00BFA5;">JiK</span>

               
                  
                <!-- <span class="caption teal--text ml-5 ">(@{{class_id}})</span> -->
                <!-- <span class="caption teal--text ">({{inRole}})</span> -->

                <v-chip  small class="ml-5  " outlined label color="teal darken-2" > @{{class_id}} </v-chip>  
                <!-- <v-chip  small class="ml-1 mb-1"  color="teal darken-4" text-color="white">{{inRole}}</v-chip>     -->
                
                
                
            </v-toolbar-title>

            <v-spacer></v-spacer>

            
            <app-show-members-popup></app-show-members-popup>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn text v-on="on" color="teal accent-4">
                        <v-icon left>expand_more</v-icon>
                        <span>Actions</span>
                    </v-btn>
                </template>
                
                <v-list>
                    <v-list-item v-for="act in actions" :key="act.text" router >
                        <v-btn text v-if="(act.text =='Online' && onBtns) || (act.text =='Offline' && onBtns) ||(act.text =='Delete' && delBtn) " @click="work(act.text)">{{ act.text }}</v-btn>
                        
                    </v-list-item>
                </v-list>
            </v-menu>

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
                dialog:false,
                class_id:localStorage.getItem("vClass_id"),
                inRole: localStorage.getItem("vRole"),
                onBtns: false,
                delBtn:false,

                actions: [
                    { icon: 'home', text: 'Online', route: '/'},
                    { icon: 'class', text: 'Offline', route: '/'},
                    { icon: 'person', text: 'Delete', route: '/classmanagment'}
                    
                ],
                
            }
        },
        methods:{
            move:function(){
                this.$router.push({name :'User'})
            },
            work:function(text){
                console.log(text)
                console.log(this.inRole)
                if(text =="Offline"){

                }
                else if(text =="Online"){

                }
                else if (text =="Delete" && this.inRole =="Student" ){
                    console.log("IN DELETE STUDENT")
                    axios.put("http://127.0.0.1:8000/class/"+ this.class_id+"/remove/",
                    { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
                    .then(response =>{
                        console.log('STUDENTTTT')
                        console.log(response.status)
                        this.$router.push({name :'ClassManagment'})

                    })
                }
                else if (text =="Delete" && this.inRole =="Owner" ){
                    console.log("IN DELETE Owner")
                     axios.delete("http://127.0.0.1:8000/class/"+ this.class_id+"/delete/",
                    { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
                    .then(response =>{
                         

                        console.log('Teacher')
                        console.log(response.status)
                        this.$router.push({name :'ClassManagment'})
                        
                    })
                    
                }

            }
        },
        created(){
            axios.get('http://127.0.0.1:8000/username/retrieve/', { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
            .then(response =>{
                this.username = response.data.username
                
            }),
            
            this.class_id = localStorage.getItem("vClass_id"),
            this.inRole = localStorage.getItem("vRole")
            if(this.inRole =="Teacher"){
                this.onBtns=true
            }
            if(this.inRole == "Owner" || this.inRole =="Student"){
                this.delBtn = true
            }
        }
        
    }
</script>