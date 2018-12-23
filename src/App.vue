<template>
  <div id="app">
    <header>
       <b-navbar class="navbar" toggleable="md" type="dark" variant="dark">
         <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
           <b-navbar-brand to="/">Fischer Portfolio</b-navbar-brand>
           <b-collapse is-nav id="nav_collapse">
             <b-navbar-nav>
               <b-nav-item to="/">Projects</b-nav-item>
               <b-nav-item  to="/resume">Resume</b-nav-item>
               <b-nav-item v-show="!seen" to="/playground">Playground</b-nav-item>
           </b-navbar-nav>
           <b-navbar-nav clas="welcome">
             <b-button  id="showModal center" variant="info" @click="showModal">Welcome</b-button>
             <b-modal ref="myModalRef" hide-footer title="Hi! & Contact">
               <div class="d-block text-center">
                 <h4>Thank you for visiting my portfolio site. Please feel free to contact me with any questions</h4>
                 <div id="email">Email: artiefischer@gmail.com</div>
                 <div id="phone">Phone: 302 423 2120</div>
               </div>
               <b-btn class="mt-3" variant="outline-dark" block @click="hideModal">Close</b-btn>
            </b-modal>
           </b-navbar-nav>
           <b-navbar-nav class="linksBar">
             <b-link class="link" href="https://github.com/rafischer1" target="_blank" >Github</b-link>
             
             <b-link class="link" href="https://www.linkedin.com/in/robert-a-fischer/" target="_blank">LinkedIn</b-link>
             <b-link class="link navbarItem" href="https://talent.galvanize.com/students/3090" target="_blank">Galvanize Profile</b-link>
              <b-link class="link" href="https://www.builtincolorado.com/member/artiefischer/134138" target="_blank">Built In Co</b-link>
       
          </b-navbar-nav>
         </b-collapse>
       </b-navbar>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seen: true,
    }
  },
   methods: {
    showModal () {
      this.$refs.myModalRef.show()
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    },

  },
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3c5670;  
}
.link {
  /* display: inline-flex; */
  padding: 5px; 
  margin-left: 2px;
  border: 1px solid hsl(0, 0%, 100%);
  border-radius: 15px;
  color: #42b983;
  text-align: center;
}
.link:hover {
  text-decoration: none;
  border: 1px solid #42b983;
  background-color: white;
  transform: rotateZ(-2deg);
  outline: none;
}
.link:active {
  text-decoration: none;
  border: 1px solid #c7c7c7;
  background-color: #c7c7c7;
}
#showModal:hover {
  border: 1ps solid #563a8a;
  background-color: #563a8a;
  color: white;
}
.linksBar {
  margin-left: 40%;
}

        
</style>
