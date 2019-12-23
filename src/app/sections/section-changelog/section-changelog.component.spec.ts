import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionChangelogComponent } from './section-changelog.component';

describe('SectionChangelogComponent', () => {
  let component: SectionChangelogComponent;
  let fixture: ComponentFixture<SectionChangelogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionChangelogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionChangelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
