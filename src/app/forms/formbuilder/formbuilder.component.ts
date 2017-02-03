import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {

  myForm: FormGroup;
  genders = ['male', 'female'];

  private log(data:any):void {
    let logbook = document.getElementById('logbook');
    /*
    if (typeof data == 'object') {
      logbook.innerHTML += (JSON && JSON.stringify ? JSON.stringify(data) : data)+'<br>';
    } else {
      logbook.innerHTML += data + '<br>';
    }
    */
    if (data === 'emptyLog') {
      logbook.innerHTML = '';
      return;
    }
    logbook.innerHTML +=
        typeof data == 'object' && JSON && JSON.stringify
            ? JSON.stringify(data) + '<br>'
            : data + '<br>'
    ;
    logbook.scrollTop = logbook.scrollHeight;
  }

  constructor(
      private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    /*
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
    */
    this.myForm = this.formBuilder.group({
      'userData': this.formBuilder.group({
        'username': ['Maxi', Validators.required, this.asyncUserValidator],
        'email': ['max@min.com', [
          Validators.required,
          Validators.pattern("^[^@]+@[^@]+\.[^@]+$")
        ]]
      }),
      'password': ['', Validators.required],
      'gender': ['neutral', this.genderValidator],
      'hobbies': this.formBuilder.array([
          ['Cooking', Validators.required]
      ])
    });

    this.myForm.valueChanges.subscribe(
        (data: any) => this.log(data)
    );

    this.myForm.statusChanges.subscribe(
        (data:any) => this.log(data)
    );
  }

  onSubmit() {
    //event.preventDefault();
    this.log('emptyLog');
    this.log('<b>Form submitted</b>');
    this.log(this.myForm.value);
    this.log('<b>Form resetted using <i>reset()</i></b>');
    this.myForm.reset();
    this.log("<b>Form resetted using <i>reset({initial value object})</i></b>");
    this.myForm.reset({
        userData: {
          username: 'Maxi',
          email: 'max@mini.com'
        },
        gender: 'neutral',
        hobbies: ['Cooking']
    });
  }

  onAddHobby() {
    (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('', Validators.required));
  }

  onRemoveHobby(i: number) {
    (<FormArray>this.myForm.controls['hobbies']).removeAt(i) ;    //splice(i, 1);
  }

  genderValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'neutral') {
      // validation failed returns an object
      return {invalid: true};
    }
    // validation successful: returns null
    return null;
  }

  asyncUserValidator(control: FormControl): Promise<any> | Observable<any> {
    // simulate with timeout a database request, e.g. if username is taken
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout( () => {
          if (control.value === 'Max')  {
            // validation failed resolve to object
            resolve({invalid: true});
          } else {
            // validation success resolves to null
            resolve(null);
          }
        }, 1500);
      }
    );
    return promise;
  }
}
