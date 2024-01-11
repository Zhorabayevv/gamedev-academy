import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ILoginRequest } from '../types/loginRequest.interface';
import { environment } from 'src/environments/environment';
import { ILoginResponse } from '../types/loginResponse.interface';

@Injectable()
export class AuthService {
  constructor(private _http: HttpClient) {}

  login(url: string, body: ILoginRequest): Observable<ILoginResponse> {
    const fullUrl = environment.apiUrl + url;

    return this._http.post<ILoginResponse>(fullUrl, body);
  }
}
