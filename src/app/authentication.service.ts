import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import {
  IUserCredentials,
  IUserProfile,
  IDataResponse,
  IOkResponse
} from "../interfaces/interfaces.all";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor() {}

  tryLogin(credentials: IUserCredentials): Observable<any> {
    const dataResponse: IDataResponse<any> = { data: { ok: true } };
    if (credentials.email === 'valid@email.com' && credentials.password === 'validpassword') {
      return of(dataResponse);
    }
    return throwError("Invalid credentials");
  }
}
