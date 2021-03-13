import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController,Platform } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { TaskService } from '../services/task.service';
import { Login } from '../interfaces/task';
import {Md5} from 'ts-md5/dist/md5';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  condition:boolean = true;
  condition2:boolean;
  correo:string;
  password:string;
  myValue:any;
  ionicForm: FormGroup;
  isSubmitted = false;
  className: string = 'quitar';
  login: Login[] = [];
  @ViewChild('borra') private draggableElement: ElementRef;
  constructor(private router: Router,private navCtrl: NavController,
    public formBuilder: FormBuilder,private taskService: TaskService,
    public alertController: AlertController,private nativeStorage:NativeStorage,
    public platform:Platform) { 
      this.platform.ready().then(() => {
        this.nativeStorage.getItem('user_id')
        .then(
            user_id => {
              console.log("INI user_id")
              console.log(user_id)
            },
            error => console.error("NO HAY USER_ID")
        );
        this.nativeStorage.setItem("user_id",55).then(()=>{console.log("Se guardo user_id")},error=>console.log("No se guardo el user_ud"));
        this.nativeStorage.getItem("user_id").
        then(
          user_id=>{
            console.log("user_id");
            
            console.log(user_id)
          },
          error=>console.error("No hay user_id")
        );
      });

    this.ionicForm = this.formBuilder.group({
      correo:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],      
      password:['', [Validators.required]]
   })
  }
  ngOnInit() {

  }
  registro(){
    this.router.navigate(['crearperfil'])
  }
  correof(){
    this.condition=true;
    this.condition2=false;
    //this.celular = "000000000"
  }
  celularf(){
    this.condition = false;
    this.condition2 = true;
    this.correo = "example@domain.com"
  }
  atras(){
    this.router.navigate(['xperience'])
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'class_alert',
      //header: 'Alert',
      //subHeader: 'Subtitle',
      message: 'Usuario y/o contraseña incorrecta',
      buttons: ['OK']
    });
    await alert.present();
  }
  submitForm() {
    this.isSubmitted = true;
    console.log(this.ionicForm.valid)
    if (!this.ionicForm.valid){
      console.log('Please provide all the required values!')
      return false;
    }else{
      console.log("No Existe: "+this.ionicForm.value.password +" "+ Md5.hashStr("57f842f3-2e23-4d03-b1ef-cb5b7dd8e778"));
      this.ionicForm.value.password = Md5.hashStr(this.ionicForm.value.password)
      this.taskService.getLogin(this.ionicForm.value.correo,this.ionicForm.value.password)
      .subscribe((data) => {
        if(data[0]!=null){
        this.nativeStorage.setItem('app', {
                user_id:data[0].id,
                name:data[0].name,
                email:data[0].email,
                x_descauto:data[0].x_descauto,
                x_placas:data[0].x_plac
        }).then(
            () => {
                console.log('Se actualizo la informacion APP')
                this.navCtrl.navigateRoot(['/iniciologueado'], {
                  queryParams: {
                      user_id: data[0].id,
                      name:data[0].name,
                      email:data[0].email,
                      x_descauto:data[0].x_descauto,
                      x_placas:data[0].x_placas
                  }
                });
            },
            error => console.error('Error al actualizar la informacion APP', error)
        );
        }else{
          this.presentAlert();
        }
      }, (err) => {
        alert(err)
      });
    }
  }
  siguiente(){
    
  }
}