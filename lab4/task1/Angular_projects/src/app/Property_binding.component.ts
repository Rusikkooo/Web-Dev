import { Component } from "@angular/core";

@Component({
    selector: 'property-binding',
    styleUrls: ['app.css'],
    standalone: true,
    template: ` <div [contentEditable]="isEditable">HElllo Ruslan </div> `,
})
export class Property {
    isEditable = true;
}