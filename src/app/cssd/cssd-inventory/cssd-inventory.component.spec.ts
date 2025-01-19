import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssdInventoryComponent } from './cssd-inventory.component';

describe('CssdInventoryComponent', () => {
  let component: CssdInventoryComponent;
  let fixture: ComponentFixture<CssdInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssdInventoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CssdInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
