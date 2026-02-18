import { Component,input } from "@angular/core";

@Component({
    selector:'app-input',
    standalone: true,
    template:`
    <p>
        The user's name is {{occupation()}}
    </p>`,
    
    
})
export class UserInput{
    occupation =  input<string>();


}