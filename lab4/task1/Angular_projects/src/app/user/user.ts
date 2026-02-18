import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-user',
    imports:[FormsModule],
    template: ` 
    <div>Username: {{ username }}</div> 
    <p>youngTech's favorite framework:{{favoriteFramework}}</p>
    <!-- Обзор форм -->
    <!-- Getting form control value -->
    <label for="framework">
        Favorite Framework:
        <input id = "framework" type="text" [(ngModel)]="favoriteFramework">
    </label>
    <button (click)="showFramework()">
        Show Framework

    </button>

    
    
    `,
    
})
export class User {
    favoriteFramework  = '';
    username = 'youngTech';
    showFramework(){
        alert(this.favoriteFramework)
    }
    }

