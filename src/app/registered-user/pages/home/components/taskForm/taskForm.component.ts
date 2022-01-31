import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Tarefa } from 'src/app/registered-user/interfaces/tarefa';
import { TaskService } from 'src/app/registered-user/services/task.service';

@Component({
  selector: 'app-taskForm',
  templateUrl: './taskForm.component.html',
  styleUrls: ['./taskForm.component.scss']
})
export class TaskFormComponent implements OnInit {
  formularioDaTarefa: FormGroup = new FormGroup({
    nomeTarefa: new FormControl('', []),
    tipoTarefa: new FormControl('', []),
    local: new FormControl('', []),

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
