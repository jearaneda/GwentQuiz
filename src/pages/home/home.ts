import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StartGamePage } from '../start-game/start-game'
import { SuggestPage } from '../suggest/suggest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  nextPage(){
  this.navCtrl.push(StartGamePage);
  }

  suggestGo(){
  this.navCtrl.push(SuggestPage);
  }


}
