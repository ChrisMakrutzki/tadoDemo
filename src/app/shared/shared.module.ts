import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitTemperaturePipe } from './pipes/split-temperature.pipe';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { SelectOnInsertDirective } from './directive/select-on-insert.directive';
import { TemperatureBackgroundDirective } from './directive/temperature-background.directive';
import { SvgIconsModule } from '@ngneat/svg-icon';

@NgModule({
  declarations: [
    SplitTemperaturePipe,
    SearchInputComponent,
    ButtonComponent,
    SelectOnInsertDirective,
    TemperatureBackgroundDirective,
  ],
  imports: [CommonModule, FormsModule, SvgIconsModule.forChild([])],
  exports: [
    SplitTemperaturePipe,
    SearchInputComponent,
    ButtonComponent,
    SelectOnInsertDirective,
    TemperatureBackgroundDirective,
  ],
})
export class SharedModule {}
