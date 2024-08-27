import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRecipeOpenComponent } from './single-recipe-open.component';

describe('SingleRecipeOpenComponent', () => {
  let component: SingleRecipeOpenComponent;
  let fixture: ComponentFixture<SingleRecipeOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleRecipeOpenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleRecipeOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
