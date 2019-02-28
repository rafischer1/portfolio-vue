<template>
  <div class="page">
  <br />
   <parallax speedFactor=".8" direction="down">
    <h2 id="myName">Robert Arthur Fischer (Artie)</h2>
    <a href="tel:302-423-2120">☎️ 302 423 2120</a>
    <br />
    <a href="mail to:artiefischer@gmail.com">✉️ artiefischer@gmail.com</a>
    <br />
    <br />
    </parallax>
      <parallax speedFactor="1.5" direction="up">
    <b-container class="resume">
    <br />
    <p id="personalStatement">
      "Software Developer with a passion for engineering clean and engaging fullstack applications. I am comfortable working in new languages and frameworks and love the challenges associated with providing concise and inventive programming solutions."
     </p>
     
     <b-row>
       <b-col id="skillsBar">
         <h3>Technical Skills</h3>
           <h4>
             <b-badge class="badges" variant="info">JavaScript</b-badge>
             <b-badge class="badges" variant="info">Go</b-badge>
             <b-badge class="badges" variant="info">Python</b-badge>
             <b-badge class="badges" variant="info">React/Redux/Native</b-badge>
             <b-badge class="badges" variant="info">Vue</b-badge>
             <b-badge class="badges" variant="info">Node</b-badge>
             <b-badge class="badges" variant="info">Express</b-badge>
             <b-badge class="badges" variant="info">PostgreSQL</b-badge>
             <b-badge class="badges" variant="info">SQL</b-badge>
             <b-badge class="badges" variant="info">Git/GitHub</b-badge>
             <b-badge class="badges" variant="info">Agile</b-badge>
             <b-badge class="badges" variant="info">AJAX</b-badge>
             <b-badge class="badges" variant="info">TDD</b-badge>
             <b-badge class="badges" variant="info">HTML5/CSS3</b-badge>
             <b-badge class="badges" variant="info">API</b-badge>
             <b-badge class="badges" variant="info"><a id="trello" href="https://trello.com/b/PKnnUNNZ/q2-planning" target="_blank"><u>Trello</u></a></b-badge>
             
            </h4>

          <div class="education">
            <h2>Education</h2>
            <h4>Galvanize, Inc</h4>
            <h5>Full-stack Web Development Immersive</h5>        
            <h5>Boulder, CO Feb 2019</h5>
             <br />
            <h4>Boston University</h4>
            <h5>B.A. History</h5><h5>Boston, MA 2004</h5>
          </div>
         </b-col>

         <b-col class="professional" align-v="end"> 
           <h2>Professional Experience</h2> 
            <div class="experience">
              <h4>Portland Paddle</h4>
              <h5>Supervisor/Administrator</h5>
              <h5>Portland, ME - August 2017 - July 2018</h5>
              <h6>Website SEO and updates, event booking software editing and maintenance with Xola . Regular newsletter composition and layout with Mailchimp. Developed strong working relationships with management and the executive team through effective scheduling and communication skills.</h6>
            </div>
            <div class="experience">
              <h4>Engine</h4>
              <h5>Volunteer Coordinator</h5>
              <h5>Biddeford, ME - May 2017 - July 2018</h5>

              <h6>Recruiting, training, and scheduling over 50 volunteers in a constantly-in-motion arts and community non-profit. Website building, SEO, updates, and maintenance on Wordpress and weekly newsletter composition for events and announcements with Mailchimp . Worked with leadership staff and special committees to define volunteer mission and set standards.</h6>
            </div>
            <div class="experience">
              <h4>Cure Organic Farm</h4>
              <h5>Supervisor Customer Service</h5>
              <h5>Boulder, CO - June 2013 - December 2016</h5>

              <h6>Supervisory role responsible for scheduling and maintaining sales at on-location store. Training new staff, volunteers, and interns and providing tours of the property and various educational experiences for adults and children.</h6>
            </div>
            <div class="experience">
              <h4>Tea First Records</h4>
              <h5>Independent Record Label</h5>
              <h5>2005 - 2014</h5>

              <h6>All aspects of music production: recording, editing, and mastering to product design, manufacturing, sale, and promotion. Professionally and emphatically composing and performing for 18 years. Composition styles ranging from 6 & 12-string guitar, electronic, and MAX|MSP/Ableton.</h6>
           </div>
        </b-col>
      </b-row>
        <!-- <a href="/" target="_blank">⏬ Fischer Resume PDF</a> -->
        <b-btn id="portfolioBtn" variant="dark" href="https://github.com/rafischer1/portfolio-vue" target="_blank">Portfolio Site Github</b-btn>
    </b-container>
      </parallax>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
export default {
  name: 'Resume',
  data () {
    return {  
    }
  }
}
</script>

<style scoped>
parallax-container {position: relative;}
.page {background: radial-gradient(rgb(39, 82, 102), black);}
.resume {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px inset hsla(0, 0%, 45%, 0.472);
  border-radius: 15px;
  padding: 3%;
  width: 85%;
  font-weight: normal;
  color:#1b2a22;
  margin-bottom: 2%;
  background-color: rgba(255, 255, 255, 0.959); 
  box-shadow: 2px 2px rgb(222, 221, 221);
}
h2 {color: #2a412a;}
#myName {color:  #d3c8e7;}
h2:hover {color:  #d3c8e7;}
h3 {color: #2a412a;}
a {
  color: #42b983;
  font-size: 24px;
}
a:hover {
  color:  #563a8a;
  text-decoration: none;
  outline: none;
}
a:active {color:  #7a5923;}
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
  background-color: #6d539e;
  transform: rotateZ(-10deg);
  
}
.badges:active {color: #e0ffe2;}
#personalStatement {
  font-size: 20px;
  margin-top: -3%;
  padding-bottom: 1%;
  border-bottom: 1px dashed hsla(0, 0%, 0%, 0.116);
}
.professional {width: 50%;}
#trello {
  color: white;
  font-size: 18px;
  outline: none;
}
.education {margin-top: 10%;}
.education:hover {
  background-color: hsla(0, 0%, 94%, 0.228);
  color: #132134;
  border-radius: 10px;
}
.experience {margin-bottom: 5%;}
.experience:hover {
  background-color: hsla(0, 0%, 94%, 0.228);
  color: #132134;
  border-radius: 10px;
}
.volunteer {margin-top: 5%;}
.volunteer:hover {
  background-color: hsla(0, 0%, 94%, 0.228);
  color: #132134;
  border-radius: 10px;
}
#portfolioBtn {font-size: 18px;}
</style>
