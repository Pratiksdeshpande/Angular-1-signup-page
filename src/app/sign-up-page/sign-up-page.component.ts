import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {
  userform = new FormGroup({
    Firstname: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    Lastname: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    Email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.minLength(8)),
    Phonenumber: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
    terms: new FormControl('',Validators.requiredTrue)
  });

  onSubmit(){
    console.log(this.userform);
  }

  constructor() { }

}
