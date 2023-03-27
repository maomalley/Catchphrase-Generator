<template>
  <h1 class="font-effect-3d"> Greetings Generator </h1>
  <p>YOUR NEW GREETING WILL BE...</p>
  <div id="catchphrase" class="catchphrase" v-bind:key="msg"> {{ msg }}  </div>
  <div class="form">
    <div class="checkboxes">
      <fieldset>
        <legend>Choose a greeting from:</legend>
        <ul style="list-style-type:none;">
          <li><input type="checkbox" id="standardCheckbox" v-model="checked" name="greetings" value="standard" />Standard Greetings</li>
          <li><input type="checkbox" id="randomCheckbox" v-model="checked" name="greetings" value="randoms" />Random Words</li>
        </ul>
      </fieldset>
    </div>
    <div class="submit-button">
      <button @click="pickGreeting">Generate!</button>
    </div>
  </div>
</template>

<script>
const phrases=["Bonjour","Salut","Hola","¿Qué tal?","Yo!","Zdravstvuyte","Privet","Nǐ hǎo","Nǐn hǎo","Salve","Cia","Konnichiwa","Yā, Yō","Guten Tag","Hallo","Oi","Olá","Anyoung haseyo","Anyoung","Asalaam alaikum","Ahlan","Goddag","Hej, Halløj","Shikamoo","Habari","Hujambo","Goedendag","Hoi","Yassas","Yassou","Dzień dobry","Cześć, Witaj","Selamat siang","Namaste","Namaskar","Hai","Helo","Merhaba","Selam","Shalom","God dag","Hej","Hei","Tjena"];
export default {
  name: "Greetings",
  props: {
    msg: String,

    // pickAnimalPhrase: false,
    // pickRandomPhrase: false
  },
  data() {
    return {
      msg: "howdy!!",
      checked: [],
    }
  },
  methods: {
    pickGreeting() {
      //TODO: pass in data of which phrases to pick from
      const options = {
        method: 'GET',
        headers: {
          // 'X-RapidAPI-Key': '11d7dd1d60msh6d1286e30cbe5ffp1eaf96jsnd5895b5e6ae7',
          // 'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
        }
      };
      if ((this.checked[0] === "standard" || this.checked[1] === "standard") && (this.checked[0] === "randoms" || this.checked[1] === "randoms")) {
        //if user wants either an animals or random phrase, pick between 0 and 1
        let choice = Math.floor(Math.random() * 2);
        //if random num = 0, we will pick an animal phrase.
        if (choice === 0) {
          //get length of animal catchphrases
          let arrLen = phrases.length;
          // choose a random index for the phrases array
          let phraseChoice = Math.floor(Math.random() * arrLen);
          // display that indexed phrase
          this.msg = phrases[phraseChoice];
        } else {
          // if random num != 0, pick a random word from the api.
          fetch('https://random-word-api.herokuapp.com/word', options)
              .then(response => response.json())
              .then(response => this.msg = response[0])
              .catch(err => console.error(err));
        }
      } else if (this.checked[0] === "standard" || this.checked[1] === "standard") {
        //get length of animal catchphrases
        let arrLen = phrases.length;
        // choose a random index for the phrases array
        let phraseChoice = Math.floor(Math.random() * arrLen);
        // display that indexed phrase
        this.msg = phrases[phraseChoice];
      } else if ((this.checked[0] === "randoms" || this.checked[1] === "randoms")) {
        fetch('https://random-word-api.herokuapp.com/word', options)
            .then(response => response.json())
            .then(response => this.msg = response[0])
            .catch(err => console.error(err));
      } else {
        this.msg = "howdy!!!"
      }
    }
  }
}
</script>

<style scoped>

</style>