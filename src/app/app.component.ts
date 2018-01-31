import { Component } from '@angular/core';
import { AuthService } from './providers/auth.service';
import { AngularFireAuth, AngularFireAuthProvider, AngularFireAuthModule } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [AngularFireAuth, AuthService]
})
export class AppComponent {
    title = 'app';

    photoUrl: any;
    constructor(public authService: AuthService) {

    }

    login() {
        this.authService.loginWithGoogle().then((data) => {
            console.log(data.user.photoURL);
            this.photoUrl = data.user.photoURL;
        })
    }
}
