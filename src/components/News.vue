<template>
    <div class="news mx-12">
        <h2 class="heading-6 teal--text mt-7 "> News</h2>
        <v-container class="my-5 mx-7 " >
            
            <v-card raised max-width="1000" class="ml-12" >
                <v-container>
                    <v-row dense>

                        <v-col  v-for="(item, i) in items" :key="i" cols="12">
                            <v-card  color="teal darken-3" dark>
                                <div class="">
                                    <div>
                                        
                                        <v-card-title class="headline" v-text="item.title">

                                        </v-card-title>
                        
                                        <v-card-subtitle v-text="item.author" >
                                            
                                        </v-card-subtitle>

                                        <v-card-text class=" pl-10"  v-text="item.description">
                                        
                                        </v-card-text>
                                    </div>            
                                    <v-card-actions>
                                        <v-row
                                        align="center"
                                        justify="end"
                                        class="mr-8"
                                        >
                                        <div class="caption font-weight-light" v-text="item.date">
                                            
                                        </div>
                                        <v-btn class="ml-2" v-if="plusFlag" text small outlined color="teal lighten-4" @click="deleteNews(item.id)">Delete</v-btn>
                                    </v-row>   
                                    </v-card-actions>
                                         
  
                                </div>
                            </v-card>
                            
                        </v-col>
                    </v-row>
                </v-container>        
            </v-card>           
        </v-container>
        
        <app-add-news-popup v-if="plusFlag"> </app-add-news-popup>
        
    </div>
</template>

<script>
    import moment from 'moment';
    import axios from 'axios'
    import addNewsPopup from './addNewsPopup'
    export default {
        components:{
            appAddNewsPopup : addNewsPopup
        },
        data() {
            return {
                class_id: localStorage.getItem("vClass_id"),
                author: '',
                singleNews:{},
                news:[],
                items: [
                   
                ],
                plusFlag:true,
                inRole: localStorage.getItem("vRole")
            }
        },
        methods: {
            addNews:function(new_news){
                
            },
            deleteNews:function(newsID){

                axios.delete("http://127.0.0.1:8000/news/"+ newsID +"/delete/", { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
                .then(response=>{
                    if(response.status==204){
                        let temp = this.items.filter(x=>x.id=== newsID)
                        let temp_index = this.items.indexOf(temp[0])
                        this.items.splice(temp_index, 1);
                        
                    }
                })
            }

        },
        created(){
            axios.get("http://127.0.0.1:8000/class/"+this.class_id+"/blackboard/", { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
            .then(response => {
                this.items = response.data
                let counter =0;
                for(counter =0;counter <this.items.length;counter++){
                    this.items[counter].date = moment(this.items[counter].date).format("MMMM Do YYYY, h:mm:ss a")
                }
            })
            if(this.inRole=="Student"){
                this.plusFlag = false
            }
            
           
        }
    }
</script>