import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  login: string = '';
  password: string = '';

  resetForm() {
    this.login = '';
    this.password = '';
  }
}
