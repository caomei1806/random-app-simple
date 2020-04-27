import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-new',
	templateUrl: './new.component.html',
	styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

	@Output() addNew = new EventEmitter();
	name: string = "";
	constructor() { }

	ngOnInit(): void {
	}
	handleAdd() {
		this.addNew.emit(this.name);
		this.name = "";
	}
}
