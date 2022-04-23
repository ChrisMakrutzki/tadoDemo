import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { RoomOverviewState } from '../room-overview.state';
import { Room } from '../../shared/typings/room';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {
  @Select(RoomOverviewState.rooms) public rooms$: Observable<Room[]>;

  constructor() {}

  ngOnInit(): void {}

  public trackBy(index: number, item: Room): number {
    return item.id;
  }
}
