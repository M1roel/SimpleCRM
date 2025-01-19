import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrResourcesComponent } from './or-resources.component';

describe('OrResourcesComponent', () => {
  let component: OrResourcesComponent;
  let fixture: ComponentFixture<OrResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrResourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
