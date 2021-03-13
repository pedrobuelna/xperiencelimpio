import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menulogueado',
  templateUrl: './menulogueado.page.html',
  styleUrls: ['./menulogueado.page.scss'],
})
export class MenulogueadoPage implements OnInit {

  constructor(private router: Router,
    private navCtrl: NavController) { }

  ngOnInit() {
  }
  iniciologueado(){
    //this.navCtrl.navigateRoot("")
    this.router.navigate(['/iniciologueado']);
  }
  terminos(){
    //this.navCtrl.navigateRoot("terminos")
    this.router.navigate(['/terminos']);
  }
  menuconcierge(){
    //this.navCtrl.navigateRoot("menuconcierge")
    this.router.navigate(['/menuconcierge']);
  }
  menusereia(){
    //this.navCtrl.navigateRoot("menusereia")
    this.router.navigate(['/menusereia']);
  }
  menuquickfit(){
    //this.navCtrl.navigateRoot("menuquickfit")
    this.router.navigate(['/menuquickfit']);
  }
  cerrarsesion(){
    this.navCtrl.navigateRoot("registro")
  }
  registro(){
    this.router.navigate(['/crearperfil']);
  }
}
