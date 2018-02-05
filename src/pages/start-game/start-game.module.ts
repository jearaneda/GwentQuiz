import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StartGamePage } from './start-game';

@NgModule({
  declarations: [
    StartGamePage,
  ],
  imports: [
    IonicPageModule.forChild(StartGamePage),
  ],
})
export class StartGamePageModule {}
