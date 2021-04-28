import { makeAutoObservable } from "mobx";
import { useState } from "react";

// const [income, setIncome] = useState(100);
class ReactStore {
  income = 100;
  expenses = 300;
  salary = 2000;

  Gym = 50;
  Telephone = 30;
  Resturaurants = 90;
  Other = 120;
  Supermarket = 200;

  total = this.salary + this.income - this.expenses;

  constructor() {
    makeAutoObservable(this);
  }

  addIncome = (x) => {
    this.income = this.income + x;
    this.total = this.total + x;
  };

  addExpenses = (x) => {
    this.expenses = this.expenses + x;
    this.total = this.total - x;
  };

  catExpense = (x, y) => {
    if (x == "Gym") {
      this.Gym = this.Gym + y;
    } else if (x == "Telephone") {
      this.Telephone = this.Telephone + y;
    } else if (x == "Resturaurants") {
      this.Resturaurants = this.Resturaurants + y;
    } else if (x == "Other") {
      this.Other = this.Other + y;
    } else if (x == "Supermarket") {
      this.Supermarket = this.Supermarket + y;
    }
  };
}

const reactstore = new ReactStore();

export default reactstore;
