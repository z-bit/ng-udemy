import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {AuthService} from "app/common/services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  error: boolean = false;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, this.isEmail])],
      password: ['', Validators.required],
      password2: ['', Validators.compose([Validators.required, this.isEqualPassword.bind(this)])],
    });
  }

  onSignup(event: Event) {
    event.preventDefault();
    this.authService.signupUser(this.signupForm.value);
    this.router.navigate(['/auth']);
  }

  isEmail(control: FormControl):{[s: string]: boolean} {
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return {noEmail: true};
    }
  }

  isEqualPassword(control: FormControl): {[s: string]: boolean} {
    if (!this.signupForm) {
      return {passwordsNoMatch: true}
    }
    if (control.value != this.signupForm.controls['password'].value) {
      return {passwordsNoMatch: true}
    }
  }

}
