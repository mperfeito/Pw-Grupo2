<template>
    <footer class="footer">
      <div class="overlap-group">
        <div class="pages-section">
          <h2>Pages</h2>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/calendar">Calendar</router-link></li>
            <li><router-link to="/packs">Packs</router-link></li>
            <li><router-link to="/workshops">Workshops</router-link></li> 
            <li><router-link to="/shows">Shows</router-link></li>
          </ul>
        </div>
        <div class="contact-section">
          <h2>Contacts</h2>
          <p>
            Location<br />
            Postal Code<br />
            Contact<br />
            Email
          </p>
        </div>
        <div class="image-section">
          <img src="../assets/footer/maps.png" alt="Map Image">
        </div>
      </div>
      <div class="footer-bottom">
        <hr class="divider" />
        <div class="footer-content">
            <p>© 2024 Company Name. All rights reserved.</p>
            <div class="social-icons">
            <img src="../assets/footer/instagram.png" alt="Instagram" />
            <img src="../assets/footer/Frame 5.png" alt="Icon 2" />
            <img src="../assets/footer/X.png" alt="X" />
            </div>
        </div>
        </div>
    </footer>
  </template>
  
<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
.footer {  
    margin-top: 5%;
    width: 100%;
    background-color: #8a89d44c;
    padding: 20px;
    box-sizing: border-box;
}

.overlap-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 20px; 
    margin: 5%;
}

.pages-section,
.contact-section,
.image-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
} 



.pages-section h2,
.contact-section h2 {
  font-family: "Ysabeau Infant"; 
  font-weight: bold;
  font-size: 30px;
  color: #000;
  margin-bottom: 10px;
}

.pages-section ul {
  list-style-type: none;
  padding: 0;
}

.pages-section ul li {
  margin: 5px 0;
}

.pages-section ul li a {
  position: relative;
  text-decoration: none;
  color: inherit;
  font-family: "Ysabeau Infant";
  font-size: 20px;
  transition: color 0.3s ease;
}

.pages-section ul li a::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px; 
  width: 0;
  height: 2px;
  background-color: #B84EFF; 
  transition: width 0.3s ease-in-out;
}

.pages-section ul li a:hover::before {
  width: 100%; 
}

.pages-section ul li a:hover {
  color: #B84EFF; 
}

.contact-section p {
  font-family: "Ysabeau Infant";
  font-size: 20px;
  line-height: 30px;
}

.image-section img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.footer-bottom {
  text-align: center;
  margin-top: 20px; 
  margin: 5%;
}

.divider {
  border: none;
  border-top: 2px solid #000;
  margin: 20px 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; 
}

.footer-content p {
  font-family: "Ysabeau Infant";
  font-size: 20px;
  margin: 0;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-icons img {
  object-fit: contain;
}

</style>

