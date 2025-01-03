import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface NewslatterResponse{
  message: String
}

@Injectable({
  providedIn: 'root'
})
export class NewsLetterService {
  private endpointApiUrl = 'http://127.0.0.1:8080';

  constructor(private http: HttpClient) { }

  sendData(name: String, email: String): Observable<NewslatterResponse>{
    const data = {name, email}; 

    return this.http.post<NewslatterResponse>(this.endpointApiUrl, data);
  }
}
