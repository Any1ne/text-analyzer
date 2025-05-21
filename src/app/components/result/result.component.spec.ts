import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultComponent } from './result.component';
import { IonicModule } from '@ionic/angular';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultComponent, IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    component.words = ['слово'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
