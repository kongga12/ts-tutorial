// @ts-ignore
import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable{
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.companyName = faker.companyName();
        this.catchPhrase = faker.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }

    markerContent(): string {
        return `
        <div>
            <h1>Company Name: ${this.companyName}</h1>
            <h3>Company Catch Phrase: ${this.catchPhrase}</h3>
        </div>
        `
    }
}

