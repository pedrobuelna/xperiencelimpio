import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-iniciarsesioncodigo',
  templateUrl: './iniciarsesioncodigo.page.html',
  styleUrls: ['./iniciarsesioncodigo.page.scss'],
})
export class IniciarsesioncodigoPage implements OnInit {

  constructor(private router: Router,private navController: NavController) { }

  ngOnInit() {
  }

  atras(){
    this.navController.back();
  }
  siguiente(){
    this.router.navigate(['/iniciarsesionreservacion']);
  }
}
