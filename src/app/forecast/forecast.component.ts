import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';

@Component({
  selector: 'wa-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  forecasts: any[] = [];
  cityName: string;
  constructor(private route: ActivatedRoute,
    private ws: WeatherService) { }

  ngOnInit() {

     this.route.params.subscribe(params => {
          console.log("params ", params);
          this.cityName = params.city;
          this.ws.getForeCast(params.city).subscribe(
            (data) => {
              console.log(data);

                data.list.forEach(element => {

                  this.forecasts.push(element);
                });

            });
      // In a real app: dispatch action to load the details here.
   });
  }

}
