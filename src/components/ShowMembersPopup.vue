<template>
    <div class="showMembersPopup">
        <v-dialog
            v-model="dialog"
            max-width="350px"
            
        >
            <template v-slot:activator="{on,attrs}">
                <v-btn dark text  
                v-on="on" v-bind="attrs" color="teal accent-4">
                <span>Members</span>
                <v-icon right>supervised_user_circle</v-icon>
                </v-btn>
                
            </template>
            <v-card >
                <v-card-title>
                    <h2>Members</h2>
                </v-card-title>
                <v-divider></v-divider>
                
                    <v-layout row wrap class="px-4 pt-2 pb-2 ml-1 mb-1 " v-for="student in students" :key="student.name">
                        <v-flex xs8 sm8 md8>
                            <div class="caption grey--text">{{student.type}} </div>
                            <div> {{ student.name }}</div>
                        </v-flex>

                        <v-flex xs4 sm4 md4>
                            
                            <div class="mt-2 ">
                                <v-chip  label color="red" text-color="white" @click="removeUser">Remove</v-chip>
                            </div>
                        </v-flex>
                        
                    </v-layout>
                    
                
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            students: [
                    { name: 'Hosseinreza', type:'Student'},
                    { name: 'Ali', type:'Teacher'}
                    ],
                    dialog: false
            
        }
    },
    methods:{
        removeUser:function(){
            
        }
    }
}
</script>