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
        }
    }
</script>