<template> 

                                <!-- section 1 -->
    <div> 
        <div class="first_container"> 
            <div class="info1_container">  
            <h1 class="label">DanceFest 2024</h1>
            <p class="content">A celebration of rhythm, movement, and creativity! Join us for electrifying performances, workshops, and nonstop energy.</p>
        </div> 
        <div class="imgs"> 
            <img src="../assets/about us/img1.png" alt=""> 
            <img src="../assets/about us/img2.png" alt="">
        </div> 
        </div> 
        <div class="rect"></div>
    </div>  
    

                                <!-- section 2 --> 
    <div class="second_container"> 
        <div class="gallery">
            <div class="gallery-item">
                <img src="../assets/about us/img3.png" alt="">
            </div>
            <div class="gallery-item">
                <img src="../assets/about us/img4.png" alt="">
            </div> 
            <div class="gallery-item">
                <img src="../assets/about us/img5.png" alt="">
            </div>
            <div class="gallery-item">
                <img src="../assets/about us/img6.png" alt="">
            </div>
        </div> 
        <div class="info2_container"> 
            <h1 class="label">Our Team</h1> 
            <p class="content">A passionate group of skilled performers and instructors, our dancers bring creativity, energy, and expertise to every step—dedicated to inspiring and sharing the joy of movement with all!</p>
        </div>
    </div>  

                                <!-- section 3 -->  

<div class="rect2"> 
    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <!-- 1º Slide -->
            <div class="carousel-item active">
                <div class="d-flex justify-content-center">
                    <div class="card mx-2" style="width: 18rem;">
                        <img src="../assets/about us/p1.png" class="card-img-top" alt="Sophia Carter">
                        <div class="card-body text-center">
                            <p class="card-text">Sophia Carter</p>
                            <p class="card-text">Ballet</p>
                        </div>
                    </div>
                    <div class="card mx-2" style="width: 18rem;">
                        <img src="../assets/about us/p2.png" class="card-img-top" alt="Liam Bennett">
                        <div class="card-body text-center">
                            <p class="card-text">Liam Bennett</p>
                            <p class="card-text">Hip-Hop</p>
                        </div>
                    </div>
                    <div class="card mx-2" style="width: 18rem;">
                        <img src="../assets/about us/p3.png" class="card-img-top" alt="Noah Turner">
                        <div class="card-body text-center">
                            <p class="card-text">Noah Turner</p>
                            <p class="card-text">Freestyle</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 2º Slide -->
            <div class="carousel-item">
                <div class="d-flex justify-content-center">
                    <div class="card mx-2" style="width: 18rem;">
                        <img src="../assets/about us/p4.png" class="card-img-top" alt="Emma Hayes">
                        <div class="card-body text-center">
                            <p class="card-text">Emma Hayes</p>
                            <p class="card-text">Salsa</p>
                        </div>
                    </div>
                    <div class="card mx-2" style="width: 18rem;">
                        <img src="../assets/about us/p5.png" class="card-img-top" alt="Olivia Parker">
                        <div class="card-body text-center">
                            <p class="card-text">Olivia Parker</p>
                            <p class="card-text">Bachata</p>
                        </div>
                    </div>
                    <div class="card mx-2" style="width: 18rem;">
                        <img src="../assets/about us/p6.png" class="card-img-top" alt="Ethan Brooks">
                        <div class="card-body text-center">
                            <p class="card-text">Ethan Brooks</p>
                            <p class="card-text">Improv</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 3º Slide -->
            <div class="carousel-item">
                <div class="d-flex justify-content-center">
                    <div class="card mx-2" style="width: 18rem;">
                        <img src="../assets/about us/p7.png" class="card-img-top" alt="Ava Collins">
                        <div class="card-body text-center">
                            <p class="card-text">Ava Collins</p>
                            <p class="card-text">Classic</p>
                        </div>
                    </div>
                    <div class="card mx-2" style="width: 18rem;">
                        <img src="../assets/about us/p8.png" class="card-img-top" alt="Lucas Reed">
                        <div class="card-body text-center">
                            <p class="card-text">Lucas Reed</p>
                            <p class="card-text">Breakdance</p>
                        </div>
                    </div>
                    <div class="card mx-2" style="width: 18rem;">
                        <img src="../assets/about us/p9.png" class="card-img-top" alt="Mia Foster">
                        <div class="card-body text-center">
                            <p class="card-text">Mia Foster</p>
                            <p class="card-text">Popping</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Controls -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>




</template>

<script>
     
</script>

<style lang="css" scoped> 
* {
    font-family: 'Ysabeau Infant'; 
} 

.label{ 
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
    width: 90%;
}

.first_container{  
    display: flex; 
    flex-direction: row; 
    margin: 5%; 
    margin-bottom: 10%;
} 

.rect{ 
    background-color: #DCDCF2;   
    margin: none;  
    height: 300px; 
    width: 800px; 
    z-index: -1; 
    right: 0%;  
    top: 70%; 
    position: absolute;
} 

.imgs{ 
    display: flex; 
    flex-direction: row; 
    gap: 20px; 
    z-index: 100;
}

.second_container{  
    margin-bottom: 5%;
    display: flex; 
    flex-direction: row;  
    gap: 10%; 
    margin: 5%;  
    padding-bottom: 35%; 
    padding-top: 5%;
    
} 

.info2_container{ 
    right: 5%;
}

.gallery { 
    height: 50px;
    display: grid;               
    grid-template-columns: repeat(2, 1fr); 
    gap: 20px;                   
    max-width: 1200px;
    margin-bottom: 5%;
}

.gallery-item {
    break-inside: avoid;
    margin-bottom: 16px;
}

.gallery-item img { 
    width: 250px;
}



@media screen and (max-width: 500px) {
    .gallery {
        grid-template-columns: 1fr; 
    }
}

@media screen and (min-width: 501px) and (max-width: 700px) {
    .gallery {
        grid-template-columns: repeat(2, 1fr); 
    }
}

@media screen and (min-width: 701px) and (max-width: 900px) {
    .gallery {
        grid-template-columns: repeat(2, 1fr); 
    }
}



.rect2{  
    background-color: #8A89D4; 
    width: 100%; 
    height: 500px;    
    display: flex; 
    justify-content: center;
    align-items: center;

}   

.card{ 
    border: none;  
    margin: 2%;
    border-radius: none;  
    transition: transform 0.3s ease;
} 

.card:hover{ 
    transform: scale(1.1);
}

</style> 

