<template>
    <div class= "d-flex flex-row ">
       
        <!-- Overview -->
        <div class = "d-flex flex-column w-100">
            <div class ="d-flex flex-row align-items-center settings_bar ml-auto ">
                <h6 class="d-flex ">Jane S.</h6>
                <img class= "m-2" id = "top-user-icon" src="static/uploads/Profile_icon.svg" alt="">
                <img class= "m-2" src="static/uploads/settings.svg" alt="">
            </div>
            <div class = "d-flex flex-row">
                <div class = "welcome-heading">
                    <h5 class =""> Welcome Back, <span> Jane</span> </h5>
                    <p class="">Lorem ipsum dolor sit amet consectetur adi</p>
                </div>

                <div class ="time_box ml-auto"> 
                    <p>7:00 PM</p>
                    <p>EST</p>
                    <p>12:00 AM</p>
                    <p>LONDON</p>
                </div> 
            </div>
            <!-- Quick Actions -->
            <div class="quick_actions_div d-flex flex-row p-2 text-center">
                <div class = "d-flex flex-column quick_actions" @click="addTransaction"><img src="" alt=""><i class="fas fa-plus"></i><span>Add Transaction</span></div>
                <div class = "d-flex flex-column quick_actions"><img src="" alt=""><i class="fas fa-plus"></i><span> Place Order</span></div>
                <div class = "d-flex flex-column quick_actions"><img src="" alt=""><i class="fas fa-plus"></i><span> Create Invoice</span></div>
                <div class = "d-flex flex-column quick_actions"><img src="" alt=""><i class="fas fa-plus"></i><span> Create Invoice</span></div>

            </div>
                
        </div>
    
       
        <div id="chartDiv" class ="" ></div>
    
            
        </div>
    
</template>

<script>
// import SideBar from './SideBar.vue'
export default {
   // components: { SideBar },
    name: 'DashboardBody',
    methods:{ addTransaction(){
      this.$router.push({name:'Add_Transaction'})
    }},
    mounted (){
        JSC.Chart('chartDiv', {
   type: '',
   series: [
      {
         points: [
            {x: 'Apples', y: 50},
            {x: 'Oranges', y: 42}
         ]
      }
   ]
});
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