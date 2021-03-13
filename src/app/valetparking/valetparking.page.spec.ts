import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValetparkingPage } from './valetparking.page';

describe('ValetparkingPage', () => {
  let component: ValetparkingPage;
  let fixture: ComponentFixture<ValetparkingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValetparkingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValetparkingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
