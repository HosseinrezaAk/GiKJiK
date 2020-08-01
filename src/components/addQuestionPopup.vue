<template>
    <div>
        <v-dialog
            v-model="dialog"           
            max-width="500px">
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
						<v-text-field label="Problem title" v-model="title" prepend-icon="title" ></v-text-field>
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
						<v-textarea label="Solution" class="" v-model="solution" prepend-icon="edit"></v-textarea>
                        <v-row>
                            <v-col>
                                <v-text-field class="ml-5" label="Point" v-model="point"></v-text-field>
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
    </div>
</template>


<script>
    import axios from 'axios'
    import QuizMaker from './QuizMaker'
    
    export default {
        
        data() {
            return {
                dialog:false,
                title:'',
                solution:'',
                point:'',
                quiz_id:localStorage.getItem("vQuiz_id"),
                choices :[
                    {
                        name:''
                    }
                    
                ],
                questions:[
                    {
                        problemTitle:'this is important',  
                    }
                ]

            }
        },
        methods: {
            add:function(index) {
            this.choices.push({ name: '' });
            },
            remove:function(index) {
                this.choices.splice(index, 1);
            },
            submit:function(){

            },
            addQues:function(){

                axios.post('http://127.0.0.1:8000/quiz/'+this.quiz_id +'/add/question/',{
                    problem: this.title,
                    solution: this.solution,
                    point:this.point
     
                },{ headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
                .then(response =>{
                    console.log(response.data)
                    dialog:false;
                })
            }
    
        },   
    }
</script>