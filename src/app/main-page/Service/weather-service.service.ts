import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  key:string = '3722eccb96fbebc8885825eb7193b436';
  urls:string = 'https://api.openweathermap.org/data/2.5/weather?q=';
  data: Object;
  result: Object;

  constructor(private http: HttpClient) { }

  getData(location: string):Observable<Object> {
    console.log(this.urls + location + '&appid=' + this.key);
    return this.http.get(this.urls + location + '&appid=' + this.key).pipe(tap(data => this.data = data));
  }

}
