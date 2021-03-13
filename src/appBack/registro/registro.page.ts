import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private router: Router,private navController: NavController) { }

  ngOnInit() {
  }
  atras(){
    
    this.navController.back();
  }
  siguiente(){
    this.router.navigate(['/iniciarsesioncodigo']);
  }
}
