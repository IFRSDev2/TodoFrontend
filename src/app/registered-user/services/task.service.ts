import { Tarefa } from './../interfaces/tarefa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pageable } from '../interfaces/pageable';


const TAREFAS_URL = environment.baseUrl + "/tarefas";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  public pegarTarefa(id: number): Observable<Tarefa>{
    return this.http.get<Tarefa>(TAREFAS_URL + "/" + id);
  }

  public pegarTarefas(): Observable<Pageable<Tarefa>>{
    return this.http.get<Pageable<Tarefa>>(TAREFAS_URL);
  }

  public cadastrarTarefa(tarefa: Tarefa): Observable<Tarefa>{
    return this.http.post<Tarefa>(TAREFAS_URL, tarefa);
  }

  public atualizarTarefa(tarefa: Tarefa): Observable<Tarefa>{
    return this.http.put<Tarefa>(TAREFAS_URL, tarefa);
  }

  public deletarTarefa(id: number): Observable<Tarefa>{
    return this.http.delete<Tarefa>(TAREFAS_URL + "/" + id);
  }
}
