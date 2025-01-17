<template> 

                                        <!-- section 1 -->
<div class="firts_container"> 
    <div> 
        <h1 class="label">Explore Our Workshops!</h1> 
        <p class="content">Unlock your potential with our diverse dance workshops! Whether you're a beginner or advanced, our expert instructors will help you refine your skills and discover new styles. Join us and get inspired!</p>
    </div> 
    <img src="../assets/Workshops/img1.png" alt=""> 
    <div class="rect1"></div> 
</div> 

<div class="title"> 
    <h1 class="label">Available Workshops</h1>
</div> 

                                        <!-- section 2 -->
<div class="second_container" > 
    <img class="img2" src="../assets/Workshops/img2.png" alt="">   
    <div class="info2"> 
        <h1 class="label">Workshops  Urban Dance</h1>  
        <div class="time"> 
            <p>January 3rd</p> 
            <p> <img src="../assets/Workshops/clock 1.png" alt=""> 14:00 - 17:30</p> 
        </div >
        <h4>Styles Covered</h4> 
        <ul> 
            <li>Freestyle</li> 
            <li>Popping & Locking</li>
        </ul> 
        <h2>Spots Left: 29</h2> 
        <div> 
            <router-link to="/calendar" class="btn2">See full calendar</router-link>
        </div>
    </div>
</div>

                                        <!-- section 3 -->

<div class="third_container">   
    <div class="info3"> 
        <h1 class="label">Workshops  Classic Dance</h1>  
        <div class="time"> 
            <p>January 5rd</p> 
            <p> <img src="../assets/Workshops/clock 1.png" alt=""> 14:00 - 17:30</p> 
        </div >
        <h4>Styles Covered</h4> 
        <ul> 
            <li>Classic technique</li> 
            <li>Improvisation Contemporary Dance</li>
        </ul> 
        <h2>Spots Left: 29</h2> 
        <div> 
            <router-link to="/calendar" class="btn3">See full calendar</router-link>
        </div>
    </div> 
    <div class="imgs"> 
        <img class="img3_1" src="../assets/Workshops/img3.png" alt=""> 
    </div> 
</div>
 

                                        <!-- section 4 -->

 
<div class="fourth_container">     
    <img class="img_5" src="../assets/Workshops/img5.png" alt="">  
    <div> 
        <h1 class="label">Workshops Latin Dance</h1>  
        <div class="time"> 
            <p>January 7rd</p> 
            <p> <img src="../assets/Workshops/clock 1.png" alt=""> 14:00 - 17:30</p> 
        </div >
        <h4>Styles Covered</h4> 
        <ul> 
            <li>Rumba</li> 
            <li>Bachata</li>
        </ul> 
        <h2>Spots Left: 29</h2> 
        <div> 
            <router-link to="/calendar" class="btn2">See full calendar</router-link>
        </div>
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
    padding-top: 5%; 
    margin: 5%; 
    display: flex; 
    flex-direction: row;
}
 
.rect1{ 
    background-color: #8A89D4;   
    margin: none;  
    height: 650px; 
    width: 30%; 
    z-index: -1; 
    right: 0%;  
    top: 20%; 
    position: absolute;
}


.title{ 
    margin: 5%;
} 

.second_container{ 
    margin: 5%; 
    display: flex; 
    flex-direction: row; 
    gap: 10%; 
    position: relative;
}  

.img2{ 
    --color: #8A89D4; /* Cor da borda */
    --border: 8px;    /* Espessura da borda */
    --offset: 20px;   /* Distância do efeito */
    --gap: 10px;       /* Espaço ao passar o mouse */
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

.img2:hover{ 
    background-position: 0px 0px;  
    background-size: calc(100% - var(--offset)) calc(100% - var(--offset));  
    filter: grayscale(0);  
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
    background-color: #8A89D4; 
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
    gap: 10%; 
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
    background-color: #8A89D4; 
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
    gap: 15%; 
    position: relative; 
    padding-bottom: 10%;
}   

.img_5{ 
    --color: #8A89D4; /* Cor da borda */
    --border: 8px;    /* Espessura da borda */
    --offset: 20px;   /* Distância do efeito */
    --gap: 10px;       /* Espaço ao passar o mouse */
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



</style>