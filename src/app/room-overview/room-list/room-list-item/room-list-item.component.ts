import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { RoomOverviewState } from '../../room-overview.state';
import { Select, Store } from '@ngxs/store';
import { map, Observable } from 'rxjs';
import { Room } from '../../../shared/typings/room';
import { SelectRoomAction } from '../../actions/select-room.action';
import { OverlayService } from '../../overlay.service';

@Component({
  selector: 'app-room-list-item',
  templateUrl: './room-list-item.component.html',
  styleUrls: ['./room-list-item.component.scss'],
})
export class RoomListItemComponent implements OnInit {
  @Input() public id: number;

  @Select(RoomOverviewState.roomById) roomByIdFn$: Observable<
    (id: number) => Room
  >;

  public room$: Observable<Room>;

  constructor(
    private store: Store,
    private overlayService: OverlayService,
    private elementRef: ElementRef
  ) {}

  public selectRoom() {
    this.store.dispatch(new SelectRoomAction(this.id));
    this.overlayService.open(this.elementRef);
  }

  ngOnInit(): void {
    this.room$ = this.roomByIdFn$.pipe(map((fn) => fn(this.id)));
  }
}
