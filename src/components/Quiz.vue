<template>
    <div class="quiz mx-12" >
        <h2 class="subtitle-1 teal--text mt-7 "> Quiz</h2>

<!-- <v-container class="grey lighten-5">
            <v-row >
            <v-col v-for="n in 4" :key="n" cols="12" sm="3">
                <v-card class="pa-2"  flat   tile   >
                One of three columns
                </v-card>
            </v-col>
            </v-row>
        </v-container> -->
        <v-container class="my-5">
            <v-row>
                <v-col v-for="quiz in quizes" :key="quiz.title" cols="12" sm="3">
                    <v-card flat class="text-center ma-3 mx-auto" max-width="344" >
                        <v-card-text>
                            <div class="subtitle-1">{{quiz.title}}</div>
                            <div class="grey--text"> {{ quiz.teacher}}</div>
                        </v-card-text>
                        <v-card-action>
                            <v-btn text color="teal accent-4" class="mb-3">
                                <span>Participate</span>
                                
                            </v-btn>
                        </v-card-action>
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
                question:{problem:'',quizDate:'',answer:'',option1:'',option2:'',option3:'',option4:''},
                quizes:[
                    {title:'Chapter-1', teacher:'teacher-1', status:'notYet'},
                    {title:'Chapter-2', teacher:'teacher-1', status:'ongoing'},
                    {title:'Chapter-3', teacher:'teacher-2', status: 'ended'},
                    {title:'Chapter-4', teacher:'teacher-2', status: 'ended'}
                ]

            }
        },
    }
</script>