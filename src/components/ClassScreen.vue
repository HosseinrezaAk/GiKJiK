<template>
    <div class="classScreen mx-12">
       <h2 class="heading-6 teal--text mt-7 "> Class Screen </h2>
       {
 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            
        },
        created(){
            navigator.mediaDevices.getUserMedia({video: true})
        }
    }
</script>

<style >
    
</style>