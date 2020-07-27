import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URI:string='';
  API_KEY='5ea69cb66faadcd56af1cf6f7b24bce5';

  constructor( private http:HttpClient) {
    this.URI=`https://api.openweathermap.org/data/2.5/weather?appid=${this.API_KEY}&units=metric&q=`
   }

   getWeather(cityName:string,countryCode:string){
    return this.http.get(`${this.URI}${cityName},${countryCode}`)
   }
}
