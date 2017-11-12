import { Component, Input, EventEmitter, Output } from '@angular/core';
import { DumpService } from './dump.service';

@Component({
	selector: 'first-comp',
	template: `<h1 [hidden]="isDisp">{{title1}} {{title2}}</h1>
			<button (click)="action()">TEST</button>
			<input type="button" value="Click me" (click)="getPerson()">
			<input type="text" [(ngModel)]="title2" (keyup)="changeTitle()">`,
	styles: [`
		    h1 {
			color: red;
		    }
		`]
})
export class FirstComp {
	 title1 = 'app works fine!';
	 isDisp = false;

	 constructor(private dumpService: DumpService){

	 }

	 @Input("test3") title2 : string;

	 @Output() eventChange: EventEmitter<string> = new EventEmitter<string>();

	 changeTitle(){
	 		this.eventChange.emit(this.title2);
	 }

	 getPerson(){
	 	let data = this.dumpService.getResult().then(res => {
			console.log(res);
		})
	 }



	action() {
		this.title1 = 'action';
	}
}
