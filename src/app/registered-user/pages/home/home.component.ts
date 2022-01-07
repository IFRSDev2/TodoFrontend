import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../interfaces/tarefa';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tarefas: Tarefa[] | undefined;

  tarefasAcademico: Tarefa[] | undefined;
  tarefasAssistir: Tarefa[] | undefined;
  tarefasComprar: Tarefa[] | undefined;
  tarefasLazer: Tarefa[] | undefined;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tarefas = [
      {
        id: 1,
        titulo: "Tarefa 1",
        descricao: "Descrição da tarefa 1",
        concluida: false,
        categoria: "Lazer"
      },
      {
        id: 2,
        titulo: "Tarefa 2",
        descricao: "Descrição da tarefa 2",
        concluida: true,
        categoria: "Academico"
      },
      {
        id: 3,
        titulo: "Tarefa 3",
        descricao: "Descrição da tarefa 3",
        concluida: false,
        categoria: "Assistir"
      },
      {
        id: 4,
        titulo: "Tarefa 4",
        descricao: "Descrição da tarefa 4",
        concluida: false,
        categoria: "Comprar"
      }
    ];

    this.tarefasAcademico = this.tarefas?.filter(tarefa => tarefa.categoria == "Academico");
    this.tarefasAssistir = this.tarefas?.filter(tarefa => tarefa.categoria == "Assistir");
    this.tarefasComprar = this.tarefas?.filter(tarefa => tarefa.categoria == "Comprar");
    this.tarefasLazer = this.tarefas?.filter(tarefa => tarefa.categoria == "Lazer");

  }
  pegarTarefas(){
    this.taskService.pegarTarefas().subscribe(
      sucess => {
        this.tarefas = sucess.content;
        this.tarefasAcademico = this.tarefas?.filter(tarefa => tarefa.categoria == "Academico");
        this.tarefasAssistir = this.tarefas?.filter(tarefa => tarefa.categoria == "Assistir");
        this.tarefasComprar = this.tarefas?.filter(tarefa => tarefa.categoria == "Comprar");
        this.tarefasLazer = this.tarefas?.filter(tarefa => tarefa.categoria == "Lazer");
      }
    )
  }
  

}
