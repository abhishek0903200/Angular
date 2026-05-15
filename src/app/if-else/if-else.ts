import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  imports: [],
  templateUrl: './if-else.html',
  styleUrl: './if-else.css',
})
export class IfElse {
  isLoggedIn: boolean = false;

  marks = 65;

  showBox = true;
  
  toggleBox() {
    this.showBox = !this.showBox;
  }

  section = 'home';

  value: string = 'home';

  category= '';
  updateCategory(val: string) {
    this.category = val.toLowerCase();
  }
}  
