import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { SMS } from '@ionic-native/sms/ngx';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-mensajerecepcion',
  templateUrl: './mensajerecepcion.page.html',
  styleUrls: ['./mensajerecepcion.page.scss'],
})
export class MensajerecepcionPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  celularRecepcion1:any;
  celularRecepcion2:any;
  constructor(public alertController: AlertController,private router: Router,private taskService: TaskService,
    private navController: NavController,public formBuilder: FormBuilder,private sms: SMS) { 
      this.ionicForm = this.formBuilder.group({
        mensaje: ['', [Validators.required]]
     });
  }
  ngOnInit() {
    this.taskService.getMailActivityTeam(4)
    .subscribe((data) => {
      console.log("ngOnInit getMailActivityTeam 1: "+data[0].res_users_id);
      console.log("ngOnInit getMailActivityTeam 2: "+data[1].res_users_id);
      this.taskService.getResUsers(data[0].res_users_id)
      .subscribe((data) => {
        console.log("ngOnInit getResUsers: "+data[0].partner_id);
        this.celularRecepcion1 = data[0].partner_id
        this.taskService.getResPartnerPhone(data[0].partner_id)
        .subscribe((data) => {
          console.log("ngOnwillEnter getResPartnerPhone: "+data[0].mobile);
          this.celularRecepcion1 = data[0].mobile
        }, (err) => {
            console.log(err)
        });
      }, (err) => {
          console.log(err)
      });
      this.taskService.getResUsers(data[1].res_users_id)
      .subscribe((data) => {
        console.log("ngOnInit getResUsers: "+data[0].partner_id);
        this.celularRecepcion2 = data[0].partner_id
        this.taskService.getResPartnerPhone(data[0].partner_id)
        .subscribe((data) => {
          console.log("ngOnwillEnter getResPartnerPhone: "+data[0].mobile);
          this.celularRecepcion2 = data[0].mobile
        }, (err) => {
            console.log(err)
        });
      }, (err) => {
          console.log(err)
      });
    }, (err) => {
        console.log(err)
    });
  }
  ngOnwillEnter(){
    this.taskService.getMailActivityTeam(4)
    .subscribe((data) => {
      console.log("ngOnInit getMailActivityTeam 1: "+data[0].res_users_id);
      console.log("ngOnInit getMailActivityTeam 2: "+data[1].res_users_id);
      this.taskService.getResUsers(data[0].res_users_id)
      .subscribe((data) => {
        console.log("ngOnInit getResUsers: "+data[0].partner_id);
        this.celularRecepcion1 = data[0].partner_id
        this.taskService.getResPartnerPhone(data[0].partner_id)
        .subscribe((data) => {
          console.log("ngOnwillEnter getResPartnerPhone: "+data[0].mobile);
          this.celularRecepcion1 = data[0].mobile
        }, (err) => {
            console.log(err)
        });
      }, (err) => {
          console.log(err)
      });
      this.taskService.getResUsers(data[1].res_users_id)
      .subscribe((data) => {
        console.log("ngOnInit getResUsers: "+data[0].partner_id);
        this.celularRecepcion2 = data[0].partner_id
        this.taskService.getResPartnerPhone(data[0].partner_id)
        .subscribe((data) => {
          console.log("ngOnwillEnter getResPartnerPhone: "+data[0].mobile);
          this.celularRecepcion2 = data[0].mobile
        }, (err) => {
            console.log(err)
        });
      }, (err) => {
          console.log(err)
      });
    }, (err) => {
        console.log(err)
    });
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    console.log(this.ionicForm.valid)
    if (!this.ionicForm.valid){
      console.log('Captura los valores requeridos');
      return false;
    }else{
      this.sms.send([this.celularRecepcion1,this.celularRecepcion2],this.ionicForm.value.mensaje).then(val => {
        this.presentAlertConfirm();
      });
    }
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Mensaje',
      message: 'Mensaje enviado',
      buttons: [
         {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
            this.router.navigate(['/menuconcierge']);
          }
        }
      ]
    });
    await alert.present();
  }
  atras(){
    this.navController.back();
  }

}
