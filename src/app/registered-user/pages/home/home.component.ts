import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../interfaces/tarefa';
import { TipoTarefa } from '../../interfaces/tipoTarefa';
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
        nomeTarefa: "Fazer a prova de matemática",
        tipoTarefa: TipoTarefa.Lazer,
        local: "Sala de aula"
      },
      {
        id: 2,
        nomeTarefa: "Assistir ao filme de Star Wars",
        tipoTarefa: TipoTarefa.Assistir,
        local: "Cinema"
      },
      {
        id: 3,
        nomeTarefa: "Comprar um novo notebook",
        tipoTarefa: TipoTarefa.Comprar,
        local: "Mercado"
      },
      {
        id: 4,
        nomeTarefa: "Fazer a prova de matemática",
        tipoTarefa: TipoTarefa.Academico,
        local: "Sala de aula"
      }
    ];

    this.tarefasAcademico = this.tarefas?.filter(tarefa => tarefa.tipoTarefa == TipoTarefa.Academico);
    this.tarefasAssistir = this.tarefas?.filter(tarefa => tarefa.tipoTarefa == TipoTarefa.Assistir);
    this.tarefasComprar = this.tarefas?.filter(tarefa => tarefa.tipoTarefa == TipoTarefa.Comprar);
    this.tarefasLazer = this.tarefas?.filter(tarefa => tarefa.tipoTarefa == TipoTarefa.Lazer);

  }
  pegarTarefas(){
    this.taskService.pegarTarefas().subscribe(
      sucess => {
        this.tarefas = sucess.content;
        this.tarefasAcademico = this.tarefas?.filter(tarefa => tarefa.tipoTarefa == TipoTarefa.Academico);
        this.tarefasAssistir = this.tarefas?.filter(tarefa => tarefa.tipoTarefa == TipoTarefa.Assistir);
        this.tarefasComprar = this.tarefas?.filter(tarefa => tarefa.tipoTarefa == TipoTarefa.Comprar);
        this.tarefasLazer = this.tarefas?.filter(tarefa => tarefa.tipoTarefa == TipoTarefa.Lazer);
      }
    )
  }
  

}
