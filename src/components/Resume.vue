<template>
  <div class="resume">
   <div>
     <br>
     <h2>Robert Arthur Fischer (Artie)</h2>
     <a href="tel:302-423-2120">☎️ 302 423 2120</a>
     <br />
     <a href="mail to:artiefischer@gmail.com">✉️ artiefischer@gmail.com</a>
     <p id="personalStatement">
       "Software Developer with a passion for engineering clean and engaging frontend & fullstack applications. I am comfortable working in new languages and love the challenges associated with providing concise and inventive programming solutions."
     </p>
     <div id="skillsBar"><h3>Technical Skills</h3>
     <h4 ><b-badge class="badges" variant="info">JavaScript</b-badge></h4>
     <h4><b-badge class="badges" variant="info">NodeJS</b-badge><b-badge class="badges" variant="info">ExpressJS</b-badge></h4>
     <h4 ><b-badge class="badges" variant="info">PostgreSQL</b-badge><b-badge class="badges" variant="info">Git/GitHub</b-badge></h4>
     <h4><b-badge class="badges" variant="info">Go</b-badge><b-badge class="badges" variant="info">Agile</b-badge><b-badge class="badges" variant="info">AJAX</b-badge></h4>
     <h4 ><b-badge class="badges" variant="info">TDD</b-badge><b-badge class="badges" variant="info">HTML5/CSS</b-badge></h4>
     
   
   
     <h4><b-badge class="badges" variant="info">React/Redux/Native</b-badge><b-badge class="badges" variant="info">Vue.js</b-badge></h4>
     </div>
     
  <b-img src="../../static/resume.png" fluid alt="Responsive image" />
</div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color:#1b2a22;
}
h2:hover {
  color:  #563a8a;
}
h3 {
  color: rgb(42, 65, 42);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  font-size: 24px;
}
a:hover {
  color:  #563a8a;
  text-decoration: none;
 
}

a:active {
 color:  #7a5923;
 text-decoration: none;
}

#skillsBar {
  text-align: left;
  border: 2px solid #2a412a;
  border-radius: 15px;
  width: 20%;
  overflow: auto;
  margin-left: 10%;
  padding: 5px;
  
}
.badges {
  cursor: pointer;
  margin: 2px;
}
.badges:hover {
  background-color: #563a8a;
}
.badges:active {
  background-color: #a1eca7;
  color: black;
}
#personalStatement {
  border-top: 2px dashed #2a412a;
  border-radius: 2px;
  padding: 10px;
  margin: 5px 10% 5px 10%;
  font-size: 20px;
}
</style>
