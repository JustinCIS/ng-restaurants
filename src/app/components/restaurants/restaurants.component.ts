import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { RestaurantsService } from '../../services/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RestaurantsComponent implements OnInit {
  restaurants: any[];
  selectedRestaurant: any;
  display: boolean;
  options: any;
  overlays: any[];
  map: google.maps.Map;
  
  constructor(private restaurantsService: RestaurantsService) {
    this.display = false;
    this.options = { zoom: 18 };
  }

  ngOnInit() {
    this.restaurantsService.getRestaurants()
      .then(restaurants => {
        this.restaurants = restaurants;
      });
  }
  
  setMap(event) {
    this.map = event.map;
  }

  showRestaurantDetails(restaurant) {
    this.selectedRestaurant = restaurant;
    this.display = !this.display;

    this.map.setCenter(new google.maps.LatLng(this.selectedRestaurant.location.lat, this.selectedRestaurant.location.lng))
    this.overlays = [];
    this.restaurants.forEach(
      restaurant => {
        this.overlays.push(
          new google.maps.Marker({
            position: { lat: restaurant.location.lat, lng: restaurant.location.lng },
            label: restaurant.name
          }));
      });
  }

}
