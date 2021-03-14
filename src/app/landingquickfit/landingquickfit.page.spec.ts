import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LandingquickfitPage } from './landingquickfit.page';

describe('LandingquickfitPage', () => {
  let component: LandingquickfitPage;
  let fixture: ComponentFixture<LandingquickfitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingquickfitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LandingquickfitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
