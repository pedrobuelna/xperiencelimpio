import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-menuquickfit',
  templateUrl: './menuquickfit.page.html',
  styleUrls: ['./menuquickfit.page.scss'],
})
export class MenuquickfitPage implements OnInit {
  constructor(private router: Router,
    private navCtrl: NavController,
    private navController: NavController) { }
  inis: string = 'inis';
  inic: string = 'inic';
  inivp: string = 'inivp';
  circuloxperience: string = '';
  circulocontacto: string = '';
  circuloperfil: string = '';
  ngOnInit() {
    this.inivp = '';
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
    this.router.navigate(['/menusereia']);
  }
  menu(){
    this.router.navigate(['/menulogueado']);
  }
  cerrarsesion(){
    this.navCtrl.navigateRoot("registro")
  }
  registro(){
    this.router.navigate(['/crearperfil']);
  }
  
  
}
