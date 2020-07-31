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
						<v-text-field outlined label="Class ID" filled solo clearable  
						 prepend-inner-icon="search"  class="mt-6" >
						</v-text-field>
						 
					
					</v-col>
					<v-col cols="12" sm="2" >
						<v-btn class="mt-7" outlined color="teal darken-1" large>Search</v-btn>
					</v-col>
				</v-row>
				
				<!-- CLASS CARDS SECTIONS -->
				<v-row class="mt-5">
					<v-col cols="12" sm="2" ></v-col>
					<v-col cols="12" sm="8"  > 
						
					</v-col>
					<v-col cols="12" sm="2" > </v-col>
				</v-row>


			</v-container>
		</div>
		
	</div>
  
</template>


<script>
	import Navbar from '../components/Navbar'
	export default {
	
		components:{
			appNavbar: Navbar
		}
	}
</script>