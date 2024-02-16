import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { LocalStorageCookiesComponent } from '../local-storage-cookies/local-storage-cookies.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  credentials: any = {};

  constructor(private apiService: ApiService) {}

  login(): void {
    console.log(this.credentials);
    this.apiService.login(this.credentials).subscribe(
      (response) => {
        // Gérer la réponse de l'API après la connexion réussie
        console.log('Réponse de connexion:', response);
      },
      (error) => {
        // Gérer les erreurs lors de la connexion
        console.error('Erreur de connexion:', error);
        if (error.error && error.error.text) {
          console.log('Contenu de la réponse:', error.error.text);
        }
      }
    ); 
       
  }
}
