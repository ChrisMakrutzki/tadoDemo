import { ElementRef, Injectable } from '@angular/core';
import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { RoomDetailsComponent } from './room-details/room-details.component';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  private overlayRef: OverlayRef | null = this.overlay.create({
    panelClass: 'overlay-pane',
  });

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder
  ) {}

  public open(elementRef: ElementRef) {
    if (this.overlayRef) this.overlayRef.detach();

    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(elementRef)
      .withPositions([
        {
          originX: 'center',
          originY: 'center',
          overlayX: 'center',
          overlayY: 'center',
        },
      ]);

    this.overlayRef = this.overlay.create({
      panelClass: 'overlay-pane',
      positionStrategy,
      hasBackdrop: true,
    });
    this.overlayRef.backdropClick().subscribe(() => {
      this.close();
    });

    const roomDetailsPortal = new ComponentPortal(RoomDetailsComponent);
    this.overlayRef.attach(roomDetailsPortal);
  }

  public close() {
    this.overlayRef?.detach();
    this.overlayRef = null;
  }
}
