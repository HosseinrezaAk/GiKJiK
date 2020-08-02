<template>
    <div>
         <v-dialog
            v-model="dialog"           
            max-width="500px">
            <template v-slot:activator="{on,attrs}">
                <v-fab-transition class="">
             
              <v-btn
                fab
                class="mb-10"
                color="teal accent-4"
                dark
                absolute
                bottom
                right   
                v-on="on" v-bind="attrs"          
              >

                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-fab-transition>
				
			</template>
            <v-card>
				<v-card-title>
					<h2>Add News</h2>
				</v-card-title>
				<v-card-text>
					<v-form class="px-3" ref="form">
						<v-text-field label="News title" v-model="title" prepend-icon="title" ></v-text-field>
						<v-textarea label="Description" v-model="indescription" prepend-icon="edit"></v-textarea>
                        
						<v-btn text class="teal lighten-5 " color="teal accent-4"  @click="addNews" >Submit</v-btn>
                        

					</v-form>
				</v-card-text>

			</v-card>
            
        </v-dialog>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                indescription:'',
                class_id: localStorage.getItem("vClass_id"),
                dialog:false,
                title:'',
                date:'',
                

                singleNews:{
                
                }
                

            }
        },

        methods: {

            addNews:function(){
                
                axios.post('http://127.0.0.1:8000/class/'+this.class_id+'/add/news/' ,{
                    title: this.title,
                    description: this.indescription,
                    date :this.date,
                    
                },
                 { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }}
                 ),
                 window.location.reload()
                this.dialog= false
                
            }
        },
    }
</script>