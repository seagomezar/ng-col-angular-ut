import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should read proper message in proper time', (done) => {
    const p = fixture.nativeElement.querySelector('p');
    // Phase 1 empty string
    expect(p.textContent).toBe(' ');
    fixture.detectChanges();
    // Phase 2 Loading something
    expect(p.textContent).toContain('Ey! We are loading something');
    setTimeout(() => {
      fixture.detectChanges();
      // Phase 3 content loaded
      expect(p.textContent).toContain('Something has been loaded!');
      done();
    }, 2000);
  });

});
