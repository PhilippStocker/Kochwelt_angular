import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexRecipePreviewTopComponent } from './index-recipe-preview-top.component';

describe('IndexRecipePreviewTopComponent', () => {
  let component: IndexRecipePreviewTopComponent;
  let fixture: ComponentFixture<IndexRecipePreviewTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexRecipePreviewTopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexRecipePreviewTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
