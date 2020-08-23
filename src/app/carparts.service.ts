import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Carpart } from './carpart'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarpartsService {

  constructor(private http: HttpClient) {}
	
	fetchCarParts() {
    let url = 'http://localhost:8080/exmpl/viewCartsPart.api';
    return this.http.get(url);
  }

  addCarPart(carpart: Carpart) {
    let url = 'http://localhost:8080/exmpl/addCarPart.api';
    return this.http.post(url, carpart);
  }
}
