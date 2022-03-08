import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IAvailability } from './availability.interface';
import { ISpace } from './space.interface';
import { ITimeframe } from './timeframe.interface';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpaceComponent implements OnInit {
  @Input() space: ISpace;
  @Input() timeframes: ITimeframe[];
  @Input() availabilities: IAvailability;

  constructor() { }

  ngOnInit(): void {

  }

}
