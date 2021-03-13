import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './../interfaces/task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  //private api = 'https://jsonplaceholder.typicode.com';
  //private api = 'http://webservicearca.000webhostapp.com';
  private api = 'http://webservice.prueba';
  constructor(
    private http: HttpClient
  ) {

  }

  getAllTasks() {
    //const path = `${this.api}/todos`;
    const path = `${this.api}/refacciones`;
    return this.http.get<Task[]>(path);
  }
  getTask(id: string) {
    //const path = `${this.api}/todos/${id}`;
    const path = `${this.api}/refacciones/${id}`;
    return this.http.get<Task>(path);
  }
  createTask(task: Task) {
    // const path = `${this.api}/todos`;
    const path = `${this.api}/refacciones`;
    return this.http.post(path, task);
  }
  updateTask(task: Task) {
   // const path = `${this.api}/todos/${task.id}`;
    const path = `${this.api}/refacciones/${task.id}`;
    return this.http.put<Task>(path, task);
  }
  deleteTask(id: string) {
    // const path = `${this.api}/todos/${id}`;
    const path = `${this.api}/refacciones/${id}`
    return this.http.delete(path);
  }
}
