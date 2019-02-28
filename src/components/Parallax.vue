<template>
<div>
 <parallax speedFactor=".8" direction="down" sectionHeight="5" id="headerPar">
 <h2>Robert Arthur Fischer (Artie)</h2>
    <a href="tel:302-423-2120">☎️ 302 423 2120</a>
    <br />
    <a href="mail to:artiefischer@gmail.com">✉️ artiefischer@gmail.com</a>
    <br />
     <br />
    <b-container class="resume">
    <br />
    <p id="personalStatement">
      "Software Developer with a passion for engineering clean and engaging fullstack applications. I am comfortable working in new languages and frameworks and love the challenges associated with providing concise and inventive programming solutions."
     </p>
     <b-row>
       <b-col id="skillsBar">
         <h3>Technical Skills</h3>
           <h4>
             <b-badge class="badgex" variant="info">JavaScript</b-badge>
             <b-badge class="badgex" variant="info">Go</b-badge>
             <b-badge class="badgex" variant="info">Python</b-badge>
             <b-badge class="badgex" variant="info">React/Redux/Native</b-badge>
             <b-badge class="badgex" variant="info">Vue</b-badge>
             <b-badge class="badgex" variant="info">Node</b-badge>
             <b-badge class="badgex" variant="info">Express</b-badge>
             <b-badge class="badgex" variant="info">PostgreSQL</b-badge>
             <b-badge class="badgex" variant="info">SQL</b-badge>
             <b-badge class="badgex" variant="info">Git/GitHub</b-badge>
             <b-badge class="badgex" variant="info">Agile</b-badge>
             <b-badge class="badgex" variant="info">AJAX</b-badge>
             <b-badge class="badgex" variant="info">TDD</b-badge>
             <b-badge class="badgex" variant="info">HTML5/CSS3</b-badge>
             <b-badge class="badgex" variant="info">API</b-badge>
             <b-badge class="badgex" variant="info"><a id="trello" href="https://trello.com/b/PKnnUNNZ/q2-planning" target="_blank"><u>Trello</u></a></b-badge>
            </h4>
            </b-col>
     </b-row>
    </b-container>
   

  </parallax>


 <parallax speedFactor="3" direction="up">
     <b-col class="professional" align-v="end"> 
       <br />
       <br />
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

  </parallax>
   <parallax speedFactor=".9" direction="down">
   <hr />
    <div class="educationP">
            <h2>Education</h2>
            <h4>Galvanize, Inc</h4>
            <h5>Web Development Immersive</h5> 
            <h6><b>Full-stack - Full-time</b></h6>        
            <h5>Boulder, CO 2018</h5>
             <br />
            <h4>Boston University</h4>
            <h5>B.A. History</h5><h5>Boston, MA 2004</h5>
          </div>
  </parallax>
 
 

  


</div>

</template>

<script>
 import Parallax from 'vue-parallaxy'
  export default {
    components: {
      Parallax
    }
  }
</script>

<style>
parallax-container {
  position: relative;

}

.Masthead {
  height: 10vh;
}

.parallax-title {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
}

#skillsBar {
  text-align: left;
  border-radius: 15px;
  width: 20%;
  height: auto;
  overflow: auto;
  padding: 5px;
}

.badge {
  cursor: pointer !important;
  margin: 4px;
}

.badge:hover {
  background-color: #6d539e;
  transform: rotateZ(-10deg); 
}

.badge:active {
  color: #e0ffe2;
}

#trello {
  color: white;
  font-size: 18px;
  outline: none;
}
</style>