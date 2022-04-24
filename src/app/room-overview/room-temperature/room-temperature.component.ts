import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-room-temperature',
  templateUrl: './room-temperature.component.html',
  styleUrls: ['./room-temperature.component.scss'],
})
export class RoomTemperatureComponent {
  @Input() public temperature: number;
}
