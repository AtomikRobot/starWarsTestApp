import { Component } from '@angular/core';
import { PeopleService } from '../_services/people.service';
import { People } from '../_model/people.model';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  allPeople: People[] = [];

  constructor(private people: PeopleService) {
    this.people.getPeoples().subscribe(value => {
      this.allPeople = value;
    });
  }

}
