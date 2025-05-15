import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationService } from '../services/authentification.service'
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [ MatFormFieldModule, MatInputModule, MatButtonModule,MatIconModule,
    FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = ''
  password = ''
  get isValid() { return this.username !== '' && this.password !== '' }
  login() {
    console.log('Username:', this.username, 'Password:', this.password);
    this.auth.login(this.username, this.password);
  }
  constructor(public auth: AuthenticationService) { }
}