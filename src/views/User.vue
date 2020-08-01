<template>
	<div class="">
		<app-navbar></app-navbar>
		<div class="mx-12">
			<h2 class="heading-3 teal--text mt-7 "> WELCOME
				
			</h2>
			<v-container class="my-5 mx-7  ">
				<v-row class="mt-5">
					<v-col cols="12" sm="2" >

					</v-col>
					
					<v-col cols="12" sm="8"  >
						<v-text-field outlined label="Class ID" filled solo clearable  v-model="class_id"
						 prepend-inner-icon="search"  class="mt-6" >
						</v-text-field>
						 
					
					</v-col>
					<v-col cols="12" sm="2" >
						<v-btn class="mt-7 " outlined  @click="search" color="teal darken-1" large>Search</v-btn>
					</v-col> 
				</v-row>
				
				<!-- CLASS CARDS SECTIONS -->
				<v-row class="">
					<v-col cols="12" sm="3" ></v-col>
					<v-col cols="12" sm="6"  > 

						<v-card raised v-if="course_flag" >
							<!-- v-for="(item, i) in class" :key="i" -->
							<v-card-title primary-title >
								<v-icon left large color="teal accent-5">
									school
								</v-icon>
								{{course.name}}
							</v-card-title>
							<v-card-subtitle class="ml-11"  >
								@ {{course.class_id}}
							</v-card-subtitle>

							<v-card-text class="  subtitle-1 " >
								<v-icon left large color="teal accent-5">
									
								</v-icon>
								{{course.teachers}}
							</v-card-text>

							<v-card-actions>
								<v-list-item class="grow">							
									<v-row
									align="center"
									justify="end"
									>
										<v-dialog
										v-model="dialog"
										width="500"
										>
										<template v-slot:activator="{ on, attrs }">
											<v-btn
											outlined color="teal darken-1" large
											v-bind="attrs"
											v-on="on"
											v-bind:disabled="joined_flag"
											@click="join"
											>
											JOIN
											</v-btn>
										</template>

											<v-card>
												<v-card-title class="success--text" align="center" >
												JOINED
												</v-card-title>
												<v-card-actions>
													<v-spacer></v-spacer>
													<v-btn
														color="Success"
														text
														@click="dialog = false"
													>
														Close
													</v-btn>
												</v-card-actions>
											</v-card>
										</v-dialog>

									</v-row>
								</v-list-item>
							</v-card-actions>

						</v-card>
					</v-col>
					<v-col cols="12" sm="3" > </v-col>
				</v-row>


			</v-container>


		</div>
		
	</div>
  
</template>


<script>
	import axios from 'axios'
	import Navbar from '../components/Navbar'
	export default {
	
		components:{
			appNavbar: Navbar
		},
		data() {
			return {
				class_id:'',
				dialog:false,
				joined_flag:false,
				course: {
					
				},
				course_flag:false

				
			}
		},
		methods: {
			search:function(){
				axios.get("http://127.0.0.1:8000/class/"+this.class_id + "/search/", { headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
				.then(response =>{
					this.course = response.data
					
					if(this.course){
						this.course_flag= true
					}else{
						this.course_flag=false
					}
				})
			},
			join:function(){
				axios.put("http://127.0.0.1:8000/class/"+ this.class_id + "/join/", {
					class_id : this.class_id
				},
				{headers: { Authorization:localStorage.getItem('LearnOnlineToken') }})
				// .then(function (response){
					
					this.dialog=true
					this.joined_flag=true
					// })
					// .catch(function(error){
					// 	console.log(error);
					// });
				
			}
		},
	}
</script>