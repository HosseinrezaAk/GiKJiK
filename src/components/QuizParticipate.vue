<template>
<div class=" mx-12">
        
        <h2 class="teal--text mt-7 "> </h2>

        <v-container class="mx-7 my-5">
            <v-row>
                <v-col class=" ml-3 grey--text">
                    Deadline: {{deadline}}
                    <v-btn class="mt-3" small outlined color="red"  @click="move" >End Quiz</v-btn>
                </v-col>
                
                <v-col>
                    
                </v-col>
                <v-col>
                    
                </v-col>
                <v-col>
                   
                </v-col>
            </v-row>
            <v-row >
                
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
                                    <v-textarea prepend-inner-icon="edit" v-model="answer[i]"  label="Answer"></v-textarea>
                                </v-row>
                                
                                <v-card-actions>
                                    <v-row
                                    align="center"
                                    justify="end"
                                    class="mr-8"
                                    >
                                        <v-btn outlined color="teal darken-1" v-bind:disabled="submit_flag[i]" @click="submitQ(q.id,i)">Submit</v-btn>
                                    </v-row>   
                                </v-card-actions>


                            </v-card>
                        </v-col>
                        <v-col sm="4"></v-col>
                    </v-row>
                    <v-row
                    align="center"
                    justify="center"
                    class="mr-12"
                    >
                        
                </v-row> 

                </v-container>
                
                
            
            </v-row>
            
           
        </v-container>

        
        
    </div>
</template>

<script>
    import moment from 'moment'
    import axios from 'axios'
    export default {
        data() {
            return {
                deadline: moment(localStorage.getItem("vDeadline")).format('MMMM Do YYYY, h:mm:ss a'),
                quiz_id: localStorage.getItem("vQuiz_id"),
                questions:[
                    
                ],
                answer:[],
                submit_flag:[],
            }
        },
        methods: {
            move:function(){
                this.$router.push({name :'Quiz'})
            },
            submitQ:function(q_id,answerIndex){

                axios.post("http://127.0.0.1:8000/question/"+ q_id +"/create/answer/",{
                    answer: this.answer[answerIndex]
                },
                { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }}
                ).then(response =>{
                    console.log(response.status)
                    this.submit_flag[answerIndex]=true
                })
            }
            
        },

        created() {
             console.log(this.quiz_id)
             axios.get("http://127.0.0.1:8000/quiz/"+ this.quiz_id +"/questions/"
            ,{ headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
            .then(response =>{
                this.questions= response.data
               
            })

        },
    }
</script>