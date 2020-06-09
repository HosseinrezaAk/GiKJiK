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
						<v-text-field label="Title" v-model="title" prepend-icon="title"></v-text-field>
						<v-textarea label="information" v-model="content" prepend-icon="edit"></v-textarea>
						<v-btn text class="success  mt-3">Add project</v-btn>
					</v-form>
				</v-card-text>

			</v-card>
			
			
		</v-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title:'',
				content:''
			}
		},
	}
</script>