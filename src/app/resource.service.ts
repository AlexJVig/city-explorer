import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  getCitiesUrl = 'http://localhost:3000/api/getCities';
  
  constructor(private http: HttpClient) { }

  getCities() {
    return this.http.get(this.getCitiesUrl);
  }
}
