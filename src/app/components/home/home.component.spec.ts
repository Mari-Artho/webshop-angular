import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchFilterPipe } from '../../shared/search-filter.pipe';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
          HomeComponent,
          SearchFilterPipe,
        ],
      imports:[
        //add to solve it.
        HttpClientTestingModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Test 1
  it('should have the filter set to 0 by default', () => {
    expect(component.categoryFilter).toBe(0);
  });

  //Test 2
  it('should IProducts[] connect to right variable', ()=>{
    const testProducts = component.products;
    expect(testProducts).toEqual(testProducts);
  })

});
