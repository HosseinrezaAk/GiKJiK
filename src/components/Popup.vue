<template>
	<div>
		<v-dialog max-width="600px" v-model="dialog">
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
					<v-form class="px-3" ref="form">
						<v-text-field label="Title" v-model="title" prepend-icon="title" :rules="inputRules"></v-text-field>
						<v-textarea label="information" v-model="content" prepend-icon="edit"></v-textarea>
						<v-btn text class="success  mt-3" @click="submit" :loading="loading">Add Class</v-btn>
					</v-form>
				</v-card-text>

			</v-card>
			
			
		</v-dialog>
	</div>
</template>

<script>
	import db from '../fb'
	export default {
		data() {
			return {
				title:'',
				content:'',
				inputRules:[
					v => v.length >= 3 || 'Minimum length is 3 characters'
				],
				loading: false,
				dialog: false
			}
		},
		methods: {
			submit: function(){
				if(this.$refs.form.validate()){
					this.loading = true;
					const aclass = {

						title: this.title,
						content: this.content,
						class_id:'id6',
						teacher: 'hamze',
						status: 'online'
					}
					db.collection('classes').add(aclass).then(()=>{
						this.loading = false;
						this.dialog = false;
						this.$emit('projectAdded')
					})
					

				}
				
			}
		},
	}
</script>