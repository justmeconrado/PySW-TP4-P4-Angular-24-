import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagecComponent } from './pagec.component';

describe('PagecComponent', () => {
  let component: PagecComponent;
  let fixture: ComponentFixture<PagecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
