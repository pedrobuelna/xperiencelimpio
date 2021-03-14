import {
    Component,
    OnInit
} from '@angular/core';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    NavController
} from '@ionic/angular';
import {
    TaskService
} from '../services/task.service';
import {
    NativeStorage
} from '@ionic-native/native-storage/ngx';
@Component({
    selector: 'app-menuconcierge',
    templateUrl: './menuconcierge.page.html',
    styleUrls: ['./menuconcierge.page.scss'],
})
export class MenuconciergePage implements OnInit {

    constructor(private router: Router, private navCtrl: NavController,
        private route: ActivatedRoute, private rest: TaskService, private nativeStorage: NativeStorage) {}
    user_id: any;
    name: any;
    email: any;
    x_descauto: any;
    x_placas: any;
    switchToallas:any=false;
    switchLimpieza:any=false;
    switchAmenidades:any=false;
    switchAgua:any=false;
    switchTv:any=false;
    switchAire:any=false;
    switchBanio:any=false;
    switchMantenimiento:any=false;
    switchValet:any=false;
    switchNoMolestar:any=false;
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.user_id = params.user_id
            this.name = params.name,
                this.email = params.email,
                this.x_descauto = params.x_descauto,
                this.x_placas = params.x_placas
        });
        console.log(this.user_id + " " + this.name + " " + this.email)
    }
    ionViewWillEnter() {
        this.nativeStorage.getItem('app')
        .then(
            app => {
                console.log(app)
                this.user_id = app.user_id;
                this.getMailActivityTeam(23,"switchNoMolestar");//Valet
                this.getMailActivityTeam(15,"switchValet");//Valet
                this.getMailActivityTeam(14,"switchToallas");//Toallas
                this.getMailActivityTeam(16,"switchLimpieza");//Limpieza
                this.getMailActivityTeam(17,"switchAmenidades");//Amenidades
                this.getMailActivityTeam(18,"switchAgua");//Agua
                this.getMailActivityTeam(26,"switchMantenimiento");//Mantenimiento
                this.getMailActivityTeam(22,"switchTv");//Smart Tv
                this.getMailActivityTeam(20,"switchAire");//Aire acondicionado
                this.getMailActivityTeam(21,"switchBanio");//Baño
            },
            error => console.error("NO HAY USER_ID")
        );
    }
    atras(){
        this.navCtrl.back();
    }
    mensajegerente() {
        this.router.navigate(['/mensajegerente']);
    }
    mensajerecepcion() {
        this.router.navigate(['/mensajerecepcion']);
    }
    iniciologueado() {
        this.navCtrl.navigateRoot("iniciologueado")
    }
    servicios() {
        this.router.navigate(['/servicios']);
    }
    terminos() {
        this.navCtrl.navigateRoot("terminostxt")
    }
    cerrarsesion() {
        this.navCtrl.navigateRoot("registro")
    }
    menuconcierge() {
        //this.navCtrl.navigateRoot("menuconcierge")
        this.router.navigate(['/menuconcierge']);
    }
    menusereia() {
        //this.navCtrl.navigateRoot("menusereia")
        this.router.navigate(['/landingsereia']);
    }
    menuquickfit() {
        //this.navCtrl.navigateRoot("menuquickfit")
        this.router.navigate(['/landingquickfit']);
    }
    menu() {
        this.navCtrl.navigateRoot("menulogueado")
    }
    noMolestar(event) {
        console.log("====TOALLAS====");
        console.log(event.detail);
        let idType=23;
        if(event.detail.checked==true){
            this.setMailActivity(4,idType,"No molestar",this.switchNoMolestar);
        }else{
            this.rest.deleteServicio(this.user_id,idType).subscribe(()=>{
                this.switchToallas=false;            
            });
        }
    }
    valet(event) {
        console.log("====TOALLAS====");
        console.log(event.detail);
        let idType=15;
        if(event.detail.checked==true){
            this.setMailActivity(2,idType,"Valet Parking",this.switchValet);
        }else{
            this.rest.deleteServicio(this.user_id,idType).subscribe(()=>{
                this.switchToallas=false;            
            });
        }
    }
    toallas(event) {
        console.log("====TOALLAS====");
        console.log(event.detail);
        let idType=14;
        if(event.detail.checked==true){
            this.setMailActivity(1,idType,"Toallas Extra",this.switchToallas);
        }else{
            this.rest.deleteServicio(this.user_id,idType).subscribe(()=>{
                this.switchToallas=false;            
            });
        }
    }
    limpieza(event) {
        console.log("====limpieza====");
        console.log(event.detail);
        let idType=16;
        if(event.detail.checked==true){
            this.setMailActivity(1,idType,"Limpieza",this.switchToallas);
        }else{
            this.rest.deleteServicio(this.user_id,idType).subscribe(()=>{
                this.switchToallas=false;            
            });
        }
    }
    amenidades(event) {
        console.log("====amenidades====");
        console.log(event.detail);
        let idType=17;
        if(event.detail.checked==true){
            this.setMailActivity(1,idType,"Amenidades",this.switchToallas);
        }else{
            this.rest.deleteServicio(this.user_id,idType).subscribe(()=>{
                this.switchToallas=false;            
            });
        }
    }
    agua(event) {
        console.log("====TOALLAS====");
        console.log(event.detail);
        let idType=18;
        if(event.detail.checked==true){
            this.setMailActivity(1,idType,"Botellas de agua",this.switchAgua);
        }else{
            this.rest.deleteServicio(this.user_id,idType).subscribe(()=>{
                this.switchToallas=false;            
            });
        }
    }
    mantenimiento(event) {
        console.log("====mantenimiento====");
        console.log(event.detail);
        let idType=26;
        if(event.detail.checked==true){
            this.setMailActivity(3,idType,"Mantenimiento",this.switchTv);
        }else{
            this.rest.deleteServicio(this.user_id,idType).subscribe(()=>{
                this.switchToallas=false;            
            });
        }
    }
    tv(event) {
        console.log("====TV====");
        console.log(event.detail);
        let idType=22;
        if(event.detail.checked==true){
            this.setMailActivity(3,idType,"Smart TV",this.switchTv);
        }else{
            this.rest.deleteServicio(this.user_id,idType).subscribe(()=>{
                this.switchToallas=false;            
            });
        }
    }
    aire(event) {
        console.log("====AIRE====");
        console.log(event.detail);
        let idType=20;
        if(event.detail.checked==true){
            this.setMailActivity(3,idType,"Aire acondicionado",this.switchAire);
        }else{
            this.rest.deleteServicio(this.user_id,idType).subscribe(()=>{
                this.switchToallas=false;            
            });
        }
    }
    banio(event) {
        console.log("====BANO====");
        console.log(event.detail);
        let idType=21;
        if(event.detail.checked==true){
            this.setMailActivity(1,idType,"Baño",this.switchBanio);
        }else{
            this.rest.deleteServicio(this.user_id,idType).subscribe(()=>{
                this.switchToallas=false;            
            });
        }
    }
    getMailActivityTeam(typeId:any,switchOption:any) {
        this.rest.getServicio(this.user_id, typeId)
            .subscribe((data) => {
                console.log("=====Get mailActivity: "+typeId+"=====");
                console.log(data);
                console.log(((data.length==0)?false:true));
                //switchOption=((data.length==0)?false:true);
                this[switchOption]=((data.length==0)?false:true);

            }, (err) => {
                console.log(err)
            });
    }
    setMailActivity(team: any, typeId:any,summary:any,switchOption:any) {
        this.rest.getServicio(this.user_id,typeId).subscribe(servicio=>{
            if(servicio.length==0){
                this.rest.getMailActivityTeam(team)
                .subscribe((data) => {
                    let res_users_id = data[0].res_users_id;
                    let fecha_hora = new Date().toISOString()
                    var manana = new Date()
                    manana.setDate(manana.getDate() + 1)
                    let fManana=manana.toISOString();
                    const setServicio = {
                        res_model_id: 78,
                        res_model: "res.partner",
                        res_id: this.user_id,
                        res_name: this.name,
                        activity_type_id: typeId,
                        summary: summary,
                        note: "<p><br></p><table class=\"table table-bordered\"><tbody><tr><td style=\"text-align:center\"><h2><b><h2><font><h2>Tarea</h2></font></h2></b></h2></td><td style=\"text-align:center\"><h2><b><font>Habitación</font></b></h2></td></tr><tr><td>"+summary+"</td><td>ACTIVO <br></br>HORA DE SOLICTUD: " + fecha_hora + "</br></td></tr></tbody></table>",
                        date_deadline: fManana,
                        automated: "True",
                        user_id: res_users_id,
                        recommended_activity_type_id: null,
                        previous_activity_type_id: null,
                        create_uid: res_users_id,
                        create_date: fecha_hora,
                        write_uid: res_users_id,
                        write_date: fecha_hora,
                        calendar_event_id: null,
                        team_id: team
                    }
                    this.rest.setServicio(setServicio)
                        .subscribe((newTask) => {
                            switchOption=true;
                        }, (err) => {
                            console.log(err)
                        });
                }, (err) => {
                    console.log(err)
                });
            }else console.log("Ya existe un registro de "+summary);
        });
    }
}