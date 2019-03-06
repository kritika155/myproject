import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import{ EMPLOYEES } from '../employee-mock';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employees=EMPLOYEES;

employee:Employee={
  "id":0,
  "name":"",
  "organization":"",
  "salary":0
}
a='kritika';
addemployee(){
if((this.employee.name.length>0)&&(this.employee.organization.length>0))
{
  this.employee.id=this.employees.length+1;
  this.employees.push(this.employee);
  this.employee={id:0,name:"",organization:"",salary:0};
}
}
deleteemployee(num)
{
  var b:Employee[]=[];
for(var i=0;i<this.employees.length;i++)
{
  if(this.employees[i].id!=num)
  {
       b.push(this.employees[i]);
  }
}
this.employees=b;
}
delete(this)
{
  this.employees.splice(this,1);
}
  constructor() { }

  ngOnInit() {
  }

}
