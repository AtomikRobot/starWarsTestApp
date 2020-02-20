import { Component } from '@angular/core';
import { PeopleService } from '../_services/people.service';
import { PeoplePage } from '../_model/people-page.model';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  allPeople: PeoplePage;
  infiniteScroll;


  constructor(private people: PeopleService) {
    this.people.getPeoples().subscribe(value => {
      this.allPeople = value;
    });
  }

  ngAfterViewInit() {
    this.infiniteScroll = document.getElementById('infinite-scroll');
    this.infiniteScroll.addEventListener('ionInfinite', () => {
      //this.people.getPeoplesOthers(this.allPeople.next).
      if (this.allPeople.next != null) {
        this.people.getPeoplesOthers(this.allPeople.next).subscribe(value => {
          this.allPeople.next = value.next;
          value.people.forEach(element => {
            this.allPeople.people.push(element);
          });
        });
      }
    });
  }

}
