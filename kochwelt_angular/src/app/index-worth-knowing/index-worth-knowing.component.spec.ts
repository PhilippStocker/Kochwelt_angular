import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexWorthKnowingComponent } from './index-worth-knowing.component';

describe('IndexWorthKnowingComponent', () => {
  let component: IndexWorthKnowingComponent;
  let fixture: ComponentFixture<IndexWorthKnowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexWorthKnowingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexWorthKnowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
