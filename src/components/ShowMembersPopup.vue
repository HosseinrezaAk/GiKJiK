<template>
    <div class="showMembersPopup">
        <v-dialog
            v-model="dialog"
            max-width="350px"
            
        >
            <template v-slot:activator="{on,attrs}">
                <v-btn dark text  
                v-on="on" v-bind="attrs" color="teal accent-4">
                <span>Students</span>
                <v-icon right>supervised_user_circle</v-icon>
                </v-btn>
                
            </template>
            <v-card >
                <v-card-title>
                    <h2>Stundents</h2>
                </v-card-title>
                <v-divider></v-divider>
                
                    <v-row wrap class="px-6 pt-2 pb-2 ml-1 mb-1 " v-for="(student,i) in students" :key="i">
                        <v-col  sm10 >
                            <div class="caption grey--text">Student </div>
                            <div> {{ student.username}}</div>
                        </v-col>

                        <v-col  sm4>
                            
                            <div class="mt-2 ">
                                <v-chip  label color="red" text-color="white" @click="removeUser(student.id)">Remove</v-chip>
                            </div>
                        </v-col>
                        
                    </v-row>
                    
                
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                class_id: localStorage.getItem("vClass_id"),
                students: [
                        
                       
                        
                        ],
                        dialog: false
                
            }
        },
        methods:{
            removeUser:function(std_id){

                axios.put("http://127.0.0.1:8000/class/"+ this.class_id +"/student/add-remove/", {
                    action: "REMOVE",
                    student:std_id
				},
                {headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
                .then(response =>{
                    console.log(response.status)
                    if(response.status==200){
                        let temp = this.students.filter(x=>x.id===std_id)
                        let temp_index = this.students.indexOf(temp[0])
                        this.students.splice(temp_index, 1);
                        
                    }

                })

            }

        },
        created(){
            axios.get("http://127.0.0.1:8000/class/"+ this.class_id +"/students/", { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
                .then(response => {
                    
                    this.students = response.data  
                })
        }
    }
</script>