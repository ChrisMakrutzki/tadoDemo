import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { RoomDetailsComponent } from './room-details/room-details.component';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  private overlayRef: OverlayRef = this.overlay.create({
    panelClass: 'overlay-pane',
  });

  constructor(private overlay: Overlay) {}

  public open() {
    this.overlayRef = this.overlay.create({
      panelClass: 'overlay-pane',
    });
    const roomDetailsPortal = new ComponentPortal(RoomDetailsComponent);
    this.overlayRef.attach(roomDetailsPortal);
  }

  public close() {
    this.overlayRef.detach();
  }
}
