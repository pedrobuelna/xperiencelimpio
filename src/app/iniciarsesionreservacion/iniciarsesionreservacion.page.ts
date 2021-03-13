import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-iniciarsesionreservacion',
  templateUrl: './iniciarsesionreservacion.page.html',
  styleUrls: ['./iniciarsesionreservacion.page.scss'],
})
export class IniciarsesionreservacionPage implements OnInit {

  constructor(private router: Router,private navController: NavController) { }

  ngOnInit() {
  }
  atras(){
    this.navController.back();
  }
  siguiente(){
    this.router.navigate(['/iniciarsesionreservacion']);
  }
  si(){
    this.router.navigate(['/iniciarsesionencontrarreservacion']);
  }
  no(){
    this.router.navigate(['/crearperfil']);
  }
}
