import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-element',
	templateUrl: './element.component.html',
	styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
	@Input() index: number;
	@Input() name: string;
	@Output() deleteElement = new EventEmitter();
	constructor() { }
	ngOnInit(): void {
	}
	handleDelete() {
		this.deleteElement.emit(this.index);
	}
}
