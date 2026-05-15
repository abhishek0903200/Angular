import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SignInComponent } from './signin/sigin';
import { Events } from './events/events';
import { ClickEvent } from './click-event/click-event';
import { CounterApp } from './counter-app/counter-app';
import { SetGetValue } from './set-get-value/set-get-value';

@Component({
  selector: 'app-root',
  imports: [
    SetGetValue,
    // CounterApp
    // ClickEvent,
    // Login, SignInComponent, Events
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {



  // count = 0;

  // handleClick(){
  //   let abc = "Hi there !";
  //   console.log("Button clicked:", abc);
  //   this.helloWorld();
  // }

  // helloWorld(){
  //   console.log("Hello World !");
  // }
  
  // name: String = 'Angular';
  // username: String = 'abhishek';
  // isAdmin: Boolean = true;
  // count: Number = 5;
  // price: Number = 23.99;
  // isLogin: Boolean = true;

  // title = signal("Angular Signals");

  // getUser(){
  //   return "Abhishek";
  // }
}
