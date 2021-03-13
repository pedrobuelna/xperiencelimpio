import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MensajegerentePage } from './mensajegerente.page';

describe('MensajegerentePage', () => {
  let component: MensajegerentePage;
  let fixture: ComponentFixture<MensajegerentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajegerentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MensajegerentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
