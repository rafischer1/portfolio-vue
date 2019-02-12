<template>
  <div class="home">
    <div>
        <b-jumbotron class="jumbo slrJumbo" header="SLR Maine"  lead="A public engagement tool around coastal flooding and sea level rise in Portland Maine" >
         <p>Built for the Gulf of Maine Research Institute, this application utilizes a Golang backend to route SMS messages with the Twillio API. The frontend is an interactive parallax UI built with React.</p>
           <b-btn class="info" target="_blank" variant="info" href="http://slr-maine.surge.sh/">Visit Site</b-btn><br>
         <b-btn variant="alert" href="https://github.com/rafischer1/slr_capstone_go" target="_blank">Backend Github</b-btn>
         <b-btn variant="alert" href="https://github.com/rafischer1/gmri_capstone_frontend" target="_blank">Frontend Github</b-btn>
        </b-jumbotron>

      <b-jumbotron class="jumbo inboxJumbo" header="React Inbox Fullstack" lead="Email clone site featuring a REACT fullstack and GOLANG server and routing Backend" >
        <p>For more information visit site/repos</p>
        <b-btn class="info" target="_blank" variant="info" href="http://react-inbox-fe.surge.sh/">Visit Site</b-btn><br>
        <b-btn variant="alert" href="https://github.com/rafischer1/react_inbox_db" target="_blank">Backend Github</b-btn>
        <b-btn variant="alert" href="https://github.com/rafischer1/react-inbox" target="_blank">fullstack Github</b-btn>
       </b-jumbotron>

       <b-jumbotron class="jumbo q3Jumbo" header="Stand Up!" lead="An Agile application for managing daily stand ups for remote sprint teams" >
         <p>Fullstack project with NodeJS, Express, Oauth, PostgreSQL, & Vue</p>
         <b-btn class="info" target="_blank" variant="info" href="https://standup-fischer.herokuapp.com/">Visit Site</b-btn><br>
         <b-btn variant="alert" target="_blank" href="https://github.com/rafischer1/standupstanddown-fe">Github fullstack</b-btn>
         <b-btn variant="alert" target="_blank" href="https://github.com/rafischer1/standupstanddown-be">Github Backend</b-btn>
       </b-jumbotron>

       <!-- <b-jumbotron class="jumbo bikeslyJumbo" header="Bikesly"  lead="A traditional fullstack site (HTML|CSS|JS) displaying DOM manipulation skill with several API calls" >
         <p>For more information visit site</p>
         <b-btn class="info" target="_blank" variant="info" href="http://rafischer1-q1-bikesly.surge.sh/" >Visit Site</b-btn><br>
         <b-btn variant="alert" href="https://github.com/rafischer1/bikesly" target="_blank">Github</b-btn>
        </b-jumbotron> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  border: 2px solid #133124;
  color: #133124;
  margin: 5px;
}

.info {
  border: none;
  color: white;
}

a:hover {
  background-color: #563a8a;
  color: white;
  outline: none;
}

a:active {
  outline: none;
}

.jumbotron {
  margin-top: 2%;
}

.jumbo {
  margin: 2% 2.5%;
  background-color: #ececf2;
}

.jumbo:hover {
  outline: none;
  background-color: #f3e8e8;
}

</style>
