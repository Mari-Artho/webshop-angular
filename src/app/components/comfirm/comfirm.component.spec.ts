import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComfirmComponent } from './comfirm.component';

describe('ComfirmComponent', () => {
  let component: ComfirmComponent;
  let fixture: ComponentFixture<ComfirmComponent>;
  let message: ComfirmComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Test3
  it('should say thank you ', ()=>{
    expect(component.message).toContain("Thank you");
  })
});
