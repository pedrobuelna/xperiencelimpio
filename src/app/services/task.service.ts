import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task,Paises,GetUsuario,getValetParking,GetResUsers,GetResPartnerPhone,
  SetValetParking,SetPartnerCategory,Login,GetMailActivityTeam,SetServicio } from './../interfaces/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //private api = 'https://jsonplaceholder.typicode.com';
  //private api = 'http://webservicearca.000webhostapp.com';
  private api = 'http://unchx.ddns.net:3001';
  constructor(
    private http: HttpClient
  ) {}
  createTask(task: Task) {
    // const path = `${this.api}/todos`;
    const path = `${this.api}/res_partner`;
    return this.http.post(path, task);
  }
  setPartnerCategory(setPartnerCategory: SetPartnerCategory) {
    // const path = `${this.api}/todos`;
    const path = `${this.api}/res_partner_res_partner_category_rel`;
    return this.http.post(path, setPartnerCategory);
  }
  getPaises() {
    //const path = `${this.api}/todos`;
    const path = `${this.api}/res_country?select=id,name&order=name`;
    return this.http.get<Paises[]>(path);
  }
  getMailActivityTeam(mail_activity_team_id: any) {
    //const path = `${this.api}/todos`;
    const path = `${this.api}/mail_activity_team_users_rel?mail_activity_team_id=eq.${mail_activity_team_id}`;
    return this.http.get<GetMailActivityTeam[]>(path);
  }
  getResUsers(res_users_id:any){
    const path = `${this.api}/res_users?id=eq.${res_users_id}`;
    return this.http.get<GetResUsers[]>(path);
  }
  getResPartnerPhone(res_users_id:any){
    const path = `${this.api}/res_partner?id=eq.${res_users_id}`;
    return this.http.get<GetResPartnerPhone[]>(path);
  }
  getLogin2(mail: any,contrasena:any) {
    //const path = `${this.api}/todos/${id}`;
    const path = `${this.api}/res_partner?email=eq.${mail}&x_password=eq.${contrasena}&active=eq.true`;
    //alert(path)
    return this.http.get<Login>(path);
  }
  getLogin(mail: any,contrasena:any) {
    //const path = `${this.api}/todos/${id}`;
    const path = `${this.api}/res_partner?email=eq.${mail}&x_password=eq.${contrasena}&active=eq.true`;
    //alert(path)
    return this.http.get<Task>(path);
  }
  getUsuario(mail: any){
    //const path = `${this.api}/todos/${id}`;
    const path = `${this.api}/res_partner?email=eq.${mail}`;
    //alert(path)
    return this.http.get<GetUsuario>(path);
  }
  getValetParking(user_id: any){
    //const path = `${this.api}/todos/${id}`;
    const path = `${this.api}/mail_activity?res_id=eq.${user_id}&activity_type_id=eq.15`;
    //alert(path)
    return this.http.get<getValetParking>(path);
  }
  getServicio(user_id: any,activity_type_id:any){
    //const path = `${this.api}/todos/${id}`;
    const path = `${this.api}/mail_activity?res_id=eq.${user_id}&activity_type_id=eq.${activity_type_id}`;
    //alert(path)
    return this.http.get<any>(path);
  }
  setValetParking(setValetParking: SetValetParking) {
    // const path = `${this.api}/todos`;
    const path = `${this.api}/mail_activity`;
    return this.http.post(path, setValetParking);
  }
  setServicio(setServicio: SetServicio) {
    // const path = `${this.api}/todos`;
    const path = `${this.api}/mail_activity`;
    return this.http.post(path, setServicio);
  } 
  deleteServicio(user_id:any,activity_type_id:any) {
    const path = `${this.api}/mail_activity?res_id=eq.${user_id}&activity_type_id=eq.${activity_type_id}`
    return this.http.delete(path);
  }
  // getTask(id: string) {
  //   //const path = `${this.api}/todos/${id}`;
  //   const path = `${this.api}/refacciones/${id}`;
  //   return this.http.get<Task>(path);
  // }
  
  // updateTask(task: Task) {
  //  // const path = `${this.api}/todos/${task.id}`;
  //   const path = `${this.api}/refacciones/${task.id}`;
  //   return this.http.put<Task>(path, task);
  // }
  
}
