import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { TaskService } from '../services/task.service';
import { SetValetParking } from '../interfaces/task';
@Component({
  selector: 'app-valetparking',
  templateUrl: './valetparking.page.html',
  styleUrls: ['./valetparking.page.scss'],
})
export class ValetparkingPage implements OnInit {
  constructor(
    private taskService: TaskService,public alertController: AlertController,
    private router: Router,private navCtrl: NavController,private route: ActivatedRoute) {  }
  activo:boolean;
  setValetParking: SetValetParking[] = [];
  //texto:any = "Pedir Auto";
  user_id:any;
  name:any;
  email:any;
  x_descauto:any;
  x_placas:any;
  res_users_id:any;
  ngOnwillEnter(){
    this.route.queryParams.subscribe(params => {
      console.log("PARAMETROS: "+params.user_id)
      this.user_id = params.user_id
      this.name = params.name,
      this.email = params.email,
      this.x_descauto = params.x_descauto,
      this.x_placas = params.x_placas
    });
      console.log(this.user_id + " " + this.name + " " +this.email)
      this.taskService.getMailActivityTeam(2)
        .subscribe((data) => {
          this.res_users_id = data[0].res_users_id;
        }, (err) => {
            console.log(err)
        });
      // var fecha = new Date("YYYY-MM-DD").getDate()+1;
      this.taskService.getValetParking(this.user_id)
        .subscribe((data) => {
          if(data[0]!=null){
            console.log("Esta esperando su carro ya lo pidio: " + data);
            this.activo=true;
          }else{
            console.log("No esta esperando su carro puedes pedirlo: " + data);
            this.activo=false;
          }
        }, (err) => {
          console.log(err)
        });
  }
ngOnInit() {
  this.route.queryParams.subscribe(params => {
    console.log("PARAMETROS: "+params.user_id)
    this.user_id = params.user_id
    this.name = params.name,
    this.email = params.email,
    this.x_descauto = params.x_descauto,
    this.x_placas = params.x_placas
  });
  console.log(this.user_id + " " + this.name + " " +this.email)
  this.taskService.getMailActivityTeam(2)
    .subscribe((data) => {
      this.res_users_id = data[0].res_users_id;
    }, (err) => {
        console.log(err)
    });
    // var fecha = new Date("YYYY-MM-DD").getDate()+1;
    this.taskService.getValetParking(this.user_id)
      .subscribe((data) => {
        if(typeof(data[0]) !== "undefined" || data[0]!=null){
          console.log("Esta esperando su carro ya lo pidio: " + data);
          console.log(data);
          this.activo=true;
        }else{
          console.log("No esta esperando su carro puedes pedirlo: " + data);
          this.activo=false;
        }
      }, (err) => {
        // do alerty stuff
        console.log(err)
      });
  }
  atras(){
    this.navCtrl.back();
  }
  status: boolean = false;
  clickEvent(){
    let fecha_hora = new Date().toISOString()
    let fecha = new Date("YYYY-MM-DD");
    //fecha.setDate(fecha.getDate() + 1)
    const setValetParking = {
      res_model_id:78,
      res_model:"res.partner",
      res_id:this.user_id,
      res_name:this.name,
      activity_type_id:15,
      summary:"VALET PARKING",
      note:"<p><br></p><table class=\"table table-bordered\"><tbody><tr><td style=\"text-align:center\"><h2><b><h2><font><h2>Tarea</h2></font></h2></b></h2></td><td style=\"text-align:center\"><h2><b><font>Habitación</font></b></h2></td></tr><tr><td>TRAER AUTO</td><td>AUTO:"+this.x_descauto+" <br></br>PLACAS:"+this.x_placas+"<br> HORA DE SOLICTUD:"+ fecha_hora +"</br></td></tr></tbody></table>",
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
      team_id:2
    };
    this.taskService.setValetParking(setValetParking)
    .subscribe((newTask) => {
      console.log("Haz solicitado pedir tu vehiculo");
      this.activo=true;
    }, (err) => {
      console.log(err)
    });
  }
}
