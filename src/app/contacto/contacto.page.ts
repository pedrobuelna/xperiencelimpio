import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor(private router: Router,private navController: NavController) { }
  inis: string = 'inis';
  inic: string = 'inic';
  inivp: string = 'inivp';
  circuloxperience: string = '';
  circulocontacto: string = '';
  circuloperfil: string = '';
  ngOnInit() {
    this.inic = '';
  }
  inicio(){
    this.router.navigate(['/inicio']);
    this.inic = '';
    this.inis = 'inis';
    this.inivp = 'inivp';
    this.circuloxperience = 'circulo3'
    this.circulocontacto = 'circulo'
    this.circuloperfil = 'circulo2'
  }
  iniciarsesion(){
    this.router.navigate(['/registro']);
    this.inic = '';
    this.inis = 'inis';
    this.inivp = 'inivp';
    this.circuloxperience = 'circulo3'
    this.circulocontacto = 'circulo'
    this.circuloperfil = 'circulo2'
  }
  registro(){
    this.router.navigate(['/crearperfil']);
    this.inic = '';
    this.inis = 'inis';
    this.inivp = 'inivp';
    this.circuloxperience = 'circulo3'
    this.circulocontacto = 'circulo'
    this.circuloperfil = 'circulo2'
  }
  menu(){
    this.router.navigate(['/menu']);
    this.inic = '';
    this.inis = 'inis';
    this.inivp = 'inivp';
    this.circuloxperience = 'circulo3'
    this.circulocontacto = 'circulo'
    this.circuloperfil = 'circulo2'
  }
  activar(val){
    if(val == 1){
      this.inis = '';
      this.inic = 'inic';
      this.inivp = 'inivp';
      this.circuloxperience = 'circulo'
      this.circulocontacto = 'circulo3'
      this.circuloperfil = 'circulo2'
    }else if(val == 2){
      this.inic = '';
      this.inis = 'inis';
      this.inivp = 'inivp';
      this.circuloxperience = 'circulo3'
      this.circulocontacto = 'circulo'
      this.circuloperfil = 'circulo2'
    }else if(val == 3){
      this.inis = 'inis';
      this.inic = 'inic';
      this.inivp = '';
      this.circuloxperience = 'circulo2'
      this.circulocontacto = 'circulo3'
      this.circuloperfil = 'circulo'
    }
    return false;
  }

}
