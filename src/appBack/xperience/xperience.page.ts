import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-xperience',
  templateUrl: './xperience.page.html',
  styleUrls: ['./xperience.page.scss'],
})
export class XperiencePage implements OnInit {

  constructor(private router: Router,private navController: NavController) { }
  inis: string = 'inis';
  inic: string = 'inic';
  inivp: string = 'inivp';
  circuloxperience: string = '';
  circulocontacto: string = '';
  circuloperfil: string = '';
  ngOnInit() {
    this.inis = '';
  }
  inicio(){
    this.router.navigate(['/inicio']);
    this.inis = '';
      this.inic = 'inic';
      this.inivp = 'inivp';
      this.circuloxperience = 'circulo'
      this.circulocontacto = 'circulo2'
      this.circuloperfil = 'circulo2'
  }
  iniciarsesion(){
    this.router.navigate(['/registro']);
    this.inis = '';
      this.inic = 'inic';
      this.inivp = 'inivp';
      this.circuloxperience = 'circulo'
      this.circulocontacto = 'circulo2'
      this.circuloperfil = 'circulo2'
  }
  registro(){
    this.router.navigate(['/crearperfil']);
    this.inis = '';
      this.inic = 'inic';
      this.inivp = 'inivp';
      this.circuloxperience = 'circulo'
      this.circulocontacto = 'circulo2'
      this.circuloperfil = 'circulo2'
  }
  menu(){
    this.router.navigate(['/menu']);
    this.inis = '';
      this.inic = 'inic';
      this.inivp = 'inivp';
      this.circuloxperience = 'circulo'
      this.circulocontacto = 'circulo2'
      this.circuloperfil = 'circulo2'
  }

  activar(val){
    if(val == 1){
      this.inis = '';
      this.inic = 'inic';
      this.inivp = 'inivp';
      this.circuloxperience = 'circulo'
      this.circulocontacto = 'circulo2'
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
      this.circuloxperience = 'circulo3'
      this.circulocontacto = 'circulo2'
      this.circuloperfil = 'circulo'
    }
    return false;
  }
}
