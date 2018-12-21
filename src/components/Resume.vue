<template>
  <div>
  <br />
    <h2>Robert Arthur Fischer (Artie)</h2>
    <a href="tel:302-423-2120">☎️ 302 423 2120</a>
    <br />
    <a href="mail to:artiefischer@gmail.com">✉️ artiefischer@gmail.com</a>
    <b-container class="resume">
    <br />
    <p id="personalStatement">
      "Software Developer with a passion for engineering clean and engaging frontend & fullstack applications. I am comfortable working in new languages and love the challenges associated with providing concise and inventive programming solutions."
     </p>
     <b-row>
       <b-col id="skillsBar">
         <h3>Technical Skills</h3>
           <h4>
             <b-badge class="badges" variant="info">JavaScript</b-badge>
             <b-badge class="badges" variant="info">NodeJS</b-badge>
             <b-badge class="badges" variant="info">ExpressJS</b-badge>
             <b-badge class="badges" variant="info">PostgreSQL</b-badge>
             <b-badge class="badges" variant="info">Git/GitHub</b-badge>
             <b-badge class="badges" variant="info">Go</b-badge>
             <b-badge class="badges" variant="info">Agile</b-badge>
             <b-badge class="badges" variant="info">AJAX</b-badge>
             <b-badge class="badges" variant="info">TDD</b-badge>
             <b-badge class="badges" variant="info">HTML5/CSS</b-badge>
             <b-badge class="badges" variant="info"><a id="trello" href="https://trello.com/b/PKnnUNNZ/q2-planning" target="_blank"><u>Trello</u></a></b-badge>
             <b-badge class="badges" variant="info">React/Redux/Native</b-badge><b-badge class="badges" variant="info">Vue.js</b-badge>
            </h4>

          <div class="education">
            <h2>Education</h2>
            <h4>Galvanize, Inc</h4>
            <h5>Full-stack Web Development Immersive</h5>        
            <h5>Boulder, CO 2018</h5>
            <br />
            <h4>Boston University</h4>
            <h5>B.A. History</h5><h5>Boston,MA 2000-2004</h5>
          </div>
         </b-col>

         <b-col class="professional"> 
           <h2>Professional Experience</h2> 
           <h4>Portland Paddle</h4>
           <h5>Supervisor/Administrator</h5>
           <h5>Portland, Maine *August 2017 - July 2018*</h5>
           <h6>Website SEO, updates, and maintanence on <b>Squarespace</b>. Event booking software     editing and maintenance with <b>Xola</b>. Regular newsletter composition and layout with     <b>Mailchimp</b>. Personnel supervision for both on-shore and on-water guide teams.</h6>

           <h4>Engine</h4>
           <h5>Vounteer Coordinator</h5>
           <h5>Biddeford, Maine *May 2017 - July 2018*</h5>

           <h6>Recruiting, screening, training, and scheduling over 50 volunteers in a     constantly-in-motion arts and community non-profit. Website building, SEO, updates, and     maintenance on <b>Wordpress</b> and weekly newsletter composition for events and announcements     with <b>Mailchimp</b>.</h6>

           <h4>Tea First</h4>
           <h5>Independent Record Label</h5>
           <h5>2005 - 2014</h5>

           <h6>All aspects of music production: recording, editing, and mastering to product design, manufacturing, sale, and promotion. As well as, professionally and emphatically composing and performing solo and in various groups for 20 years. Styles ranging from 6 & 12-string guitar composition, electronic composition, to computer programming composition with <b>MAX|MSP/Ableton</b>.</h6>
        </b-col>
      </b-row>

        <a href="/" target="_blank">⏬ Fischer Resume PDF</a>
      <!-- <b-img src="../../static/resume.png" fluid alt="Responsive image" /> -->
    </b-container>
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

<style scoped>
.resume {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 15px;
  padding: 3%;
  width: 80%;
   font-weight: normal;
  color:#1b2a22;
}

h2:hover {
  color:  #563a8a;
}

h3 {
  color: #2a412a;
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
}

#skillsBar {
  text-align: left;
  border-radius: 15px;
  width: 20%;
  height: auto;
  overflow: auto;
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
  color: #e0ffe2;
}

#personalStatement {
  font-size: 20px;
}

.professional {
  width: 50%;
}
#trello {
  color: white;
  font-size: 18px;
}

.education {
 margin-top: 10%;
}
</style>
