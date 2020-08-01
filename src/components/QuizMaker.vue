<template>
    <div class="quizMaker mx-12">
        
        <h2 class="heading-6 teal--text mt-7 "> New Quiz</h2>

        <v-container class="mx-7 my-5">
            <v-row >
                <v-col cols="12"  md="4"   >
                    <v-form ref="form">
                    <v-text-field
                        v-model="title"
                        
                        label="Quiz Topic"
                    ></v-text-field>
                    <v-text-field v-model="deadline" label= "Deadline"></v-text-field>
                    </v-form>
                    <v-btn dark text  class="teal lighten-5 " color="teal accent-4"  v-if="submit_flag" @click="submitQuiz">
					    submit Quiz
				    </v-btn>

                    <app-add-question-popup v-if="addQues_flag"></app-add-question-popup>

                    <v-container>
                        <v-row>
                            <v-col>
                                
                            </v-col>
                        </v-row>
                        
                    </v-container>
                </v-col>

            
            </v-row>
        </v-container>

        
        
        
    </div>
</template>

<script>
    import axios from 'axios'
    import addQuestionPopup from './addQuestionPopup'
    
    export default {
        components :{
            
            appAddQuestionPopup: addQuestionPopup

        },
        
        data() {
            return {
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
            
            submitQuiz:function(){
                axios.post('http://127.0.0.1:8000/class/'+ this.class_id + '/create/quiz/',{
                    title:this.title,
                    deadline:this.deadline
                    
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
            
        },
        
    }
</script>


<style>
    
</style>