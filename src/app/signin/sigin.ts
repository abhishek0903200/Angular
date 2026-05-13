import { Component } from "@angular/core";

@Component({
    selector: 'app-signin',
    template: `<h2>Sign In</h2>`,
    styles: [`
        h2{
        color: red;}`]
})

export class SignInComponent {
    title = 'Sign In';

}