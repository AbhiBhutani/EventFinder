import { Component, OnInit } from '@angular/core';
import { Event } from '../Event';
import { EventsService } from './events.service';

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.scss']
})
export class ShowEventsComponent implements OnInit {

    events: Event[] =[];

  constructor(private eventsService: EventsService ) { }

  ngOnInit(): void {
       
  }


  getEvents() {
      this.events = [];
      this.eventsService.getEvents('*').subscribe(events => this.events = events);
  }
  
  getEventsFromLocal(): Event[] {
      this.events = [];
      this.events = [
      { id: "1", name: "NBA", locale: "en-us"},
      { id: "2", name: "The Return of Blue and Red Presented by Bud Light", locale: "en-us"},
      { id: "3", name: "Cincinnati Bengals 2021 Training Camp", locale: "en-us"}
    ];
    return this.events;
  }


}
