import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
    dateTimeIsoString: string;

    constructor() {
        this.dateTimeIsoString = moment().format();
    }
}
