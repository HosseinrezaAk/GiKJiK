<template>
    <div class="Entrance">
        <p>ThIS IS eNTRANCE</p>
        <div class="ui three column grid ">
            <div class=" five wide column "></div>
            <div class="six wide column ui segment">
                <router-link to="/Sign_in">Sign In</router-link> |
                <router-link to="/Sign_up">Sign UP</router-link>
            </div>
            <div class="five wide column "></div>
            
        </div>
    </div>
</template>


<script>

    export default {
        components:{

        }
    }
</script>

<style lang="scss">
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
    
</style>