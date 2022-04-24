import { ElementRef, Injectable } from '@angular/core';
import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
  ScrollStrategyOptions,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OverlayService {
  private overlayRef: OverlayRef | null = this.overlay.create({
    panelClass: 'overlay-pane',
  });

  private backDropClickSubscription: Subscription | null;

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private readonly sso: ScrollStrategyOptions
  ) {}

  public open(elementRef: ElementRef) {
    if (this.overlayRef) this.close();

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
      scrollStrategy: this.sso.block(),
    });
    this.backDropClickSubscription = this.overlayRef
      .backdropClick()
      .subscribe(() => this.close());

    const roomDetailsPortal = new ComponentPortal(RoomDetailsComponent);
    this.overlayRef.attach(roomDetailsPortal);
  }

  public close() {
    this.overlayRef?.detach();
    this.overlayRef = null;
    this.backDropClickSubscription?.unsubscribe();
    this.backDropClickSubscription = null;
  }
}
