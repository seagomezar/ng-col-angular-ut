import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoginComponent, UserCredentials } from "./login.component";
import { FormsModule } from "@angular/forms";
import { AuthenticationService } from "../authentication.service";
import { of, Observable, throwError } from "rxjs";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let AuthenticationServiceMock: Partial<AuthenticationService> = {
    tryLogin: credentials => {
      return of("OK");
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule],
      providers: [
        { provide: AuthenticationService, useValue: AuthenticationServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should read proper message in proper time", done => {
    const p = fixture.nativeElement.querySelector("p");
    /* Phase 1 empty string needs to be remove because since the detect changes is triggered every time
     * we don't have control in the very first time.
     * expect(p.textContent).toBe(' '); */
    // Phase 2 Loading something
    fixture.detectChanges();
    expect(p.textContent).toContain("Ey! We are loading something");
    setTimeout(() => {
      // Phase 3 content loaded
      fixture.detectChanges();
      expect(p.textContent).toContain("Something has been loaded!");
      done();
    }, 2000);
  });

  it("should return true if the credentials are valid", () => {
    const credentials: UserCredentials = {
      email: "valid@email.com",
      password: "valid8digitsPassword"
    };
    expect(component.areValidCredentials(credentials)).toBe(true);
  });

  it("should return true if the credentials are valid", () => {
    const credentials: UserCredentials = {
      email: "invalidemailcom",
      password: "invalid"
    };
    expect(component.areValidCredentials(credentials)).toBe(false);
  });

  it("should be called areValidCredentials from the view and login message is ok", () => {
    const model = {
      email: "valid@email.com",
      password: "valid8digitsPassword"
    };
    spyOn(component, "areValidCredentials").and.returnValue(true);
    const hostElement = fixture.nativeElement;
    const button: HTMLElement = hostElement.querySelector("button");
    component.model.email = model.email;
    component.model.password = model.password;
    button.click();
    expect(component.areValidCredentials).toHaveBeenCalledWith(model);
    expect(component.loadingMessage).toBe(
      "congratulations, you are now logged in"
    );
  });

  it("should be called areValidCredentials from the view and login message is failed", () => {
    const model = {
      email: "invalid",
      password: "invalid"
    };
    spyOn(component, "areValidCredentials").and.returnValue(false);
    const hostElement = fixture.nativeElement;
    const button: HTMLElement = hostElement.querySelector("button");
    component.model.email = model.email;
    component.model.password = model.password;
    button.click();
    expect(component.areValidCredentials).toHaveBeenCalledWith(model);
    expect(component.loadingMessage).toBe("Invalid credentials");
  });

  it("should be returned user does not exist from service", () => {
    const model = {
      email: "noexistent@user.com",
      password: "validpassword"
    };
    const authenticationService = fixture.debugElement.injector.get(
      AuthenticationService
    );
    spyOn(authenticationService, "tryLogin").and.returnValue(
      throwError("User does not exist")
    );
    spyOn(component, "areValidCredentials").and.returnValue(true);
    const hostElement = fixture.nativeElement;
    const button: HTMLElement = hostElement.querySelector("button");
    component.model.email = model.email;
    component.model.password = model.password;
    button.click();
    expect(component.areValidCredentials).toHaveBeenCalledWith(model);
    fixture.detectChanges();
    expect(component.loadingMessage).toBe("User does not exist");
  });

});
