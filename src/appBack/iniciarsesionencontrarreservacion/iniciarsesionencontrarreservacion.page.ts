import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-iniciarsesionencontrarreservacion',
  templateUrl: './iniciarsesionencontrarreservacion.page.html',
  styleUrls: ['./iniciarsesionencontrarreservacion.page.scss'],
})
export class IniciarsesionencontrarreservacionPage implements OnInit {

  constructor(private router: Router,private navController: NavController) { }
  className: string = 'quitar';
  ngOnInit() {
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
