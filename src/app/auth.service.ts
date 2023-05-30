import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;

  login(email: string, password: string): boolean{
    // Mock Anmeldung
    if(email === 'testuser@t.de' && password === 'test'){
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }

  logout(): void{
    this.isLoggedIn = false;
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  }
  
  isAuthenticated(): boolean{
    return this.isLoggedIn;
  }
  constructor() { }
}
