import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  imageUrl = "https://i.pinimg.com/736x/10/66/46/1066461b5705cbd2a4a074dfa7df12e9.jpg";
  isDisabled = false;
  username = "Abhishek";
  isActive = false;
}
