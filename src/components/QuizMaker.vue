<template>
    <div class="quizMaker mx-12">
        
        <h2 class="teal--text mt-7 "> New Quiz</h2>

        <v-container class="mx-7 my-5">
            <v-row >
                <v-col cols="12"  md="4"   >
                    <v-form ref="form">
                    <v-row class="ml-1">
                        <v-icon left>edit</v-icon>
                        <v-text-field
                        
                        v-model="title"
                        
                        label="Quiz Topic"
                    ></v-text-field>
                    </v-row>
                    
                    <!-- <v-text-field v-model="deadline" label= "Deadline"></v-text-field> -->
                   
                   <v-dialog
                        ref="dialog"
                        v-model="modal"
                        :return-value.sync="date"
                        
                        width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="date"
                            label="Picker in dialog"
                            prepend-icon="event"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker v-model="date" scrollable color="teal">
                        <v-spacer></v-spacer>
                        <v-btn text color="teal darken-1" @click="modal = false">Cancel</v-btn>
                        <v-btn text color="teal darken-1" @click="$refs.dialog.save(date),modal=false">OK</v-btn>
                        </v-date-picker>
                    </v-dialog>


                    <v-dialog
                        ref="dialog"
                        v-model="modal2"
                        :return-value.sync="time"
                        
                        width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="time"
                            label="Picker in dialog"
                            prepend-icon="access_time"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-time-picker
                        color="teal"
                        v-if="modal2"
                        v-model="time"
                        full-width
                        >
                        <v-spacer></v-spacer>
                        <v-btn text color="teal darken-1" @click="modal2 = false">Cancel</v-btn>
                        <v-btn text color="teal darken-1" @click="$refs.dialog.save(time)">OK</v-btn>
                        </v-time-picker>
                    </v-dialog>




                    </v-form>
                    <v-btn dark text  class="teal lighten-5 mt-5" color="teal accent-4"   v-if="submit_flag" @click="submitQuiz">
					    submit Quiz
				    </v-btn>


                    <!-- <app-add-question-popup v-if="addQues_flag"></app-add-question-popup> -->
                     <!-- v-on:newQues="updateQues($event)" -->
                    <v-dialog
                        v-model="dialog"           
                        max-width="500px"
                        v-if="addQues_flag"
                        >
                        <template v-slot:activator="{on,attrs}">
                            <v-btn dark text v-on="on" v-bind="attrs" class="teal lighten-5 " color="teal accent-4" >
                                Add Question

                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <h2>Add a Question</h2>
                            </v-card-title>
                            <v-card-text>
                                <v-form class="px-3" ref="form">
                                    <v-text-field label="Problem title" v-model="p_title" prepend-icon="title" ></v-text-field>
                                    <v-container >
                                        <v-row align="center" v-for="(choice,k) in choices" :key="k" >
                                            <v-checkbox
                                            
                                            hide-details
                                            class="shrink mr-2 mt-0"
                                            ></v-checkbox>
                                            <v-text-field label="Choice"  v-model="choice.name" ></v-text-field>
                                        </v-row>
                                    </v-container>
                                    <v-btn text class="teal lighten-5 " color="teal accent-4" @click="add(k)"   >Add Choice</v-btn>
                                    <v-btn text class="teal lighten-5 mx-3" color="teal accent-4" @click="remove(k)"  >Delete Choice</v-btn>
                                    <v-textarea label="Solution" class="" v-model="p_solution" prepend-icon="edit"></v-textarea>
                                    <v-row>
                                        <v-col>
                                            <v-text-field class="ml-5" label="Point" v-model="p_point"></v-text-field>
                                        </v-col>
                                        <v-col>

                                        </v-col>
                                        <v-col>

                                        </v-col>
                                    </v-row>
                                    <v-btn text class="teal lighten-5 " color="teal accent-4"  @click="addQues" >Submit</v-btn>
                                    

                                </v-form>
                            </v-card-text>

                        </v-card>
                        
                    </v-dialog>









                    
                </v-col>
                <v-container>
                    <v-row>
                        <v-col sm="10">
                            <v-card v-for="(q,i) in questions" :key="i" class="my-1">
                                <!--  -->
                                <v-row class="ml-4 mr-1 " >
                                    <div class="h2" style="font-size: 1.3em; margin-top:15px">
                                       <span class="red--text">Q{{i+1}}:  </span> {{q.problem}}
                                    <span class="red--text"> ({{q.point}} points)</span>

                                    </div>
                                    
                                    
                                </v-row>
                                <v-row class="mx-4">
                                    <v-textarea prepend-inner-icon="edit" label="Answer"></v-textarea>
                                </v-row>
                                
                            </v-card>
                        </v-col>
                        <v-col sm="4"></v-col>
                    </v-row>
                    
                </v-container>

            
            </v-row>
        </v-container>

        
        
    </div>
</template>

<script>
    import moment from 'moment';
    import axios from 'axios'
    import addQuestionPopup from './addQuestionPopup'
    
    export default {
        components :{
            
            appAddQuestionPopup: addQuestionPopup

        },
        
        data() {
            return {
                
                time: null,
                modal2:false,
                date: new Date().toISOString().substr(0, 10),
                menu: false,
                modal: false,
                due:'',
                dialog:false,
                p_title:'',
                p_solution:'',
                p_point:'',
                choices :[
                    {
                        name:''
                    }
                ],



                class_id: localStorage.getItem("vClass_id"),
                title:'',
                deadline:'',
                submit_flag:true,
                addQues_flag:false,
                questions:[],   
                quiz_id:''     

               
            }
        },
        methods: {
            add:function(index) {
            this.choices.push({ name: '' });
            },
            remove:function(index) {
                this.choices.splice(index, 1);
            },
            
            submitQuiz:function(){
                
                axios.post('http://127.0.0.1:8000/class/'+ this.class_id + '/create/quiz/',{
                    title:this.title,
                    deadline: this.date+"T"+this.time
                    
                },
                { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
                .then(response =>{
                    if(true){
                        
                        console.log(response.data.id)
                        this.quiz_id = response.data.id
                        localStorage.setItem("vQuiz_id",this.quiz_id)
                        
                        this.submit_flag=false;
                        this.addQues_flag= true
                    }
                })

            },
             addQues:function(){

                axios.post('http://127.0.0.1:8000/quiz/'+this.quiz_id +'/add/question/',{
                    problem: this.p_title,
                    solution: this.p_solution,
                    point:this.p_point
     
                },{ headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
                .then(response =>{
                   this.questions.push(response.data)
                    this.dialog=false;
                })
            }
            // updateQues:function(newQ){
            //     console.log("This is newQ")
            //     console.log(newQ)
            //     console.log(" ")

            //     this.questions.push(newQ)

            //     console.log("bad az Push shodan too Questions")
            //     console.log(this.questions)
            // }
            
            
        },

        
        created(){

            // axios.get("http://127.0.0.1:8000/quiz/"+this.quiz_id+"/questions/"
            // ,{ headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
            // .then(response =>{
            //     this.questions= response.data
            // })
        }
        
    }
</script>


<style>
    
</style>