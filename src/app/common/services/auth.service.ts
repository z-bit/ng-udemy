import { Injectable } from '@angular/core';
import { User } from 'app/common/models/user.interface';
import {Router} from "@angular/router";
import {Subject, Observable} from "rxjs/Rx";

// makes known that firebase is added in the index.html
declare var firebase: any;

@Injectable()
export class AuthService {

  constructor(
    private router: Router
  ) { }

  signupUser(user: User) {
    // Firebase | Docs (top) | Guides (top) | Authentication (left) | Web (left) | Password Authenication (left)
    // Create a password based account | 2. Create a new account:
    console.log('AuthService.signupUser() called');
    firebase.auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(`Error - Code: ${errorCode} - Message: ${errorMessage}`);
    });

  }

  loginUser(user: User) {
    // Firebase | Docs (top) | Guides (top) | Authentication (left) | Web (left) | Password Authenication (left)
    // Sign in a user with an email address and password | 1. When a user signs in ...
    console.log('AuthService.loginUser() called');
    firebase.auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(`Error - Code: ${errorCode} - Message: ${errorMessage}`);
      });

  }

  isAuthenticated(): Observable<boolean> {
    // Firebase | Docs (top) | Guides (top) | Authentication (left) | Web (left) | Manage Users (left)
    // Get the currently signed in user:
    const subject = new Subject<boolean>();
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        subject.next(true);
      } else {
        subject.next(false);
      }
    })
    return subject.asObservable();
  }

  logout() {
    firebase.auth().signOut().catch( (err) => console.log(err) );
    this.router.navigate(['/auth']);
  }
}
