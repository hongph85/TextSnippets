import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSnippetComponent } from './filter-snippet.component';

describe('FilterSnippetComponent', () => {
  let component: FilterSnippetComponent;
  let fixture: ComponentFixture<FilterSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSnippetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
