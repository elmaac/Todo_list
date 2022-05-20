import { Component } from '@angular/core';

import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 todos :Todo[]=[];
newTodo:string;
 

saveTodo(){
if(this.newTodo){
let todo=new Todo();
todo.name=this.newTodo;
todo.isComplated=true;
this.todos.push(todo);
this.newTodo='';
}
else{
  alert('Please enter todo!')
}
}

done(id:number){

this.todos[id].isComplated=!this.todos[id].isComplated;
}

remove(id:number){
this.todos=this.todos.filter((v,i)=> i!==id);

}

}
