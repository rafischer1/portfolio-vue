<template>
  <div class="cover">
    <br />
    <br />
      <b-btn v-b-modal.modal variant="info">Feed the Generator</b-btn>
     <b-modal size="lg" id="modal" ref="coverLetterModal" hide-footer title="Cover Letter 3000 - The *Perfect* Smart Cover Letter Generator">
      <div class="d-block text-center">
        <h4>Please provide the following responses:</h4>
        <b-form>
         <b-input-group size="md"  class="mb-3" type="text" prepend="Your Name">
         <b-form-input v-model="yourName" /></b-input-group>
         <b-input-group size="md"  class="mb-3" type="text" prepend="Open Position">
         <b-form-input v-model="position" /></b-input-group>
         <b-input-group size="md"  class="mb-3" type="text" prepend="Company Name">
         <b-form-input v-model="yourCompany"/></b-input-group>
         <b-input-group size="md" v-model="profession" class="mb-3" type="text" prepend="A Profession">
         <b-form-input /></b-input-group>
         <b-input-group size="md" class="mb-3" type="text" prepend="Number">
         <b-form-input  v-model="numberOne" /></b-input-group>
         <b-input-group size="md" class="mb-3" type="text" prepend="Gerund">
         <b-form-input  v-model="gerundOne" /></b-input-group>
         <b-input-group size="md"  class="mb-3" type="text" prepend="Gerund">
         <b-form-input v-model="gerundTwo"/></b-input-group>
         <b-input-group size="md"  class="mb-3" type="text" prepend="Adjective">
         <b-form-input v-model="adjective"/></b-input-group>
         <b-input-group size="md"  class="mb-3" type="text" prepend="Color">
         <b-form-input v-model="color" /></b-input-group>
         <b-input-group size="md"  class="mb-3" type="text" prepend="Food">
         <b-form-input v-model="food" /></b-input-group>
         <b-input-group size="md"  class="mb-3" type="text" prepend="Verb">
         <b-form-input v-model="verbOne"/></b-input-group>
         <b-input-group size="md"  class="mb-3" type="text" prepend="Programming Language">
         <b-form-input v-model="programmingLangOne"/></b-input-group>
         <b-input-group size="md"  class="mb-3" type="text" prepend="Programming Language">
         <b-form-input v-model="programmingLangTwo"/></b-input-group>
         <b-input-group size="md"  class="mb-3" type="text" prepend="Adverb">
         <b-form-input v-model="adverb" /></b-input-group>
         <b-input-group size="md"  class="mb-3" type="text" prepend="Animal">
         <b-form-input v-model="animal"/></b-input-group>
         <b-input-group size="md"  class="mb-3" type="text" prepend="City">
         <b-form-input v-model="city" /></b-input-group>
         <b-button  @click="submitCoverLetter(yourName, profession, yourCompany, profession, numberOne, gerundOne, gerundTwo, adjective, color, food, verbOne, programmingLangOne, programmingLangTwo, adverb, animal, city)" class="mt-3" variant="outline-danger" block >Go!</b-button>
         </b-form>
      </div>
      
    </b-modal>
  <hr />
    <b-container>
      <b-row>
        <b-col>
          
        </b-col>
      </b-row>
      <b-row>
        <b-col v-show="!empty" class="letter">
          To <s>whom it may concern</s> {{this.yourName}},<br /><br />

          My name is Robert Fischer, I am contacting you in regard to my application for your open role as {{this.position}} with {{this.yourCompany}}.  My professional expertise as a/an {{this.profession}} provides me with the knowledge and abilities to excel in this role. <br />
          <br />

          As you will see from the attached resume, I have more than {{this.numberOne}} years of experience in the fields of {{this.gerundOne}} and {{this.gerundTwo}}. These roles are essential to filling the following requirements listed in the position description:
          <br />

          <ul>
            <li>{{this.adjective}} to develop new approaches to testing and development</li>
            <li>Thorough understanding of frameworks: {{this.color}}ify and {{this.food}}ly</li>
            <li>To {{this.verbOne}} headlong into new languages: {{this.programmingLangOne}} and {{this.programmingLangTwo}}</li>
          </ul>
          <br />
             
          I am dedicated to working as {{this.adverb}} as a/an {{this.animal}} especially with the challenge of mastering new languages and frameworks such as {{this.color}}ify and {{this.programmingLangTwo}}
          <br />

           If you have questions, please contact me at 302-423-2120  I look forward to meeting you to further discuss the {{this.position}} position.
           <br />

          Robert A Fischer (Artie)
          {{this.city}}
          artiefischer@gmail.com
          302 423 2120
        </b-col>
      </b-row>
           <hr />
      <b-row class="disclaimer">
        <b-col>
           <b-btn id="disclaimBtn" topright v-b-popover.hover="'While this may be amusing and rather silly, I feel that it demonstrates my ability to understand and creatively approach the Vue concept of two-way data binding. Also: a much more genuine cover letter can be found with my official application submission. Thank you for visitng - Artie Fischer'" title="Cover Letter 3000 Disclaimer">
   Cover Letter 3000 DISCLAIMER
  </b-btn>
        </b-col>
      </b-row>
      <br />
 
      <br />
    </b-container>
 </div>
</template>


<script>
export default {
   data () {
    return {
      empty: true,
      reactive: true,
      yourName: '',
      position: '',
      yourCompany: '',
      profession: '',
      numberOne: '',
      gerundOne: '',
      gerundTwo: '',
      adjective: '',
      color: '',
      food: '',
      verbOne: '',
      programmingLangOne: '',
      programmingLangTwo: '',
      adverb: '',
      animal: '',
      city: '',

    }
  },
  mounted() {
  
  },
  methods: {
  showModal () {
      this.$refs.coverLetterModal.show()
    },
    hideModal () {
      this.$refs.coverLetterModal.hide()
    },
      submitCoverLetter(yourName, profession, yourCompany, position, numberOne, gerundOne, gerundTwo, adjective, color, food, verbOne, programmingLangOne, programmingLangTwo, adverb, animal, city) {
      this.yourName = yourName
      this.position = position
      this.yourCompany = yourCompany
      this.profession = profession
      this.numberOne = numberOne 
      this.gerundOne = gerundOne
      this.gerundTwo = gerundTwo
      this.adjective = adjective
      this.color = color
      this.food = food
      this.verbOne = verbOne
      this.programmingLangOne = programmingLangOne
      this.programmingLangTwo = programmingLangTwo
      this.adverb = adverb
      this.animal = animal
      this.city = city
      this.hideModal()
    }
  },
  name: 'CoverLetter',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.letter {
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  border: 1px solid navy;
  border-radius: 10px;
  padding: 2%;
}
#disclaimBtn{
  margin-top: 10% 5%;
  padding: 1%;
  font-size: 20px;
}
#disclaimBtn:hover {
  color: #ffe590;
}
ul {
  margin: 2%;
  text-align: left;
}
</style>

