<template>
	<div>
		<v-dialog max-width="600px" v-model="dialog" >
			<template v-slot:activator="{on,attrs}">
				<v-btn dark text v-on="on" v-bind="attrs" class="teal lighten-1" >
					Add new Class

				</v-btn>
			</template>
			<v-card>
				<v-card-title>
					<h2>Add a New Class</h2>
				</v-card-title>
				<v-card-text>
					<v-form class="px-3" ref="form">
						<v-text-field label="Title" v-model="title" prepend-icon="title" ></v-text-field>
						<v-text-field label="Class ID" v-model="classID" prepend-icon="class" ></v-text-field>
						<!-- <v-btn outlined   @click="submit" >Add Class</v-btn> -->
						<v-btn outlined class="  mt-3"  color="teal darken-1" @click="submit"> Submit Class</v-btn>
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
				title:'',
				classID:'',
				content:'',
				inputRules:[
					v => v.length >= 3 || 'Minimum length is 3 characters'
				],
				
				dialog: false
			}
		},
		methods: {
			submit: function(){
				axios.post('http://127.0.0.1:8000/class/create/', {
						name: this.title,
						class_id: this.classID,
						
						
					},
					 { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
					.then(response =>{
						window.location.reload()
						this.dialog=false
					})
						
						
						
					
					
			}
		},
	}
</script>