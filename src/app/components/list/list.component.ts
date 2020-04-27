import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	chosenElement: number;
	randomList: string[];
	constructor() { }


	ngOnInit(): void {
		this.randomList = [];
	}
	addElementToList(name: string): void {
		this.randomList.unshift(name);
	}
	deleteElement(index: number): void {
		if (index === 0) {
			this.randomList.shift();
		} else {
			this.randomList.splice(index, 1);
		}
	}
	randomizeElement(): void {
		this.chosenElement = Math.floor(Math.random() * this.randomList.length);
	}

}

