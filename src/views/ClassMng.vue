<template>
	<div>
		<app-navbar></app-navbar>
		
        <div class="mx-12">
            <h2 class="subtitle-1 teal--text mt-7" >Class Managment</h2>
            <v-container class="mx-7 my-5">
                
                <v-layout row class="mb-3 ml-3">
                    <v-tooltip top>
                        <template v-slot:activator="{on}">
                            <v-btn small text color="teal accent-4" v-on="on" @click="sortBy('title')">
                                <v-icon left small>class</v-icon>
                                <span class="caption ">By Class name</span>
                            </v-btn>
                        </template>
                        <span>Sort by class name</span>
                    </v-tooltip>
                    <v-tooltip top>
                        <template  v-slot:activator="{on}">
                            <v-btn small text color="teal accent-4" v-on="on"  @click="sortBy('person')">
                                <v-icon left small>person</v-icon>
                                <span class="caption ">By Teacher name</span>
                            </v-btn>
                        </template>
                        <span>Sort by Teacher name</span>
                    </v-tooltip>
                    
                    

                </v-layout>


                <v-card flat class="pl-3 mb-1" v-for="eachClass in classes" :key="eachClass.name" @click="moveToClass" >
                    <v-layout row wrap :class="`pa-4 eachClass ${eachClass.status}`">
                        <v-flex xs12 md6>
                            <div class="caption grey--text">Class title</div>
                            <div> {{ eachClass.name }}</div>
                        </v-flex>

                        <v-flex xs6 sm4 md2>
                            <div class="caption grey--text">Teacher</div>
                            <div> {{eachClass.teachers}}</div>
                        </v-flex>

                        <v-flex xs6 sm4 md2>
                            <div class="caption grey--text">Class ID</div>
                            <div> {{ eachClass.class_id}}</div>
                        </v-flex>
                        <v-flex xs2 sm4 md2>
                            
                            <div class=" ">
                                <v-chip  :class="` ${eachClass.status} white--text caption my-2`">{{eachClass.status}}</v-chip>
                            </div>
                        </v-flex>
                        
                    </v-layout>
                    
                </v-card>

                
                    

            </v-container >
        </div>
		
	</div>
  
</template>


<script>
    import Navbar from '../components/Navbar'
    import axios from 'axios'
	export default {
        data() {
            return {
                classes: [
                    {}
                   
                    ],
                    teacherName :'',
                    one:1
            }
        },
	
		components:{
			appNavbar: Navbar
        },
        methods:{
            sortBy: function(prop){
                this.classes.sort((a,b) => a[prop] < b[prop] ? -1 :1)
            },
            moveToClass: function(){
                this.$router.push({name : 'MainClass'})
                
            }
        },
        created() {
            
            axios.get('http://127.0.0.1:8000/user/student/in/', { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
            .then(response => {
                this.classes = response.data
                console.log(this.classes)
                console.log( "this is ONE " +parseInt(this.classes[0].teachers[0]))
            })

            axios.get(`http://127.0.0.1:8000/user/${3}/retrieve/`, { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
            .then(response =>{
                this.teacherName = response.data.username
                console.log(response.data)
            })
        },
        
        
	}
</script>

<style >
    .eachClass.Online{
        border-left:4px solid #3cd1c2;
    }
    .eachClass.Offline{
        border-left:4px solid orange;
    }
    .eachClass.overdue{
        border-left:4px solid tomato;
    }
    .v-chip.Online{
        background: #3cd1c2 !important;
    }
    .v-chip.Offline{
        background: orange!important;
    }
    .v-chip.overdue{
        background: tomato!important;
    }
    

</style>