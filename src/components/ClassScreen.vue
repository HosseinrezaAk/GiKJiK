<template>
    <div class="classScreen mx-12">
       <h2 class="heading-6 teal--text mt-7 "> Class Screen </h2>
       
       <v-container v-if="owner_flag">


            <v-row class="mt-5">
                <v-col cols="12" sm="2" >

                </v-col>
                
                <v-col cols="12" sm="8"  >
                    <v-text-field outlined label="Teacher ID" filled solo clearable  v-model="teacher_user"
                        prepend-inner-icon="search"  class="mt-6" >
                    </v-text-field>
                        
                
                </v-col>
                <v-col cols="12" sm="2" >
                    <v-btn class="mt-7 " outlined  @click="searchT" color="teal darken-1" large>Search</v-btn>
                </v-col> 
            </v-row>
            
            <!-- CLASS CARDS SECTIONS -->
            <v-row class="">
                <v-col cols="12" sm="3" ></v-col>
                <v-col cols="12" sm="6"  > 

                    <v-card raised v-if="teacher_flag">
                        <!-- v-for="(item, i) in class" :key="i" -->
                        <v-card-title primary-title >
                            <v-icon left large color="teal accent-5">
                                person
                            </v-icon>
                            {{teacher.username}}
                        </v-card-title>
                        

                        <v-card-actions>
                            <v-list-item class="grow">							
                                <v-row
                                align="center"
                                justify="end"
                                >
                                    <v-dialog
                                    v-model="dialog"
                                    width="500"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                        outlined color="teal darken-1" large
                                        v-bind="attrs"
                                        v-on="on"
                                        v-bind:disabled="joined_flag"
                                        @click="addTeacher"
                                        >
                                        Add
                                        </v-btn>
                                    </template>

                                        <v-card>
                                            <v-card-title class="success--text" align="center" >
                                            Added
                                            </v-card-title>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    color="Success"
                                                    text
                                                    @click="dialog = false"
                                                >
                                                    Close
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>

                                </v-row>
                            </v-list-item>
                        </v-card-actions>

                    </v-card>
                </v-col>
                <v-col cols="12" sm="3" > </v-col>
            </v-row>
       </v-container>








        <v-container v-if="teacher_flag1">


            <v-row class="mt-5">
                <v-col cols="12" sm="2" >

                </v-col>
                
                <v-col cols="12" sm="8"  >
                    <v-text-field outlined label="Student ID" filled solo clearable  v-model="student_user"
                        prepend-inner-icon="search"  class="mt-6" >
                    </v-text-field>
                        
                
                </v-col>
                <v-col cols="12" sm="2" >
                    <v-btn class="mt-7 " outlined  @click="searchS" color="teal darken-1" large>Search</v-btn>
                </v-col> 
            </v-row>
            
            <!-- CLASS CARDS SECTIONS -->
            <v-row class="">
                <v-col cols="12" sm="3" ></v-col>
                <v-col cols="12" sm="6"  > 

                    <v-card raised v-if="student_flag">
                        <!-- v-for="(item, i) in class" :key="i" -->
                        <v-card-title primary-title >
                            <v-icon left large color="teal accent-5">
                                person
                            </v-icon>
                            {{student.username}}
                        </v-card-title>
                        

                        <v-card-actions>
                            <v-list-item class="grow">							
                                <v-row
                                align="center"
                                justify="end"
                                >
                                    <v-dialog
                                    v-model="dialog"
                                    width="500"
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn
                                        outlined color="teal darken-1" large
                                        v-bind="attrs"
                                        v-on="on"
                                        v-bind:disabled="joined_flag"
                                        @click="addStudent"
                                        >
                                        Add
                                        </v-btn>
                                    </template>

                                        <v-card>
                                            <v-card-title class="success--text" align="center" >
                                            Added
                                            </v-card-title>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    color="Success"
                                                    text
                                                    @click="dialog = false"
                                                >
                                                    Close
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>

                                </v-row>
                            </v-list-item>
                        </v-card-actions>

                    </v-card>
                </v-col>
                <v-col cols="12" sm="3" > </v-col>
            </v-row>
       </v-container>


 
    </div>
</template>

<script>
    import axios from 'axios'
    export default {

        data() {
            return {
                teacher_flag1:false,
                owner_flag:false,
                inRole: localStorage.getItem("vRole"),
                teacher_user:'',
                teacher_id:'',
                teacher:{},
                teacher_flag:'',
                class_id: localStorage.getItem("vClass_id"),
                joined_flag:false,
                dialog:false,


                student_user:'',
                student:{},
                student_id:'',
                student_flag:false

                
            }
        },
        methods: {
            searchT:function(){
				axios.get("http://127.0.0.1:8000/user/"+ this.teacher_user+"/search/", { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
				.then(response =>{
                    this.teacher = response.data
                    this.teacher_id = this.teacher.id
                    console.log(this.teacher)
                    
					
					if(this.teacher){
						this.teacher_flag= true
					}else{
						this.teacher_flag=false
					}
				})
			},
			addTeacher:function(){
				axios.put("http://127.0.0.1:8000/class/"+ this.class_id +"/teacher/add-remove/", {
                    action: "ADD",
                    m_teacher:this.teacher_id
				},
				{headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})

					this.dialog=true
					this.joined_flag=true

            },
            


            searchS:function(){
				axios.get("http://127.0.0.1:8000/user/"+ this.student_user+"/search/", { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
				.then(response =>{
                    this.student = response.data
                    this.student_id = this.student.id
                    console.log(this.student)
                    
					
					if(this.student){
						this.student_flag= true
					}else{
						this.student_flag=false
					}
				})
            },
            
            addStudent:function(){
				axios.put("http://127.0.0.1:8000/class/"+ this.class_id +"/student/add-remove/", {
                    action: "ADD",
                    student:this.student_id
				},
                {headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
                .then(response =>{
                    console.log(response.data)
                })
                    
                   
					this.dialog=true
					this.joined_flag=true

            }


            
        },
        created(){
            if(this.inRole=="Owner"){
                this.owner_flag =true
            }
            if(this.inRole == "Teacher"){
                this.teacher_flag1=true
            }
            // navigator.mediaDevices.getUserMedia({video: true})
        }
    }
</script>

<style >
    
</style>