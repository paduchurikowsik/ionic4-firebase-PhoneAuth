# Ionic-4-Angular-Firebase
A Mobile App with Ionic 4, Anuglar, firebase
This project uses @angular/fire for all firebase functions

The project includes the following
- Home Page - button to Login with the phone number
- Second Page

This project shows basic phone authentication with Firebase in an Ionic 4 project.

To use first clone the project to your wanted location or dir from your terminal or console
```
git clone https://github.com/paduchurikowsik/ionic4-firebase-PhoneAuth.git ionic4Firebase
```
Next move into the project folder from your terminal or console
```
cd ./ionic4Firebase
```
Next install all the needed packages for the project from your terminal or console
```
npm install --save
```
Next update your firebase config with your respected values in `\src\environments\environment.ts` and `\src\environments\environment.prod.ts` of your project root folder

```
export const environment = {
  ...
  // Fill with your own keys
  firebase: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  }
};
```
Next run the following command to serve the project from your terminal or console
```
ionic serve
```
This will run your project at `http://localhost:8100/` in your browser
