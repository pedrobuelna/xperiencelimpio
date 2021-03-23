import { Component, ElementRef, OnInit, ViewChild,Renderer2} from '@angular/core';
import { NavController,Platform } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	public items = ["../assets/images/introimg1.jpg",
    // "../assets/images/introimg2.jpg",
    "../assets/images/introimg3.jpg",
    // "../assets/images/introimg4.jpg",
    // "../assets/images/introimg5.jpg",
    "../assets/images/introimg6.jpg",
    //"../assets/images/introimg7.jpg"
  ];
  public items2 = [
    {
      titulo:"¡Bienvenido!",
      subtitulo:"Tu Xperiencia en un solo lugar",
      saltar:"SALTAR",
      siguiente:"SIGUIENTE"
    },
    // {
    //   titulo:"",
    //   subtitulo:"Una sección para cada viaje. Podrás también descubrir nuestras actividades y tipos de alojamientos.",
    //   saltar:"SALTAR",
    //   siguiente:"SIGUIENTE"
    // },
    {
      titulo:"",
      subtitulo:"Tus Xperiencias viven aqui, siempre en un solo toque.",
      saltar:"SALTAR",
      siguiente:"SIGUIENTE"
    },
    // {
    //   titulo:"",
    //   subtitulo:"Consulta tus viajes y agrega actividades, reservaciones en restaurantes o entrenamientos.",
    //   saltar:"SALTAR",
    //   siguiente:"SIGUIENTE"
    // },
    // {
    //   titulo:"",
    //   subtitulo:"Chatea con nosotros en cualquier momento, en cualquier idioma, para informes o una requisición especial.",
    //   saltar:"SALTAR",
    //   siguiente:"SIGUIENTE"
    // },
    {
      titulo:"",
      subtitulo:"Nuestro exclusivo concierge digital es toda una Xperiencia.",
      saltar:"SALTAR",
      siguiente:"SIGUIENTE"
    },
    // {
    //   titulo:"",
    //   subtitulo:"Tu perfil y preferencias siempre a la mano para que hagas de tu estadía la mejor Xperiencia.",
    //   saltar:"SALTAR",
    //   siguiente:"SIGUIENTE"
    // },
  ];
  public sliderOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:false,
    mousewheel: true,
    cssMode: false,
    allowTouchMove: false,
    //Con el pagination asi no los muestra
    pagination: {
      clickable: true,
    }
  };
  public sliderOptions2 = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:false,
    allowTouchMove: false
    //Si quito el pagination muestra los bullets pero no deja dar click
    // pagination: {
    //   clickable: true,
    // }
    //Con el pagination asi los muestra y deja dar click
    // pagination: {
    //   el: ".swiper-pagination",
    //   type: "bullets",
    //   clickable: true
    // }
  };
  constructor(public navCtrl: NavController,private renderer: Renderer2,
    private nativeStorage:NativeStorage,public platform:Platform) {
        this.platform.ready().then(() => {
            this.nativeStorage.getItem('saltarIntro')
            .then(
                saltarIntro => {
                    this.navCtrl.navigateRoot("inicio");
                },
                error =>{
                    this.nativeStorage.setItem('saltarIntro', {
                        status:true
                    }).then(
                        () => {},
                        
                    );
                }
            );            
        });
    }
  @ViewChild('slides') slides;
  @ViewChild('slides2') slides2;
  @ViewChild("content_atras") content_atras: ElementRef;
  bandera: boolean;
  ngOnInit() {
    this.bandera=false;
  }
  nextSlide() {
    this.slides.slideNext();
    this.slides2.slideNext(); 
  }
  prevSlide() {
    this.slides.slidePrev();
    this.slides2.slidePrev();
  }
  slideChanged(){
    this.slides.getActiveIndex().then(index => {
      // console.log(index);
      // console.log('currentIndex:', index);
      this.slides2.slideTo(index);
      //console.log(this.slides.length)
      if(index==2){
        this.addMyClass();
        this.bandera=true;
      }
      // OR this.slides.slideTo(index + 1);
    });
  }
  slideChanged2(){
    this.slides2.getActiveIndex().then(index => {
      // console.log(index);
      // console.log('currentIndex2:', index);
	    this.slides.slideTo(index);
      // OR this.slides.slideTo(index + 1);
    });
  }
  addMyClass(){
    //this.myButton.nativeElement.classList.add("my-class"); //BAD PRACTICE
    this.renderer.addClass(this.content_atras.nativeElement, "quitSaltar");
  }
  xperience(){
    this.navCtrl.navigateRoot("xperience")
  }
}
