import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalviewComponent } from './modalview.component';

describe('ModalviewComponent', () => {
  let component: ModalviewComponent;
  let fixture: ComponentFixture<ModalviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
