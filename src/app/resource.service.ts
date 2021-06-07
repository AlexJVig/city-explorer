import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  
  constructor(private http: HttpClient) { }

  getCities(): string[] {
    let cities = this.http.get('localhost:3000');
    console.log();
    return [];
  }
}
