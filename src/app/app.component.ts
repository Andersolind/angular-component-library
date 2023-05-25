import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  email: any;
  name = 'Angular';
  constructor() {}

  onSubmit(f: any) {
    console.log(f);
    console.log(this.email);
    alert(`Input value is ${this.email}`);
  }
}
