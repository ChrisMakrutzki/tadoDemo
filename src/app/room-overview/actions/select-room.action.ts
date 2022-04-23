export class SelectRoomAction {
  static readonly type = '[Rooms] Select Room';
  constructor(public roomId: number | null) {}
}
