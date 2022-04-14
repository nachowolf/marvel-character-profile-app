import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelApiComponent } from './marvel-api.component';

describe('MarvelApiComponent', () => {
  let component: MarvelApiComponent;
  let fixture: ComponentFixture<MarvelApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
