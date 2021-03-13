import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IniciarsesioncodigoPage } from './iniciarsesioncodigo.page';

describe('IniciarsesioncodigoPage', () => {
  let component: IniciarsesioncodigoPage;
  let fixture: ComponentFixture<IniciarsesioncodigoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciarsesioncodigoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IniciarsesioncodigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
