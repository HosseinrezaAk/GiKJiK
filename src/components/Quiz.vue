<template>
    <div class="quiz mx-12" >

        <h2 class="heading-6 teal--text mt-7 "> Quiz </h2>
        <v-container class="my-5 mx-7 ">
            <v-row>
                <v-col  cols="12" sm="3"  v-if="std_flag">
                        <v-card flat class=" ma-3  grey lighten-2" @click="addQuiz" style="height: 255px;" >
                            
                            <v-card-text class="py-12"  >
                                
                                <div class="d-flex justify-center grey--text my-4"> Add a new Quiz </div>
                                <div class="d-flex justify-center my-4">
                                    <v-icon x-large>library_add</v-icon>
                                </div>
                            </v-card-text>
                        
                            <v-col cols="12" mx-auto justify="center" align="center" >  
                            </v-col>         
                        </v-card>
                </v-col>


                <v-col v-for="(quiz,i) in quizes" :key="i" cols="12" sm="3">
                    <v-card flat class="text-center ma-3 "  >
                        <v-card-text>
                            <div class="subtitle-1">{{quiz.title}}</div>
                            <div class="grey--text"> {{ quiz.author}}</div>
                        </v-card-text>
                        <div>
                            <v-chip label :class="` ${quiz.status} white--text caption my-1`" small>{{ quiz.status }}</v-chip>
                        </div>
                        <v-col cols="12" mx-auto justify="center" align="center" >
                            <v-row justify="center" align="center">
                                <v-btn  text color="teal accent-4" class="my-3" @click="participate(quiz.id,quiz.deadline)" >
                                <v-icon left>done_all</v-icon>
                                <span>Participate</span>
                            </v-btn>
                            </v-row>
                            
                            <v-row>
                                <v-btn text color="red darken-4" class="my-3 ml-2" @click="deleteQuiz(quiz.id)">
                                <v-icon left >close</v-icon>
                                <span>Delete</span>
                            </v-btn>
                            <v-btn text color="deep-purple darken-3" class="my-3 ">
                                <v-icon left >trending_up</v-icon>
                                <span>Result</span>
                            </v-btn> 
                            </v-row>
                                      
                        </v-col>         
                    </v-card>
                </v-col>

            </v-row>
                
                
        </v-container>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        props:['the_classID'],

        data() {
            return {
                std_flag :true,
                class_id:localStorage.getItem("vClass_id"),
                inRole: localStorage.getItem("vRole"),
                question:{problem:'',answer:'',option1:'',option2:'',option3:'',option4:''},
                
                quizes:[
                    {title:'Chapter-1', teacher:'teacher-1', status:'Not Started',quizDate:''},
                    {title:'Chapter-2', teacher:'teacher-1', status:'Ongoing',quizDate:''},
                    {title:'Chapter-3', teacher:'teacher-2', status: 'Ended',quizDate:''},
                    {title:'Chapter-4', teacher:'teacher-2', status: 'Ended',quizDate:''}
                ],
                role:'',
                dialog: false,

            }
        },
        methods:{
            addQuiz: function(){
                this.$router.push({name:'QuizMaker'})
            },
            participate:function(quiz_id,deadline){
                
                localStorage.setItem('vQuiz_id',quiz_id)
                localStorage.setItem('vDeadline',deadline)
                this.$router.push({name:'QuizParticipate'})

            },
            edit:function(quiz_id){
                localStorage.setItem('vQuiz_id',quiz_id)
                this.$router.push({name:'QuizEdit'})

            },
            deleteQuiz:function(quiz_id){

                axios.delete("http://127.0.0.1:8000/quiz/"+ quiz_id +"/delete/",
                { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
                .then(response =>{
                    if(response.status==204){
                        let temp = this.quizes.filter(x=>x.id===quiz_id)
                        let temp_index = this.quizes.indexOf(temp[0])
                        this.quizes.splice(temp_index, 1);
                        
                    }
                })

            }
        },
        created(){
            this.class_id = localStorage.getItem("vClass_id")
            this.inRole = localStorage.getItem("vRole")
            axios.get("http://127.0.0.1:8000/class/"+this.class_id+"/quiz/list/",
            { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
            .then(response =>{
                this.quizes = response.data
                console.log(this.quizes)
            })
            if(this.inRole == "Student"){
                this.std_flag =false
            }
            console.log(this.inRole)
        }
    }
</script>

<style >

    .v-chip.Ongoing{
        background: #64DD17 !important;
    }
    .v-chip.Ended{
        background: tomato!important;
    }
    .v-chip.Not.Started{
        background: orange!important;
    }
    

</style>