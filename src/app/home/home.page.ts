import { Component } from '@angular/core';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  verificationID: string = "";

  constructor(public navCtrl: NavController, public firebaseAuthentication: FirebaseAuthentication) {
    firebaseAuthentication.onAuthStateChanged().subscribe((user) => {
      if (user) {
        navCtrl.navigateRoot(['/second-page']);
      } else {
        navCtrl.navigateRoot(['']);
      }
    });
  }

  phoneAuth() {
    this.firebaseAuthentication.verifyPhoneNumber("+19999999999", 30000).then((verificationID) => {
      console.log(verificationID);
      this.verificationID = verificationID;

    }).catch((error) => {
    
    });
  }

  signInWithCode(){
    this.firebaseAuthentication.signInWithVerificationId(this.verificationID,123456).then((user)=>{
      console.log(user)
    });
  }
}
