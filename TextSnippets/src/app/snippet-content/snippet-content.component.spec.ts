import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetContentComponent } from './snippet-content.component';

describe('SnippetContentComponent', () => {
  let component: SnippetContentComponent;
  let fixture: ComponentFixture<SnippetContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnippetContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
