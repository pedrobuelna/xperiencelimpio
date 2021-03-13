import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LandingsereiaPage } from './landingsereia.page';

describe('LandingsereiaPage', () => {
  let component: LandingsereiaPage;
  let fixture: ComponentFixture<LandingsereiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingsereiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LandingsereiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
