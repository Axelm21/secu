// signup.component.ts

import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  user: any = {};

  constructor(private apiService: ApiService, private router: Router) {}

  signup(): void {
    this.apiService.signup(this.user).subscribe(
      (response) => {
        // Gérer la réponse de l'API après l'inscription réussie
        console.log('Inscription réussie', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        // Gérer les erreurs lors de l'inscription
        console.error('Erreur d\'inscription', error);
      }
    );
  }
}
