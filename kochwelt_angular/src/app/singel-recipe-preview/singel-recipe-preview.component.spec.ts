import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingelRecipePreviewComponent } from './singel-recipe-preview.component';

describe('SingelRecipePreviewComponent', () => {
  let component: SingelRecipePreviewComponent;
  let fixture: ComponentFixture<SingelRecipePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingelRecipePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingelRecipePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
