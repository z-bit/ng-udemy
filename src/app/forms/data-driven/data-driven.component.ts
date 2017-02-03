import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from '@angular/forms';


@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {
  myForm: FormGroup;
  genders = ['male', 'female'];
  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('Max', Validators.required),
        'email': new FormControl('max@min.com', [
          Validators.required,
          Validators.pattern("^[^@]+@[^@]+\.[^@]+$")
        ]),
      }),
      'password': new FormControl('', Validators.required),
      'gender': new FormControl('neutral'),
      'hobbies': new FormArray([
          new FormControl('Cooking', Validators.required)
      ])
    });
  }

  onSubmit() {
    console.log(this.myForm);
  }

  onAddHobby() {
    (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('', Validators.required));
  }

  onRemoveHobby(i: number) {
    (<FormArray>this.myForm.controls['hobbies']).removeAt(i) ;    //splice(i, 1);
  }

}
