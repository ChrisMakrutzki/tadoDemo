import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { appSearchIcon } from '@app/svg/search';
import { appCloseIcon } from '@app/svg/close';
import { appCancelIcon } from '@app/svg/cancel';
import { appWaterDropIcon } from '@app/svg/water_drop';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
    NoopAnimationsModule,
    SvgIconsModule.forRoot({
      icons: [appSearchIcon, appCloseIcon, appCancelIcon, appWaterDropIcon],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
