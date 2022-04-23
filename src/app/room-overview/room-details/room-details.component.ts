import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../../shared/typings/room';
import { RoomOverviewState } from '../room-overview.state';
import { Select, Store } from '@ngxs/store';
import { SelectRoomAction } from '../actions/select-room.action';
import { SaveRoomName } from '../actions/save-room-name';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss'],
})
export class RoomDetailsComponent {
  @Select(RoomOverviewState.selectedRoom) public room$: Observable<Room>;

  public editMode: boolean = false;
  public newName: string = '';

  @ViewChild('nameInput') public nameInput: ElementRef;

  constructor(private store: Store) {}

  public close(): void {
    this.store.dispatch(new SelectRoomAction(null));
  }

  public startEditMode() {
    this.editMode = true;
    this.newName =
      this.store.selectSnapshot(RoomOverviewState.selectedRoom)?.name || '';
  }

  public saveRoom() {
    this.editMode = false;

    const roomId = this.store.selectSnapshot(
      RoomOverviewState.selectedRoom
    )?.id;

    if (roomId) {
      this.store.dispatch(new SaveRoomName(roomId, this.newName));
    }
  }
}
