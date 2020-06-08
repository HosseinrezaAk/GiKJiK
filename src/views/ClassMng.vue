<template>
	<div>
		<app-navbar></app-navbar>
		
        <div class="mx-12">
            <h2 class="subtitle-1 teal--text mt-7" >Class Managment</h2>
            <v-container class="mx-7 my-5">
            
                <v-card flat class="pa-5" v-for="eachClass in classes" :key="eachClass.title">
                    <v-layout row wrap :class="`pa-3 eachClass ${eachClass.status}`">
                        <v-flex xs12 md6>
                            <div class="caption grey--text">Project title</div>
                            <div> {{ eachClass.title }}</div>
                        </v-flex>

                        <v-flex xs6 sm4 md2>
                            <div class="caption grey--text">Person</div>
                            <div> {{eachClass.person}}</div>
                        </v-flex>

                        <v-flex xs6 sm4 md2>
                            <div class="caption grey--text">Due by</div>
                            <div> {{ eachClass.due}}</div>
                        </v-flex>
                        <v-flex xs2 sm4 md2>
                            
                            <div>
                                <v-chip>{{eachClass.status}}</v-chip>
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
                    { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                    { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                    { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                    { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
                ]
            }
        },
	
		components:{
			appNavbar: Navbar
		}
	}
</script>