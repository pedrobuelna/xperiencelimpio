import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public sliderOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:false,
    //allowTouchMove: false,
    //Si quito el pagination muestra los bullets pero no deja dar click
    pagination: {
      clickable: true,
    }
    //Con el pagination asi los muestra y deja dar click
    // pagination: {
    //   el: ".swiper-pagination",
    //   type: "bullets",
    //   clickable: true
    // }
  };
  constructor(private router: Router,private navCtrl: NavController) { }
  inis: string = 'inis';
  inic: string = 'inic';
  inivp: string = 'inivp';
  circuloxperience: string = '';
  circulocontacto: string = '';
  circuloperfil: string = '';
  ngOnInit() {
    this.inis = '';
  }
  atras(){
    this.navCtrl.back();
  }
  reservacion(){
    this.router.navigate(["/reservacion"])
  }
  inicio(){
    this.navCtrl.navigateRoot("inicio")
  }
  xperience(){
    this.navCtrl.navigateRoot("xperience")
  }
  contacto(){
    this.navCtrl.navigateRoot("contacto")
  }
  perfil(){
    this.navCtrl.navigateRoot("perfil")
  }
  menu(){
    this.navCtrl.navigateRoot("menu")
  }
  iniciarsesion(){
    this.navCtrl.navigateRoot("registro")
  }
  avisoprivacidad(){
    this.router.navigate(['/avisoprivacidad']);
  }
  terminos(){
    //this.navCtrl.navigateRoot("terminos")
    this.router.navigate(['/terminostxt']);
  }
  
}
