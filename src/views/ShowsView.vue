<template>
    <!-- section 1 -->
    <div class="firts_container section-spacing">
      <div>
        <h1 class="label">Join Us for an Unforgettable Performance!</h1>
        <p class="content mt-5 fs-">
          Be part of an amazing showcase of talent and energy! Experience stunning choreography, powerful performances, and a celebration of dance that you won’t want to miss.
        </p>
      </div>
      <video autoplay loop muted class="video1">
        <source style="width:35%" src="../assets/Shows/showsvid.mp4" type="video/mp4" />
      </video>
      <div class="rect1"></div>
    </div>
  
   
  
    <!-- section 2 -->
    <div class="d-flex justify-content-around section-spacing">
      <img style="width:35%" class="img2" src="../assets/Shows/img2.png" alt="" />
      <div class="d-flex flex-column">
        <h1 class="label">Shows Urban Dance</h1>
        <hr />
        <div class="d-flex">
          <span class="me-3 fs-5">January 3rd</span>
          <i class="bi bi-clock me-3 fs-5"></i>
          <span class="fs-5"> 10:00 - 12:00</span>
        </div>
        <hr />
        <h4 class="fs-4">Styles Covered</h4>
        <ul>
          <li class="fs-4">Breakdance</li>
          <li class="fs-4">Hip-Hop</li>
        </ul>
        <router-link
          to="/calendar"
          class="btn fs-5 mt-5"
          style="background-color: #b84eff; color: white"
          >See full calendar</router-link
        >
      </div>
    </div>
  
    <!-- section 3 -->
    <div class="d-flex justify-content-around section-spacing">
      <div class="d-flex flex-column">
        <h1 class="label">Shows Classic Dance</h1>
        <hr />
        <div class="d-flex">
          <span class="me-3 fs-5">January 5th</span>
          <i class="bi bi-clock me-3 fs-5"></i>
          <span class="fs-5"> 10:00 - 12:00</span>
        </div>
        <hr />
        <h4 class="fs-4">Styles Covered</h4>
        <ul>
          <li class="fs-4">Ballet</li>
          <li class="fs-4">Contemporary</li>
        </ul>
        <router-link
          to="/calendar"
          class="btn fs-5 mt-5"
          style="background-color: #b84eff; color: white"
          >See full calendar</router-link
        >
      </div>
      <img style="width:32%" class="img3" src="../assets/Shows/img3.png" alt="" />
    </div>
  
    <!-- section 4 -->
    <div class="d-flex justify-content-around section-spacing">
      <img style="width:35%" class="img_5" src="../assets/Shows/img5.png" alt="" />
      <div class="d-flex flex-column">
        <h1 class="label">Shows Latin Dance</h1>
        <hr />
        <div class="d-flex">
          <span class="me-3 fs-5">January 7th</span>
          <i class="bi bi-clock me-3 fs-5"></i>
          <span class="fs-5"> 10:00 - 12:00</span>
        </div>
        <hr />
        <h4 class="fs-4">Styles Covered</h4>
        <ul>
          <li class="fs-4">Salsa</li>
          <li class="fs-4">Bachata</li>
        </ul>
        <router-link
          to="/calendar"
          class="btn fs-5 mt-5"
          style="background-color: #b84eff; color: white"
          >See full calendar</router-link
        >
      </div>
    </div>
  </template>
  

<script>
export default {

}
</script>

<style lang="css" scoped>  
* {
font-family: 'Ysabeau Infant';  
} 

.label {
    font-family: "Ysabeau Infant";
    font-weight: bolder;
    color: #000000;
    font-size: 45px;
    margin-top: 2%; 
} 

.content{ 
    font-family: "Ysabeau Infant" ; 
    font-weight: normal;
    font-size: 25px; 
    margin-top: 2%; 
    width: 60%;
} 


.firts_container{  
    margin: 5%; 
    display: flex; 
    flex-direction: row; 
    align-items: center;
} 

.video1{ 
    height:  600px; 
    width: 600px;
}

.rect1{ 
    background-color: #B84EFF;   
    margin: none;  
    height: 600px; 
    width: 30%; 
    z-index: -1; 
    right: 0%;  
    top: 20%; 
    position: absolute;
}


.title{  
    padding-top: 5%;
    margin: 5%;
} 

.second_container{ 
    margin: 5%; 
    display: flex; 
    flex-direction: row; 
    gap: 10%; 
    position: relative;
} 

.section-spacing {
  margin-bottom: 10%;
}


.time{   
    margin-top: 5%;   
    border-bottom: 2px black solid;  
    border-top: 2px black solid; 
    display: flex; 
    flex-direction: row; 
    font-size: 25px; 
    justify-content: center;  
    align-items: center;
    gap: 8%;
} 

h4, h2{ 
    font-size: 30px; 
    font-weight: bold; 
    margin-top: 5%;
} 
ul{ 
    font-size: 30px;
} 

.btn2{   
    text-decoration: none; 
    bottom: 0;  
    right: 0;  
    display: flex; 
    justify-content: center; 
    align-items: center; 
    position: absolute;
    border: none; 
    background-color: #B84EFF; 
    color: white; 
    border-radius: 10px; 
    padding: 2%; 
    font-size: 25px; 
    font-weight: 400; 
    width: fit-content; 
    height: 57px;  
    text-transform: uppercase;
    font-family: 'Ysabeau Infant' ; 
    margin-top: 2%; 
    transition: transform 0.3s ease;
}  

.btn2:hover{ 
    transform: scale(1.1);
    padding: 2.5%; 
}

.third_container{  
    padding-top: 5%;
    display: flex; 
    flex-direction: row; 
    margin: 5%; 
    gap: 15%; 
    position: relative;
}  



.btn3{  
    text-decoration: none;
    bottom: 0;  
    left: 0;  
    display: flex; 
    justify-content: center; 
    align-items: center; 
    position: absolute;
    border: none; 
    background-color: #B84EFF; 
    color: white; 
    border-radius: 10px; 
    padding: 2%; 
    font-size: 25px; 
    font-weight: 400; 
    width: fit-content; 
    height: 57px;  
    text-transform: uppercase;
    font-family: 'Ysabeau Infant' ; 
    margin-top: 2%; 
    transition: transform 0.3s ease;
} 

.btn3:hover{ 
    transform: scale(1.1);
    padding: 2.5%; 
}

.fourth_container{ 
    padding-top: 5%;
    display: flex;  
    flex-direction: row; 
    margin: 5%; 
    gap: 20%; 
    position: relative; 
    padding-bottom: 10%;
}   

.img_5{ 
    --color: #B84EFF; 
    --border: 8px;    
    --offset: 20px;   
    --gap: 10px;      
    --_c: var(--color) var(--border), #0000 0 calc(100% - var(--border)), var(--color) 0;
    --_o: calc(3 * var(--offset));
    padding: 
        calc(var(--gap) + var(--border)) 
        calc(var(--gap) + var(--border) + var(--offset)) 
        calc(var(--gap) + var(--border) + var(--offset)) 
        calc(var(--gap) + var(--border));
    background: 
        linear-gradient(var(--_c)) var(--_o) var(--_o), 
        linear-gradient(90deg, var(--_c)) var(--_o) var(--_o);
    background-size: calc(100% - var(--_o)) calc(100% - var(--_o));
    background-repeat: no-repeat;
    filter: grayscale(0.4);
    transition: 0.5s;
    cursor: pointer;
}

.img_5:hover{ 
    background-position: 0px 0px;  
    background-size: calc(100% - var(--offset)) calc(100% - var(--offset));  
    filter: grayscale(0); 
}

.rect{  
    background-color: #B84EFF;   
    margin:none;  
    height: 690px; 
    width: 35%; 
    z-index: -1; 
    right: 0%;  
    top: 20%; 
    position: absolute; 
} 



</style>