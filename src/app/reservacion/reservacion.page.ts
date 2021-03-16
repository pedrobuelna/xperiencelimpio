import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.page.html',
  styleUrls: ['./reservacion.page.scss'],
})
export class ReservacionPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  numeroCantidad:any=1;
  cantidad:any=this.numeroCantidad + " Persona";
  numeroCantidadMenores:any=0;
  cantidadMenores:any=this.numeroCantidadMenores + " Menor";
  ngOnInit() {
  }
  atras(){
    this.navCtrl.back();
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
  masMenores(){
    this.numeroCantidadMenores+=1
    if(this.numeroCantidadMenores>1){
      this.cantidadMenores=this.numeroCantidadMenores +" Menores";
    }else{
      this.cantidadMenores=this.numeroCantidadMenores +" Menor";
    }
  }
  menosMenores(){
    if(this.numeroCantidadMenores>0){
      this.numeroCantidadMenores-=1
      if(this.numeroCantidadMenores>=2){
        this.cantidadMenores=this.numeroCantidadMenores +" Menores";
      }else{
        this.cantidadMenores=this.numeroCantidadMenores +" Menor";
      }
    }
  }
}
