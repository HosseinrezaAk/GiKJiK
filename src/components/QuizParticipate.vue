<template>
<div class=" mx-12">
        
        <h2 class="teal--text mt-7 "> </h2>

        <v-container class="mx-7 my-5">
            <v-row >
                
                <v-container>
                    <v-row>
                        <v-col sm="10">
                            <v-card>
                                <!--  -->
                                <v-row class="ml-4 mr-1" v-for="(q,i) in questions" :key="i">
                                    <div class="h2" style="font-size: 1.3em;">
                                       <span class="red--text">Problem: </span> {{q.problem}}
                                       
                                    <span class="red--text"> ({{q.point}} points)</span>

                                    </div>
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
    import axios from 'axios'
    export default {
        data() {
            return {
                quiz_id:localStorage.getItem("vQuiz_id"),
                questions:[
                    {problem:"lo;laksd;laksd;ka;sdk;aksddldldllliopeutskdgxckjiosuerxmvlkxhuifgh",point:2},
                    {problem:"losssssssssssssssssssssssdk;aksddldldllliopeutskdgxckjiosuerxmvlkxhuifgh",point:3},
                    {problem:"lo;ddddddddddddddddddddddddldldllliopeutskdgxckjiosuerxmvlkxhuifgh",point:4}
                ]
            }
        },
        methods: {
            
        },

        // created() {
        //      axios.get("http://127.0.0.1:8000/quiz/"+this.quiz_id+"/questions/"
        //     ,{ headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
        //     .then(response =>{
        //         this.questions= response.data
        //         console.log(this.questions)
        //     })

        // },
    }
</script>