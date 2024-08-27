import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRecipeIngredientsCalcComponent } from './single-recipe-ingredients-calc.component';

describe('SingleRecipeIngredientsCalcComponent', () => {
  let component: SingleRecipeIngredientsCalcComponent;
  let fixture: ComponentFixture<SingleRecipeIngredientsCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleRecipeIngredientsCalcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleRecipeIngredientsCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
