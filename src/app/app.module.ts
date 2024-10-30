import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular Material modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogindetailsComponent } from './logindetails/logindetails.component';
const routes: Routes = [
 { path: '', redirectTo: '', pathMatch: 'full' },
 { path: 'login', component: LoginComponent },
 { path: 'details', component: LogindetailsComponent }
];
@NgModule({
 declarations: [
   AppComponent,
   LoginComponent,
   LogindetailsComponent
 ],
 imports: [
   BrowserModule,
   BrowserAnimationsModule,
   RouterModule.forRoot(routes),
   MatCardModule,
   MatFormFieldModule,
   MatInputModule,
   MatButtonModule,
   MatToolbarModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
