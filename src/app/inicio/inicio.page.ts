import { Component, OnInit, Renderer2 } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public items = ["../assets/images/sliderinicio1.jpg",
    "../assets/images/sliderinicio1.jpg"
  ];
  public sliderOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:false,
    //allowTouchMove: false,
    //Si quito el pagination muestra los bullets pero no deja dar click
    // pagination: {
    //   clickable: true,
    // }
    //Con el pagination asi los muestra y deja dar click
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    }
  };
  constructor(public navCtrl: NavController,private renderer: Renderer2){ }

  ngOnInit() {
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
}
