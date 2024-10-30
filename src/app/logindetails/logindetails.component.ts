import { Component } from '@angular/core';
import { AuthService } from '../authservice.service';
@Component({
 selector: 'app-details',
 templateUrl: './logindetails.component.html',
 styleUrls: ['./logindetails.component.css']
})
export class LogindetailsComponent {
 constructor(public authService: AuthService) {}
 onLogout() {
   this.authService.logout();
 }
}
