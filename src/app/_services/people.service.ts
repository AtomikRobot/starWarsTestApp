import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { People } from '../_model/people.model';
import { PeoplePage } from '../_model/people-page.model';

@Injectable({ providedIn: 'root' })
export class PeopleService {
    people: PeoplePage;
    constructor(private httpClient: HttpClient) { }


    getPeoples(): Observable<any> {
        return new Observable((observer: Observer<any>) => {
            this.httpClient.get<any>('https://swapi.co/api/people/').subscribe((responce: any) => {

                const character: People[] = [];

                responce.results.forEach(element => {
                    const charac: People = new People(element.name, element.height, element.mass);
                    character.push(charac);
                });

                this.people = new PeoplePage(responce.count, responce.next, character);

                observer.next(this.people);
                observer.complete();
            });
        });
    }


    getPeoplesOthers(next: string): Observable<any> {
        console.log ('suite : ', next);
        return new Observable((observer: Observer<any>) => {
            this.httpClient.get<any>(next).subscribe((responce: any) => {

                const character: People[] = [];

                responce.results.forEach(element => {
                    const charac: People = new People(element.name, element.height, element.mass);
                    character.push(charac);
                });

                this.people = new PeoplePage(responce.count, responce.next, character);

                observer.next(this.people);
                observer.complete();
            });
        });
    }
}
