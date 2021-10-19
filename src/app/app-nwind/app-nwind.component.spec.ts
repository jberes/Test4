import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxGridModule, IgxActionStripModule } from 'igniteui-angular';
import { AppNwindComponent } from './app-nwind.component';

describe('AppNwindComponent', () => {
  let component: AppNwindComponent;
  let fixture: ComponentFixture<AppNwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNwindComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxGridModule, IgxActionStripModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
