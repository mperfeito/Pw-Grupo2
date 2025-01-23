<template>
    <!-- section 1 -->
    <div class="firts_container ">
      <div>
        <h1 class="label">Explore Our Workshops!</h1>
        <p class="content mt-5 fs-">
          Unlock your potential with our diverse dance workshops! Whether you're a
          beginner or advanced, our expert instructors will help you refine your
          skills and discover new styles. Join us and get inspired!
        </p>
      </div>
      <img src="../assets/Workshops/img1.png" alt="" />
      <div class="rect1"></div>
    </div>
  
    <!-- section 2 -->
    <div class="d-flex justify-content-around section-spacing">
      <img class="img2" src="../assets/Workshops/img2.png" alt="" />
      <div class="d-flex flex-column">
        <h1 class="label">Workshops Urban Dance</h1>
        <hr />
        <div class="d-flex">
          <span class="me-3 fs-5">January 3rd</span>
          <i class="bi bi-clock me-3 fs-5"></i>
          <span class="fs-5"> 14:00 - 17:30</span>
        </div>
        <hr />
        <h4 class="fs-4">Styles Covered</h4>
        <ul>
          <li class="fs-4">Freestyle</li>
          <li class="fs-4">Popping & Locking</li>
        </ul>
        <router-link
          to="/calendar"
          class="btn fs-5 mt-5"
          style="background-color: #8a89d4; color: white"
          >See full calendar</router-link
        >
      </div>
    </div>
  
    <!-- section 3 -->
    <div class="d-flex justify-content-around section-spacing">
     
      <div class="d-flex flex-column">
        <h1 class="label">Workshops Classic Dance</h1>
        <hr />
        <div class="d-flex">
          <span class="me-3 fs-5">January 5th</span>
          <i class="bi bi-clock me-3 fs-5"></i>
          <span class="fs-5"> 14:00 - 17:30</span>
        </div>
        <hr />
        <h4 class="fs-4">Styles Covered</h4>
        <ul>
          <li class="fs-4">Classic technique</li>
          <li class="fs-4">Improvisation Contemporary Dance</li>
        </ul>
        <router-link
          to="/calendar"
          class="btn fs-5 mt-5"
          style="background-color: #8a89d4; color: white"
          >See full calendar</router-link
        >
      </div>
      <img class="img2" src="../assets/Workshops/img3.png" alt="" />
    </div>
  
    <!-- section 4 -->
    <div class="d-flex justify-content-around section-spacing">
      <img class="img2" src="../assets/Workshops/img5.png" alt="" />
      <div class="d-flex flex-column">
        <h1 class="label">Workshops Latin Dance</h1>
        <hr />
        <div class="d-flex">
          <span class="me-3 fs-5">January 7th</span>
          <i class="bi bi-clock me-3 fs-5"></i>
          <span class="fs-5"> 14:00 - 17:30</span>
        </div>
        <hr />
        <h4 class="fs-4">Styles Covered</h4>
        <ul>
          <li class="fs-4">Rumba</li>
          <li class="fs-4">Bachata</li>
        </ul>
        <router-link
          to="/calendar"
          class="btn fs-5 mt-5"
          style="background-color: #8a89d4; color: white"
          >See full calendar</router-link
        >
      </div>
    </div>
  </template>
  

<script>
export default {};
</script>

<style lang="css" scoped>
* {
  font-family: "Ysabeau Infant";
}

.label {
  font-family: "Ysabeau Infant";
  font-weight: bolder;
  color: #000000;
  font-size: 45px;
  margin-top: 2%;
}

.content {
  font-family: "Ysabeau Infant";
  font-weight: normal;
  font-size: 25px;
  margin-top: 2%;
  width: 60%;
}

.firts_container {
  padding-top: 5%;
  margin: 5%;
  display: flex;
  flex-direction: row;
  margin-bottom: 15%;
}

.rect1 {
  background-color: #8a89d4;
  margin: none;
  height: 650px;
  width: 30%;
  z-index: -1;
  right: 0%;
  top: 20%;
  position: absolute;
}

.section-spacing {
  margin-bottom: 10%;
}

.title {
  margin: 5%;
}

.img2 {
  width: 35%;
  --color: #8a89d4;
  --border: 8px;
  --offset: 20px;
  --gap: 10px;
  --_c: var(--color) var(--border), #0000 0 calc(100% - var(--border)),
    var(--color) 0;
  --_o: calc(3 * var(--offset));
  padding: calc(var(--gap) + var(--border))
    calc(var(--gap) + var(--border) + var(--offset))
    calc(var(--gap) + var(--border) + var(--offset))
    calc(var(--gap) + var(--border));
  background: linear-gradient(var(--_c)) var(--_o) var(--_o),
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

h4,
h2 {
  font-size: 30px;
  font-weight: bold;
  margin-top: 5%;
}
ul {
  font-size: 30px;
}

.btn2 {
  text-decoration: none;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: none;
  background-color: #8a89d4;
  color: white;
  border-radius: 10px;
  padding: 2%;
  font-size: 25px;
  font-weight: 400;
  width: fit-content;
  height: 57px;
  text-transform: uppercase;
  font-family: "Ysabeau Infant";
  margin-top: 2%;
  transition: transform 0.3s ease;
}

.btn2:hover {
  transform: scale(1.1);
  padding: 2.5%;
}

.third_container {
  padding-top: 5%;
  display: flex;
  flex-direction: row;
  margin: 5%;
  gap: 10%;
  position: relative;
}

.btn3 {
  text-decoration: none;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: none;
  background-color: #8a89d4;
  color: white;
  border-radius: 10px;
  padding: 2%;
  font-size: 25px;
  font-weight: 400;
  width: fit-content;
  height: 57px;
  text-transform: uppercase;
  font-family: "Ysabeau Infant";
  margin-top: 2%;
  transition: transform 0.3s ease;
}

.btn3:hover {
  transform: scale(1.1);
  padding: 2.5%;
}

.fourth_container {
  padding-top: 5%;
  display: flex;
  flex-direction: row;
  margin: 5%;
  gap: 15%;
  position: relative;
  padding-bottom: 10%;
}

.img_5 {
    width:35%;
  --color: #8a89d4;
  --border: 8px;
  --offset: 20px;
  --gap: 10px;
  --_c: var(--color) var(--border), #0000 0 calc(100% - var(--border)),
    var(--color) 0;
  --_o: calc(3 * var(--offset));
  padding: calc(var(--gap) + var(--border))
    calc(var(--gap) + var(--border) + var(--offset))
    calc(var(--gap) + var(--border) + var(--offset))
    calc(var(--gap) + var(--border));
  background: linear-gradient(var(--_c)) var(--_o) var(--_o),
    linear-gradient(90deg, var(--_c)) var(--_o) var(--_o);
  background-size: calc(100% - var(--_o)) calc(100% - var(--_o));
  background-repeat: no-repeat;
  filter: grayscale(0.4);
  transition: 0.5s;
  cursor: pointer;
}

.img_5:hover {
  background-position: 0px 0px;
  background-size: calc(100% - var(--offset)) calc(100% - var(--offset));
  filter: grayscale(0);
}
</style>
