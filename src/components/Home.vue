<template>
  <div class="home">
  <div>
    <b-jumbotron class="jumbo inboxJumbo" header="React Inbox Fullstack" lead="Email clone site featuring a REACT frontend and GOLANG server and routing Backend" >
  <p>For more information visit site/repos</p>
  <b-btn class="info" variant="info" href="#">Visit Site</b-btn><br>
  <b-btn variant="alert" href="https://github.com/rafischer1/react_inbox_db" target="_blank">Backend Github</b-btn>
  <b-btn variant="alert" href="https://github.com/rafischer1/react-inbox" target="_blank">Frontend Github</b-btn>
</b-jumbotron>
<b-jumbotron class="jumbo q3Jumbo" header="Q3/Capstone" lead="The best project you've ever seen" >
  <p>For more information visit website</p>
  <b-btn class="info" variant="info" href="#">Visit Site</b-btn><br>
  <b-btn variant="alert" href="#">Github</b-btn>
</b-jumbotron>
<b-jumbotron class="jumbo bikeslyJumbo" header="Bikesly"  lead="The Bike Share Search Engine. A traditional frontend site displaying DOM manipulation skill with several API calls" >
  <p>For more information visit site</p>
  <b-btn class="info" variant="info" href="http://rafischer1-q1-bikesly.surge.sh/" target="_blank"s>Visit Site</b-btn><br>
  <b-btn variant="alert" href="https://github.com/rafischer1/bikesly" target="_blank">Github</b-btn>
</b-jumbotron>
 
  </div>

  </div>
</template>

<script>
export default {
   

  name: 'Home',
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
}

.jumbo {
  margin: 2% 2.5%;
  background-color: #ececf2;
}

.jumbo:hover {
  background-color: #f3e8e8;
}


.inboxJumbo {
  margin-top: 5px;
  background-repeat: repeat-y;
  background-position-x: left;
  background-size: 10%;
}
.bikeslyJumbo {
 background: url('../../static/bikesly-graphic.png');
  background-repeat: repeat-y;
  background-position-x: left;
  background-size: 10%;
}

.q3Jumbo {
 
  background-repeat: repeat-y;
  background-position-x: right;
  background-size: 10%;
}
</style>
