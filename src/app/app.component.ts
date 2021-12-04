import { Task } from './../Interfaces/Task';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoFrontend';

  variavelBooleana = true;

  tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description 1'
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description 2'
    },
  ];

  public teste(){
    console.log("teste");
  }
}
