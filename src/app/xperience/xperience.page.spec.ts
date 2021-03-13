import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { XperiencePage } from './xperience.page';

describe('XperiencePage', () => {
  let component: XperiencePage;
  let fixture: ComponentFixture<XperiencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XperiencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(XperiencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
