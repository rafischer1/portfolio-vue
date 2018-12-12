<template>
  <div class="playground">
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width=75%
                img-height=25%
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">

      <!-- Text slides with image -->
      <b-carousel-slide 
      caption="Check out this sweet carousel!"
                        text="I never thought I'd live away from the coast but Colorado certainly has a lot of charm."
                        img-src="https://lh3.googleusercontent.com/K8kKx4EUWWd6xVOD1cG6UJNEreZPJcY9_NCfXOURndhmsNMzvoqBNogLLHK0w3jZJDe7HGOVDgDBNXf3khYYaU2_1LZ93tlJvOz1_QSbS_6reoiWmGSqUB1hfReB6ier9OY0SUfV-34jzeVtCA6RjMGsfjE8QBAG1usf2HQ78bvWSf4Nx6zf0p7J3X1a1gcKLvOrEcLt61LazJXevWGeMyT_-XGEi8RwEcVJ41Qc_KKW8IEXu_DzP4XAsqfdp43MWI-OjXnZgznMziD5pDAau_eUJZg4Tdzwv2rYJfR0nnKF93VMmEraHNZJ-eq1WDw9QJmmDvpAFqaE9eoN4VjBaq7i-AuGiNI6Xkfb35KxikJDVxfBCOlNW3_iukNuPg32tjFSA6b14PPkkFEQ63jvwrp9JTHVkAq12Gx02Gi_rTvx3RT25TU86rt4JZI97dpAJSJbJEgrp8stZ7D4li4lUG2g4YFG89c5VZ3ng1rataZl0TXa5wNxyIXLHLB4mfCTU2qE5CUPE1je_AW2P27lCg4hVLksLLefCPjbeymXpPDV9I32FRlbcfV9Pg1LO4g2YxNS7zgboSk7o77It29VUjAFRweS64Ru3onqh_4LF0QN4NbK2zvclcLYV7hH1iowyWRrs1hr9qg57Y6ld53K3sR4=w2658-h1226-no"
      ><h1>HEYEYEYEYEYEYEYYEYEYE</h1></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide 
      caption="Colorful Colorado!"
                        text="I never thought I'd live away from the coast but Colorado certainly has a lot of charm."img-src="https://lh3.googleusercontent.com/INwVAavc0-f-9HUYeVktetjKPciXHv43jshILJ9jKVni5nWhikBIfw_qRsXicbKBU9uxu7XCdKLaFAqLpXY8v_KICPRpjoEvJ4DH3idVRdNgQpPje8ECP5qW7YjJoU86RP-ZKZzdWQlvr8-Nl_ZLhYw2PV4oQm-7omSTPPmKvIXMRwKulqQUh_UpoUUQu8_vZUGIIMBPfn3zyo4NAS7L2-AUlGAbJrtQ8Qjd30NGlIFIkb-V-v4cpnmFxDwpVNoxGvXFZP4W6ye4rJPFKf4ux_dSNkfY9ln8pcnlLhIBUwtxL4w6Pb7G_q7yshS87EhpTZrjZHZGoKq5mLQk9nJW5M47SItQqP1uW33Cgd6-9VGaraCYdKuKMKZQjsEYthigrAnWIZRKsIK1zphoV38Qiyb_drgbxyUw5844JdC1wtWdDS-IVOi1hMsuqIMWLA963blgzScu_4UD6AtH1lHUM_6qF0DbsMhkCF-mzTNka40CCNJVfKDATgBykjeWgFvpAySGvQKzRfdo8bjB4jRLqds0REzS2FdXAPw6XQ4nb40Ng9j000HUmhR9go1SwV169rA7y7kph72M3N94IxAFFAHXzkrvWv8sjw9zwyojNqJ8U_ADnqCwnQemMESF9F9PBfT1zyGFmC4y6ggCFNJhwQ6w=w2658-h1278-no">
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide 
      caption="Exploration and "
                        text="Never stop learning and never stop exploring. (Hawaii is a good place to test my own maxims)"
                        img-src="https://lh3.googleusercontent.com/v4WC06tkz1wkMHpsSTcmTZk1ZZWAZ58enSeaD4R8-_ghQ4RxI6BkCaF923yWpEym3JXraxlMnhxp2N34PtYLfqCgLmof86tNAv98y9439Tni8K5pjyWHMyjWgadI2lL7cj1Pm5-KiBKCi5v8EZHFP05QdOztUHwc4ygKF_Hez4husvQdUpwIje1KshZ0XfbHL8ZI-Ad5zq9LLCLkJ6z9LayFpE8LGSJEXPUF7athdnyTqgabS8iz9_RqWfs8OMVzMNncu3N0Bly4r0nVr4veyaBSOw3dAba2be-kixE7vXgBMJa3hyv8GVTArWFaYdVLy6D_S6op_NJcCCzi1rjGtoK1VboL6usqnO44lywuZmETw5d_8Oh1ur9mRAFEmADCLkTq4lCK2PBsUHKUjUwu346-tdLpYE2Nyf9Hd3qAFvdd-Ao04m410THOBar_ca7XDJO_LK2oMaEDmGwqiHaxrA3HVTHQmP0p9Kf3dasKdChAPL3oyUcXEEm3ivcX_y1yDpgfclzgAxbrudjBRFsnBS72zdHyG-Rt-lRlsktxO4IanSoT5n9fYi4IYvKAM8RKabcZjUY2l-T8asGzzs0qsw0TL5WR8w5QeWyvk-Mlq-3r1hAeR3Gg8dHva1oCo0Tdy__Ug2RhGYODG7KdI1DmaJZ7=w2658-h1212-no">
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide    caption="Maine."
                        text="Maine is such a beiatiful and unique place in this Country and I am so lucky to have lived there for many years.">
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="https://lh3.googleusercontent.com/jKniJdcvfOf49TfACroDWW-YgzIQwiKGjF_iZ9x1hfrv_J36B8TjLJUjSAHtptUdv6m4_wq3ipfA_UjrPX88JkIM04nsQQrWwho9qnAO8bPe7ll_hIZBNBKUrVfN_zv0tLXwXTxkp4xKLoZA2FOeuJnxvQBgXJbT99Y6TeUiwFi1mN2WJdMHd2graXtKioUi_ZZAWugC_6ACMBNCsQhw5d_Buo0ugPBMPAPNre_A86aJQo8CvWNmk1Lx66Od6AsZRBFzIprGYqBk4zu-NX4-U98OLgVksMZKK1QhsRoiJbMwTIcPXkNPjuFz9EyzAuseHSExcNrXpF0h2ShFxHJXKNMfA0zVtQjJOSFnYYE0pSlvpraCISlEW6wJ_bOILjI_Ljlxr7r_LpiAqg5FoHEc5A7_OfnfJu_WL-ED4QSZAYhlsvJv8K2IjmcJv5a-_9EGYmfcYg4WO4HLnDOo5i5subSyjzXipRjhJ4eqH_uaWnNmz24t3Ev-M_unqFOPNxDijOXtJaWMq1U3hY-J9aTcTuDN_LlTVdSPuD6YGbyr5Xwa-SgGD5sFsDHvpQApDFmSgnk8MeNZzkTeMvPolHCBsmqWgFSPr-USlSKoyvfm_bzYRGS7wmULFggsOLqSc0In_vRFhnkKUg18Y-OySM9mE12H=w2658-h1200-no" alt="image slot">
      </b-carousel-slide>
    </b-carousel>

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->

 
 </div>
</template>


<script>


export default {
 
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  name: 'Playground',
  data () {
    return {
      slide: 0,
      sliding: null
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
  color: #42b983;
}
html, body, #editor {
  margin: 0;
  height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

textarea, #editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}
#hitCounter {
display: inline-block;
margin-bottom: 0px;
vertical-align: bottom;
margin-left: 33.3%;
}

code {
  color: #f66;
}
</style>
