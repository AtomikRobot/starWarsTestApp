import { Component } from '@angular/core';
import { Starships } from '../_model/starships.model';
import { StarshipsService } from '../_services/starships.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  allStarships: Starships[] = [];

  constructor(private starships: StarshipsService) {
    this.starships.getStarShips().subscribe(value => {
      this.allStarships = value;
    });
  }

}
