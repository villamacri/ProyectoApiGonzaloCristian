import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attraction } from '../interface/attractionsResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiKey = "0F1NrUehGAM5LooApTTgyaw3ZPiXmkuT"

  constructor(private http: HttpClient){}

  getAttractions(){
    return this.http.get<Attraction>("https://app.ticketmaster.com/discovery/v2/attractions?apikey=" + this.apiKey);
  }
  
}
