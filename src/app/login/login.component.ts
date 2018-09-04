import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../authentication.service";

export class UserCredentials {
  email: string;
  password: string;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loadingMessage;
  model = new UserCredentials();
  isLogged: boolean;
  _subscription$: any;

  constructor(public authenticationService: AuthenticationService) {
    // Initialy I want to display the loading message.
    this.loadingMessage = "Ey! We are loading something";
  }

  ngOnInit() {
    // Then when the component is loaded we show something different
    setTimeout(() => {
      this.loadingMessage = "Something has been loaded!";
    }, 2000);
  }

  areValidCredentials(credentials) {
    if (
      credentials.email &&
      ~credentials.email.indexOf("@") &&
      credentials.password.length > 8
    ) {
      return true;
    }
    return false;
  }

  onSubmit() {
    const credentials: UserCredentials = {
      email: this.model.email,
      password: this.model.password
    };
    if (!this.areValidCredentials(credentials)) {
      this.loadingMessage = 'Invalid credentials';
    } else {
      this.loadingMessage = 'Logging in...';
      // here we will handle the request to the authentication service
      this._subscription$ = this.authenticationService
        .tryLogin(credentials)
        .subscribe(
          (response: any) => {
            this.loadingMessage = "congratulations, you are now logged in";
            this.isLogged = true;
            // Everything was ok
          },
          (error: any) => {
            this.loadingMessage = error;
            this.isLogged = false;
          }
        );
    }
  }
}
