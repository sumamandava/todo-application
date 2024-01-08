import { Component } from '@angular/core';

@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrl: './list-to-dos.component.css'
})
export class ListToDosComponent {

//   todos = [
//     { 
//       id : 1, 
//       description : 'Learn to Dance'
//     },
//     {
//       id:2,
//       description : 'Become Full Stack JAVA Expert'
//     },
//     {
//       id:3,
//       description : 'Visit Kerala'
//   }
// ]

todos =[
  
  new Todo(1,'Learn to dance',false,new Date())

] 

}
class Todo{
  constructor(
public id:number,
public description : string,
public done:boolean,
public targetDate : Date
  ){
    
  }
}
