import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Room } from '../shared/typings/room';
import { LoadRoomsAction } from './actions/load-rooms.action';
import { RoomService } from '../shared/services/room.service';
import { first } from 'rxjs';
import { SearchRoomAction } from './actions/search-room.action';
import { SelectRoomAction } from './actions/select-room.action';
import { SaveRoomName } from './actions/save-room-name';
import { patch, updateItem } from '@ngxs/store/operators';

export interface RoomOverviewStateModel {
  rooms: Room[];
  search: string;
  selectedRoomId: number | null;
}

@State<RoomOverviewStateModel>({
  name: 'rooms',
  defaults: {
    rooms: [],
    search: '',
    selectedRoomId: 1,
  },
})
@Injectable()
export class RoomOverviewState {
  constructor(private roomService: RoomService) {}

  @Selector()
  public static rooms(state: RoomOverviewStateModel): Room[] {
    if (state.search?.length > 0) {
      return state.rooms.filter((room) =>
        room.name?.toLowerCase().includes(state.search.toLowerCase())
      );
    }

    return state.rooms;
  }

  @Selector()
  public static roomById(
    state: RoomOverviewStateModel
  ): (id: number) => Room | null {
    return (id: number) => state.rooms.find((r) => r.id === id) || null;
  }

  @Selector()
  public static selectedRoom(state: RoomOverviewStateModel): Room | null {
    if (state.selectedRoomId == null) return null;

    return state.rooms.find((r) => r.id === state.selectedRoomId) || null;
  }

  @Action(LoadRoomsAction)
  private loadRooms(ctx: StateContext<RoomOverviewStateModel>) {
    this.roomService
      .loadRooms()
      .pipe(first())
      .subscribe((rooms) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          rooms,
        });
      });
  }

  @Action(SearchRoomAction)
  private searchRoom(
    ctx: StateContext<RoomOverviewStateModel>,
    action: SearchRoomAction
  ) {
    ctx.patchState({
      search: action.search,
    });
  }

  @Action(SelectRoomAction)
  private selectRoom(
    ctx: StateContext<RoomOverviewStateModel>,
    action: SelectRoomAction
  ) {
    ctx.patchState({
      selectedRoomId: action.roomId,
    });
  }

  @Action(SaveRoomName)
  private saveRoomName(
    ctx: StateContext<RoomOverviewStateModel>,
    action: SaveRoomName
  ) {
    const room = ctx.getState().rooms?.find(({ id }) => id === action.roomId);

    if (!room) return;

    const newRoom = {
      ...room,
      name: action.name,
    };

    ctx.setState(
      patch({
        rooms: updateItem<Room>((room) => room?.id === action.roomId, newRoom),
      })
    );
  }
}
