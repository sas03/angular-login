import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string = 'Hans';
  email: string = '';
  password: string = '';

  loginError = false;

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    const success = this.authService.login(this.email, this.password);
    if(success){
      this.loginError = false;
      localStorage.setItem('name', this.name);
      localStorage.setItem('email', this.email);
      localStorage.setItem('password', this.password);
      this.router.navigate(['/ubersicht']);
    } else{
      this.loginError = true;
    }
  }
}
