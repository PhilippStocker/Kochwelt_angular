import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRecipeTopicComponent } from './single-recipe-topic.component';

describe('SingleRecipeTopicComponent', () => {
  let component: SingleRecipeTopicComponent;
  let fixture: ComponentFixture<SingleRecipeTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleRecipeTopicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleRecipeTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
