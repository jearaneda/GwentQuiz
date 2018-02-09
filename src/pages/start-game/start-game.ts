import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { HttpModule } from '@angular/http';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';
import * as _ from 'lodash'

/**
 * Generated class for the StartGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-start-game',
  templateUrl: 'start-game.html',
})
export class StartGamePage {
   myForm: FormGroup;
   @ViewChild('slides') slides: any;
   altChosen : boolean = false;
   hasAnswered: boolean = false;
   score: number = 0;

   slideOptions: any;
   questions: any;


   constructor(public navCtrl: NavController, public dataService: DataProvider, public smartAudio: SmartAudioProvider, private fb: FormBuilder) {

     // -> Fisher–Yates shuffle algorithm
var shuffleArray = function(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

     }



     changeTab() {
    this.smartAudio.play('tabSwitch');
}

     letsPlay() {
this.smartAudio.play('gaunterPlay');
}

      verysad() {
this.smartAudio.play('sadGeralt');
}

       notbad() {
this.smartAudio.play('notBad');
}




       ionViewDidLoad() {
         this.slides.lockSwipes(true);
         console.log('ionViewDidLoad StartGamePage');
         this.dataService.load().then((data) => {

     data.map((question) => {

         let originalOrder = question.answers;
         _.shuffle(question.questionText)
         question.answers = this.randomizeAnswers(originalOrder);
         return question;

     });


     // -> Fisher–Yates shuffle algorithm
  var shuffleArray = function(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
   shuffleArray(data)

     this.questions = data;


 });

       }

       nextSlide(){
         this.slides.lockSwipes(false);
         this.slides.slideNext();
         this.slides.lockSwipes(true);

           }
       selectAnswer(answer,question){
              this.altChosen = true;
              this.hasAnswered = true;
              if(answer.correct){
              this.score++;
              }

              setTimeout(() => {
            this.hasAnswered = false;
            this.nextSlide();
            answer.selected = false;
            question.flashCardFlipped = false;
        }, 300);
          }


       randomizeAnswers(rawAnswers: any[]): any[] {
         for (let i = rawAnswers.length - 1; i > 0; i--) {
             let j = Math.floor(Math.random() * (i + 1));
             let temp = rawAnswers[i];
             rawAnswers[i] = rawAnswers[j];
             rawAnswers[j] = temp;
         }

         return rawAnswers;

     }

     restartQuiz() {
   		this.score = 0;
      this.dataService.load().then((data) => {

  data.map((question) => {

      let originalOrder = question.answers;
      _.shuffle(question.questionText)
      question.answers = this.randomizeAnswers(originalOrder);
      return question;

  });


  // -> Fisher–Yates shuffle algorithm
var shuffleArray = function(array) {
var m = array.length, t, i;

// While there remain elements to shuffle
while (m) {
 // Pick a remaining element…
 i = Math.floor(Math.random() * m--);

 // And swap it with the current element.
 t = array[m];
 array[m] = array[i];
 array[i] = t;
}

return array;
}
shuffleArray(data)

  this.questions = data;


});
   		this.slides.lockSwipes(false);
   		this.slides.slideTo(1, 1000);
   		this.slides.lockSwipes(true);
   	}






}
