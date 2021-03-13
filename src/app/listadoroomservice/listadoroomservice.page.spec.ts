import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListadoroomservicePage } from './listadoroomservice.page';

describe('ListadoroomservicePage', () => {
  let component: ListadoroomservicePage;
  let fixture: ComponentFixture<ListadoroomservicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoroomservicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoroomservicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
