import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { SMS } from '@ionic-native/sms/ngx';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'app-mensajegerente',
  templateUrl: './mensajegerente.page.html',
  styleUrls: ['./mensajegerente.page.scss'],
})
export class MensajegerentePage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  celularGerente:any;
  constructor(public alertController: AlertController,private router: Router,private taskService: TaskService,
    private navController: NavController,public formBuilder: FormBuilder,private sms: SMS) { 
      this.ionicForm = this.formBuilder.group({
        mensaje: ['', [Validators.required]]
     });
  }
  ngOnInit() {
    this.taskService.getMailActivityTeam(5)
    .subscribe((data) => {
      console.log("ngOnInit getMailActivityTeam: "+data[0].res_users_id);
      this.taskService.getResUsers(data[0].res_users_id)
      .subscribe((data) => {
        console.log("ngOnInit getResUsers: "+data[0].partner_id);
        this.taskService.getResPartnerPhone(data[0].partner_id)
        .subscribe((data) => {
          console.log("ngOnwillEnter getResPartnerPhone: "+data[0].mobile);
          this.celularGerente = data[0].mobile
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
    this.taskService.getMailActivityTeam(5)
    .subscribe((data) => {
      console.log("ngOnInit getMailActivityTeam: "+data[0].res_users_id);
      this.taskService.getResUsers(data[0].res_users_id)
      .subscribe((data) => {
        console.log("ngOnInit getResUsers: "+data[0].partner_id);
        this.taskService.getResPartnerPhone(data[0].partner_id)
        .subscribe((data) => {
          console.log("ngOnwillEnter getResPartnerPhone: "+data[0].mobile);
          this.celularGerente = data[0].mobile
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
      this.celularGerente = this.celularGerente
      let celular2 = "6692124207";
      this.sms.send([celular2,this.celularGerente],this.ionicForm.value.mensaje).then(val => {
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
