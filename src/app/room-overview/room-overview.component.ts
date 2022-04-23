import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { LoadRoomsAction } from './actions/load-rooms.action';
import { SearchRoomAction } from './actions/search-room.action';
import { Room } from '../shared/typings/room';
import { RoomOverviewState } from './room-overview.state';
import { filter, Observable } from 'rxjs';
import { OverlayService } from './overlay.service';

@Component({
  selector: 'app-room-overview',
  templateUrl: './room-overview.component.html',
  styleUrls: ['./room-overview.component.scss'],
})
export class RoomOverviewComponent implements OnInit {
  public userName: string = 'Christian';

  @Select(RoomOverviewState.selectedRoom)
  public selectedRoom$: Observable<Room>;

  constructor(private store: Store, private overlayService: OverlayService) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadRoomsAction());

    this.selectedRoom$.subscribe((room) => {
      room ? this.overlayService.open() : this.overlayService.close();
    });
  }

  public onSearch(value: string): void {
    this.store.dispatch(new SearchRoomAction(value));
  }
}
