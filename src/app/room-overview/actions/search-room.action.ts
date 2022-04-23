export class SearchRoomAction {
  static readonly type = '[Rooms] Search Rooms';
  constructor(public search: string) {}
}
