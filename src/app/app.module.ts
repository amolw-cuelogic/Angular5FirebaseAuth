import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from './providers/auth.service';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDMQ55IMy9XFdhggn0w9ru4x5ECXcnY9qo",
    authDomain: "cuelogicresourcemanagement.firebaseapp.com",
    databaseURL: "https://cuelogicresourcemanagement.firebaseio.com",
    projectId: "cuelogicresourcemanagement",
    storageBucket: "cuelogicresourcemanagement.appspot.com",
    messagingSenderId: "563336911403"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      AngularFireModule.initializeApp(firebaseConfig)
  ],
    providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
