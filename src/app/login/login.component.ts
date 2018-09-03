import { Component, OnInit } from "@angular/core";

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

  constructor() {
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
    if (credentials.email.indexOf("@") && credentials.password.length > 8) {
      return true;
    }
    return false;
  }

  onSubmit() {
    // We will take care of this later
  }
}
