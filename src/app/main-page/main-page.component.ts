import { Component, OnInit } from '@angular/core';
import { WeatherService } from './Service/weather-service.service';
import { pipe } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [WeatherService]
})
export class MainPageComponent implements OnInit {
  [x: string]: any;
  locationForm: FormGroup;
  l: string;
  locate: string;
  day: string;
  weatherData;
  displayInfo: Boolean;

  date: Date;
  nightTime: Boolean;
  dayTime: Boolean;

  constructor(private service: WeatherService, private formBuilder: FormBuilder, private sanitizer: DomSanitizer) {
    this.locationForm = this.formBuilder.group({
      'location': ['', Validators.required]
    })
  }

  ngOnInit(): void {
    var daysInWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var date = new Date();
    this.day = daysInWeek[date.getDay() - 1];
    this.getCurrTime();
  }
  getWeather() {

  }
  onSubmit() {
    this.displayInfo = false;
    let location = Object.values(this.locationForm.value);
    let l: any = location[0];
    this.service.getData(l).subscribe(data => { this.weatherData = data });
    this.displayInfo = true;
    console.log(this.weatherData);
  }


  getCurrTime() {
    this.date = new Date();
    this.date.getHours() > 17 ? this.nightTime = true : false;
    // if (this.date.getHours()>17){

    // }
  }

}
