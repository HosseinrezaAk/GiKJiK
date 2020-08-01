<template>
    <div class="quizMaker mx-12">
        
        <h2 class="heading-6 teal--text mt-7 "> New Quiz</h2>

        <v-container class="mx-7 my-5">
            <v-row justify="">
                <v-col cols="12"  md="4"   >
                    <v-form ref="form">
                    <v-text-field
                        v-model="model"
                        
                        label="Quiz Topic"
                    ></v-text-field>
                    <v-text-field label= "Deadline"></v-text-field>
                    </v-form>
                    <v-btn dark text  class="teal lighten-5 " color="teal accent-4" v-if="submit_flag" @click="submitQuiz">
					    submit Quiz
				    </v-btn>

                    <app-add-question-popup v-if="addQues_flag" v-bind:questions="questions" v-on:addQues="addQues($event)"></app-add-question-popup>

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
                class_id: '',
                submit_flag:true,
                addQues_flag:false,
                questions:[],        

               
            }
        },
        methods: {
            addQues:function(newQues){
                this.questions= newQues;
            },
            submitQuiz:function(){
                axios.post('http://127.0.0.1:8000/class/'+ class_id + '/create/quiz/',{
                    
                })

            }
        },
        
    }
</script>


<style>
    
</style>