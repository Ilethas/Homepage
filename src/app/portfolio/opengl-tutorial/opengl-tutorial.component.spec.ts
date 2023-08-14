import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenGLTutorialComponent } from './opengl-tutorial.component';

describe('OpenglTutorialComponent', () => {
  let component: OpenGLTutorialComponent;
  let fixture: ComponentFixture<OpenGLTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OpenGLTutorialComponent]
    });
    fixture = TestBed.createComponent(OpenGLTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
