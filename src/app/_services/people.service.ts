import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { People } from '../_model/people.model';

@Injectable({ providedIn: 'root' })
export class PeopleService {
    people: People[] = [];
    constructor(private http: HTTP, private httpClient: HttpClient) { }


    getPeoples(): Observable<any> {
        return new Observable((observer: Observer<any>) => {
            this.httpClient.get<any>('https://swapi.co/api/people/').subscribe((responce: any) => {


                responce.results.forEach(element => {
                    const charac: People = new People(element.name);
                    this.people.push(charac);
                });

                observer.next(this.people);
                observer.complete();
            });
        });
    }
}
