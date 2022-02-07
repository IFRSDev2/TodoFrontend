import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tarefa } from 'src/app/registered-user/interfaces/tarefa';
import { TaskService } from 'src/app/registered-user/services/task.service';


@Component({
  selector: 'app-taskForm',
  templateUrl: './taskForm.component.html',
  styleUrls: ['./taskForm.component.scss']
})

export class TaskFormComponent implements OnInit {
  
  formularioDaTarefa: FormGroup = new FormGroup({
    nomeTarefa: new FormControl('', [Validators.required, Validators.minLength(3)]),
    tipoTarefa: new FormControl('', [Validators.required, Validators.minLength(3)]),
    localizacaoTarefa: new FormControl('', [Validators.required]),

  });

  constructor(private taskService: TaskService) { }

  ngOnInit() {

  }

  onSubmit(taskData: any){
    this.taskService.cadastrarTarefa(taskData as Tarefa).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}
