import { People } from './people.model';

export class PeoplePage {
    count: number;
    next: string;
    people: People[];

    constructor(
        count: number,
        next: string,
        people: People[]
    ) {
        this.count = count;
        this.next = next;
        this.people = people;
    }
}
