import { Component, output } from "@angular/core";
@Component({
    selector:'app-output',
    template:`
    <button class="btn" (click)="addItem()">Add Item</button>`,

})
export class Output{
    count  = 0;
    incrementCountEvent =  output<Number>();
    onClick(){
        this.count++;
        this.incrementCountEvent.emit(this.count);
    }
    readonly addItemIvent =output<string>();
    addItem(){
        this.addItemIvent.emit('RRR');
    }

}