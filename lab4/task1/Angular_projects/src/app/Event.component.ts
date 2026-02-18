import { Component } from "@angular/core";

@Component({
    selector:'app-event',
    template:`
    <section (mouseover)="showSecretMessage()">
    There's a secret message for you, hover to reveal:
    {{ message }}
    </section>`,
    standalone: true,

    
})

export class Event{

    message = '';
    showSecretMessage(){
        
        this.message = 'Way to go 🚀';
    }
}