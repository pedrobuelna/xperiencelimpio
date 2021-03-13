import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private router: Router,private navController: NavController) { }
  inis: string = 'inis';
  inic: string = 'inic';
  inivp: string = 'inivp';
  circuloxperience: string = '';
  circulocontacto: string = '';
  circuloperfil: string = '';
  ngOnInit() {
    this.inivp = '';
  }
  inicio(){
    this.router.navigate(['/inicio']);
    this.inis = 'inis';
    this.inic = 'inic';
    this.inivp = '';
    this.circuloxperience = 'circulo3'
    this.circulocontacto = 'circulo2'
    this.circuloperfil = 'circulo'
  }
  iniciarsesion(){
    this.router.navigate(['/registro']);
  }
  registro(){
    this.router.navigate(['/crearperfil']);
  }
  menu(){
    this.router.navigate(['/menu']);
    this.inis = 'inis';
    this.inic = 'inic';
    this.inivp = '';
    this.circuloxperience = 'circulo3'
    this.circulocontacto = 'circulo2'
    this.circuloperfil = 'circulo'
  }
  activar(val){
    if(val == 1){
      this.inis = '';
      this.inic = 'inic';
      this.inivp = 'inivp';
      this.circuloxperience = 'circulo'
      this.circulocontacto = 'circulo2'
      this.circuloperfil = 'circulo3'
    }else if(val == 2){
      this.inic = '';
      this.inis = 'inis';
      this.inivp = 'inivp';
      this.circuloxperience = 'circulo3'
      this.circulocontacto = 'circulo'
      this.circuloperfil = 'circulo3'
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
