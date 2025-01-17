<template>
      <div>
        <nav class="navbar navbar-expand-lg" style="background-color: #B84EFF; font-family:'Ysabeau Infant';">
        <div class="container-fluid"> 
            <router-link to="/home"><a class="navbar-brand" style="margin-left: 2%; margin: 1%; height: 80px;" href="#"><img style="height: 60px;" src="../assets/logo/logoBranco.png" alt=""></a>
            </router-link>
            <div class="nav justify-content-end" id="navbarSupportedContent" style="margin-right: 1%; ">
                <ul class="nav">
                    <li class="nav-item"> 
                    <router-link to="/about-us" class="nav-link active"> About us</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link to="/calendar" class="nav-link active"> Calendar </router-link>
                    </li>
                    <li class="nav-item">
                    <router-link to="/packs" class="nav-link active"> Packs</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link to="/workshops" class="nav-link active">Workshops</router-link>
                    </li>
                    <li class="nav-item">
                    <router-link to="/shows" class="nav-link active">Shows</router-link>
                    </li> 
                    <li class="nav-item">
                    <router-link to="/profile"class="nav-link active"><img class="profile" src="../assets/logo/profile.png" alt=""></router-link>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default { 
      name:"NavBar",
        
    };
</script>

<style lang="css" scoped>  
.nav-item {
  position: relative; 
  
}

.nav-link { 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    text-decoration: none;
    color: white;
    font-family: "Ysabeau Infant-Regular",;
    font-size: 20px;
    position: relative;
    transition: color 0.3s ease-in-out; 
    outline: none; 
    border: none;
    }


.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 1px; 
  width: 0;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease-in-out;
}

.nav-link:hover::after {
  width: 100%; /* Expand underline on hover */
}

.nav-link:hover {
  color: white; 
}


.nav-link.active {
  color: white;
} 

/* Remove default focus outline */
.nav-link:focus, 
.router-link-active {
  outline: none;
  border: none;
} 
.profile{ 
    width: 40px;
}
</style>