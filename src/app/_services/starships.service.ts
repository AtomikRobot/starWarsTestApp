import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Starships } from '../_model/starships.model';

@Injectable({ providedIn: 'root' })
export class StarshipsService {
    starships: Starships[] = [];
    constructor(private http: HTTP, private httpClient: HttpClient) { }


    getStarShips(): Observable<any> {
        return new Observable((observer: Observer<any>) => {
            this.httpClient.get<any>('https://swapi.co/api/starships/').subscribe((responce: any) => {

                responce.results.forEach(element => {
                    const ship: Starships = new Starships(element.name, element.model, element.starship_class);
                    this.starships.push(ship);
                });

                observer.next(this.starships);
                observer.complete();
            });
        });
    }
}
