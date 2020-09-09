import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import {
  JsonSchemaFormModule,
  WidgetLibraryModule
} from '@cfstratos/ajsf-core';
import { Bootstrap3FrameworkComponent } from './bootstrap3-framework.component';

describe('Bootstrap3FrameworkComponent', () => {
  let component: Bootstrap3FrameworkComponent;
  let fixture: ComponentFixture<Bootstrap3FrameworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        JsonSchemaFormModule,
        CommonModule,
        WidgetLibraryModule,
      ],
      declarations: [Bootstrap3FrameworkComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bootstrap3FrameworkComponent);
    component = fixture.componentInstance;
    component.layoutNode = { options: {} };
    component.layoutIndex = [];
    component.dataIndex = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
