import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TerminostxtPage } from './terminostxt.page';

describe('TerminostxtPage', () => {
  let component: TerminostxtPage;
  let fixture: ComponentFixture<TerminostxtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminostxtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TerminostxtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
