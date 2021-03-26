import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router
} from '@angular/router';
import { NavController,AlertController } from '@ionic/angular';
import {
    TaskService
} from '../services/task.service';
import {
    NativeStorage
} from '@ionic-native/native-storage/ngx';
import {
    DatePickerModule
} from 'ionic4-date-picker';
@Component({
    selector: 'app-reservacion',
    templateUrl: './reservacion.page.html',
    styleUrls: ['./reservacion.page.scss'],
})
export class ReservacionPage implements OnInit {
    constructor(
        private navCtrl: NavController, 
        private router: Router, 
        public alertController: AlertController,
        private taskService: TaskService,
        private nativeStorage:NativeStorage) {}
    numeroCantidad: any = 1;
    cantidad: any = this.numeroCantidad + " Adulto";
    numeroCantidadMenores: any = 0;
    cantidadMenores: any = this.numeroCantidadMenores + " Menor";
    showbusqueda: any = "";
    showcalendariocheckin: any = "";
    showcalendariocheckout: any = "";
    mostrarencontrar: any = "";
    diacheckin: any;
    mescheckin: any;
    aniocheckin: any;
    diacheckout: any;
    mescheckout: any;
    aniocheckout: any;
    monthNames: any = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    fechachekincompleta: any;
    fechachekoutcompleta: any;
    dateObj: any = new Date();
    currentmonth: any = this.dateObj.getUTCMonth(); //months from 1-12
    currentday: any = this.dateObj.getUTCDate();
    currentyear: any = this.dateObj.getUTCFullYear();
    diffInDays: any;
    diffInMs: any;
    fechaIn: any;
    fechaOut: any;
    habitaciones: any;
    noches:any;
    diacheckoutSinver:any;
    mescheckoutSinver:any;
    aniocheckoutSinver:any;
    ngOnInit() {
      this.diacheckin = this.currentday;
      this.mescheckin = this.monthNames[this.currentmonth];
      this.aniocheckin = this.currentyear;
      this.diacheckout = this.dateObj.getUTCDate() + 1;
      this.mescheckout = this.monthNames[this.currentmonth];
      this.aniocheckout = this.currentyear;
      this.fechachekincompleta = this.aniocheckin+"-"+(("0" + (this.dateObj.getUTCMonth()+1)).slice(-2))+"-"+this.diacheckin
      this.fechachekoutcompleta= this.aniocheckout+"-"+(("0" + (this.dateObj.getUTCMonth()+1)).slice(-2))+"-"+this.diacheckout
      // this.fechaIn = this.aniocheckin.toString()+"-"+this.mescheckin.toString()+"-"+this.diacheckin.toString()
      // this.fechaOut = this.aniocheckout.toString()+"-"+this.mescheckout.toString()+"-"+this.diacheckout.toString()
      // this.diffInMs   = new Date(parseDate(this.fechaOut)) - new Date(parseDate(fechaIn))
      // this.diffInDays = this.diffInMs / (1000 * 60 * 60 * 24);
      // console.log(this.diffInDays)
    }
    datosreservacion(categoria_id){
        this.nativeStorage.getItem('app')
        .then(
            app => {
                console.log("APP NS");
                console.log(app);
                this.router.navigate(['/datosreservacion'], {
                    queryParams: {
                    categoria_id: categoria_id,
                    fechacheckin:this.fechachekincompleta,
                    fechacheckout:this.fechachekoutcompleta,
                    cantidadpersonas: (this.numeroCantidad + this.numeroCantidadMenores),
                    ninos:this.numeroCantidadMenores,
                    adultos: this.numeroCantidad
                    }
                });
            },
            error => {
                alert("Es necesario estar registrado para poder realizar una reservación.")        
            }
        );
    }
    fechaCheckin($event) {
      this.mostrarencontrar="hide"
        this.showbusqueda=""
        var month = $event.getUTCMonth(); //months from 1-12
        var day = $event.getUTCDate();
        var daycheckout = $event.getUTCDate() + 1;
        var year = $event.getUTCFullYear();

        this.diacheckin = day;
        this.mescheckin = this.monthNames[month];
        this.aniocheckin = year

        // this.diacheckout = daycheckout;
        // this.mescheckout = this.monthNames[month];
        // this.aniocheckout = year
        this.diacheckoutSinver = day;
        this.mescheckoutSinver = this.monthNames[month];
        this.aniocheckoutSinver = year
        
        this.fechachekincompleta = this.aniocheckin + "-" + (("0" + ($event.getUTCMonth()+1)).slice(-2)) + "-" + this.diacheckin;
        this.fechachekoutcompleta = this.aniocheckoutSinver + "-" + (("0" + ($event.getUTCMonth()+1)).slice(-2)) + "-" + this.diacheckoutSinver

        
        console.log("CHECKIN  en fecha checkin" + this.fechachekincompleta)
        console.log("CHECKOUT  en fecha checkin" + this.fechachekoutcompleta);
        var date1 = new Date(this.fechachekincompleta);
        var date2 = new Date(this.fechachekoutcompleta);
        // To calculate the time difference of two dates
        var Difference_In_Time = date2.getTime() - date1.getTime();
        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        Difference_In_Days = Math.trunc(Difference_In_Days)
        this.noches = ", "+Difference_In_Days + " Noche(s)";
        //To display the final no. of days (result)
        // alert("Total numero de dias entre fechas  <br>"
        //                + date1 + "<br> y <br>" 
        //                + date2 + " is: <br> " 
        //                + Difference_In_Days);
        var date3 = new Date(this.fechachekincompleta);
        var date4 = new Date();
        // To calculate the time difference of two dates
        var Difference_In_Time2 = date3.getTime() - date4.getTime();
        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time2 / (1000 * 3600 * 24);
        // To calculate the time difference of two dates
        Difference_In_Days = Math.trunc(Difference_In_Days)
        if(Difference_In_Days <0){
          this.alertCheckin();
          this.mostrarencontrar="hide"
          //this.showbusqueda=""
        }else{
          //this.mostrarencontrar=""
        }
    }
    async alertCheckin() {
      const alert = await this.alertController.create({
        cssClass: 'class_alert',
        header: 'Mensaje de XPERIENCE',
        //subHeader: 'Subtitle',
        message: 'Fecha del CHECKIN debe ser igual o mayor a la fecha de hoy.',
        buttons: ['OK']
      });
      await alert.present();
    }
    async alertCheckout() {
      const alert = await this.alertController.create({
        cssClass: 'class_alert',
        header: 'Mensaje de XPERIENCE',
        //subHeader: 'Subtitle',
        message: 'Fecha del CHECKOUT debe ser mayor a la fecha del CHECKIN y Fecha CHECKIN Mayor al dia de hoy.',
        buttons: ['OK']
      });
      await alert.present();
    }
    fechaCheckout($event) {
        
        var month = $event.getUTCMonth(); //months from 1-12
        var day = $event.getUTCDate();
        var year = $event.getUTCFullYear();
        this.diacheckout = day;
        this.mescheckout = this.monthNames[month];
        this.aniocheckout = year
        this.fechachekoutcompleta = this.aniocheckout + "-" + (("0" + ($event.getUTCMonth()+1)).slice(-2)) + "-" + this.diacheckout
        console.log("CHECKIN  en fecha checkout" + this.fechachekincompleta)
        console.log("CHECKOUT  en fecha checkin" + this.fechachekoutcompleta);
        var date1 = new Date(this.fechachekincompleta);
        var date2 = new Date(this.fechachekoutcompleta);
        
        // To calculate the time difference of two dates
        var Difference_In_Time = date1.getTime() - date2.getTime();
        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        Difference_In_Days = Math.trunc(Difference_In_Days)
        this.noches = ", "+Difference_In_Days + " Noche(s)";

        console.log(Difference_In_Days+"FECHA 1")

        var date3 = new Date();//dia actual
        var Difference_In_Time2 = date2.getTime() - date3.getTime();
        // To calculate the no. of days between two dates
        var Difference_In_Days2 = Difference_In_Time2 / (1000 * 3600 * 24);
        Difference_In_Days2 = Math.trunc(Difference_In_Days2)

        console.log(Difference_In_Days2+" FECHA 2")

        if(Difference_In_Days2<0){
          console.log(Difference_In_Days2+" FECHA 2 2")
        }

        
        if(Difference_In_Days >0 || Difference_In_Days2<=0){
          this.alertCheckout();
          this.mostrarencontrar="hide"
          this.showbusqueda=""
        }else{
          this.mostrarencontrar=""
        }
    }
    mostrarCheckin() {
        if (this.showcalendariocheckin == "") {
            this.showcalendariocheckin = "showCal"
            this.showcalendariocheckout = ""
        } else {
            this.showcalendariocheckin = ""
        }
    }
    mostrarCheckout() {
        if (this.showcalendariocheckout == "") {
            this.showcalendariocheckout = "showCal"
            this.showcalendariocheckin = ""
        } else {
            this.showcalendariocheckout = ""
        }
    }
    busqueda() {
        // if (this.showbusqueda == "") {
            this.taskService.getHabitaciones(this.fechachekincompleta, this.fechachekoutcompleta,(this.numeroCantidad + this.numeroCantidadMenores))
                .subscribe(habitaciones => {
                    this.habitaciones = habitaciones
                    var date1 = new Date(this.fechachekincompleta);
                    var date2 = new Date(this.fechachekoutcompleta);
                      
                    // To calculate the time difference of two dates
                    var Difference_In_Time = date2.getTime() - date1.getTime();
                      
                    // To calculate the no. of days between two dates
                    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
                    Difference_In_Days = Math.trunc(Difference_In_Days)
                    this.noches = ", "+Difference_In_Days + " Noche(s)";
                    //To display the final no. of days (result)
                    // alert("Total numero de dias entre fechas  <br>"
                    //               + date1 + "<br> y <br>" 
                    //               + date2 + " is: <br> " 
                    //               + Difference_In_Days);
                    this.showbusqueda = "show";
                    //$('#divHabitaciones').scrollTop(); //TODO activar jquery para hacer el scroll
                    setTimeout(function(){ 
                        document.getElementById("divHabitaciones").scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 500);
                    
                });
        // } else {
        //     //this.showbusqueda="";
        // }
    }
    atras() {
        this.navCtrl.back();
    }
    mas() {
      if((this.numeroCantidad + this.numeroCantidadMenores) <=3 ){
        this.numeroCantidad += 1
        if (this.numeroCantidad > 1) {
            this.cantidad = this.numeroCantidad + " Adultos";
        } else {
            this.cantidad = this.numeroCantidad + " Adulto";
        }
      } 
    }
    menos() {
      if((this.numeroCantidad + this.numeroCantidadMenores) <=4 ){
        if (this.numeroCantidad > 1) {
          this.numeroCantidad -= 1
          if (this.numeroCantidad >= 2) {
              this.cantidad = this.numeroCantidad + " Adultos";
          } else {
              this.cantidad = this.numeroCantidad + " Adulto";
          }
        }
      }
    }
    masMenores() {
      if((this.numeroCantidad + this.numeroCantidadMenores) <=3 ){
        this.numeroCantidadMenores += 1
        if (this.numeroCantidadMenores > 1) {
            this.cantidadMenores = this.numeroCantidadMenores + " Menores";
        } else {
            this.cantidadMenores = this.numeroCantidadMenores + " Menor";
        }
      }
    }
    menosMenores() {
        if (this.numeroCantidadMenores > 0) {
          if((this.numeroCantidad + this.numeroCantidadMenores) <=4 ){
            this.numeroCantidadMenores -= 1
            if (this.numeroCantidadMenores >= 2) {
                this.cantidadMenores = this.numeroCantidadMenores + " Menores";
            } else {
                this.cantidadMenores = this.numeroCantidadMenores + " Menor";
            }
          }
        }
    }
}