import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-local-storage-cookies',
  templateUrl: './local-storage-cookies.component.html',
  styleUrls: ['./local-storage-cookies.component.css']
})
export class LocalStorageCookiesComponent {

    constructor() {}

    // Exemple d'utilisation du localStorage
    setLocalStorage() {
      localStorage.setItem('localStorageKey', 'localStorageValue');
    }
  
    getLocalStorage() {
      const localStorageValue = localStorage.getItem('localStorageKey');
      console.log('LocalStorage Value:', localStorageValue);
    }
}
