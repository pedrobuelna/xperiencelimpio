import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-datosreservacion',
  templateUrl: './datosreservacion.page.html',
  styleUrls: ['./datosreservacion.page.scss'],
})
export class DatosreservacionPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  constructor(private navCtrl: NavController,public formBuilder: FormBuilder,
    private router: Router) { 
    this.ionicForm = this.formBuilder.group({
      nombre:['', [Validators.required]],
      apellido:['', [Validators.required]],
      celular:['', [Validators.required]],
      correo:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],      
      password:['', [Validators.required]]
   })
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  ngOnInit() {
  }
  politicascancelacion(){
    this.router.navigate(['politicascancelacion'])
  }
  submitForm() {
    this.isSubmitted = true;
    console.log("Campos correctos en login (LOGUEADO)"+this.ionicForm.valid)
    if (!this.ionicForm.valid){
      console.log('Please provide all the required values!')
      return false;
    }else{
    }
  }
  atras(){
    this.navCtrl.back();
  }
}
