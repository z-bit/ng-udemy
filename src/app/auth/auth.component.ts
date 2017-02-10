import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthService} from "app/common/services/auth.service";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean;
  private subscription: Subscription;
  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.subscription = this.authService.isAuthenticated().subscribe(
      authStatus => {
        this.isAuthenticated = authStatus;}
    );
  }

  isAuth() {
    return this.isAuthenticated;
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
