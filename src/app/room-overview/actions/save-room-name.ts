export class SaveRoomName {
  static readonly type = '[Rooms] Save Room Name';
  constructor(public roomId: number, public name: string) {}
}
