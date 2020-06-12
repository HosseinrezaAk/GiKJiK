<template>
    <div class="quiz mx-12" >

        <h2 class="heading-6 teal--text mt-7 "> Quiz</h2>
        <v-container class="my-5">
            <v-row>
                <v-col  cols="12" sm="3" >
                        <v-card v-bind="attrs" v-on="on" flat class=" ma-3  grey lighten-2" @click="addQuiz" style="height: 255px;" >
                            
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


                <v-col v-for="quiz in quizes" :key="quiz.title" cols="12" sm="3">
                    <v-card flat class="text-center ma-3 "  >
                        <v-card-text>
                            <div class="subtitle-1">{{quiz.title}}</div>
                            <div class="grey--text"> {{ quiz.teacher}}</div>
                        </v-card-text>
                        <div>
                            <v-chip label :class="` ${quiz.status} white--text caption my-1`" small>{{ quiz.status }}</v-chip>
                        </div>
                        <v-col cols="12" mx-auto justify="center" align="center" >
                            <v-btn  text color="teal accent-4" class="my-3" >
                                <v-icon left>done_all</v-icon>
                                <span>Participate</span>
                            </v-btn>
                            <v-btn text color="red darken-4" class="my-3">
                                <v-icon left >edit</v-icon>
                                <span>Edit</span>
                            </v-btn>
                            <v-btn text color="deep-purple darken-3" class="my-3">
                                <v-icon left >trending_up</v-icon>
                                <span>Result</span>
                            </v-btn>            
                        </v-col>         
                    </v-card>
                </v-col>

            </v-row>
                
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                question:{problem:'',answer:'',option1:'',option2:'',option3:'',option4:''},
                quizes:[
                    {title:'Chapter-1', teacher:'teacher-1', status:'notYet',quizDate:''},
                    {title:'Chapter-2', teacher:'teacher-1', status:'ongoing',quizDate:''},
                    {title:'Chapter-3', teacher:'teacher-2', status: 'ended',quizDate:''},
                    {title:'Chapter-4', teacher:'teacher-2', status: 'ended',quizDate:''}
                ],
                role:'',
                dialog: false,

            }
        },
        methods:{
            addQuiz: function(){
                this.$router.push({name:'QuizMaker'})
            }
        }
    }
</script>

<style >

    .v-chip.ongoing{
        background: #64DD17 !important;
    }
    .v-chip.ended{
        background: tomato!important;
    }
    .v-chip.notYet{
        background: orange!important;
    }
    

</style>