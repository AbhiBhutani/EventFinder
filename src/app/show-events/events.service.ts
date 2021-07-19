import { Injectable } from '@angular/core';
import { Event } from '../Event';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  private apiKey = 'Fb9VIv64HZGMMEuslL0WaAvmTVwZr7UA';
  private eventsUrl = 'https://app.ticketmaster.com/discovery/v2/events';
  

  /** GET all the events  */
  getEvents(locale: string): Observable<Event[]> {
    console.log("reaching getEvents")
    const url= `${this.eventsUrl}?apiKey=${this.apiKey}&locale=${locale}`;
    return this.http.get<Event[]>(url)
  }
}
