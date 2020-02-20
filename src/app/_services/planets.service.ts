import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Planets } from '../_model/planets.model';

@Injectable({ providedIn: 'root' })
export class PlanetsService {
    planets: Planets[] = [];
    constructor(private http: HTTP, private httpClient: HttpClient) { }


    getPlanets(): Observable<any> {
        return new Observable((observer: Observer<any>) => {
            this.httpClient.get<any>('https://swapi.co/api/planets/').subscribe((responce: any) => {

                responce.results.forEach(element => {
                    const value: Planets = new Planets(element.name, element.climate, element.gravity, element.terrain);
                    this.planets.push(value);
                });

                observer.next(this.planets);
                observer.complete();
            });
        });
    }
}