<template>
    <div class="mainClass">
            
            <app-classnavbar></app-classnavbar>
            <router-view></router-view>
        
        
        
    </div>
</template>


<script>
    import ClassNavbar from '../components/ClassNavbar'
    export default {
        components:{
            appClassnavbar: ClassNavbar
        },
        data() {
            return {
                alo:''
            }
        },
        methods: {
            
        },
        created() {
            this.alo = this.$route.params.variable
            console.log(this.alo)
        },
        
    }
</script>