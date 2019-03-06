import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import{ EMPLOYEES } from '../employee-mock';
@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  employees=EMPLOYEES;
  
employee:Employee={
  "id":0,
  "name":"",
  "organization":"",
  "salary":0
}
selectedEmployee=Employee;
  onSelect(employee: Employee): void {
    this.selectedEmployee=employee;
  }
  addempl(selectedEmployee)
  {
    this.selectedEmployee=this.employee;
    this.selectedEmployee.id=this.employees.length+1;
    this.employees.push(this.employee);
    this.employee={
    "id":0,
    "name":"",
    "organization":"",
    "salary":0
  }
  }
  removeit(this)
  {
    this.employees.splice(this,1);
  }
  constructor() { }

  ngOnInit() {
  }

}
