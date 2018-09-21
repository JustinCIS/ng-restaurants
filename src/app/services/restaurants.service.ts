import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: Http) { }

  getRestaurants() {
    return this.http.get(environment.contextUrl + 'assets/data/restaurants.json')
      .toPromise()
      .then(res => res.json().restaurants)
      .then(data => { return data; });
  }
}
