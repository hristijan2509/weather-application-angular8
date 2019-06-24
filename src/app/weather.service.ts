import { Injectable } from '@angular/core';
import { CurrentWeather } from './current-weather';
import { CurrentComponent} from './current/current.component'
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  current: CurrentWeather = new CurrentWeather('Las Vegas', '21', 'image', 'SUNNY', '12', '29')
  constructor(private http: HttpClient) { }


  weatherNow(){
    return this.current;
  }

  getForeCast(cityName): Observable<any>{
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&mode=json&APPID=ed1473c6dddacee54f19cca7c9a9692d&units=metric`)
      .pipe(
        map((response: Response) => {
          return response;
        }
      ));
  }

  localWeather(cityName): Observable<any>{
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=ed1473c6dddacee54f19cca7c9a9692d&units=metric`)
      .pipe(
        map((response: Response) => {
          return response;
        }
      ));
  }
}
