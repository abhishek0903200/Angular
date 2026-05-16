import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [],
  templateUrl: './for.html',
  styleUrl: './for.css',
})
export class For {
  items = ['HTML','CSS','JavaScript','Angular'];

  user = [
    { name: 'John', age: 30 }, 
    { name: 'Jane', age: 25 }, 
    { name: 'Doe', age: 35 }
  ];

  fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

  removeItem(i: number) {
    this.fruits.splice(i, 1);
  }

  numbers = [1, 2, 3, 4, 5];
}

