import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomOverviewRoutingModule } from './room-overview-routing.module';
import { RoomOverviewComponent } from './room-overview.component';
import { RoomListComponent } from './room-list/room-list.component';
import { NgxsModule } from '@ngxs/store';
import { RoomOverviewState } from './room-overview.state';
import { RoomListItemComponent } from './room-list/room-list-item/room-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { OverlayService } from './overlay.service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { RoomTemperatureComponent } from './room-temperature/room-temperature.component';

@NgModule({
  declarations: [
    RoomOverviewComponent,
    RoomListComponent,
    RoomListItemComponent,
    RoomDetailsComponent,
    RoomTemperatureComponent,
  ],
  imports: [
    CommonModule,
    RoomOverviewRoutingModule,
    NgxsModule.forFeature([RoomOverviewState]),
    SharedModule,
    OverlayModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [OverlayService],
})
export class RoomOverviewModule {}
