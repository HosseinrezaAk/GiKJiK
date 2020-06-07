<template>

	<div>
    <app-navbar></app-navbar>
    <div class="mx-5">
      <h2 class="title teal--text" >THIS IS ABOUT</h2>
		<v-container class="mx-7 my-5">
			
			<v-card flat class="pa-5" >
				<v-layout row wrap>
					<v-flex xs12 md6>
						<div class="caption grey--text">Project title</div>
						<div> Create a new website</div>
					</v-flex>

					<v-flex xs6 sm4 md2>
						<div class="caption grey--text">Person</div>
						<div> The NET ninja</div>
					</v-flex>

					<v-flex xs6 sm4 md2>
						<div class="caption grey--text">Due by</div>
						<div> 1st Jan 2019</div>
					</v-flex>
					<v-flex xs2 sm4 md2>
						
						<div>
							<v-chip></v-chip>
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
	
		components:{
			appNavbar: Navbar
		}
	}
</script>