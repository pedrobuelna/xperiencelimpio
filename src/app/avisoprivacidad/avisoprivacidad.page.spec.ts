import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvisoprivacidadPage } from './avisoprivacidad.page';

describe('AvisoprivacidadPage', () => {
  let component: AvisoprivacidadPage;
  let fixture: ComponentFixture<AvisoprivacidadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisoprivacidadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvisoprivacidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
