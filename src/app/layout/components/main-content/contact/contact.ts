import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormArray,
  Validators,
  ValidationErrors,
  AbstractControl,
  ValidatorFn,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

@Component({
  imports: [ReactiveFormsModule, TranslatePipe],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  fb = inject(FormBuilder);
  router = inject(Router);
  formSubmitted = signal(false);

  userform = this.fb.group({
    firstname: ['', [Validators.required, Validators.minLength(4), forbiddenNameValidator(/ /)]],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9._+-]+@[a-zA-Z0-9,-]+\\.[a-z]{2,4}$'),
      ],
    ],
    message: ['', [Validators.required, Validators.maxLength(250)]],
    policy: ['', Validators.requiredTrue],
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
  get policy() {
    return this.userform.get('policy');
  }
  onSubmit() {
    this.formSubmitted.set(true);

    if (this.userform.valid) {
      const emailTxt = this.userform.value.email;
      if (emailTxt)
        this.userform.patchValue({
          email: emailTxt?.toLowerCase().trim(),
        });
      console.log(this.userform.value);
      this.userform.reset();
      this.formSubmitted.set(false);
    }
  }
}
