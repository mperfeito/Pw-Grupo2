<template>
      <div>
        <nav class="navbar navbar-expand-lg" style="background-color: #B84EFF; font-family:'Ysabeau Infant' ;">
        <div class="container-fluid">
            <a class="navbar-brand" style="margin-left: 2%; margin: 1%; height: 60px;" href="#"><img style="height: 60px;" src="../assets/logo/logoBranco.png" alt=""></a>
            
            <div class="nav justify-content-end"  id="navbarSupportedContent" style="margin-right: 1%;" >
                <ul class="nav ">     <!-- nav-underline -->
                <li class="nav-item">
                    <a class="nav-link active" style="color: white;"  aria-current="page" href="#">About us</a>
                </li> 
                <li class="nav-item"> 
                    <router-link to="/calendar">
                        <a class="nav-link active" style="color: white;" aria-current="page" href="#">Calendar</a>
                    </router-link>   
                </li> 
                <router-link to="/packs">
                        <a class="nav-link active" style="color: white;" aria-current="page" href="#">Packs</a>
                </router-link> 
                <li class="nav-item">
                    <a class="nav-link active" style="color: white;"  aria-current="page" href="#">Workshops</a>
                </li> 
                <li class="nav-item">
                    <a class="nav-link active" style="color: white;"  aria-current="page" href="#">Shows</a>
                </li> 
                <li class="nav-item">
                    <a class="nav-link active" style="color: white;" aria-current="page" href="#">(icon)</a>
                </li>
                </ul> 
            </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>