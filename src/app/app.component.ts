import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  fullname: any = null;
  age: any = null;
  obj: any;
  itemArray1 = [
    { "id": '1', "fullname": "ABC", "salary": "1000", "age": "25" },
    { "id": '2', "fullname": "DEF", "salary": "4000", "age": "21" },
    { "id": '3', "fullname": "GHI", "salary": "2000", "age": "20" },
    { "id": '4', "fullname": "JKL", "salary": "3000", "age": "28" },
    { "id": '5', "fullname": "MNO", "salary": "5000", "age": "30" },
    { "id": '6', "fullname": "PQR", "salary": "1125", "age": "22" },
    { "id": '7', "fullname": "STU", "salary": "1500", "age": "22" }
  ];

  itemArray2 = []
  constructor() {
    this.itemArray2 = Array.from(this.itemArray1)
  }

  change() {

    this.obj = {
      "fullname": this.fullname,
      "age": this.age
    }
    this.itemArray2 = [];
    let filterObj = {}


    /* HERE it creates FILTER OBJECT */
    for (const key in this.obj) {
      if (!this.obj[key] == false) {
        filterObj[key] = this.obj[key];
      }
    }
    /* --------------------------------- */


    /* HERE it creates FILTER LOGIC */
    this.itemArray2 = this.itemArray1.filter((ele) => {
      for (const key in filterObj) {
        if (ele.hasOwnProperty(key) && ele[key] == filterObj[key]) {
          return true;
        }
      }
    });

    /* HERE it checks falsy value based on that logic work */
    if (!this.fullname == true && !this.age == true) {
      this.itemArray2 = Array.from(this.itemArray1)
    }
  }


}
