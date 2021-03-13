import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuconciergePage } from './menuconcierge.page';

describe('MenuconciergePage', () => {
  let component: MenuconciergePage;
  let fixture: ComponentFixture<MenuconciergePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuconciergePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuconciergePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
