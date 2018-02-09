import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, smartAudio: SmartAudioProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      smartAudio.preload('tabSwitch', 'assets/impressive.mp3');
      smartAudio.preload('gaunterPlay', 'assets/play.mp3');
      smartAudio.preload('sadGeralt', 'assets/notlucky.mp3');
      smartAudio.preload('notBad', 'assets/notbad.mp3');
    });
  }
}
