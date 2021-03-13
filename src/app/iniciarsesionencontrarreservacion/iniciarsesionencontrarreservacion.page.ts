import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
@Component({
  selector: 'app-iniciarsesionencontrarreservacion',
  templateUrl: './iniciarsesionencontrarreservacion.page.html',
  styleUrls: ['./iniciarsesionencontrarreservacion.page.scss'],
})
export class IniciarsesionencontrarreservacionPage implements OnInit {

  apellido:string;
  myValue:any;
  ionicForm: FormGroup;
  isSubmitted = false;
  className: string = 'quitar';
  constructor(private router: Router,private navController: NavController,public formBuilder: FormBuilder,) { 
    this.ionicForm = this.formBuilder.group({
      apellido:['', [Validators.required],],
      numero:['', [Validators.required],]  
   })
  }
  //className: string = 'quitar';
  ngOnInit() {
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  
  submitForm() {
    this.isSubmitted = true;
    console.log(this.ionicForm.valid)
    if (!this.ionicForm.valid){
      console.log('Please provide all the required values!')
      return false;
    }else{
      //alert('Form Completed' + this.ionicForm.value);
      this.router.navigate(['/iniciarsesioncodigo']);
      //this.router.navigate(['/principal']);
      // const task = {
      //   nombre: this.ionicForm.value.nombre,
        // nombre_2: this.ionicForm.value.nombre2,
        // telefono: this.ionicForm.value.telefono,
        // celular: this.ionicForm.value.celular,
        // mail: this.ionicForm.value.mail,
        // persona_contacto: this.ionicForm.value.personaContacto,
        // sucursal: this.ionicForm.value.sucursal,
        // tipo_empresa: this.ionicForm.value.tipoEmpresa,
        // rfc: this.ionicForm.value.rfc,
        // persona_fisica: this.ionicForm.value.persona_fisica,
        // password: this.ionicForm.value.password,
        // status: "0",
        // uso_cfdi: this.ionicForm.value.uso_cfdi,
      //};
      // this.taskService.createTask(task)
			// 	.subscribe((newTask) => {
      //      // do happy stuff
      //      alert("Tus datos han sido guardados correctamente")
      //     }, (err) => {
      //       // do alerty stuff
      //       alert(err)
      //     });
      // }
    
    }
  }
  atras(){
    this.navController.back();
  }
  cancelar(){
    if(this.className == 'quitar'){
      this.className = 'mostrar';
    }else{
      this.className = 'quitar';
    }
    return false;
  }
  siguiente(){
    this.router.navigate(['/crearperfil']);
  }
}
