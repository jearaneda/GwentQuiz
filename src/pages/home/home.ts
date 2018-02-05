import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StartGamePage } from '../start-game/start-game'

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

}
