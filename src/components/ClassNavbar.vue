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

            <v-list class="ml-2" dense nav>
                <v-dialog   max-width="600px" class="mb-5" v-model="dialog" v-for="pop in popups" :key="pop.text">
                    <template v-slot:activator="{on,attrs}">
                        
                        <v-btn small dark text v-on="on" v-bind="attrs" class="teal accent-5 mb-5 " >
					    <v-icon left>{{pop.icon}}</v-icon>
                        <span class="nav text-capitalize ml-6 line-height-1.2">{{pop.text}}</span>

				        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <h2>Add a New Class</h2>
                        </v-card-title>
                        <v-card-text>
                            <v-form class="px-3" ref="form">
                                <v-text-field label="Title" v-model="title" prepend-icon="title" :rules="inputRules"></v-text-field>
                                <v-textarea label="information" v-model="content" prepend-icon="edit"></v-textarea>
                                <v-btn text class="success  mt-3" @click="submit" :loading="loading">Add Class</v-btn>
                            </v-form>
                        </v-card-text>

                    </v-card>
                </v-dialog>

                
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
                    { icon: 'supervised_user_circle', text: 'Members'},
                    { icon: 'check_circle_outline', text: 'Make a Quiz' },
                    { icon: 'announcement', text: 'News'}
                    
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