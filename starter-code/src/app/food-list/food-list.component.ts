import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
	selector: 'app-food-list',
	templateUrl: './food-list.component.html',
	styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
	foodList: Array<any> = [];
	newFood: any = {name: "", calories: "", image: ""};
	isFormShowing: boolean = false;

	constructor() { }

	addNewFood() {
		const theNewFood = {
			name: this.newFood.name,
			calories: this.newFood.calories,
			image: this.newFood.image
		}
		this.foodList.unshift(theNewFood);
		this.newFood = {name: "", calories: "", image: ""};
		this.isFormShowing = false;
	}

	toggleForm() {
		this.isFormShowing = !this.isFormShowing;
	}

	ngOnInit() {
		this.foodList = foods;
	}
}