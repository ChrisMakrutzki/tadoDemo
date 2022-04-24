import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Room } from '../typings/room';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  loadRooms(): Observable<Room[]> {
    return of(RoomService.generateRoomData()).pipe(delay(2000));
  }

  private static generateRoomData(): Room[] {
    return [
      {
        id: 0,
        name: 'Living Room',
        temperature: RoomService.generateRandomTemperature(),
        humidity: RoomService.generateRandomHumidity(),
      },
      {
        id: 1,
        name: 'Bedroom',
        temperature: RoomService.generateRandomTemperature(),
        humidity: RoomService.generateRandomHumidity(),
      },
      {
        id: 2,
        name: 'Bathroom',
        temperature: RoomService.generateRandomTemperature(),
        humidity: RoomService.generateRandomHumidity(),
      },
      {
        id: 3,
        name: 'Kitchen',
        temperature: RoomService.generateRandomTemperature(),
        humidity: RoomService.generateRandomHumidity(),
      },
      {
        id: 4,
        name: 'Study',
        temperature: RoomService.generateRandomTemperature(),
        humidity: RoomService.generateRandomHumidity(),
      },
      {
        id: 5,
        name: 'Indoor garden',
        temperature: RoomService.generateRandomTemperature(),
        humidity: RoomService.generateRandomHumidity(),
      },
      {
        id: 6,
        name: 'Guest Room',
        temperature: RoomService.generateRandomTemperature(),
        humidity: RoomService.generateRandomHumidity(),
      },
      {
        id: 7,
        name: 'Second Guest Room',
        temperature: RoomService.generateRandomTemperature(),
        humidity: RoomService.generateRandomHumidity(),
      },
      {
        id: 8,
        name: 'Fitness Room',
        temperature: RoomService.generateRandomTemperature(),
        humidity: RoomService.generateRandomHumidity(),
      },
      {
        id: 9,
        name: 'Bathroom Top Floor',
        temperature: RoomService.generateRandomTemperature(),
        humidity: RoomService.generateRandomHumidity(),
      },
      {
        id: 10,
        name: 'Dining Room',
        temperature: RoomService.generateRandomTemperature(),
        humidity: RoomService.generateRandomHumidity(),
      },
    ];
  }

  private static generateRandomTemperature(): number {
    return 10 + Math.round(Math.random() * 20 * 2) / 2;
  }

  private static generateRandomHumidity(): number {
    return 20 + Math.round(Math.random() * 80);
  }
}
