import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Input() public search: string = '';
  @Output() public searchChange: EventEmitter<string> =
    new EventEmitter<string>();

  public onChange(value: string): void {
    this.searchChange.emit(value);
  }

  public clear(): void {
    this.search = '';
    this.searchChange.emit('');
  }
}
