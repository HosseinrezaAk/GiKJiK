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
						<v-textarea label="Description" v-model="description" prepend-icon="edit"></v-textarea>
                        
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
                dialog:false,
                title:'',
                date:'',
                description:'',

                singleNews:{
                    title:'',
                    description:''
                }
                

            }
        },

        methods: {

            addNews:function(){
                this.singleNews.title = this.title;
                this.singleNews.description = this.description;
                axios.post(`http://127.0.0.1:8000/class/${"hossein_3"}/add/news/` ,{
                    title: this.title,
                    description: this.description,
                    date :this.date,
                    
                },
                 { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }}
                 ),
                 window.location.reload()
                this.dialog= false
                this.$emit('addNews', this.singleNews);
            }
        },
    }
</script>