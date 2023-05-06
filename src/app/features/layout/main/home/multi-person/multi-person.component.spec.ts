import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiPersonComponent } from './multi-person.component';

describe('MultiPersonComponent', () => {
  let component: MultiPersonComponent;
  let fixture: ComponentFixture<MultiPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiPersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
