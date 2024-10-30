import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authservice.service';
@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent {
 constructor(private authService: AuthService, private router: Router) {}
 onLogin() {
   this.authService.login();
   this.router.navigate(['/details']);
 }
}
