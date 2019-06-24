import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';
import { from } from 'rxjs';

@Component({
  selector: 'wa-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
myWeather: CurrentWeather;
cities = ['London', 'Paris', 'Skopje', 'Frankfurt', 'Berlin'];
wheathers: CurrentWeather[] = [];
location;
   constructor(private ws: WeatherService) { }

  ngOnInit() {
    this.myWeather = this.ws.weatherNow();
    navigator.geolocation.getCurrentPosition((pos)=> {
    this.cities.forEach(city => {
          this.ws.localWeather(city).subscribe(
            (data) => {
              console.log(data);
              this.myWeather = new CurrentWeather(
                data.name,
                data.main.temp,
                data.weather[0].icon,
                data.weather[0].description,
                data.main.temp_max,
                data.main.temp_min
                );
                this.wheathers.push(this.myWeather);
            });
        });
    });
  }

  findForecasts(cityName: string) {

  }
}

