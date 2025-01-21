<template>  
  

                                        <!-- section 1 -->

  <div class="first_container"> 
        <div  class="first_text"> 
            <h1 class="label"> Dance  Festival</h1> 
            <p class="content"> A vibrant celebration of movement, culture, and artistic expression, bringing together dancers, choreographers, and audiences to showcase various styles and traditions.</p> 
            <router-link to="/packs" class="Btn">Tickets</router-link>
        </div>
        <video autoplay loop muted class="img1"><source src="../assets/homepage/video-homepage.mp4" type="video/mp4"></video>
    </div> 

                                        <!-- section 2 -->

    
    <div class="second_container"> 
        <img class="img2" src="../assets/homepage/img2.png" alt="">  
        <div class="second_text">  
            <h1 class="label">Move to Groove!</h1> 
            <p class="content">Step Into the Rhythm, Dance Into the Soul!</p>
        </div> 
    </div>

                                        <!-- section 3 -->
    <div class="box">
        <div class="group">
        <div class="overlap-group">
            <div class="div">
            <p class="breakdance-show">
                <span class="span">
                <br />
                </span>
                <span class="text-wrapper-2">
                Breakdance show
                <br />
                Workshop Freestyle
                </span>
            </p>
            <p class="caribbean-heat">
                <span class="span">
                <br />
                </span>
                <span class="text-wrapper-2">
                Caribbean Heat
                <br />
                Workshop Rumba
                </span>
            </p>
            <p class="infinite-movements">
                <span class="span">
                <br />
                </span>
                <span class="text-wrapper-2">
                Infinite Movements
                <br />
                Workshop Tecnic Classic
                </span>
            </p>
            <div class="text-wrapper-3">Urban</div>
            <div class="text-wrapper-4">Classic</div>
            <div class="text-wrapper-5">Latin</div>
            <div class="text-wrapper-6">01</div>
            <div class="text-wrapper-7">02</div>
            <div class="text-wrapper-8">03</div>
            </div>
                
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div> 
        <router-link to="/calendar" class="BTN_calendar">Calendar</router-link>
    </div>

                                        <!-- section 4 -->

    <div class="fourth_container">   
        <img class="img3"   src="/src/assets/homepage/img3.png" alt="">  
        <img class="img4" src="/src/assets/homepage/img4.png" alt="">   
         
        <div class="rect4"> 
            <label class="rect_label" for="">Workshops</label> <br>
            <p class="rect_cont">Feel the rhythm and ignite your passion! Whether you’re a beginner or a pro, our dance workshops are the perfect place to grow, groove, and connect.</p> 
            <router-link to="/workshops" class="Btn_4">see more</router-link>
        </div> 
    </div> 

    <CountDown/>  

                                         <!-- section 5 -->   

    <div class="fifth_container">  
        <div class="inf_container"> 
            <h1>Information</h1> <br><br>
            <div> 
                <p class="inf_details"><img src="../assets/homepage/phone.png" alt="">  Contact</p> 
                <p class="inf_details"><img src="../assets/homepage/schedule.png" alt="">  Available Schedule</p> 
                <p class="inf_details"><img src="../assets/homepage/email.png" alt="">  Email</p>
            </div>
        </div> 
        <div class="form_container">
            <h1 class="label">Contact Us</h1>
            <h2 class="content">Got questions? Contact us and let’s get moving together!</h2>
            <div class="form-row">
                <div class="input-data">
                <input type="text" required />
                <label>Name</label>
                <div class="underline"></div>
                </div>
            </div>
            <div class="form-row">
                <div class="input-data">
                <input type="email" required />
                <label>E-mail</label>
                <div class="underline"></div>
                </div>
            </div>
            <div class="form-row">
                <div class="input-data">
                <textarea rows="3" required></textarea>
                <label>Message</label>
                <div class="underline"></div>
                </div>
            </div>
            <button class="btn_send"> Send a Message</button>
            </div>

    </div> 

                                        <!-- section 6 -->

    <div class="sixth_container">  
        <h1 class="label" >Interactive Map</h1> 
        <iframe class="map" src="/mapa/Map.html" width="600" height="400" style="border:none;"></iframe>
    </div>
    
    


</template>

<script>

import CountDown from "@/components/CountDown.vue";
import router from "@/router";
import { useUsersStore } from "@/stores/users.js";
export default { 
  components:{ 
        CountDown,
    },
  data() {
    return {
      store: useUsersStore(),
    };
  },
  methods: {
    logoutUser() {
      this.store.logout();
      local
    },
  },
};
</script> 


<style lang="scss" scoped>   
* {
    font-family: 'Ysabeau Infant';  
}  

.Rect1{  
    position: absolute;
    width: 430px; 
    height: 700px; 
    background: #B84EFF; 
    float: right;  
    right: 0;
    z-index: -1;
} 

.first_container{   
    margin: 8%;   
    height: 500px;  
} 

.first_text{ 
    width: 470px; 
    float: left
} 

.img1{  
  width: 750px;
  height: 500px;
  float: right;  
  z-index: 1; 
  position: relative; 
  margin-right: -12%; 
   
} 

.label {
  font-family: "Ysabeau Infant";
  font-weight: bolder;
  color: #000000;
  font-size: 50px;
  margin-top: 2%;
} 

.content{ 
    font-family: "Ysabeau Infant" ; 
    font-weight: normal;
    font-size: 30px; 
    margin-top: 2%;
}
 

.Btn{ 
    border: none; 
    background-color: #B84EFF; 
    color: white; 
    border-radius: 10px; 
    padding: 3%; 
    font-size: 25px; 
    font-weight: 400; 
    width: fit-content; 
    height: fit-content;  
    text-transform: uppercase;
    font-family: 'Ysabeau Infant' ; 
    margin-top: 2%;
    text-decoration: none; 
    transition: transform 0.3s ease;
} 

.Btn:hover{ 
    transform: scale(1.1);
    padding: 2.5%;  
}

.second_container {  
    margin-left: 2%;   
    height: 600px;  
    margin-bottom: 10%;
    position: relative;
} 

.second_text {  
    float: right; 
    margin-right: 5%; 
    margin-top: 5%;
}

.img2 {  
    float: left; 
    width: 440px; 
    height: 550px; 
    margin-bottom: 10%;  
    margin-left: 5%; 
    --color: #B84EFF; /* Cor da borda */
    --border: 8px;    /* Espessura da borda */
    --offset: 20px;   /* Distância do efeito */
    --gap: 5px;       /* Espaço ao passar o mouse */
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

.img2:hover {  
    background-position: 0px 0px;  
    background-size: calc(100% - var(--offset)) calc(100% - var(--offset));  
    filter: grayscale(0);  
}

  

// section 3
.box {  
    margin-bottom: 10%;
    position: relative;
    width: 100%; 
    
}

.box .group {  
    background-color: #8a89d4;
    height: 525px;
    width: 100%;
}

.box .overlap-group {
  height: 339px;
  left: 169px;
  position: absolute;
  top: 0;
  width: 100%;
}

.box .div {
  height: 306px;
  left: 0;
  position: absolute;
  top: 33px;
  width: 100%;
}

.box .breakdance-show,
.box .caribbean-heat,
.box .infinite-movements {
  color: #ffffff;
  font-family: "Ysabeau Infant-Regular";
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 30px;
  position: absolute;
  width: 184px;
}

.box .breakdance-show  {
  left: 2%;
  top: 207px;
}

.box .caribbean-heat {
  left: 32%;
  top: 207px;
}

.box .infinite-movements {
  left: 62%;
  top: 207px; 
  width: fit-content;
}
.box .text-wrapper-3,
.box .text-wrapper-4,
.box .text-wrapper-5 {
  color: #ffffff;
  font-family: "Ysabeau Infant-Medium";
  font-size: 30px;
  font-weight: 500;
  position: absolute;
  letter-spacing: 0; 
  margin-left: 2%;
}

.box .text-wrapper-3 {
  left: 9%;
  top: 96px;
}

.box .text-wrapper-4 {
  left: 39%;
  top: 96px;
}

.box .text-wrapper-5 {
  left: 69%;
  top: 96px;
}

.box .text-wrapper-6,
.box .text-wrapper-7,
.box .text-wrapper-8 {
  color: #ffffff;
  font-family: "Ysabeau Infant-Regular";
  font-size: 120px;
  font-weight: 400;
  position: absolute;
  letter-spacing: 0; 
}

.box .text-wrapper-6 {
  left: 2%;
  top: 0;
}

.box .text-wrapper-7 {
  left: 32%;
  top: 0;
}

.box .text-wrapper-8 {
  left: 62%;
  top: 0;
}

.box .line {
  background-color: #ffffff;
  width: 5px;
  height: 339px;
  position: absolute;
}

.box .line:nth-child(1) {
  left: 9%;
  top: 0;
}

.box .line:nth-child(2) {
  left: 30%;
  top: 0;
}

.box .line:nth-child(3) {
  left: 59%;
  top: 0;
}

.BTN_calendar{    
    position: absolute; 
    bottom: 10%; 
    right: 5%;
    float: right; 
    border: none; 
    background-color:white; 
    color: black; 
    border-radius: 10px; 
    padding: 1%; 
    font-size: 25px; 
    font-weight: 400; 
    width: fit-content; 
    height: fit-content;  
    text-transform: uppercase;
    font-family: 'Ysabeau Infant' ; 
    margin-top: 2%; 
    text-decoration: none; 
    transition: transform 0.3s ease;
    
}  
.BTN_calendar:hover{ 
  transform: scale(1.1);
  padding: 1%;
}


//section 4 
.fourth_container{   
  align-content: center;
  margin-bottom: 5%; 
  height: 900px;  
  
}

.img3{ 
  float: left; 
  z-index: -100;
}
.img4{ 
    float: right;  
    z-index: -100;
} 
.rect4{     
  position: relative;  
  top: 15%; 
  padding: 4%; 
  padding-bottom: 20%; 
  z-index: 100; 
  background-color: #B84EFF; 
  width: 650px; 
  height: 60%;
  margin-right: auto; 
  margin-left: auto; 
    
}  

.Btn_4{  
  border: none; 
  background-color: white; 
  color: black; 
  border-radius: 10px; 
  padding: 2%; 
  font-size: 25px; 
  font-weight: 400; 
  width: fit-content; 
  height: 57px;  
  text-transform: uppercase;
  font-family: 'Ysabeau Infant' ;  
  text-decoration: none;   
  margin-right: 5%; 
  margin-left: 10%;  
  transition: transform 0.3s ease;
} 

.Btn_4:hover {  
  transform: scale(1.1);
  padding: 2.5%; 
}

.rect_label{    
  margin-right: 5%; 
  margin-left: 10%; 
  font-family: "Ysabeau Infant";
  font-weight: bolder;
  color: white;
  font-size: 50px;
}  


.rect_cont{ 
  margin-right: 1%; 
  margin-left: 10%;   
  font-family: "Ysabeau Infant" ; 
  font-weight: normal; 
  width: 600px;
  font-size: 30px; 
  margin-top: 2%;   
  padding-bottom: 2%;
  color: white;
}

//section 5
.fifth_container{ 
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
    height: fit-content; 
    margin: 5%;
} 

.inf_container{ 
    background-color: #B84EFF; 
    padding: 5%; 
    width: 45%; 
    color: white;
}  

.form_container{   
    width: 45%;
    float: right;
} 


.btn_send{  
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

.btn_send:hover{ 
  transform: scale(1.1);
  padding: 2.5%;

}

.inf_details{ 
    font-family: "Ysabeau Infant";  
    font-size: 25px; 
    margin:2%;
} 

.form-row {
  display: flex;
  margin: 32px 0;
}

.input-data {
  width: 100%;
  height: 40px;
  position: relative;
}

.input-data input,
.input-data textarea {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12);
}

.input-data label {
  position: absolute;
  pointer-events: none;
  bottom: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.input-data input:focus ~ label,
.input-data textarea:focus ~ label,
.input-data input:valid ~ label,
.input-data textarea:valid ~ label {
  transform: translateY(-20px);
  font-size: 14px;
  color: #3498db;
}

.input-data .underline {
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
}

.input-data .underline:before {
  position: absolute;
  content: '';
  height: 2px;
  width: 100%;
  background: #3498db;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}

.input-data input:focus ~ .underline:before,
.input-data textarea:focus ~ .underline:before,
.input-data input:valid ~ .underline:before,
.input-data textarea:valid ~ .underline:before {
  transform: scaleX(1);
} 

.sixth_container{ 
    margin: 5%; 
    text-align: center;
} 

.map{ 
    margin: 5%; 
    border: #B84EFF 2px;
}






</style>
