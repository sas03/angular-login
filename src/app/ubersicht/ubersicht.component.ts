import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ubersicht',
  templateUrl: './ubersicht.component.html',
  styleUrls: ['./ubersicht.component.css']
})
export class UbersichtComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name') || '';
    this.email = localStorage.getItem('email') || '';
    this.password = localStorage.getItem('password') || '';
  }

  logout(): void{
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
