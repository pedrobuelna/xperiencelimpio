import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatosreservacionPage } from './datosreservacion.page';

describe('DatosreservacionPage', () => {
  let component: DatosreservacionPage;
  let fixture: ComponentFixture<DatosreservacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosreservacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatosreservacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
