import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-crearperfil',
  templateUrl: './crearperfil.page.html',
  styleUrls: ['./crearperfil.page.scss'],
})
export class CrearperfilPage implements OnInit {

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
}
