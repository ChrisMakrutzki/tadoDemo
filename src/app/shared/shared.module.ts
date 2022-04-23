import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitTemperaturePipe } from './pipes/split-temperature.pipe';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { SelectOnInsertDirective } from './directive/select-on-insert.directive';

@NgModule({
  declarations: [
    SplitTemperaturePipe,
    SearchInputComponent,
    ButtonComponent,
    SelectOnInsertDirective,
  ],
  imports: [CommonModule, MatIconModule, FormsModule],
  exports: [
    SplitTemperaturePipe,
    SearchInputComponent,
    ButtonComponent,
    SelectOnInsertDirective,
  ],
})
export class SharedModule {}
