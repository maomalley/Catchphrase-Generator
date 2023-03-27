<template>
<!--    <div class="nav" v-for="el in nav">-->
<!--      <a href="#">{{ el }}</a>-->
<!--    </div>-->
<!--  <div class="nav">-->
<!--    <router-link to="/">Catchphrase Generator</router-link>-->
<!--    <router-link to="/greetings">Greetings Generator</router-link>-->
<!--    <router-link to="/about">About</router-link>-->
<!--    <router-link to="/contact">Contact</router-link>-->
<!--  </div>-->
<!--  <router-view></router-view>-->
  <h1 class="font-effect-3d"> Catchphrase Generator </h1>
  <p>YOUR NEW CATCHPHRASE WILL BE...</p>
  <div id="catchphrase" class="catchphrase" v-bind:key="msg"> {{ msg }}  </div>
  <div class="form">
    <div class="checkboxes">
      <fieldset>
      <legend>Choose a catchphrase from:</legend>
      <ul style="list-style-type:none;">
        <li><input type="checkbox" id="animalCheckbox" v-model="checked" name="catchphrases" value="animals" />Animal-specific catchphrases</li>
        <li><input type="checkbox" id="randomCheckbox" v-model="checked" name="catchphrases" value="randoms" />Random Words (es)</li>
<!--        <li><input type="checkbox" id="randomCheckbox2" v-model="checked" name="catchphrases" value="randoms2" />Random Words (de)</li>-->
<!--        <li><input type="checkbox" id="randomCheckbox3" v-model="checked" name="catchphrases" value="randoms3" />Random Words (it)</li>-->
<!--        <li><input type="checkbox" id="randomCheckbox4" v-model="checked" name="catchphrases" value="randoms4" />Random Words (zh)</li>-->
      </ul>
      </fieldset>
    </div>
    <div class="submit-button">
      <button @click="pickCatchphrase">Generate!</button>
    </div>
  </div>
</template>

<script>
//catchphrases were compiled into a notepad document and then run through a java program to add
//parenthesis and commas for proper array syntax
const phrases=["aaach","ace","ah-CHOO","ahhhhhh","ah-rooooo","airmail","auya","alpha","alrighty","amigo","arfer","as if","aye aye","ayup ayup","ayyeeee","baa baa baa","baaaby","baaaffo","baa-dabing","badoom","bawwww","b-b-baby","b-b-buddy","beach bum","beaker","bigfoot","bingo","bitty","bleeeeeck","bleh eh eh","blih","bloop","blurp","bo peep","boing","bonbon","bow-WOW","brainfreeze","brrmph","brrrrrrrrr","bucko","bud","buh-kay","bun bun","bunyip","burrrn","burrup","bzzert","cacaw","cagey","cannoli","capital","captain","cardio","cha","cha-chomp","chaps","check it","cheekers","cheeky","cheepers","cheeseball","chickadee","chicken","chicklet","chicky-poo","child","chimpy","chipmunk","chips","chow down","chuurp","clip clawp","cluckadoo","cluckling","cool cat","coooooool","cottontail","crisp","croak-kay","crunch","crushy","cubby","cud","cuz","daahling","dagnaabit","dahling","dawh","dearie","deelish","derrrrr","doodle-duh","doyoing","dribbit","duckling","ducky","eat it","eekers","eeks","feathers","flexin'","foxtrot","frappe","fribbit","fromage","fuzzball","fuzzers","GAAHHH","glimmer","glitter","golly","graaagh","grah grah","greenhorn","gronk","grooof","grooomph","groovy","growf","grrr","grr-ribbit","grrrolf","grrrRAG","gruff","grumble","g'tang","gumpdrop","guvnor","haaay","hammie","harrumph","hawkeye","hay-OK","heeeeeyy","h-h-h-hon","highness","hippie","hipster","honey","honeybun","honk","honk honk","hoo hoo ha","hoof hoo","hoo-rah","hopalong","hot dog","how-now","hubbub","hulaaaa","human","hurk","indeed","indeedaroo","it'sa me","kablang","karat","kerPOW","kid","kidders","kitten","kitty cat","krzzt","la baa","la-di-da","lambchop","lambkins","le ham","like whoa","li'l bear","li'l bitty baby","li'l ears","li'l hare","li'l one","lion cub","little one","macmoo","malarkey","mango","mate","me meow","meooo-OH","mew","me-WOW","me-YOWZA","mimimi","mochi","mon chou","monch","moocher","moolah","mrmpht","mrooooo","mrowrr","munchie","mush","mewww","my dear","my pet","myawn","myohmy","natch","nay","nee-deep","neighbor","niblet","nice nice","nightshade","nipper","no doubt","no doy","non","nougat","nuh uh","nutcase","nutlet","nutmeg","nutty","nyet","nyoink","oh bow","oh ewe","ohmmm","ol' bear","old bunny","ooh la la","oui oui","pah","pal","pardner","peach","pffffft","picante","piffle","pine nut","pinky","pipsqueak","po po"," pockets","pouches","powderpuff","precious","precisely","psst","pthhpth","puh-lease","punches","punk","purrr","purrty","pushy","quaa","quacker","quackidee","quackle","quacko","quackpth","quackalicious","quite so","rah rah"," rainbow","reeeeOWR","rerack","ribbette","ridukulous","roadie","rockin'","rookie","ROOOOOWF","rrr-owch","ruffian","saltlick","schep","schnort","schnozzle","shearly","shortcake","shorty","shredded","shweetie","sidekick","silly","skraaaaw","skree-haw","slacker","slushie","sluuuurp","snacky","snappy","snarrrl","sniffff","snoooink","snooooof","snoot","snoozit","snork","snort","snortie","snortle","snorty","snoutie","snuffle","so it goes","sooey","sparkles","sparky","speedy","splish","squeaky","squee","squinky","squirt","stretch","strudel","stubble","stuffin'","sucker","sugar","sugar cube","sulky","sundae","sunshine","sweatband","sweet pea","sweetie","swine","tarnation","teacup","tee-hee","tenderfoot","ten-hut","thump","thumper","toady","toasty","tooooot","tootie","tralala","tsk tsk","tweedledee","twinkles","uff da","uh-hoo","uh-oh-unh-hunh","uni-wow","urgh","villain","vroom","waddler","wah","wee baby","wee one","weeweewee","what what","whatevs","WHEE","whiffa","whiskers","WHONK","wingo","woof woof","woof","woo-oo","woowoo","wuh","wut","ya feel","ya heard","ya know","y'all","yawwwn","yeah buddy","yelp","yip yip","yippee","yo yo yo","yodelay","zip zoom","zoink","zort","zut alors","zzrrbbitt","zzzook"]
//ref: https://blog.logrocket.com/make-form-elements-dynamic-vue-js/#what-well-build
export default {
  name: "Home",
  props: {
    msg: String,

    // pickAnimalPhrase: false,
    // pickRandomPhrase: false
  },
  data(){
    return {
      msg: "howdy!!",
      checked: [],
      // animalPhrases: [
      //     //TODO: all of the default ac catchphrases!
      // ],
      // randomPhrases: [
      //     //TODO: use a random word api!!
      // ],
      // uniquePhrases: [
      //     //TODO: create some unique phrases
      //     //TODO: allow for user-suggested phrases!
      // ]
      // applicants:[
      //   {
      //     previous: '',
      //     expiration:''
      //   }
      // ]
    }
  },
  methods : {
    //TODO: pick a random phrase from whatever is checked!
    pickCatchphrase(){
      //TODO: pass in data of which phrases to pick from
      const options = {
        method: 'GET',
        headers: {
          // 'X-RapidAPI-Key': '11d7dd1d60msh6d1286e30cbe5ffp1eaf96jsnd5895b5e6ae7',
          // 'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
        }
      };
      if((this.checked[0] === "animals" || this.checked[1] === "animals" )&&(this.checked[0] === "randoms" || this.checked[1] === "randoms" )){
        //if user wants either an animals or random phrase, pick between 0 and 1
        let choice =  Math.floor(Math.random() * 2);
        //if random num = 0, we will pick an animal phrase.
        if (choice === 0){
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
      } else if(this.checked[0] === "animals" || this.checked[1] === "animals" ){
        //get length of animal catchphrases
        let arrLen = phrases.length;
        // choose a random index for the phrases array
        let phraseChoice = Math.floor(Math.random() * arrLen);
        // display that indexed phrase
        this.msg = phrases[phraseChoice];
      } else if((this.checked[0] === "randoms" || this.checked[1] === "randoms" )){
        fetch('https://random-word-api.herokuapp.com/word', options)
            .then(response => response.json())
            .then(response => this.msg = response[0])
            .catch(err => console.error(err));
      } else {
        this.msg = "howdy!!!"
      }

      // fetch('https://random-word-api.herokuapp.com/word', options)
      //     .then(response => response.json())
      //     .then(response => this.msg = response[0])
      //     .catch(err => console.error(err));
      // this.msg = "howdy";
    }
    // addVisa(){
    //   this.applicants.push({
    //     previous:'',
    //     expiration: ''
    //   })
    // },
    // deleteVisa(counter){
    //   this.applicants.splice(counter,1);
    // }
  }

}
</script>

<style scoped>

</style>