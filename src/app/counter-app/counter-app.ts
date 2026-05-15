import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.css',
})
export class CounterApp {
  count = 0;

  // increment() {
  //   this.count++;
  // }

  // decrement() {
  //   if (this.count > 0) {
  //     this.count--;
  //   }
  // }

  // reset(){
  //   this.count = 0;
  // }

  handle(action: string){
    if(action === "plus"){
      this.count++;
    }
    else if(action === "minus"){
      if (this.count > 0) {
        this.count--;
      }
    }
    else if(action === "reset"){
      this.count = 0;
    }
  }


}
