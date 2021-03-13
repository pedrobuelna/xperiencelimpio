import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { TaskService } from '../services/task.service';
import { SetServicio } from '../interfaces/task';
@Component({
  selector: 'app-nomolestar',
  templateUrl: './nomolestar.page.html',
  styleUrls: ['./nomolestar.page.scss'],
})
export class NomolestarPage implements OnInit {
  constructor(private taskService: TaskService,public alertController: AlertController,
    private router: Router,private navController: NavController,
    private route: ActivatedRoute) { 
  }
  activo:boolean;
  user_id:any;
  name:any;
  email:any;
  x_descauto:any;
  x_placas:any;
  res_users_id:any;
  setServicio: SetServicio[] = [];
  texto:any = "Desactivado";
  ngOnInit() {
    this.taskService.getMailActivityTeam(4)
      .subscribe((data) => {
        this.res_users_id = data[0].res_users_id;
        console.log(this.res_users_id)
      }, (err) => {
          console.log(err)
      });
    this.route.queryParams.subscribe(params => {
      this.user_id = params.user_id
      this.name = params.name,
      this.email = params.email,
      this.x_descauto = params.x_descauto,
      this.x_placas = params.x_placas
    });
    console.log(this.user_id + " " + this.name + " " +this.email)
    this.taskService.getServicio(this.user_id,23)
      .subscribe((data) => {
        console.log(data);
        console.log(data[0]);
        if(typeof(data[0]) !== "undefined" || data[0]!=null){
           console.log("No molestar activado: " + data);
           this.activo=false;
        }else{
           console.log("Me molestar desactivado: " + data);
           this.activo=true;
        }
      }, (err) => {
        console.log(err)
      });
  }
  ngOnwillEnter(){
    this.taskService.getMailActivityTeam(4)
      .subscribe((data) => {
        this.res_users_id = data[0].res_users_id;
        console.log(this.res_users_id)
      }, (err) => {
          console.log(err)
      });
    this.route.queryParams.subscribe(params => {
      this.user_id = params.user_id
      this.name = params.name,
      this.email = params.email,
      this.x_descauto = params.x_descauto,
      this.x_placas = params.x_placas
    });
    console.log(this.user_id + " " + this.name + " " +this.email)
    this.taskService.getServicio(this.user_id,23)
      .subscribe((data) => {
        console.log(data);
        console.log(data[0]);
        if(typeof(data[0]) !== "undefined" || data[0]!=null){
           console.log("No molestar activado: " + data);
           this.activo=false;
        }else{
           console.log("Me molestar desactivado: " + data);
           this.activo=true;
        }
      }, (err) => {
        console.log(err)
      });
  }
  atras(){
    this.navController.back();
  }
  // status: boolean = false;
  clickEvent(){
    let fecha_hora = new Date().toISOString()
    let fecha = new Date("YYYY-MM-DD");
    //fecha.setDate(fecha.getDate() + 1)
    //console.log(fecha)
    const setServicio = {
      res_model_id:78,
      res_model:"res.partner",
      res_id:this.user_id,
      res_name:this.name,
      activity_type_id:23,
      summary:"NO MOLESTAR",
      note:"<p><br></p><table class=\"table table-bordered\"><tbody><tr><td style=\"text-align:center\"><h2><b><h2><font><h2>Tarea</h2></font></h2></b></h2></td><td style=\"text-align:center\"><h2><b><font>Habitación</font></b></h2></td></tr><tr><td>NO MOLESTAR</td><td>ACTIVO <br></br>HORA DE SOLICTUD: "+fecha_hora+"</br></td></tr></tbody></table>",
      date_deadline:"2021-02-11",
      automated:"True",
      user_id:this.res_users_id,
      recommended_activity_type_id:null,
      previous_activity_type_id:null,
      create_uid:this.res_users_id,
      create_date:fecha_hora,
      write_uid:this.res_users_id,
      write_date:fecha_hora,
      calendar_event_id:null,
      team_id:4
      // this.status = !this.status;
      // if(this.status){
      //   this.texto="Activado"
      // }else{
      //   this.texto="Desactivado"
      // }
  }
  this.taskService.setServicio(setServicio)
    .subscribe((newTask) => {
      this.activo=false;
    }, (err) => {
      console.log(err)
    });
  }
}
