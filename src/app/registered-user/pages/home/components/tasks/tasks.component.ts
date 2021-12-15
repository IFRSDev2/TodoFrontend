import { Tarefa } from './../../../../interfaces/tarefa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tarefas: Tarefa[] | undefined;

  constructor() { }

  ngOnInit() {
    this.tarefas = [
      {
        id: 1,
        titulo: "Tarefa 1",
        descricao: "Descrição da tarefa 1",
        concluida: false
      },
      {
        id: 2,
        titulo: "Tarefa 2",
        descricao: "Descrição da tarefa 2",
        concluida: true
      }
    ]
  }

}
