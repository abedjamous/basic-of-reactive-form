import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb: FormBuilder){}

  registrationForm = this.fb.group({
    userName: ['', Validators.required],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  })
  // registrationForm = new FormGroup({
  //   userName: new FormControl('Abed'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  // loadApiData() {
  //   this.registrationForm.setValue({
  //     userName: 'Bruce',
  //     password: 'test',
  //     confirmPassword: 'test',
  //     address: {
  //       city: 'city',
  //       state: 'state',
  //       postalCode: '123456'
  //     }
  //   })
  // }

  loadApiData() {
    this.registrationForm.patchValue({
      userName: 'Bruce',
      password: 'test',
      confirmPassword: 'test',
      
    })
  }
}
