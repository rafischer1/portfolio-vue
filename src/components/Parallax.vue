<template>
<div>

<h2>Robert Arthur Fischer (Artie)</h2>
    <a href="tel:302-423-2120">☎️ 302 423 2120</a>
    <br />
    <a href="mail to:artiefischer@gmail.com">✉️ artiefischer@gmail.com</a>
    <br />

 <parallax speedFactor=".6" direction="up">
    <div class="education">
            <h2>Education</h2>
            <h4>Galvanize, Inc</h4>
            <h5>Full-stack Web Development Immersive</h5>        
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

.education {
  height: 90%;
  width: 100%;
  background: url(https://lh3.googleusercontent.com/CG8qEBI8SDtBWZAgQ_wc32Zc_wl3kIPvdpSl3Dqbyutj_xbCFVrVI9yBttsyWmy0lq-81-M4gQBJD24obhstYq7fDzu-gB6IJjEkj3fnKgPMualvgZha5vi05KEcWqh74i6LGRhbbyf74mFnuQ9EKsLlbCWLfRaG9M3DDwmAkhcImkTnc697YozOGByNweQTOexplpjuEVOtiUjpCjp5tadTtQG50bI4WQ_i8HyIISa8UmtVW82fpvlb6g5bNlKU-Do6dv8K1THlbKrlH3bHNB-WfnudUEPhwHzeaoZ36and1GkEsqdNOAEOUV9oBwExXweY67fL6drHXBMooV_8-HclrwvPma6IL00xWYZ9tXC1mr8NnQPaec9_nMUUszG8NS3-wdn6AhrZJCFnxNws-c_4m36hp9RAa97vOjdpEGMWTSWPf-V62RezSxidLdFIooKab1C95kR4F0wp0MnP526MQpvAbEcaOQSvKJo7EAVEQzi5PMd1hQeS7HUN6b_tSVxljjdrzz3oNKlMIbbLIo133FgssJZ-xDF1Wt-JpFSu98cH2NqO5jrERIfiNz2EnrRMv_J-ZzSqI3GQhNdivo_SZxV3ggaRp88zlEYql7YpGyPYbaBTtstMzfBl72di38zE-WNf3NnX7rFCn7jwJ3Tu=s900-no) ;
  background-repeat: no-repeat;
  background-position: center;

}


</style>