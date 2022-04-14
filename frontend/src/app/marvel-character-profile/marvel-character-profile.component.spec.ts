import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelCharacterProfileComponent } from './marvel-character-profile.component';

describe('MarvelCharacterProfileComponent', () => {
  let component: MarvelCharacterProfileComponent;
  let fixture: ComponentFixture<MarvelCharacterProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelCharacterProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelCharacterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
