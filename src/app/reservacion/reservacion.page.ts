import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NavController} from '@ionic/angular';
import { DatePickerModule } from 'ionic4-date-picker';
@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.page.html',
  styleUrls: ['./reservacion.page.scss'],
})
export class ReservacionPage implements OnInit {
  constructor(private navCtrl: NavController,private router: Router) { }
  numeroCantidad:any=1;
  cantidad:any=this.numeroCantidad + " Adulto";
  numeroCantidadMenores:any=0;
  cantidadMenores:any=this.numeroCantidadMenores + " Menor";
  showbusqueda:any="";
  showcalendariocheckin:any="";
  showcalendariocheckout:any="";
  diacheckin:any;
  mescheckin:any;
  aniocheckin:any;
  diacheckout:any;
  mescheckout:any;
  aniocheckout:any;
  monthNames:any = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  dateObj:any = new Date();
  currentmonth:any = this.dateObj.getUTCMonth(); //months from 1-12
  currentday:any = this.dateObj.getUTCDate();
  currentyear:any = this.dateObj.getUTCFullYear();
  diffInDays:any;
  diffInMs:any;
  fechaIn:any;
  fechaOut:any;
  ngOnInit() {
    this.diacheckin = this.currentday;
    this.mescheckin = this.monthNames[this.currentmonth];
    this.aniocheckin = this.currentyear;

    this.diacheckout = this.dateObj.getUTCDate() + 1;
    this.mescheckout = this.monthNames[this.currentmonth];
    this.aniocheckout = this.currentyear;
    // this.fechaIn = this.aniocheckin.toString()+"-"+this.mescheckin.toString()+"-"+this.diacheckin.toString()
    // this.fechaOut = this.aniocheckout.toString()+"-"+this.mescheckout.toString()+"-"+this.diacheckout.toString()
    // this.diffInMs   = new Date(parseDate(this.fechaOut)) - new Date(parseDate(fechaIn))
    // this.diffInDays = this.diffInMs / (1000 * 60 * 60 * 24);
    // console.log(this.diffInDays)
  }
  datosreservacion(){
    this.router.navigate(['datosreservacion']);
  }
  fechaCheckin($event){
    console.log($event.toLocaleString());
    var month = $event.getUTCMonth(); //months from 1-12
    var day = $event.getUTCDate();
    var daycheckout = $event.getUTCDate() + 1;
    var year = $event.getUTCFullYear();
    this.diacheckin = day;
    this.mescheckin = this.monthNames[month];
    this.aniocheckin = year
    this.diacheckout = daycheckout;
    this.mescheckout = this.monthNames[month];;
    this.aniocheckout = year
  }
  fechaCheckout($event){
    console.log($event.toLocaleString());
    var month = $event.getUTCMonth(); //months from 1-12
    var day = $event.getUTCDate();
    var year = $event.getUTCFullYear();
    this.diacheckout = day;
    this.mescheckout = this.monthNames[month];;
    this.aniocheckout = year
  }
  mostrarCheckin(){
    if(this.showcalendariocheckin==""){
      this.showcalendariocheckin="showCal"
      this.showcalendariocheckout=""
    }else{
      this.showcalendariocheckin=""
    }
  }
  mostrarCheckout(){
    if(this.showcalendariocheckout==""){
      this.showcalendariocheckout="showCal"
      this.showcalendariocheckin=""
    }else{
      this.showcalendariocheckout=""
    }
  }
  busqueda(){
    if(this.showbusqueda==""){
      this.showbusqueda="show";
    }else{
      //this.showbusqueda="";
    }
  }
  atras(){
    this.navCtrl.back();
  }
  mas(){
    this.numeroCantidad+=1
    if(this.numeroCantidad>1){
      this.cantidad=this.numeroCantidad +" Adultos";
    }else{
      this.cantidad=this.numeroCantidad +" Adulto";
    }
  }
  menos(){
    if(this.numeroCantidad>1){
      this.numeroCantidad-=1
      if(this.numeroCantidad>=2){
        this.cantidad=this.numeroCantidad +" Adultos";
      }else{
        this.cantidad=this.numeroCantidad +" Adulto";
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
