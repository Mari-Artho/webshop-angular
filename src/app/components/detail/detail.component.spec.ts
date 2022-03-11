import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailComponent } from './detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { SelectByIdPipe } from '../../shared/select-by-id.pipe'

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailComponent, SelectByIdPipe,
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        Ng2SearchPipeModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
