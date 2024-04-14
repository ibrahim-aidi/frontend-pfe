import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports :[FormsModule,CommonModule ]
})
export class LoginComponent {
  email: string = ''; // Initialisez l'e-mail à une chaîne vide
  password: string = ''; // Initialisez le mot de passe à une chaîne vide
  incorrectCredentials = false;

  constructor(private router: Router) { }

  login(): void {
    // Vérification des identifiants
    if (this.email === 'ibrahim' && this.password === '0000') {
      // Redirection vers la page des événements si les identifiants sont corrects
      this.router.navigateByUrl('/espaceAdmin');
    } else {
      // Affichage d'un message d'erreur si les identifiants sont incorrects
      this.incorrectCredentials = true;
    }
  }
}
