import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentification.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { unescapeLeadingUnderscores } from 'typescript';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    firstname: new FormControl('', [Validators.required]),  
    lastname: new FormControl('', [Validators.required]),   
    role: new FormControl('', [Validators.required]),   
  });

  constructor(private authService: AuthenticationService) {}

  submit() {
    if (this.registerForm.valid) {
      const { email, password, firstname, lastname, role } = this.registerForm.value;

      if (email && password && firstname && lastname && role !== null && role !== undefined) {
        this.authService.register(
          email, 
          password, 
          firstname,
          lastname,
          role
        
        );
      } else {
        console.log('Formulaire incomplet');
      }
    } else {
      console.log('Formulaire invalide');
    }
  }
}