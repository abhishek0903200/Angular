import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  count = signal(0); //signal created
  val = 20;

  increment(){
    this.count.update((c) => c + 1); //updating signal value
  }

  decrement(){
    this.count.update((c) => c - 1); //updating signal value
  }

  reset(){
    this.count.set(0); //resetting signal value
  }


}
