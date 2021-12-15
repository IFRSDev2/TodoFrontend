import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const TAREFAS_URL = environment.baseUrl + "/tarefas";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  public pegarTarefa(id: number): Observable<any>{
    return this.http.get<any>(TAREFAS_URL + "/" + id);
  }

  public pegarTarefas(): Observable<any>{
    return this.http.get<any>(TAREFAS_URL);
  }

  public cadastrarTarefa(tarefa: any): Observable<any>{
    return this.http.post<any>(TAREFAS_URL, tarefa);
  }

  public atualizarTarefa(tarefa: any): Observable<any>{
    return this.http.put<any>(TAREFAS_URL, tarefa);
  }

  public deletarTarefa(id: number): Observable<any>{
    return this.http.delete<any>(TAREFAS_URL + "/" + id);
  }
}
