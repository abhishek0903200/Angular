import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SignInComponent } from './signin/sigin';

@Component({
  selector: 'app-root',
  imports: [Login, SignInComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  name = 'Angular';
  username = 'abhishek';
  isAdmin = true;
  count = 5;
  price = 23.99;
  isLogin = true;

  title = signal("Angular Signals");

  getUser(){
    return "Abhishek";
  }
}
