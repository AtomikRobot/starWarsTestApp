import { Component } from '@angular/core';
import { Planets } from '../_model/planets.model';
import { PlanetsService } from '../_services/planets.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  allPlanets: Planets[] = [];

  constructor(private starships: PlanetsService) {
    this.starships.getPlanets().subscribe(value => {
      this.allPlanets = value;
    });
  }

}
