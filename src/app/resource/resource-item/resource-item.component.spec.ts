import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceItemComponent } from './resource-item.component';

describe('ResourceItemComponent', () => {
  let component: ResourceItemComponent;
  let fixture: ComponentFixture<ResourceItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceItemComponent]
    });
    fixture = TestBed.createComponent(ResourceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
