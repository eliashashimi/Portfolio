import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormArray,
  Validators,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  fb = inject(FormBuilder);

  userform = this.fb.group({
    firstname: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required, Validators.maxLength(250)],
  });

  get firstname() {
    return this.userform.get('firstname');
  }

  get email() {
    return this.userform.get('email');
  }

  get message() {
    return this.userform.get('message');
  }
  // userform = new FormGroup({
  //   firstname: new FormControl('', {
  //     validators: [Validators.required, Validators.minLength(3)],
  //   }),

  //   email: new FormControl('', {
  //     validators: [Validators.required, Validators.email],
  //   }),

  //   message: new FormControl('', {
  //     validators: [Validators.required, Validators.maxLength(200)],
  //   }),
  // });

  formSubmit() {
    console.log(this.userform.value);
  }
}
