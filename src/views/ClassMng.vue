<template>
	<div>
		<app-navbar></app-navbar>
		
        <div class="mx-12">
            <h2 class="subtitle-1 teal--text mt-7" >Class Managment</h2>
            <v-container class="mx-7 my-5">
                
                <v-row  class="mb-3 ml-3">
                    <v-tooltip top>
                        <template v-slot:activator="{on}">
                            <v-btn small text color="teal accent-4" v-on="on" @click="sortBy('name')">
                                <v-icon left small>class</v-icon>
                                <span class="caption ">By Class name</span>
                            </v-btn>
                        </template>
                        <span>Sort by class name</span>
                    </v-tooltip>
                    <v-tooltip top>
                        <template  v-slot:activator="{on}">
                            <v-btn small text color="teal accent-4" v-on="on"  @click="sortBy('teachers')">
                                <v-icon left small>person</v-icon>
                                <span class="caption ">By Teacher name</span>
                            </v-btn>
                        </template>
                        <span>Sort by Teacher name</span>
                    </v-tooltip>

                    <v-tooltip top>
                        <template  v-slot:activator="{on}">
                            <v-btn small text color="teal accent-4" v-on="on"  @click="sortBy('role')">
                                <v-icon left small>how_to_reg</v-icon>
                                <span class="caption ">By Role</span>
                            </v-btn>
                        </template>
                        <span>Sort by Your Role</span>
                    </v-tooltip>
                </v-row>

                
                <v-card flat class="pl-3 mb-1" v-for="eachClass in classes" :key="eachClass.key" @click="moveToClass(eachClass.class_id, eachClass.role)" >
                    
                        <v-row  :class="`pa-4 eachClass ${eachClass.status}`">
                            <v-flex xs12 md4>
                                <div class="caption grey--text">Class title</div>
                                <div  > {{ eachClass.name }}</div>
                            </v-flex>

                            <v-flex xs6 sm4 md4>
                                <div class="caption grey--text">Teacher</div>
                                <div> {{eachClass.teacher}}</div>
                            </v-flex>

                            <v-flex xs6 sm2 md2>
                                <div class="caption grey--text">Class ID</div>
                                <div> {{ eachClass.class_id}}</div>
                            </v-flex>
                            <v-flex xs2 sm1 md1>
                                <div class=" ">
                                    <v-chip  :class="` ${eachClass.status} white--text caption my-2`">{{eachClass.status}}</v-chip>
                                </div>
                            </v-flex> 
                            <v-flex xs2 sm1 md1>
                                <div class=" ">
                                    <v-chip  :class="` ${eachClass.role} white--text caption my-2`">{{eachClass.role}}</v-chip>
                                </div>
                            </v-flex> 
                            
                                               
                        </v-row>
                        
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
                classes: [ {}
                    
                   
                    ],
                    teacherName :'',
                    one:1,
                    counter:0,
                    counter1:0
            }
        },
	
		components:{
			appNavbar: Navbar
        },
        methods:{
            sortBy: function(prop){
                this.classes.sort((a,b) => a[prop] < b[prop] ? -1 :1)
            },
            moveToClass: function(vClassId,vRole){
                this.$router.push({name : 'MainClass'})
                localStorage.setItem("vClass_id", vClassId);
                localStorage.setItem("vRole",vRole)
                
                
                
            },
            quitClass:function(){
                console.log("ASDASDAS")
            }
        },
       async created() {
            
           await axios.get('http://127.0.0.1:8000/user/student/in/', { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
            .then(response => {
                this.classes = response.data
                for(this.counter = 0;this.counter<this.classes.length; this.counter ++){
                    this.classes[this.counter].role="Student"
                    this.classes[this.counter].key = this.counter
                }
                
                
            })
           await axios.get('http://127.0.0.1:8000/user/teacher/in/', { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
            .then(response => {
                
                
                for(this.counter1=0; this.counter1<response.data.length; this.counter1++){
                    this.classes.push(response.data[this.counter1])
                }
                for(;this.counter<this.classes.length; this.counter ++){
                    this.classes[this.counter].role="Teacher"
                    this.classes[this.counter].key = this.counter
                    
                }
                
                
            })
          await  axios.get('http://127.0.0.1:8000/user/owner/of/', { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
            .then(response => {
                

                for(this.counter1=0; this.counter1<response.data.length; this.counter1++){
                    this.classes.push(response.data[this.counter1])
                }
                for(;this.counter<this.classes.length; this.counter ++){
                    this.classes[this.counter].role="  Owner "
                    this.classes[this.counter].key = this.counter
                }
                
            })


            // axios.get(`http://127.0.0.1:8000/user/${3}/retrieve/`, { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
            // .then(response =>{
            //     this.teacherName = response.data.username
            //     // console.log(response.data)
                
            // })
        },
        
        
	}
</script>

<style >
    .v-chip.Student{
        background:#4A148C !important;
    }
    .v-chip.Teacher{
        background:  tomato!important;
    }
    .v-chip.Owner{
        background: #0277BD !important;
    }
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