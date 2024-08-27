import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRecipeDescriptionComponent } from './single-recipe-description.component';

describe('SingleRecipeDescriptionComponent', () => {
  let component: SingleRecipeDescriptionComponent;
  let fixture: ComponentFixture<SingleRecipeDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleRecipeDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleRecipeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
