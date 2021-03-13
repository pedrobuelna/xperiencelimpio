import { Component, ElementRef, OnInit, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
@Component({
  selector: 'app-iniciarsesioncodigo',
  templateUrl: './iniciarsesioncodigo.page.html',
  styleUrls: ['./iniciarsesioncodigo.page.scss'],
})
export class IniciarsesioncodigoPage implements OnInit {
  @ViewChild('numero3') child: HTMLElement;
  //@ViewChild("numero3") nameField : ElementRef;
  @ViewChild("numero4") numero4 : ElementRef;
  @ViewChild("numero5") numero5 : ElementRef;
  @ViewChild("numero6") numero6 : ElementRef;
  
  @ViewChild('numero2', {static: false}) numero2:ElementRef;
  @ViewChild('myInput') myInput: ElementRef;
  correo:string;
  myValue:any;
  ionicForm: FormGroup;
  isSubmitted = false;
  className: string = 'quitar';
  elemento: any;
  constructor(private router: Router,
    private navController: NavController,
    public formBuilder: FormBuilder,
    private elmRef: ElementRef,
    private renderer: Renderer2) { 
    this.ionicForm = this.formBuilder.group({
      correo:['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],      
   })
    
  }

  ngOnInit() {
    //document.getElementById('numero2').focus();
  }
  edit(){
    //this.myInput.nativeElement.focus(); 
    this.router.navigate(['/iniciarsesionreservacion']);
  }
  moveFocus(event,numero) {
    //console.log(event.srcElement)
    if(numero==1){
      this.edit();
    }else if(numero==2){
      setTimeout(()=>{
        //this.numero3.nativeElement.focus()
      })
    }
  }
  eventHandler(event){
    console.log("EVENT: "+event);
    console.log("EVENT KEYCODE: "+event.keyCode);
    console.log("EVENT KEYIDENTIFIER: "+ event.keyIdentifier);
  }
  atras(){
    this.navController.back();
  }
  siguiente(){
    this.router.navigate(['/iniciarsesionreservacion']);
  }
}
