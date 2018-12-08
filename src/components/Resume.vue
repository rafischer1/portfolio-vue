<template>
  <div class="resume">
   <div>
     <br>
     <h2>PLACEHOLDER RESUME</h2>
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
  color:seagreen;
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
}

#skillsBar {
  text-align: left;
  border: 2px solid rgb(42, 65, 42);
  border-radius: 15px;
  width: 22%;
  margin-left: 10%;
  padding: 5px;
}
.badges {
  margin: 2px;
}
.badges:hover {
  background-color: #563a8a;
}
.badges:active {
  background-color: #a1eca7;
  color: black;
}
</style>
