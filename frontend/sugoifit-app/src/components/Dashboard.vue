<template>
    <div class= "d-flex flex-row ">
        <!-- Side Bar Component -->
        <side-bar>Check</side-bar>
       
        <router-view></router-view>
        <!-- Overview -->
       
    
    
            
        </div>
    
</template>

<script>
import SideBar from './SideBar.vue'
export default {
    components: { SideBar },
    name: 'Dashboard',
    
    mounted (){
        this.$router.push({name:'DashboardBody'})
       
    }
}


</script>

<style scoped>
#chartDiv{
    width: 50%;
    height: 30%;
    position: absolute;
    top: 300px;
    right: 80px;
}
</style>