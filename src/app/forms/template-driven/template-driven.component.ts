import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class User {
  name: string;
  email: string;
  password: string;
  gender: string;

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.gender = 'neutral';
  }
}

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  genders = ['male', 'female'];
  email: string = 'test@mail.domain';
  user1 = new User('user1', this.email, 'pw1');
  user2 = new User('user2', this.email, 'pw2');
  user3 = new User('user3', this.email, 'pw3');


  constructor() { }

  ngOnInit() {}

  onSubmitForm1(form1) {
    //console.log(templateForm); //to study the NgForm object
    console.log(form1.value); //ngModelGroup="userData"
    this.user1.name = form1.value.username1;
    this.user1.email = form1.value.email1;
    this.user1.password = form1.value.password1;
    this.user1.gender = form1.value.gender1;
    form1.resetForm();
  }

  onSubmitForm2(form2) {
    //console.log(templateForm); //to study the NgForm object
    console.log(form2.value); //ngModelGroup="userData"
    this.user2.name = form2.value.username2;
    this.user2.email = form2.value.email2;
    this.user2.password = form2.value.password2;
    this.user2.gender = form2.value.gender2;
    form2.resetForm();
  }

  onSubmitForm3(form3) {
    //console.log(templateForm); //to study the NgForm object
    console.log(form3.value); //ngModelGroup="userData"
    this.user3.name = form3.value.username3;
    this.user3.email = form3.value.email3;
    this.user3.password = form3.value.password3;
    this.user3.gender = form3.value.gender3;
    form3.resetForm();
  }

  onOK() {

  }
}
