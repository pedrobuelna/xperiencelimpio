import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DatePickerModule } from 'ionic4-date-picker';
@Component({
  selector: 'app-landingquickfit',
  templateUrl: './landingquickfit.page.html',
  styleUrls: ['./landingquickfit.page.scss'],
})
export class LandingquickfitPage implements OnInit {
  constructor(private router: Router,private navCtrl: NavController) { }
  fecha:any;
  numeroCantidad:any=1;
  cantidad:any=this.numeroCantidad + " Persona";
  mostrarCalendario:any="hide";
  ocultarTexto:any="";
  className: string = 'quitar';
  hora:any="12:00"
  ngOnInit() {
    this.fecha = new Date().toISOString();
    console.log(this.fecha)
  }
  calendario(){
    if(this.ocultarTexto==""){
      this.mostrarCalendario = ""
      this.ocultarTexto="hide"
    }
  }
  mas(){
    this.numeroCantidad+=1
    if(this.numeroCantidad>1){
      this.cantidad=this.numeroCantidad +" Personas";
    }else{
      this.cantidad=this.numeroCantidad +" Persona";
    }
  }
  menos(){
    if(this.numeroCantidad>1){
      this.numeroCantidad-=1
      if(this.numeroCantidad>=2){
        this.cantidad=this.numeroCantidad +" Personas";
      }else{
        this.cantidad=this.numeroCantidad +" Persona";
      }
    }
  }
  aceptar(){
    if(this.className == 'quitar'){
      this.className = 'mostrar';
    }else{
      this.className = 'quitar';
    }
    return false;
  }
  cancelar(){
    if(this.className == 'quitar'){
      this.className = 'mostrar';
    }else{
      this.className = 'quitar';
    }
    return false;
  }
  dateSelected($event){
    console.log($event.toLocaleString())
  }
  atras(){
    this.navCtrl.back();
  }
}
