import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController,AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { TaskService } from '../services/task.service';
import { Task,SetPartnerCategory } from '../interfaces/task';
import { ConfirmedValidator } from '../confirmed.validator';
import {Md5} from 'ts-md5/dist/md5';
@Component({
  selector: 'app-crearperfil',
  templateUrl: './crearperfil.page.html',
  styleUrls: ['./crearperfil.page.scss'],
})
export class CrearperfilPage implements OnInit {
  nombre:string;
  myValue:any;
  ionicForm: FormGroup;
  isSubmitted = false;
  className: string = 'quitar';
  tasks: Task[] = [];
  setPartnerCategorys: SetPartnerCategory[] = [];
  paises:any;
  usrMail:any;
  contra:any;
  constructor(private router: Router,private navController: NavController,
    public formBuilder: FormBuilder,private taskService: TaskService,
    public alertController: AlertController,
    public navCtrl: NavController) { 
    this.ionicForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      apellidomaterno: ['', [Validators.required]],
      // telefono:['', [Validators.pattern('^[0-9]+$'),Validators.maxLength(10),Validators.minLength(10)]],
      celular:['',  [Validators.pattern('^[0-9]+$'),Validators.required,Validators.pattern('^[0-9]+$'),Validators.maxLength(10),Validators.minLength(10)]],
      correo:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      contrasena: ['', [Validators.required]],
      confirmarcontrasena: ['', [Validators.required]],
      pais: ['156', [Validators.required]],
      terminos: [false, [Validators.requiredTrue]],
      // tipo_empresa: ['1',],
      // rfc: ['BUFP910825DE3',  [Validators.required, Validators.pattern('^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$')]],
      // uso_cfdi: ['', [Validators.required]],
      // password:['', [Validators.required,Validators.minLength(8)]],
      // myBoolean: ['false',[]],
   }, { 
    validator: ConfirmedValidator('contrasena', 'confirmarcontrasena')
  })
  }
  res_users_id:any;
  ngOnInit() {
    this.taskService.getMailActivityTeam(2)
      .subscribe((data) => {
        this.res_users_id = data[0].res_users_id;
      }, (err) => {
          console.log(err)
      });
    this.taskService.getPaises()
      .subscribe(paises => {
          this.paises = paises;
          console.log(paises)
      });
  }
  atras(){
    this.navController.back();
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'class_alert',
      header: 'Mensaje de XPERIENCE',
      //subHeader: 'Subtitle',
      message: 'Usuario existente captura otro usuario',
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
      console.log('Formulario completo' + this.ionicForm.value);
      this.usrMail = this.ionicForm.value.correo;
      this.contra = this.ionicForm.value.contrasena = Md5.hashStr(this.ionicForm.value.contrasena)
      let fecha = new Date().toISOString()
      const task = {
        name:this.ionicForm.value.nombre + " " + this.ionicForm.value.apellido + " " +this.ionicForm.value.apellidomaterno,
        display_name:this.ionicForm.value.nombre + " " + this.ionicForm.value.apellido + " " + this.ionicForm.value.apellidomaterno,
        lang:"es_MX",
        type:"contact",
        active:true,
        email:this.ionicForm.value.correo,
        phone:this.ionicForm.value.celular,
        is_company:false,
        color:0,
        partner_share:true,
        email_normalized:this.ionicForm.value.correo,
        message_bounce:0,
        partner_gid:0,
        invoice_warn:"no-message",
        supplier_rank:0,
        customer_rank:1,
        picking_warn:"no-message",
        purchase_warn:"no-message",
        sale_warn:"no-message",
        is_published:false,
        warning_stage:0,
        blocking_stage:0,
        active_limit:false,
        partner_name:this.ionicForm.value.nombre,
        first_name:this.ionicForm.value.apellido,
        second_name:this.ionicForm.value.apellidomaterno,
        create_uid:2,
        write_uid:2,
        write_date:fecha,
        create_date:fecha,
        x_password:this.ionicForm.value.contrasena,
        country_id:this.ionicForm.value.pais
      };
      this.taskService.getUsuario(this.ionicForm.value.correo)
      .subscribe((data) => {
        if(data[0]!=null){
          this.presentAlert()
        }else{
          this.taskService.createTask(task)
				  .subscribe((newTask) => {
           alert("Tus datos han sido guardados correctamente");
           setTimeout(() => {
            console.log("usuario" + this.usrMail)
            console.log("contra" + this.contra)
             this.taskService.getLogin2(this.ionicForm.value.correo,this.ionicForm.value.contrasena)
            .subscribe((data) => {
              if(data[0]!=null){
                const setPartnerCategorys = {
                  category_id:1,
                  partner_id:data[0].id
                }
                this.taskService.setPartnerCategory(setPartnerCategorys)
                .subscribe((reply: any) => {
                  this.ionicForm.value.nombre ="";
                   this.ionicForm.value.apellido ="";
                   this.ionicForm.value.correo ="";
                   this.ionicForm.value.celular ="";
                   this.ionicForm.value.terminos = false;
                   this.ionicForm.value.contrasena="";
                   this.navCtrl.navigateRoot(['/registro']);
                }, (err) => {
                    console.log(err)
                });
              }
            });
           }, 1000);
          }, (err) => {
            console.log(err)
            });
          }
        }, (err) => {
          console.log(err)
        });
    }
  }
  aceptar(){
    this.myValue=true
    if(this.className == 'quitar'){
      this.className = 'mostrar';
    }else{
      this.className = 'quitar';
    }
    return false;
  }
  cancelar(){
    this.myValue=false
    if(this.className == 'quitar'){
      this.className = 'mostrar';
    }else{
      this.className = 'quitar';
    }
    return false;
  }
}
