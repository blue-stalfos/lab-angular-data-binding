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
	todaysFoods: Array<any> = [];
	todaysCalories: number = 0;
	resultsArray: Array<any> = [];
	searchTerm: String = "";

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

	addToList(theFood) {
		this.todaysFoods.push(theFood);
		this.todaysCalories += Number(theFood.calories);
	}

	filterFoods() { 
		this.resultsArray = this.foodList.filter((food => {
			return food.name.toLowerCase().includes(this.searchTerm.toLowerCase());
		}))
	}

	toggleForm() {
		this.isFormShowing = !this.isFormShowing;
	}

	ngOnInit() {
		this.foodList = foods;
		this.resultsArray = this.foodList;
	}
}