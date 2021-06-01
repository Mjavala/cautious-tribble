import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const localUrl = 'http://localhost:3001/auth/login' // (?) Nest

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  startSniping() {
    //return this.http.get(localUrl, {responseType: 'text'});
    return 'hello world'
  }
}
