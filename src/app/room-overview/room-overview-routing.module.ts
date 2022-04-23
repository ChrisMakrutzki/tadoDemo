import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomOverviewComponent } from './room-overview.component';

const routes: Routes = [{ path: '', component: RoomOverviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomOverviewRoutingModule { }
