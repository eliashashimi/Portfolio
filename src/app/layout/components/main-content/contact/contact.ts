import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormArray,
  Validators,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [ReactiveFormsModule, TranslatePipe],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  fb = inject(FormBuilder);

  userform = this.fb.group({
    firstname: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required, Validators.minLength(20), Validators.maxLength(250)],
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

  formSubmit() {
    console.log(this.userform.value);
  }
}
