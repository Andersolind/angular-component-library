import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  email: any;
  name = 'Angular';
  exampleForm!: FormGroup | undefined;
  get userText() {
    return this.exampleForm?.get('userText')?.value;
  }

  constructor(fb: FormBuilder) {
    this.exampleForm = fb.group({
      userText: '',
    });
  }

  onSubmit(f: any) {
    console.log(f);
    console.log(this.email);
    console.log(this.userText);
    alert(`Input value is ${this.email}`);
  }
}
