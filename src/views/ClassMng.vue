<template>
	<div>
		<app-navbar></app-navbar>
		
        <div class="mx-12">
            <h2 class="subtitle-1 teal--text mt-7" >Class Managment</h2>
            <v-container class="mx-7 my-5">
                
                <v-layout row class="mb-3 ml-3">
                    <v-tooltip top>
                        <template v-slot:activator="{on}">
                            <v-btn small text color="teal accent-4" v-on="on" @click="sortBy('title')">
                                <v-icon left small>class</v-icon>
                                <span class="caption ">By Class name</span>
                            </v-btn>
                        </template>
                        <span>Sort by class name</span>
                    </v-tooltip>
                    <v-tooltip top>
                        <template  v-slot:activator="{on}">
                            <v-btn small text color="teal accent-4" v-on="on"  @click="sortBy('person')">
                                <v-icon left small>person</v-icon>
                                <span class="caption ">By Teacher name</span>
                            </v-btn>
                        </template>
                        <span>Sort by Teacher name</span>
                    </v-tooltip>
                    
                    

                </v-layout>


                <v-card flat class="pl-3 mb-1" v-for="eachClass in classes" :key="eachClass.title" >
                    <v-layout row wrap :class="`pa-4 eachClass ${eachClass.status}`">
                        <v-flex xs12 md6>
                            <div class="caption grey--text">Class title</div>
                            <div> {{ eachClass.title }}</div>
                        </v-flex>

                        <v-flex xs6 sm4 md2>
                            <div class="caption grey--text">Teacher</div>
                            <div> {{eachClass.teacher}}</div>
                        </v-flex>

                        <v-flex xs6 sm4 md2>
                            <div class="caption grey--text">Class ID</div>
                            <div> {{ eachClass.class_id}}</div>
                        </v-flex>
                        <v-flex xs2 sm4 md2>
                            
                            <div class=" ">
                                <v-chip  :class="` ${eachClass.status} white--text caption my-2`">{{eachClass.status}}</v-chip>
                            </div>
                        </v-flex>
                        
                    </v-layout>
                    
                </v-card>

                
                    

            </v-container >
        </div>
		
	</div>
  
</template>


<script>
	import Navbar from '../components/Navbar'
	export default {
        data() {
            return {
                classes: [
                    { title: 'Algorithm', teacher: 'Sadr', class_id: 'ID1', status: 'Online', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                    { title: 'Data Structure', teacher: 'Keshtkaran', class_id: 'ID2', status: 'Offline', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                    { title: 'Artificial Intelligence', teacher: 'Azimifar', class_id: 'ID3', status: 'Online', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                    { title: 'Web', teacher: 'Kazemi', class_id: 'ID4', status: 'Offline', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                ]
            }
        },
	
		components:{
			appNavbar: Navbar
        },
        methods:{
            sortBy: function(prop){
                this.classes.sort((a,b) => a[prop] < b[prop] ? -1 :1)
            }
        }
        
	}
</script>

<style >
    .eachClass.Online{
        border-left:4px solid #3cd1c2;
    }
    .eachClass.Offline{
        border-left:4px solid orange;
    }
    .eachClass.overdue{
        border-left:4px solid tomato;
    }
    .v-chip.Online{
        background: #3cd1c2 !important;
    }
    .v-chip.Offline{
        background: orange!important;
    }
    .v-chip.overdue{
        background: tomato!important;
    }
    

</style>