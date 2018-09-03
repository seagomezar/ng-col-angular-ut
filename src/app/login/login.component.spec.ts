import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
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
    /* Phase 1 empty string needs to be remove because since the detect changes is triggered every time
     * we don't have control in the very first time.
     * expect(p.textContent).toBe(' '); */
    // Phase 2 Loading something
    expect(p.textContent).toContain('Ey! We are loading something');
    setTimeout(() => {
      // Phase 3 content loaded
      expect(p.textContent).toContain('Something has been loaded!');
      done();
    }, 2000);
  });

});
