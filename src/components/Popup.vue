<template>
	<div>
		<v-dialog max-width="600px">
			<template v-slot:activator="{on,attrs}">
				<v-btn text v-on="on" v-bind="attrs" class="success">
					Add new project

				</v-btn>
			</template>
			<v-card>
				<v-card-title>
					<h2>Add a New Project</h2>
				</v-card-title>
				<v-card-text>
					<v-form class="px-3">
						
					</v-form>
				</v-card-text>

			</v-card>
			
			
		</v-dialog>
	</div>
</template>

<script>
export default {
    
}
</script>