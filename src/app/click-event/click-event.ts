import { Component } from '@angular/core';

@Component({
  selector: 'app-click-event',
  imports: [],
  templateUrl: './click-event.html',
  styleUrl: './click-event.css',
})
export class ClickEvent {
  handleClick() {
    console.log('Button clicked!');
  }

  onTyping(event: any){
    console.log('Typing event:', event.target.value);
  }

  onKeyup(event: any){
    console.log('Keyup event:', event.key);
  }

  onHover(){
    console.log('Mouse over event!');
  }

  onleave(){
    console.log('Mouse leave event!');
  }
}
