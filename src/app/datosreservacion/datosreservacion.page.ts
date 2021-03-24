import {
    Component,
    OnInit
} from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl
} from "@angular/forms";
import {
  ActivatedRoute,
    Router
} from '@angular/router';
import {
    NavController
} from '@ionic/angular';
import { TaskService } from '../services/task.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
@Component({
    selector: 'app-datosreservacion',
    templateUrl: './datosreservacion.page.html',
    styleUrls: ['./datosreservacion.page.scss'],
})
export class DatosreservacionPage implements OnInit {
    ionicForm: FormGroup;
    isSubmitted = false;
    orderObj:any;
    constructor(
        private navCtrl: NavController, 
        public formBuilder: FormBuilder,
        private router: Router,
        private apiRest: TaskService,private route: ActivatedRoute,
        private nativeStorage:NativeStorage) {
        this.ionicForm = this.formBuilder.group({
            nombre: ['', [Validators.required]],
            apellido: ['', [Validators.required]],
            celular: ['', [Validators.required]],
            correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            password: ['', [Validators.required]]
        })
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    ngOnInit() {
      this.route.queryParams.subscribe((queryParams) => {
          this.orderObj = {
            categoria_id:queryParams.categoria_id,
            fechacheckin:queryParams.fechacheckin,
            fechacheckout:queryParams.fechacheckout,
            ninos:queryParams.ninos,
            adultos:queryParams.adultos
          };
        });
      this.route.queryParams.subscribe(queryParams =>  
        console.log("VALOR ID: "+queryParams.categoria_id+" VALOR FECHA CHECKIN: "+queryParams.fechacheckin+" VALOR FECHA CECKOUT: "+queryParams.fechacheckout+" VALOR ninos: "+queryParams.ninos+" VALOR adultos: "+queryParams.adultos)
      );
    }
    politicascancelacion() {
        this.router.navigate(['politicascancelacion'])
    }
    submitForm() {
      console.log("categoria id: " + this.orderObj.categoria_id)
      console.log("fechacheckin: " + this.orderObj.fechacheckin)
      console.log("fechacheckout: " + this.orderObj.fechacheckout)
      console.log("adultos: " + this.orderObj.adultos)
      console.log("ninos" + this.orderObj.ninos)
      let datosReserva = {
        id:this.orderObj.categoria_id,
        f_checkin:this.orderObj.fechacheckin + "13:00:00",
        f_checkout:this.orderObj.fechacheckout + "11:00:00",
        adultos:this.orderObj.adultos,
        ninos:this.orderObj.ninos,
        id_room:771,
        habitacion:"Habitacion 111 - Petite secret room - Single room",//Habitacion + categoria
      }
      let data=this.apiRest.postCrearReserva(datosReserva);
      console.log(data);

        this.isSubmitted = true;
        if (!this.ionicForm.valid) {
            console.log('Please provide all the required values!')
            return false;
        } else {
            console.log("Campos correctos en login (LOGUEADO)" + this.ionicForm.valid)
            
            this.nativeStorage.getItem('app')
            .then(
                app => {
                    //Datos del cliente
                    let datosReserva = {
                        id:"",
                        f_checkin:"",
                        f_checkout:"",
                        adultos:2,
                        ninos:0,
                        id_room:771,
                        habitacion:"Habitacion 111 - Petite secret room - Single room",//Habitacion + categoria
                    }
                    this.generarReserva(this.generarReserva(datosReserva));
                },
                error => {
                    //Datos del usuario
                    let datosReserva = {
                        id:"",
                        f_checkin:"",
                        f_checkout:"",
                        adultos:2,
                        ninos:0,
                        id_room:771,
                        habitacion:"Habitacion 111 - Petite secret room - Single room",//Habitacion + categoria
                    }
                    this.generarReserva(this.generarReserva(datosReserva));
                }
            );
        }
    }
    generarReserva(datosReserva){
        this.apiRest.postCrearReserva(datosReserva);
    }
    atras() {
        this.navCtrl.back();
    }
}