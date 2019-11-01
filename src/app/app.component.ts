import { Component } from '@angular/core';
import { DataService } from './api.data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  url: string = '';
  weather_data: any = '';
  icon_source: string = '';
  error: boolean = false;
  msgExist: boolean = false;

  constructor(private _Serv: DataService) { }

  getWeatherData(place: string) {
    this.url = "https://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=3b736c3f3244458aa238af801d6d4798";

    this._Serv.getData(this.url).subscribe(data => {
      // console.log(typeof data);
      this.weather_data = data;
      this.error = false;
      this.msgExist = true;
      this.icon_source = "https://openweathermap.org/img/w/"+this.weather_data.weather[0].icon+".png"
    },
      error => {
        console.log(error);
        this.error = true;
        this.msgExist = true;
      });


  }
}
